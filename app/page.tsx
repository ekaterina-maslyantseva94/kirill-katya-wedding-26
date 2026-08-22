const Details = () => (
  <div className="hero-details" aria-label="Дата и место свадьбы">
    <div className="date-card"><span className="eyebrow">сохрани дату</span><strong>06</strong><span className="month">сентября</span><span className="year">2026</span></div>
    <div className="place-card"><span className="eyebrow">встречаемся здесь</span><strong>Усадьба<br />Архангельское</strong><span>Московская область</span></div>
  </div>
);

function DoodleFlower({ className = '' }: { className?: string }) {
  return <span className={`flower ${className}`} aria-hidden="true"><i /><i /><i /><i /><i /><b /></span>;
}

export default function Home() {
  return <main>
    <section className="hero" id="top">
      <header className="topbar"><a className="seal" href="#top" aria-label="В начало">А <span>♥</span> М</a><nav aria-label="Навигация"><a href="#story">о нас</a><a href="#plan">программа</a><a href="#rsvp">ответить</a></nav></header>
      <div className="hero-copy"><p className="kicker">приглашение на свадьбу</p><h1><span>Алина</span><em>&amp;</em><span>Максим</span></h1><p className="note">Мы женимся! И очень хотим,<br />чтобы вы были рядом.</p></div>
      <Details /><div className="curtain" aria-hidden="true"><span /><span /><span /></div><DoodleFlower className="flower-one" /><DoodleFlower className="flower-two" /><div className="rings" aria-hidden="true"><span /><span /></div><a className="scroll-cue" href="#story"><span>листайте</span> ↓</a>
    </section>
    <section className="story" id="story"><div className="story-mark">официально!</div><p className="section-number">01 / немного о главном</p><h2>Один день.<br /><i>Одна большая любовь.</i></h2><p className="story-text">Мы собираем самых близких за одним длинным столом — смеяться, танцевать и праздновать новую главу нашей истории.</p><div className="toast" aria-hidden="true"><span>♥</span></div></section>
    <section className="program" id="plan"><p className="section-number">02 / план праздника</p><h2>Всё случится<br /><i>в один прекрасный день</i></h2><div className="timeline">
      <article><time>15:30</time><span>сбор гостей</span><p>Объятия, игристое и первые фотографии.</p></article><article><time>16:30</time><span>церемония</span><p>То самое «да» в саду старой усадьбы.</p></article><article><time>17:30</time><span>ужин</span><p>Тосты, свечи и праздничный стол.</p></article><article><time>20:00</time><span>танцы!</span><p>Неудобную обувь лучше оставить дома.</p></article>
    </div></section>
    <section className="details"><article><p className="section-number">03 / как добраться</p><h3>Усадьба<br />«Архангельское»</h3><p>Московская область,<br />Красногорск, Ильинское шоссе</p><a className="ink-link" href="https://yandex.ru/maps/?text=Усадьба%20Архангельское" target="_blank" rel="noreferrer">открыть карту ↗</a></article><article className="dress"><p className="section-number">04 / дресс-код</p><h3>Нарядно<br /><i>и с любовью</i></h3><p>Будем рады спокойным природным оттенкам. А красный оставим для маленьких акцентов.</p><div className="palette" aria-label="Цветовая палитра"><span /><span /><span /><span /><span /></div></article></section>
    <section className="rsvp" id="rsvp"><DoodleFlower className="flower-rsvp" /><p className="section-number">05 / до встречи</p><h2>Будете<br /><i>с нами?</i></h2><p>Пожалуйста, дайте нам знать до 1 августа 2026 года.</p><a className="rsvp-button" href="mailto:wedding@example.com?subject=Подтверждение участия">ответить жениху и невесте <span>→</span></a><footer><span>06 · 09 · 2026</span><b>Алина &amp; Максим</b><span>Москва</span></footer></section>
  </main>;
}
