'use client';

import { useEffect, useRef, useState } from 'react';

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export default function Home() {
  const letaScene = useRef<HTMLElement>(null);
  const blackScene = useRef<HTMLElement>(null);
  const [answer, setAnswer] = useState<'yes' | 'no' | null>(null);

  useEffect(() => {
    const savedAnswer = window.localStorage.getItem('wedding-rsvp');
    if (savedAnswer === 'yes' || savedAnswer === 'no') setAnswer(savedAnswer);
    let frame = 0;
    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      if (letaScene.current) {
        const box = letaScene.current.getBoundingClientRect();
        const progress = clamp(-box.top / Math.max(1, box.height - viewport));
        letaScene.current.style.setProperty('--p', progress.toFixed(4));
      }
      if (blackScene.current) {
        const box = blackScene.current.getBoundingClientRect();
        const progress = clamp(-box.top / Math.max(1, box.height - viewport));
        blackScene.current.style.setProperty('--q', progress.toFixed(4));
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const vote = (value: 'yes' | 'no') => {
    setAnswer(value);
    window.localStorage.setItem('wedding-rsvp', value);
  };

  return (
    <main>
      <section className="scroll-scene leta-scene" ref={letaScene} style={{ '--p': 0 } as React.CSSProperties}>
        <div className="sticky-frame hero-frame" aria-label="Кирилл и Катя">
          <img className="cover-bg" src="/invitation-bg.svg" alt="Кирилл и Катя" />
          <div className="date-copy">
            <span>регистрация брака</span>
            <strong>25.09.26</strong>
          </div>
          <img className="leta-face" src="/leta.svg" alt="Кошка Лета" />
          <div className="scroll-hint"><span>листай</span><i>↓</i></div>
        </div>
      </section>

      <section className="scroll-scene black-scene" ref={blackScene} style={{ '--q': 0 } as React.CSSProperties}>
        <div className="sticky-frame black-frame">
          <div className="cat-reveal"><img src="/black-cat.svg" alt="Чёрный кот" /></div>
          <div className="place-copy">
            <span>ждём вас</span>
            <h2>Место<br />такое-то</h2>
            <time>17:40</time>
            <p>точный адрес добавим сюда</p>
          </div>
        </div>
      </section>

      <section className="final-rsvp" aria-labelledby="rsvp-title">
        <h2 id="rsvp-title">Придёте?</h2>
        <div className="vote-buttons" aria-label="Ответ на приглашение">
          <button type="button" className={answer === 'yes' ? 'selected' : ''} aria-pressed={answer === 'yes'} onClick={() => vote('yes')}>Да</button>
          <button type="button" className={answer === 'no' ? 'selected' : ''} aria-pressed={answer === 'no'} onClick={() => vote('no')}>Нет</button>
        </div>
        <p className="vote-status" aria-live="polite">{answer ? 'Ответ сохранён' : 'Выберите вариант'}</p>
        <img className="frila" src="/frila.png" alt="Кошка Фрила" />
      </section>
    </main>
  );
}
