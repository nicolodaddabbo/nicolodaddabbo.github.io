import SwipeableViews from 'react-swipeable-views/lib/SwipeableViews'
import Project from '../project/Project'
import './projects.scss'
import { useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React from 'react'

export default function Projects() {
    const [index, setIndex] = useState(0)

    const projects = [
        {
            title: "Freelance Web Developer",
            intro: `I am currently realizing websites on commission, I've started this small activity in December 2021.`,
            body: `I am currently realizing websites on commission, I've started this small activity in December 2021. All
            of my clients are word-of-mouth but I want to start investing in this activity, opening my own company, to keep
            financing my studies.<br/>
            I realized different websites such as:
            <a href="https://wildrockexperience.com/" target="_blank">Wild Rock Experience</a>
            and <a href="https://www.ilmandorlo.org/" target="_blank">Kumu Education</a>.
            <br/>
            Useful experience that has strengthened my front-end skills and also my communication, 
            sales and work time management skills.
            `,
            images: ['assets/logo_intero.svg', 'assets/logo_intero_rosso.svg']
        },
        {
            title: "Paganello's Schedule",
            intro: `I realized a Web App that displays the games schedule for the biggest Beach Ultimate 
            Frisbee tournament in the World: Paganello. I built it using: ReactJS, NextJS and Google Sheets API`,
            body: `Paganello is a Frisbee tournament, which includes two disciplines: Beach Ultimate, 
            a team sport played with the Frisbee (beach version of Ultimate Frisbee) and Freestyle, 
            which is played individually or in groups of two or three, for those who love acrobatics. 
            Born as a weekend between friends, Paga, as called by the fans, 
            turned to be the most prestigious Beach tournament in the Ultimate world. 
            Teams from Usa, where Frisbee born fifty years ago, Russia, Sweden, Canada, UK and so on 
            join Paganello every year.
            You can view a LIVE DEMO <a target="_blank" href="https://paganello-schedule.vercel.app/">here</a>, or you can view the Git Repo 
            <a target="_blank" href="https://github.com/nicolodaddabbo/paganello-tournament-schedule">here</a>.<br/>
            This web application fetches mathces informations from a pre-formatted Google Sheet 
            and displays them, in real time, with a user friendly interface.`,
            images: ['assets/paganello_preview.png', 'assets/paganello_demo.png']
        },
        {
            title: "PiazzaHR",
            intro: `I worked as Web Developer for the Piazza Hotels & Residences group in Rimini`,
            body: `I designed, developed and maintained numerous websites for the <a target="_blank" href="https://piazzahr.com">Piazza Hotels & Residences</a> group. <br/>
            My main task was to brand and develop 15 websites, one for each Residence of the group, for example: 
            <a target="_blank" href="https://residencenautic.com">Residence Nautic</a>, 
            <a target="_blank" href="https://tensuite.it">Residence Ten Suite</a>, 
            <a target="_blank" href="https://hotelducalerimini.it">Hotel Ducale</a> and many others. <br/>
            Tanks to this experience I improved my Frontend Development Skills, but I also learned 
            to use tools like Inkscape and GIMP for the creation of logos and graphics, and to use Google Tag Manager and Google Analytics efficiently.
            `,
            images: ['assets/logo_nautic.svg', 'assets/logo_tensuite.svg']
        }
    ]

    const moveSlideForward = () => {
        if (index === projects.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const moveSlideBackward = () => {
        if (index === 0) {
            setIndex(projects.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div id='projects'>
            <h1 className='mainTitle'>PROJECTS</h1>
            <div className='bulletPoints'>
                { projects.map((project, id) => (
                    <div key={id} className={(index === id) ? "bullet active" : "bullet"} onClick={() => setIndex(id)}></div>
                ))}
            </div>
            <SwipeableViews enableMouseEvents index={index} onChangeIndex={(index) => setIndex(index)}>
                { projects.map((project, id) => (
                    <Project 
                        key={id} 
                        index={id} 
                        project={project} 
                    />
                    )) }
            </SwipeableViews>
            <ChevronRightIcon className='rightArrow' onClick={moveSlideForward}/>
            <ChevronLeftIcon className='leftArrow' onClick={moveSlideBackward}/>
        </div>
    )
}
