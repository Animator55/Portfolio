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
        name: "RegBox",
        tags: ["Main project"],
        langs: ["React TypeScript", "PeerJs", "CSS"],
        desc: "A register box of a restaurant, being that concept the origin of its name, RegBox its a project that includes so plenty of my knowledge. Including P2P connections, Ui, Ux, and data management.",
        links: [
            "https://github.com/Animator55/RegBox",
            "https://regbox.nahuelibarra.com",
        ]
    },
    {
        name: "RegBox Pawn",
        tags: ["Main project"],
        langs: ["React TypeScript", "PeerJs", "CSS"],
        desc: "The pawn of RegBox, its propose is making the work more dynamic, letting the waiter make 'requests' to RegBox main using PeerJs and its P2P connection. The reason for avoiding the usage of Databases is because of nullifing the use of servers, making RegBox only dependent of Wifi conection only when RegBox Pawn is used.",
        links: [
            "https://github.com/Animator55/RegBox-Pawn",
            "https://pawn.regbox.nahuelibarra.com",
        ]
    },
    {
        name: "HTMLEditor",
        tags: ["Design Creator"],
        langs: ["React TypeScript", "CSS"],
        desc: "A project based in Do2Software's Octagonal, that i worked on. Using the experience of making the 'admin editor' of pages, i concluded making a lack version of its original.",
        links: [
            "https://github.com/Animator55/HTMLEditor",
            "https://htmleditor.nahuelibarra.com",
        ]
    },
    {
        name: "LocalChat",
        tags: ["Mobile", "Peerjs"],
        langs: [ "JavaScript", "CSS"],
        desc: "A peerJs Test, using the basic concept of a chat.",
        links: [
            "https://github.com/Animator55/LocalChat",
            ""
        ]
    },
    {
        name: "TextEditor",
        tags: ["Design", "Test", "Regex"],
        langs: ["JavaScript", "CSS"],
        desc: "An example of using regex.",
        links: [
            "https://github.com/Animator55/TextEditor",
            ""
        ]
    },
    {
        name: "Dungeon Crawler",
        tags: ["SinglePlayer", "Mobile Game"],
        langs: ["React TypeScript", "SCSS"],
        desc: "Dungeon Roguelike theme mobile game. Uses a simple combat statistics structure to make the whole game like a cokkie clicker type with lootboxes.",
        links: [
            "https://github.com/Animator55/DungeonCrawler",
            "https://dungeon-crawler.nahuelibarra.com"
        ]
    },
    {
        name: "Magic Card Game",
        tags: ["SinglePlayer", "Multiplayer", "Peerjs", "Mobile Game"],
        langs: ["JavaScript", "CSS"],
        desc: "A local multiplayer or singleplayer game of cards. The logic behind of the connection its the use of PeerJs P2P connection.",
        links: [
            "https://github.com/Animator55/Card-game-test",
            "https://magic-cards-duels.netlify.app"
        ]
    },
    {
        name: "Minesweeper",
        tags: ["Mobile Game", "SinglePlayer"],
        langs: ["React TypeScript","CSS"],
        desc: "A simple minesweeper game.",
        links: [
            "https://github.com/Animator55/minesweeper",
            "https://minesweeper.nahuelibarra.com"
        ]
    },
    {
        name: "TicTacToe",
        tags: ["Mobile Game", "SinglePlayer"],
        langs: ["Svelte","CSS"],
        desc: "This game is a test for Svelte, does not have any complexity.",
        links: [
            "https://github.com/Animator55/TicTacToe",
            ""
        ]
    },
    {
        name: "Auth Design",
        tags: ["Design", "Component"],
        langs: ["CSS"],
        desc: "An auth design using React to port to any project that i would want to use.",
        links: [
            "https://github.com/Animator55/Auth-design",
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
                        id={el.name}
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
                            <div className='desc show-texting'>{el.desc}</div>
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