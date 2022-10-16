import SwipeableViews from 'react-swipeable-views/lib/SwipeableViews'
import Project from '../project/Project'
import './projects.scss'
import { useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function Projects() {
    const [index, setIndex] = useState(0)

    const projects = [
        {
            title: "Project 1",
            intro: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus`,
            body: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus`,
            images: ['assets/logo_sito_1.png', 'assets/logo_sito_1.png']
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
            <h1 className='mainTitle'>PROGETTI</h1>
            <SwipeableViews enableMouseEvents index={index}>
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
