
const careerList = [
    {
      title: "Freelance Web Developer",
      subTitle: "",
      subLink: "",
      period: "MAY 2023 to Present Day",
      desc: "Period of time where I mainly did RegBox and the other projects on my list, improved my knowledge and worked with clients.",
      descEs: "Período de tiempo en el que hice principalmente RegBox y los otros proyectos de mi lista, mejoré mis conocimientos y trabajé con clientes."
    },
    {
      title: "Full Stack Developer",
      subTitle: "@ Do2 Software",
      subLink: "https://www.do2software.com/",
      period: "NOV 2022 to JAN 2025",
      desc: "I worked at Do2 Software as a Full Stack developer and Front End developer mainly, I participated in projects like Octagonal and others.",
      descEs: "Trabajé en Do2 Software como desarrollador Full Stack y desarrollador Front End principalmente, participé en proyectos como Octagonal y otros."
    },
    {
      title: "Junior Front End Developer",
      subTitle: "@ Do2 Software",
      subLink: "https://www.do2software.com/",
      period: "MAY 2022 to NOV 2022",
      desc: "Part-time job as Front End Developer",
      descEs: "Trabajo de media jornada como Front End Developer."
    },
  ]


type Props = {
  lang: "es" | "en"
}

export default function CareerBlock ({lang}:Props) {
    const length = careerList.length
    return <section id="career" className="block point fading">
      <section className="block-content">
        <h3 className="align-title">{lang === "en" ? "Carrier" : "Experiencia"}</h3>
        <section className="d-flex">
          <div className="timeline">
            <p className="time">Present</p>
            <div></div>
            <p className="time">2022</p>
          </div>
          <ul>
            {careerList.map((obj, i) => {
              let delay = (length - i)*1.2
              return <section className='career-section' style={{animationDelay: delay+0.3+ "s"}} key={Math.random()}>
                <div className="dot" style={{animationDelay: delay+ 0.2+ "s"}}></div>
                <div className="d-flex align">
                  <h3 className='career-title' style={{animationDelay: delay+ 0.3 + "s"}}>{obj.title}</h3>
                  {obj.subTitle !== "" && <a href={obj.subLink} className='career-sub-title' style={{animationDelay: delay+ 0.4 + "s"}}>{obj.subTitle}</a>}
                </div>
                <div className='career-period' style={{animationDelay: delay+ 0.5 + "s"}}>{obj.period}</div>
                <div className='career-desc' style={{animationDelay: delay+ 1.1 + "s"}}>
                  {lang === "en" ? obj.desc: obj.descEs}
                  <div className="pseudo-after" style={{animationDelay: delay+ 0.8 + "s"}}></div>
                </div>
              </section>
            })}
          </ul>
        </section>
      </section>
    </section>
  }