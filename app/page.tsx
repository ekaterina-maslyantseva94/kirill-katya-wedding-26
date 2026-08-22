'use client';

import { useEffect, useRef } from 'react';

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export default function Home() {
  const letaScene = useRef<HTMLElement>(null);
  const blackScene = useRef<HTMLElement>(null);

  useEffect(() => {
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
        <img className="frila" src="/frila.png" alt="Кошка Фрила" />
      </section>
    </main>
  );
}
