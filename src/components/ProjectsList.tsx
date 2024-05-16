import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}


type projectType = {
    name: string
    tags: string[]
    langs: string[]
    desc: string
    links: string[]
}

const projectsArray: projectType[] = [
    {
        name: "Magic Card Game",
        tags: ["Game", "SinglePlayer", "Multiplayer", "Peerjs", "Mobile"],
        langs: ["JavaScript", "CSS"],
        desc: "gfbnasjugnais jausbgfjausngikasnmtg giasngiasgmdisgnsi gndsj gndsign disngkisdn gkdnsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
        links: [
            "https://github.com/Animator55/Card-game-test",
            "https://magic-cards-duels.netlify.app"
        ]
    },
    {
        name: "Restaurant Test",
        tags: ["Mobile", "WIP"],
        langs: ["JavaScript", "CSS"],
        desc: "tyry gfbnasjugnais jausbgfjausngikasnhdfjs hndfkjhn tgfdaesg.",
        links: [
            "https://github.com/Animator55/Resto-test-mobile",
            ""
        ]
    },
    {
        name: "LocalChat",
        tags: ["Mobile", "Peerjs"],
        langs: ["CSS", "JavaScript"],
        desc: "fas fasgfbnasjugnais jausbgfjfasfnas junfasinsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
        links: [
            "https://github.com/Animator55/LocalChat",
            ""
        ]
    },
    {
        name: "Auth Design",
        tags: ["Design", "Component"],
        langs: ["CSS"],
        desc: "fas fasgfbnasjugnais jausbgfjfasfnas junfasinsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
        links: [
            "https://github.com/Animator55/Auth-design",
            ""
        ]
    },
    {
        name: "TextEditor",
        tags: ["Design", "Test", "Regex"],
        langs: ["JavaScript", "CSS"],
        desc: "fas fasgfbnasjugnais jausbgfjfasfnas junfasinsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
        links: [
            "https://github.com/Animator55/TextEditor",
            ""
        ]
    },
]

type iconSelector = {
    [key: string]: string
}

const iconSelected: iconSelector = {
    "JavaScript": "#fff",
    "TypeScript": "#fff",
    "HTML": "#fff",
    "CSS": "#fff",
    "PHP": "#fff",
}

export default function ProjectsList({ }: Props) {
    const [selected, setSelected] = React.useState(-1)

    return <section className='block fading' id='project'>
        <section className='block-content'>
            <h3 className='align-title'>Projects</h3>
            <ul className='projects-list'>
                {projectsArray.map((el, i: number) => {
                    return <li
                        className={selected === i ? "selected" : ""}
                        key={Math.random()}
                    >
                        <div className='top' onClick={() => { setSelected(selected !== i ? i : -1) }}>
                            <span><FontAwesomeIcon icon={faChevronDown as IconProp} /></span>
                            <h4>{el.name}</h4>
                            <div className='tags'>
                                {el.tags.map(tag => {
                                    return <div key={Math.random()}>{tag}</div>
                                })}
                            </div>
                        </div>
                        {selected === i && <div className="hidden">
                            <div className='langs'>
                                {el.langs.map((lang, i) => {
                                    return <div key={Math.random()}>
                                        <div style={{ backgroundColor: iconSelected[lang], animationDelay:100*(i+1)+ "ms"}}></div>
                                        <p style={{animationDelay:400*(i+1)+ "ms"}}>{lang}</p>
                                    </div>
                                })}
                            </div>
                            <div className='desc'>{el.desc}</div>
                            <div className="buttons">
                                {el.links.map((link, i)=>{
                                    if(link === "") return
                                    return <a key={Math.random()} href={link}>
                                        {i === 0 ? "GitHub" : "Test"}
                                    </a>
                                })}
                            </div>
                        </div>}
                    </li>
                })}
            </ul>
        </section>
    </section>
} 