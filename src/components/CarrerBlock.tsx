
const careerList = [
    {
      title: "Freelance Software Developer",
      period: "MAY 2023 to Present Day",
      desc: "ofnasdiofkmasf fosnafkimnasfkimjas fasnf kjasinfkjinasdfjdnsfjbdnsjf dsjfasdjf jas fjasjfjas fdasf djas nf asfas fasf as f."
    },
    {
      title: "Front End Developer",
      period: "MAY 2022 to MAY 2023",
      desc: "ofnasdiofkmasf fosnafkimnasfkimjas fasnf kjasinfkjinasdfjdnsfjbdnsjf dsjfasdjf jas fjasjfjas fdasf djas nf asfas fasf as f."
    },
  ]


export default function CareerBlock () {
    return <section id="career" className="block fading">
      <section className="block-content">
        {careerList.map(obj => {
          return <section className='career-section' key={Math.random()}>
            <h2 className='career-title'>{obj.title}</h2>
            <div className='career-period'>{obj.period}</div>
            <p className='career-desc'>{obj.desc}</p>
          </section>
        })}
      </section>
    </section>
  }