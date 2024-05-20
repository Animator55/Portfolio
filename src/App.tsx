import React from "react"
import "./assets/App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3Alt, faGithub, faHtml5, faLinkedin, faPhp, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faImage, faUser } from "@fortawesome/free-regular-svg-icons"
import { faCode, faGear, faLaptopCode, faScroll, faTags } from "@fortawesome/free-solid-svg-icons"
import ProjectsList from "./components/ProjectsList"
import CareerBlock from "./components/CarrerBlock"
import AboutMeBlock from "./components/AboutBlock"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays"


export default function App() {

  const SideBar = ()=>{
    return <section className="side-bar">
      <div className="button-list active">
        <a href="#top" className="side-button active">
          <FontAwesomeIcon icon={faUser as IconProp}/>
        </a>
        <a href="#tech" className="side-button">
          <FontAwesomeIcon icon={faCode as IconProp}/>
        </a>
        <a href="#career" className="side-button">
          <FontAwesomeIcon icon={faCalendarDays as IconProp}/>
        </a>
        <a href="#about" className="side-button">
          <FontAwesomeIcon icon={faScroll as IconProp}/>
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
    return <section className="tech block fading">
      <section className="block-content">
      <h3 style={{textAlign: "center"}}>Technologies</h3>
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

  /////

  const ScrollHandler = (e: Event) => {
    let blocks = document.querySelectorAll(".point")
    let buttons = document.querySelectorAll(".side-button")

    for (let i = 0; i < blocks.length; i++) {
      let windowHeight = window.innerHeight
      let revealTop = blocks[i].getBoundingClientRect().top
      let offset = 100

      blocks[i].classList.toggle("fade-in", revealTop < windowHeight - offset)
      buttons[i+1].classList.toggle("active", revealTop < windowHeight - (offset + 200))
    }

    let icons = document.querySelector(".icons-background") as HTMLDivElement
    let top = e.target as HTMLDivElement

    icons.style.top = top.scrollTop/1.3 + 300 + "px"
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
    <section className="list" id="top">
      <UserTop />
      <ContactBlock />
    </section>
    <div className="icons-background" style={{top: 300}}>
      <FontAwesomeIcon icon={faImage as IconProp}/>
      <FontAwesomeIcon icon={faGear as IconProp}/>
      <FontAwesomeIcon icon={faCode as IconProp}/>
      <FontAwesomeIcon icon={faLaptopCode as IconProp}/>
      <FontAwesomeIcon icon={faTags as IconProp}/>
    </div>
    <section className="list point" id="tech">
      <TechBlock />
      <ProjectsList/>
    </section>
    <section className="list">
      <CareerBlock />
      <AboutMeBlock />
    </section>
  </main>
}