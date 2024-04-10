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
            title: "Dracula APP",
            intro: `Realized for the event bitsxlaMarató 2023: Hackathon Barcelona. Mobile App that helps women tracks their period blood losses to prevent diseases.`,
            body: `– Employed React Native for the app’s front-end and relied on SQLite for data storage, prioritizing development
            speed over a full back-end, given the project’s time constraints.<br/>
            – The app employed computer vision to assess the blood volume in the protective device using a simple image.<br/>
            Git Repo: <a target="_blank" href="https://github.com/nicolodaddabbo/dracula">here</a>.`,
            images: ['assets/bitsxlamarato_full.png']
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
