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
}

const projectsArray: projectType[] = [
    {
        name: "Project 1",
        tags: ["tag 1", "tag 2"],
        langs: ["JavaScript", "CSS"],
        desc: "gfbnasjugnais jausbgfjausngikasnmtg giasngiasgmdisgnsi gndsj gndsign disngkisdn gkdnsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
    },
    {
        name: "Project 2",
        tags: ["tag 1", "tag 2"],
        langs: ["JavaScript", "CSS"],
        desc: "tyry gfbnasjugnais jausbgfjausngikasnhdfjs hndfkjhn tgfdaesg.",
    },
    {
        name: "Project 3",
        tags: ["tag 1"],
        langs: ["CSS"],
        desc: "fas fasgfbnasjugnais jausbgfjfasfnas junfasinsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
    },
    {
        name: "Project 4",
        tags: ["tag 1"],
        langs: ["CSS"],
        desc: "fas fasgfbnasjugnais jausbgfjfasfnas junfasinsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
    },
]

type iconSelector = {
    [key: string] : string
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


    return <section className='projects-list'>
        <h3>Projects</h3>
        <ul>
            {projectsArray.map((el, i: number)=>{
                return <li 
                    className={selected === i ? "selected" : ""} 
                    key={Math.random()} 
                    onClick={()=>{setSelected(selected !== i ? i : -1)}}
                >
                    <h4>{el.name}</h4>
                    <div className='tags'>
                        {el.tags.map(tag=>{
                            return <div key={Math.random()}>{tag}</div>
                        })}
                    </div>
                    <div className='langs'>
                       {el.langs.map(lang=>{
                            return <div key={Math.random()}>
                                <div style={{backgroundColor: iconSelected[lang]}}></div>
                                <p>{lang}</p>
                            </div>
                       })} 
                    </div>
                    <div>{el.desc}</div>
                    <span><FontAwesomeIcon icon={faChevronDown as IconProp}/></span>
                </li>
            })}
        </ul>
    </section>
}