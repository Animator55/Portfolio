import "./assets/App.css"

type projectType = {
  name: string
  tags: string[]
  desc: string
  img: string
}

export default function App() {

  const ProjectsList: projectType[] = [
    {
      name: "Project 1",
      tags: ["tag 1", "tag 2"],
      desc: "gfbnasjugnais jausbgfjausngikasnmtg giasngiasgmdisgnsi gndsj gndsign disngkisdn gkdnsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
      img: ""
    },
    {
      name: "Project 2",
      tags: ["tag 1", "tag 2", "tag 3", "tag 4"],
      desc: "tyry gfbnasjugnais jausbgfjausngikasnhdfjs hndfkjhn tgfdaesg.",
      img: ""
    },
    {
      name: "Project 3",
      tags: ["tag 1"],
      desc: "fas fasgfbnasjugnais jausbgfjfasfnas junfasinsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
      img: ""
    },
  ]

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

  const UserTop = ()=>{
    return <section className='block'>
      <div className='user-image'>
        <img />
      </div>
      <div>
        <h1>Nahuel Ibarra</h1>
        <p>Front End Developer</p>
      </div>
    </section>
  }
  const TechBlock = ()=>{
    return <section className="block">
      <img src='' alt='react'/>
      <img src='' alt='typescript'/>
      <img src='' alt='html'/>
      <img src='' alt='css'/>
      <img src='' alt='php'/>
    </section>
  }
  const ProjectsListBlock = ()=>{
    return <section className="block">
      {ProjectsList.map(obj=>{
        return <section className='project-section' key={Math.random()}>
          <div className='project-img'>
            <img src={obj.img}/>
          </div>
          <div className="project-top">
            <h2 className='project-title'>{obj.name}</h2>
            <div className='tags'>
              {obj.tags.map(tag=>{
                return <div key={Math.random()}>{tag}</div>
              })}
            </div>
          </div>
          <p className='project-desc'>{obj.desc}</p>
        </section>
      })}
    </section>
  }
  const CareerBlock = ()=>{
    return <section className="block">
      {careerList.map(obj=>{
        return <section className='career-section' key={Math.random()}>
          <h2 className='career-title'>{obj.title}</h2>
          <div className='career-period'>{obj.period}</div>
          <p className='career-desc'>{obj.desc}</p>
        </section>
      })}
    </section>
  }

  const AboutMeBlock = ()=>{
    return <section className='block'>
      <h1>About Me</h1>
      <p>fidnaesgkjdnskgm dokjsgn dfsngkjidsngkj hdskljbhnxdfkjs gndmks gklxdsnvgklb dnsmjvgb xdzjbnkjds gmjdsklvg dskj gmkldfnbkjdrnfjg ndkjsfj kdasjvgndkshfjdb dkjsnb vjds gjdmskgbjds gjdnsgkbdesgkji bdnfsjgh dfkskbhldfjkig ndrsoghdmsf hdfsjmg kldsmgdsmgk.</p>
    </section>
  }

  const ContactBlock = ()=>{
    return <section className='block'>
      <button className='contact-button'>GitHub</button>
      <button className='contact-button'>LinkedIn</button>
    </section>
  }

  return <main>
    <section className="list">
      <UserTop/>
      <TechBlock/>
      <ProjectsListBlock/>
      <CareerBlock/>
      <AboutMeBlock/>
      <ContactBlock/>
    </section>
  </main>
}