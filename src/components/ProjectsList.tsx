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
        name: "Dungeon Crawler",
        tags: ["SinglePlayer", "Mobile Game"],
        langs: ["React TypeScript", "SCSS"],
        desc: "gfbnasjugnais jausbgfjausngikasnmtg giasngiasgmdisgnsi gndsj gndsign disngkisdn gkdnsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
        links: [
            "https://github.com/Animator55/DungeonCrawler",
            "https://dungeon-crawler.nahuelibarra.com"
        ]
    },
    {
        name: "Magic Card Game",
        tags: ["SinglePlayer", "Multiplayer", "Peerjs", "Mobile Game"],
        langs: ["JavaScript", "CSS"],
        desc: "gfbnasjugnais jausbgfjausngikasnmtg giasngiasgmdisgnsi gndsj gndsign disngkisdn gkdnsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
        links: [
            "https://github.com/Animator55/Card-game-test",
            "https://magic-cards-duels.netlify.app"
        ]
    },
    {
        name: "RegBox",
        tags: ["Main project"],
        langs: ["React TypeScript", "PeerJs", "CSS"],
        desc: "tyry gfbnasjugnais jausbgfjausngikasnhdfjs hndfkjhn tgfdaesg.",
        links: [
            "https://github.com/Animator55/RegBox",
            "https://regbox.nahuelibarra.com",
        ]
    },
    {
        name: "RegBox Pawn",
        tags: ["Main project"],
        langs: ["React TypeScript", "PeerJs", "CSS"],
        desc: "tyry gfbnasjugnais jausbgfjausngikasnhdfjs hndfkjhn tgfdaesg.",
        links: [
            "https://github.com/Animator55/RegBox-Pawn",
            "https://pawn.regbox.nahuelibarra.com",
        ]
    },
    {
        name: "HTMLEditor",
        tags: ["Design Creator"],
        langs: ["React TypeScript", "CSS"],
        desc: "tyry gfbnasjugnais jausbgfjausngikasnhdfjs hndfkjhn tgfdaesg.",
        links: [
            "https://github.com/Animator55/HTMLEditor",
            "https://htmleditor.nahuelibarra.com",
        ]
    },
    {
        name: "LocalChat",
        tags: ["Mobile", "Peerjs"],
        langs: [ "JavaScript", "CSS"],
        desc: "fas fasgfbnasjugnais jausbgfjfasfnas junfasinsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
        links: [
            "https://github.com/Animator55/LocalChat",
            ""
        ]
    },
    {
        name: "Minesweeper",
        tags: ["Mobile Game", "SinglePlayer"],
        langs: ["React TypeScript","CSS"],
        desc: "fas fasgfbnasjugnais jausbgfjfasfnas junfasinsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
        links: [
            "https://github.com/Animator55/minesweeper",
            "https://minesweeper.nahuelibarra.com"
        ]
    },
    {
        name: "TicTacToe",
        tags: ["Mobile Game", "SinglePlayer"],
        langs: ["Svelte","CSS"],
        desc: "fas fasgfbnasjugnais jausbgfjfasfnas junfasinsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
        links: [
            "https://github.com/Animator55/TicTacToe",
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

export default function ProjectsList({ }: Props) {
    const [selected, setSelected] = React.useState(-1)

    return <section className='block fading'>
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
                                        <div style={{ backgroundColor: "#fff", animationDelay:100*(i+1)+ "ms"}}></div>
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