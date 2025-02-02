
type Props = {
  lang: "es" | "en"
}


export default function AboutMeBlock({lang}: Props) {
  const text = {
    en: `<p>I was born in Argentina and since I was approximately 11 years old I have been passionate about programming and I have started down the path of GameDev Developer.</p>
    <p>Some of my projects show my appreciation for doing them, cases like <a href="#Dungeon Crawler">Dungeon Crawler</a> or <a href="#Magic Card Game">Magic Cards Game</a>.</p>
    <p>Even so, the projects to which I have given the most time and details and are on the list are those that seem most important to me, not only for their purpose, but for what they show, such as <a href="#RegBox">RegBox</a> (Both <a href="#RegBox">Main</a> and <a href="#RegBox Pawn">Pawn</a>) or <a href="#HTMLEditor">HTMLEditor</a>.</p>
    <p>As a personal detail, I am a fan of sports in general, reading and constant learning.</p>`,
    es: `<p>Naci en argentina y desde los 11 años aproximadamente soy un apasionado en la programacion y he iniciado por la ruta de GameDev Developer.</p>
    <p>Algunos de mis proyectos dejan ver mi aprecio por hacerlos, casos como <a href="#Dungeon Crawler">Dungeon Crawler</a> o <a href="#Magic Card Game">Magic Cards Game</a>.</p>
    <p>Aun asi, los proyectos a los que mas tiempo y detalles les he dado y están en el listado son aquellos los cuales me parecen mas importantes, no solo por su fin, sino por lo que muestran, como <a href="#RegBox">RegBox</a> (Tanto <a href="#RegBox">Main</a> como <a href="#RegBox Pawn">Pawn</a>) o <a href="#HTMLEditor">HTMLEditor</a>.</p>
    <p>Como detalle personal, soy fanatico del deporte en general, la lectura y el aprendizaje constante.</p>`
  }

  return <section id="about" className='block point fading'>
    <section className="block-content">
      <h3 className="align-title">{lang === "en" ? "About Me" : "Sobre mí"}</h3>
      <div dangerouslySetInnerHTML={{__html: text[lang]}}></div>
    </section>
  </section>
}