import React from "react"
import "./assets/App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3Alt, faGithub, faHtml5, faLinkedin, faNodeJs, faPhp, faReact, faSass, faSquareJs } from "@fortawesome/free-brands-svg-icons"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faImage, faUser } from "@fortawesome/free-regular-svg-icons"
import { faCode, faGear, faGlobe, faLaptopCode, faScroll, faTags } from "@fortawesome/free-solid-svg-icons"
import ProjectsList from "./components/ProjectsList"
import CareerBlock from "./components/CarrerBlock"
import AboutMeBlock from "./components/AboutBlock"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays"
import {Svelte, TypeScript} from "./assets/svgs"


export default function App() {
  const [lang, setLang] = React.useState<"es" | "en">("en")

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
        <button className="lang-button" onClick={()=>{setLang(lang === "en" ? "es" : "en")}}>
          <FontAwesomeIcon icon={faGlobe as IconProp}/>
          {lang}
          </button>
      </div>
    </section>
  }

  const UserTop = () => {
    return <div id="user"className="top-block fade-in">
        <section>
          <div>
            <h1 className="top-name show-texting">Nahuel </h1>
            <h1 className="top-name show-texting">Iván Ibarra</h1>
            <p className="top-title show-texting" style={{animationDelay: "1s"}} >
              Web Developer
            </p>
          </div>
        </section>
    </div>
  }
  const ContactBlock = () => {
    return <section id="contact" className='contact fade-in'>
        <button className='contact-button'><a href="https://github.com/Animator55" target="_blank"><FontAwesomeIcon icon={faGithub as IconProp} /> GitHub</a></button>
        <button className='contact-button' style={{animationDelay: "2s"}}><a href="https://www.linkedin.com/in/nahuel-ibarra" target="_blank"><FontAwesomeIcon icon={faLinkedin as IconProp} />LinkedIn</a></button>
    </section>
  }
  const TechBlock = () => {
    return <section className="tech block fading">
      <section className="block-content">
      <h3 style={{textAlign: "center"}}>{lang === "en" ? "Technologies" : "Tecnologías"}</h3>
        <div className="icon-list">
          <FontAwesomeIcon icon={faHtml5 as IconProp} />
          <FontAwesomeIcon icon={faCss3Alt as IconProp} />
          <FontAwesomeIcon icon={faSass as IconProp} />
          <Svelte/>
          <FontAwesomeIcon icon={faPhp as IconProp} />
          <FontAwesomeIcon icon={faNodeJs as IconProp} />
          <FontAwesomeIcon icon={faSquareJs as IconProp} />
          <TypeScript />
          <FontAwesomeIcon icon={faReact as IconProp} />
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
      <ProjectsList lang={lang}/>
    </section>
    <section className="list">
      <CareerBlock />
      <AboutMeBlock lang={lang}/>
    </section>
  </main>
}