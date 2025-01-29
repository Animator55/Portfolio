
const careerList = [
    {
      title: "Freelance Web Developer",
      subTitle: "",
      subLink: "",
      period: "MAY 2023 to Present Day",
      desc: "Period of time that i mainly made RegBox and the other projects in my list, improved my knowledge and worked with clients."
    },
    {
      title: "Front End Developer",
      subTitle: "@ Do2 Software",
      subLink: "https://www.do2software.com/",
      period: "MAY 2022 to MAY 2023",
      desc: "In a low position of Junior, i used to work in Do2Software as a Front End Developer and participated in projects like Octagonal and others that may changed its names."
    },
  ]


export default function CareerBlock () {
    const length = careerList.length
    return <section id="career" className="block point fading">
      <section className="block-content">
        <h3 className="align-title">Carrier</h3>
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
                  {obj.desc}
                  <div className="pseudo-after" style={{animationDelay: delay+ 0.8 + "s"}}></div>
                </div>
              </section>
            })}
          </ul>
        </section>
      </section>
    </section>
  }