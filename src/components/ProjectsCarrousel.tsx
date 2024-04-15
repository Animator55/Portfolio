import React from 'react'
import image1 from '../assets/images/estatua.png'
import image2 from '../assets/images/medieval city ideas 2.png'
import image3 from '../assets/images/medieval-city ideas 3.jpg'
import image4 from '../assets/images/medieval-city ideas.jpg'

let defaultImageGallery: string[] = [
    image1,
    image2,
    image3,
    image4,
]

type projectType = {
    name: string
    tags: string[]
    desc: string
    img: string
}

const ProjectsList: projectType[] = [
    {
      name: "Project 1",
      tags: ["tag 1", "tag 2"],
      desc: "gfbnasjugnais jausbgfjausngikasnmtg giasngiasgmdisgnsi gndsj gndsign disngkisdn gkdnsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
      img: image1
    },
    {
      name: "Project 2",
      tags: ["tag 1", "tag 2"],
      desc: "tyry gfbnasjugnais jausbgfjausngikasnhdfjs hndfkjhn tgfdaesg.",
      img: image2
    },
    {
      name: "Project 3",
      tags: ["tag 1"],
      desc: "fas fasgfbnasjugnais jausbgfjfasfnas junfasinsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
      img: image3
    },
    {
      name: "Project 4",
      tags: ["tag 1"],
      desc: "fas fasgfbnasjugnais jausbgfjfasfnas junfasinsg mjdfnhj dnfj hdfskghdfjs hndfkjhn tgfdaesg.",
      img: image4
    },
  ]


export default function ProjectsCarrousel() {
    let nav: JSX.Element[] = []

    const [selected, setSelected] =  React.useState(0) 

    React.useEffect(()=>{
        let carrousel = document.querySelectorAll(".image")
        let image = carrousel[selected] as HTMLDivElement

        image.offsetWidth
        image?.classList.add("selected")
        image.offsetWidth
    }, [selected])

    return <>
    <section className='carrousel fading'>
        <section className='projects-grid'>{nav}</section>
        {ProjectsList.length !== 0 && ProjectsList.map((image, i) => {
            let click = () => {
                if(selected === i) return
                setSelected(i)
            }

            let initialOffset = (document.body.clientWidth*15)/100

            const checkMoves = (value: number, selectedDiv: HTMLDivElement)=>{
                if(value < initialOffset-50) {
                    selectedDiv.classList.add("blurry")
                    if(selectedDiv.nextElementSibling) {
                        let div = selectedDiv.nextElementSibling as HTMLDivElement
                        div.classList.add("showy")
                    }
                }
                else if(value > initialOffset+50) {
                    selectedDiv.classList.add("blurry")
                    if(selectedDiv.previousElementSibling) {
                        let div = selectedDiv.previousElementSibling as HTMLDivElement
                        div.classList.add("showy")
                    }
                }
                else {
                    selectedDiv.classList.remove("blurry")
                    if(selectedDiv.nextElementSibling) {
                        let div = selectedDiv.nextElementSibling as HTMLDivElement
                        div.classList.add("blurry")
                        div.classList.remove("showy")
                    }
                    if(selectedDiv.previousElementSibling && !selectedDiv.previousElementSibling.classList.contains("projects-grid")) {
                        let div = selectedDiv.previousElementSibling as HTMLDivElement
                        div.classList.add("blurry")
                        div.classList.remove("showy")
                    }
                }
            }


            const drag = ()=>{
                if(selected !== i) return 

                let selectedDiv = document.querySelector(".selected") as HTMLDivElement
                if(!selectedDiv) return

                const move = (e: MouseEvent)=>{
                    let value = parseInt(selectedDiv.style.left)
                    selectedDiv.style.left = value + e.movementX +"px"

                    checkMoves(value, selectedDiv)
                }
                const drop = ()=>{
                    let value = parseInt(selectedDiv.style.left)
                    if(value < initialOffset-50) setSelected(i===ProjectsList.length-1 ? 0 : i+1)
                    else if(value > initialOffset+50) setSelected(i=== 0? ProjectsList.length-1 : i-1)
                    else selectedDiv.style.left = initialOffset + "px"
                    selectedDiv.removeEventListener("mousemove", move)
                    selectedDiv.removeEventListener("mouseup", drop)
                    selectedDiv.removeEventListener("mouseleave", drop)
                    selectedDiv.removeEventListener("mouseout", drop)
                }

                selectedDiv.addEventListener("mousemove", move)
                selectedDiv.addEventListener("mouseup", drop)
                selectedDiv.addEventListener("mouseleave", drop)
                selectedDiv.addEventListener("mouseout", drop)
            }
            const dragTouch = (e1: React.TouchEvent)=>{
                if(selected !== i) return 

                let selectedDiv = document.querySelector(".selected") as HTMLDivElement
                if(!selectedDiv) return

                let initialX = e1.touches[0].clientX

                const move = (e: TouchEvent)=>{
                    let value = parseInt(selectedDiv.style.left)
                    selectedDiv.style.left = value + (initialX - e.touches[0].clientX) +"px"

                    checkMoves(value, selectedDiv)
                }
                const drop = ()=>{
                    let value = parseInt(selectedDiv.style.left)
                    if(value < initialOffset-50) setSelected(i===ProjectsList.length-1 ? 0 : i+1)
                    else if(value > initialOffset+50) setSelected(i=== 0? ProjectsList.length-1 : i-1)
                    else selectedDiv.style.left = initialOffset + "px"

                    selectedDiv.removeEventListener("touchmove", move)
                    selectedDiv.removeEventListener("touchend", drop)
                    selectedDiv.removeEventListener("touchcancel", drop)
                }

                selectedDiv.addEventListener("touchmove", move)
                selectedDiv.addEventListener("touchend", drop)
                selectedDiv.addEventListener("touchcancel", drop)
            }

            nav.push(<div 
                className={selected === i ? "active" : ""}
                key={Math.random()}
                onClick={click}
                ></div>)

            return <section 
                key={Math.random()} 
                className={"image"}
                onClick={click}
                onMouseDown={drag}
                onTouchStart={dragTouch}
                style={selected === i ? {left: initialOffset} : {}}
            >
                <img src={image.img}/>
                <div className="project-desc">
                    <div>tech circle</div>
                    <h4>{image.name}</h4>
                    <div className='tags'>
                        {image.tags.map(tag => {
                            return <div key={Math.random()}>{tag}</div>
                        })}
                    </div>
                </div>
            </section>
        })}
    </section>
    </>
}