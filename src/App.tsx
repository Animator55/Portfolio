import React from "react"
import "./assets/App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3Alt, faFontAwesome, faGithub, faHtml5, faLinkedin, faPhp, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faImage, faUser } from "@fortawesome/free-regular-svg-icons"
import { faArrowUp, faBars, faCode, faGear, faLaptopCode, faList, faTags } from "@fortawesome/free-solid-svg-icons"
import ProjectsCarrousel from "./components/ProjectsCarrousel"
import ProjectsList from "./components/ProjectsList"


export default function App() {

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

  const SideBar = ()=>{
    return <section className="side-bar">
      <div className="button-list active">
        <a href="#top" className="side-button active">
          <FontAwesomeIcon icon={faUser as IconProp}/>
        </a>
        <a href="#tech" className="side-button">
          <FontAwesomeIcon icon={faCode as IconProp}/>
        </a>
        <a href="#project" className="side-button">
          <FontAwesomeIcon icon={faList as IconProp}/>
        </a>
        <a href="#career" className="side-button">
          <FontAwesomeIcon icon={faUser as IconProp}/>
        </a>
        <a href="#about" className="side-button">
          <FontAwesomeIcon icon={faUser as IconProp}/>
        </a>
      </div>
    </section>
  }

  const UserTop = () => {
    return <div id="user"className="top-block fade-in">
        <section>
          <div>
            <h1>Nahuel Ibarra</h1>
            <p>Front End Developer</p>
          </div>
        </section>
        <div className='user-image'>
          <img />
        </div>
    </div>
  }
  const ContactBlock = () => {
    return <section id="contact" className='contact fade-in'>
        <button className='contact-button'><FontAwesomeIcon icon={faGithub as IconProp} /> GitHub</button>
        <button className='contact-button'><FontAwesomeIcon icon={faLinkedin as IconProp} />LinkedIn</button>
    </section>
  }
  const TechBlock = () => {
    return <section id="tech" className="tech block fading">
      <section className="block-content">
      <h3 style={{textAlign: "center"}}>Projects</h3>
        <div className="icon-list">
          <FontAwesomeIcon icon={faHtml5 as IconProp} />
          <FontAwesomeIcon icon={faCss3Alt as IconProp} />
          <FontAwesomeIcon icon={faSquareJs as IconProp} />
          <FontAwesomeIcon icon={faReact as IconProp} />
          <FontAwesomeIcon icon={faPhp as IconProp} />
        </div>
      </section>
    </section>
  }
  const CareerBlock = () => {
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

  const AboutMeBlock = () => {
    return <section id="about" className='block fading'>
      <section className="block-content">
        <h1>About Me</h1>
        <p>fidnaesgkjdnskgm dokjsgn dfsngkjidsngkj hdskljbhnxdfkjs gndmks gklxdsnvgklb dnsmjvgb xdzjbnkjds gmjdsklvg dskj gmkldfnbkjdrnfjg ndkjsfj kdasjvgndkshfjdb dkjsnb vjds gjdmskgbjds gjdnsgkbdesgkji bdnfsjgh dfkskbhldfjkig ndrsoghdmsf hdfsjmg kldsmgdsmgk.</p>
      </section>
    </section>
  }



  /////

  const ScrollHandler = (e: Event) => {
    let blocks = document.querySelectorAll(".fading")
    let buttons = document.querySelectorAll(".side-button")

    for (let i = 0; i < blocks.length; i++) {
      let windowHeight = window.innerHeight
      let revealTop = blocks[i].getBoundingClientRect().top
      let offset = 100

      buttons[i+1].classList.toggle("active", revealTop < windowHeight - (offset + 200))
      blocks[i].classList.toggle("fade-in", revealTop < windowHeight - offset)
    }
  }

  React.useEffect(() => {
    let list = document.querySelector("main")
    list?.addEventListener("scroll", ScrollHandler)
  })

  return <main onWheel={(e)=>{
      let navBar = document.querySelector(".side-bar")
      let firstChild = navBar?.firstChild as HTMLDivElement
      if(firstChild) firstChild.classList.toggle("active", e.deltaY > 0)
    }}>
    <SideBar/>
    {/* <div id="top" className="back-1"></div> */}
    <section className="list">
      <UserTop />
      <ContactBlock />
    </section>
    <div className="icons-background">
      <FontAwesomeIcon icon={faImage as IconProp}/>
      <FontAwesomeIcon icon={faGear as IconProp}/>
      <FontAwesomeIcon icon={faCode as IconProp}/>
      <FontAwesomeIcon icon={faLaptopCode as IconProp}/>
      <FontAwesomeIcon icon={faTags as IconProp}/>
    </div>
    <section className="list">
      <TechBlock />
      <ProjectsList/>
      {/* <ProjectsCarrousel /> */}
    </section>
    <section className="list">
    {/* <div className="back-2"></div> */}
      <CareerBlock />
      <AboutMeBlock />
    </section>
  </main>
}