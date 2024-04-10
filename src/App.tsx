import React from "react"
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

  const UserTop = () => {
    return <div className="top-block fade-in">
        <section className='block'>
          <section className="block-content">
            <div>
              <h1>Nahuel Ibarra</h1>
              <p>Front End Developer</p>
            </div>
          </section>
        </section>
        <section className='block'>
          <section className="block-content">
            <div className='user-image'>
              <img />
            </div>
          </section>
        </section>
      </div>
  }
  const TechBlock = () => {
    return <section className="block fade-in">
      <section className="block-content">
        <img src='' alt='react' />
        <img src='' alt='typescript' />
        <img src='' alt='html' />
        <img src='' alt='css' />
        <img src='' alt='php' />
      </section>
    </section>
  }
  const ProjectsListBlock = () => {
    return <section className="block fade-in">
      <section className="block-content">
        {ProjectsList.map(obj => {
          return <section className='project-section' key={Math.random()}>
            <div className='project-img'>
              <img src={obj.img} />
            </div>
            <div className="project-top">
              <h2 className='project-title'>{obj.name}</h2>
              <div className='tags'>
                {obj.tags.map(tag => {
                  return <div key={Math.random()}>{tag}</div>
                })}
              </div>
            </div>
            <p className='project-desc'>{obj.desc}</p>
          </section>
        })}
      </section>
    </section>
  }
  const CareerBlock = () => {
    return <section className="block">
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

  const AboutMeBlock = () => {
    return <section className='block'>
      <section className="block-content">
        <h1>About Me</h1>
        <p>fidnaesgkjdnskgm dokjsgn dfsngkjidsngkj hdskljbhnxdfkjs gndmks gklxdsnvgklb dnsmjvgb xdzjbnkjds gmjdsklvg dskj gmkldfnbkjdrnfjg ndkjsfj kdasjvgndkshfjdb dkjsnb vjds gjdmskgbjds gjdnsgkbdesgkji bdnfsjgh dfkskbhldfjkig ndrsoghdmsf hdfsjmg kldsmgdsmgk.</p>
      </section>
    </section>
  }

  const ContactBlock = () => {
    return <section className='block'>
      <section className="block-content">
        <button className='contact-button'>GitHub</button>
        <button className='contact-button'>LinkedIn</button>
      </section>
    </section>
  }


  /////

  const ScrollHandler = ()=>{
    let blocks = document.querySelectorAll(".block")

    for(let i=0; i<blocks.length; i++) {
      let windowHeight = window.innerHeight
      let revealTop = blocks[i].getBoundingClientRect().top
      let offset = 150

      blocks[i].classList.toggle("fade-in", revealTop < windowHeight - offset)
    }
  }

  React.useEffect(()=>{
    let list = document.querySelector(".list")
    list?.addEventListener("scroll", ScrollHandler)
  })

  return <main>
    <section className="list">
      <UserTop />
      <TechBlock />
      <ProjectsListBlock />
      <CareerBlock />
      <AboutMeBlock />
      <ContactBlock />
    </section>
  </main>
}