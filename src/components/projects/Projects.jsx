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
            title: "Project 2",
            intro: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus`,
            body: `test`,
            images: ['assets/logo_sito_1.png', 'assets/logo_sito_1.png']
        },
        {
            title: "Project 3",
            intro: `Test`,
            body: `test`,
            images: ['assets/logo_sito_1.png', 'assets/logo_sito_1.png']
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
