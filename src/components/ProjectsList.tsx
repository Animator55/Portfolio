import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    lang: "es" | "en"
}


type projectType = {
    name: string
    tags: string[]
    langs: string[]
    desc: string
    descEs: string
    links: string[]
}

const projectsArray: projectType[] = [
    {
        name: "RegBox",
        tags: ["Main project"],
        langs: ["React TypeScript", "PeerJs", "CSS"],
        desc: "A register box of a restaurant, being that concept the origin of its name, RegBox. Its a project that includes so plenty of my knowledge. Including P2P connections, Ui, Ux, and data management.",
        descEs: "Caja registradora de un restaurante, siendo ese concepto el origen de su nombre, RegBox. Es un proyecto que incluye muchos de mis conocimientos. Incluyendo conexiones P2P, Ui, Ux y gestión de datos.",
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
        descEs: "Peón de RegBox, su propuesta es dinamizar el trabajo, permitiendo al camarero realizar 'solicitudes' al RegBox principal utilizando PeerJs y su conexión P2P. La razón para evitar el uso de Bases de Datos es porque se anula el uso de servidores, haciendo que RegBox solo dependa de la conexión Wifi cuando se usa RegBox Pawn.",
        links: [
            "https://github.com/Animator55/RegBox-Pawn",
            "https://pawn.regbox.nahuelibarra.com",
        ]
    },
    {
        name: "HTMLEditor",
        tags: ["Design Creator"],
        langs: ["React TypeScript", "CSS"],
        desc: "A project based on Do2Software's Octagonal, which I worked on. Using the experience of creating the 'managing editor' of pages, I concluded by making an inferior version of its original.",
        descEs: "Un proyecto basado en Octagonal de Do2Software, en el que trabajé. Utilizando la experiencia de crear el editor de páginas, concluí haciendo una versión inferior de su original.",
        links: [
            "https://github.com/Animator55/HTMLEditor",
            "https://htmleditor.nahuelibarra.com",
        ]
    },
    {
        name: "LocalChat",
        tags: ["Mobile", "Peerjs"],
        langs: ["JavaScript", "CSS"],
        desc: "A peerJs Test, using the basic concept of a chat.",
        descEs: "Una prueba de peerJs, utilizando el concepto básico de chat.",
        links: [
            "https://github.com/Animator55/LocalChat",
            ""
        ]
    },
    {
        name: "TextEditor",
        tags: ["Design", "Test", "Regex"],
        langs: ["JavaScript", "CSS"],
        desc: "Functioning as a not very complex text editor, it prioritizes the use of regex and certain ideas to achieve its operation.",
        descEs: "Funcionando como un editor de textos no muy complejo prioriza el uso de regex y ciertas ideaciones para lograr su funcionamiento.",
        links: [
            "https://github.com/Animator55/TextEditor",
            ""
        ]
    },
    {
        name: "Dungeon Crawler",
        tags: ["SinglePlayer", "Mobile Game"],
        langs: ["React TypeScript", "SCSS"],
        desc: "Dungeon Roguelike theme mobile game. Uses a simple combat statistics structure to make the whole game like a cokkie clicker type with loot boxes.",
        descEs: "Juego móvil de temática 'Dungeon Roguelike'. Utiliza una estructura de estadísticas de combate simple para hacer que todo el juego sea como un 'cookie clicker' con 'loot boxes'.",
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
        descEs: "Un juego de cartas multijugador local o para un solo jugador. La lógica detrás de la conexión es el uso de la conexión P2P de PeerJs.",
        links: [
            "https://github.com/Animator55/Card-game-test",
            "https://magic-cards-duels.netlify.app"
        ]
    },
    {
        name: "Minesweeper",
        tags: ["Mobile Game", "SinglePlayer"],
        langs: ["React TypeScript", "CSS"],
        desc: "A simple minesweeper game.",
        descEs: "Un simple juego de buscaminas.",
        links: [
            "https://github.com/Animator55/minesweeper",
            "https://minesweeper.nahuelibarra.com"
        ]
    },
    {
        name: "TicTacToe",
        tags: ["Mobile Game", "SinglePlayer"],
        langs: ["Svelte", "CSS"],
        desc: "This game is a test for Svelte, does not have any complexity.",
        descEs: "Este juego es una prueba para probar Svelte, no tiene demasiada complejidad, siendo el 'Tres en raya'.",
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
        descEs: "Un diseño de página de autenticación usando React y los 'JSX components' para portearlo a cualquier proyecto que necesite.",
        links: [
            "https://github.com/Animator55/Auth-design",
            ""
        ]
    },
]

export default function ProjectsList({lang }: Props) {
    const [selected, setSelected] = React.useState(-1)

    return <section className='block fading'>
        <section className='block-content'>
            <h3 className='align-title'>{lang ==="en" ? "Projects" : "Proyectos"}</h3>
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
                                        <div style={{ backgroundColor: "#fff", animationDelay: 100 * (i + 1) + "ms" }}></div>
                                        <p style={{ animationDelay: 400 * (i + 1) + "ms" }}>{lang}</p>
                                    </div>
                                })}
                            </div>
                            <div className='desc show-texting'>{lang === "en" ? el.desc : el.descEs}</div>
                            <div className="buttons">
                                {el.links.map((link, i) => {
                                    if (link === "") return
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