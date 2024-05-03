
const careerList = [
    {
      title: "Title 1",
      period: "M/Y to M/Y",
      desc: "ofnasdiofkmasf fosnafkimnasfkimjas fasnf kjasinfkjinasdfjdnsfjbdnsjf dsjfasdjf jas fjasjfjas fdasf djas nf asfas fasf as f."
    },
    {
      title: "Title 2",
      period: "M/Y to M/Y",
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