
const careerList = [
    {
      title: "Freelance Web Developer",
      subTitle: "",
      subLink: "",
      period: "MAY 2023 to Present Day",
      desc: "ofnasdiofkmasf fosnafkimnasfkimjas fasnf kjasinfkjinasdfjdnsfjbdnsjf dsjfasdjf jas fjasjfjas fdasf djas nf asfas fasf as f."
    },
    {
      title: "Front End Developer",
      subTitle: "@ Do2 Software",
      subLink: "https://www.do2software.com/",
      period: "MAY 2022 to MAY 2023",
      desc: "ofnasdiofkmasf fosnafkimnasfkimjas fasnf kjasinfkjinasdfjdnsfjbdnsjf dsjfasdjf jas fjasjfjas fdasf djas nf asfas fasf as f."
    },
  ]


export default function CareerBlock () {
    return <section id="career" className="block fading">
      <section className="block-content">
        <h3 className="align-title">Carrier</h3>
        <section className="d-flex">
          <div className="timeline">
            <div></div>
          </div>
          <ul>
            {careerList.map((obj, i) => {
              return <section className='career-section' key={Math.random()}>
                <div className="dot" style={{animationDelay: (i+1 * 0.5)+ "s"}}></div>
                <h2 className='career-title' style={{animationDelay: (i+1 * 0.5)+ 0.1 + "s"}}>{obj.title}</h2>
                <a href={obj.subLink} className='career-sub-title' style={{animationDelay: (i+1 * 0.5)+ 0.2 + "s"}}>{obj.subTitle}</a>
                <div className='career-period' style={{animationDelay: (i+1 * 0.5)+ 0.3 + "s"}}>{obj.period}</div>
                <p className='career-desc' style={{animationDelay: (i+1 * 0.5)+ 1 + "s"}}>
                  {obj.desc}
                  <div className="pseudo-after" style={{animationDelay: (i+1 * 0.5)+ 0.6 + "s"}}></div>
                </p>
              </section>
            })}
          </ul>
        </section>
      </section>
    </section>
  }