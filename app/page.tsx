'use client';

import { useEffect, useRef, useState } from 'react';

const clamp = (value: number) => Math.min(1, Math.max(0, value));

const getDaysToWedding = () => Math.max(0, Math.ceil(
  (new Date(2026, 8, 25).getTime() - Date.now()) / 86_400_000,
));

const dayWord = (days: number) => {
  const lastTwo = days % 100;
  if (lastTwo >= 11 && lastTwo <= 14) return 'дней';
  if (days % 10 === 1) return 'день';
  if (days % 10 >= 2 && days % 10 <= 4) return 'дня';
  return 'дней';
};

const confetti = [
  ['7%', '-34px', '620deg', '0px', '#d71662'],
  ['13%', '42px', '-540deg', '96px', '#445dea'],
  ['20%', '-28px', '720deg', '42px', '#f2a438'],
  ['27%', '52px', '-680deg', '128px', '#ffffff'],
  ['34%', '-44px', '580deg', '18px', '#2f3337'],
  ['41%', '30px', '-760deg', '82px', '#d71662'],
  ['48%', '-56px', '640deg', '152px', '#f2a438'],
  ['55%', '38px', '-600deg', '32px', '#445dea'],
  ['62%', '-30px', '700deg', '114px', '#ffffff'],
  ['69%', '48px', '-820deg', '8px', '#d71662'],
  ['76%', '-42px', '560deg', '72px', '#2f3337'],
  ['83%', '34px', '-720deg', '144px', '#f2a438'],
  ['90%', '-50px', '660deg', '52px', '#445dea'],
  ['96%', '26px', '-580deg', '106px', '#ffffff'],
] as const;

const stars = [
  ['7%', '15%', '32px', '-1.1s', '5.8s'],
  ['22%', '9%', '58px', '-3.2s', '7.2s'],
  ['43%', '19%', '24px', '-.7s', '6.4s'],
  ['71%', '12%', '70px', '-4.1s', '8.1s'],
  ['90%', '29%', '38px', '-2.4s', '6.8s'],
  ['11%', '64%', '48px', '-3.7s', '7.7s'],
  ['34%', '78%', '27px', '-1.8s', '6.1s'],
  ['58%', '68%', '62px', '-4.8s', '8.5s'],
  ['82%', '82%', '34px', '-2.9s', '7s'],
  ['94%', '58%', '51px', '-.4s', '7.9s'],
] as const;

export default function Home() {
  const letaScene = useRef<HTMLElement>(null);
  const blackScene = useRef<HTMLElement>(null);
  const [daysLeft, setDaysLeft] = useState(getDaysToWedding);

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

  useEffect(() => {
    const updateDays = () => setDaysLeft(getDaysToWedding());
    updateDays();
    const timer = window.setInterval(updateDays, 60 * 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <section className="scroll-scene leta-scene" ref={letaScene} style={{ '--p': 0 } as React.CSSProperties}>
        <div className="sticky-frame hero-frame" aria-label="Кирилл и Катя">
          <img className="cover-bg" src="/invitation-bg.svg" alt="Кирилл и Катя" />
          <div className="date-copy">
            <span className="date-label">регистрация<br className="mobile-date-break" /> брака</span>
            <strong className="date-number">25.09.26</strong>
          </div>
          <div className="confetti" aria-hidden="true">
            {confetti.map(([x, drift, spin, lag, color], index) => (
              <i
                key={index}
                style={{
                  '--x': x,
                  '--drift': drift,
                  '--spin': spin,
                  '--lag': lag,
                  '--confetti-color': color,
                } as React.CSSProperties}
              />
            ))}
          </div>
          <img className="leta-face" src="/leta.webp" alt="Кошка Лета" />
          <div className="scroll-hint"><span>листай</span><i>↓</i></div>
        </div>
      </section>

      <section className="scroll-scene black-scene" ref={blackScene} style={{ '--q': 0 } as React.CSSProperties}>
        <div className="sticky-frame black-frame">
          <img className="rings-intro" src="/rings.svg" alt="Обручальные кольца" />
          <div className="cat-reveal"><img src="/black-cat.svg" alt="Чёрный кот" /></div>
          <div className="star-field" aria-hidden="true">
            {stars.map(([x, y, size, delay, duration], index) => (
              <i key={index} style={{ '--x': x, '--y': y, '--size': size, '--delay': delay, '--duration': duration } as React.CSSProperties}>
                <img src="/star.svg" alt="" />
              </i>
            ))}
          </div>
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
        <div className="countdown" aria-label={`${daysLeft} ${dayWord(daysLeft)} до праздника`}>
          <span className="calendar-title">до праздника</span>
          <strong>{daysLeft}</strong>
          <span className="calendar-unit">{dayWord(daysLeft)}</span>
        </div>
        <img className="clinking-glasses" src="/glasses.svg" alt="Два чокающихся бокала" />
        <img className="frila" src="/frida.svg" alt="Кошка Фрида" />
      </section>
    </main>
  );
}
