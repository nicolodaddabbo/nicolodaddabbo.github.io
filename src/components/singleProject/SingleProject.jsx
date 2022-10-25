import './singleProject.scss'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import SwipeableViews from 'react-swipeable-views/lib/SwipeableViews'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import React from 'react'


export default function SingleProject({ handleClose, show, index, project }) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const translateValue = (index) * 100
    const [slideIndex, setSlideIndex] = useState(0)


    const moveSlideForward = () => {
        if (slideIndex === project.images.length - 1) {
            setSlideIndex(0)
        } else {
            setSlideIndex(slideIndex + 1)
        }
    }

    const moveSlideBackward = () => {
        if (slideIndex === 0) {
            setSlideIndex(project.images.length - 1)
        } else {
            setSlideIndex(slideIndex - 1)
        }
    }

    return (
        <div className={showHideClassName} style={{
            transform: `translate(${translateValue}%)`
        }}>
            <div className="modalContent">
                <h1 className='modalTitle'>
                    {project.title}
                </h1>
                <div className='modalBody'>
                    <span dangerouslySetInnerHTML={{ __html: project.body }}></span>
                </div>
                <div className='modalClose' onClick={handleClose}>
                    <CloseIcon style={{fontSize : '50px'}}/>    
                </div>
                <div className="slider">
                    <SwipeableViews enableMouseEvents index={slideIndex}>
                        {project.images.map((imgUrl, id) => (
                            <div
                                key={id}
                                style={{backgroundImage : `url(${imgUrl})`}}
                                className="slide"
                            ></div>
                        ))}
                    </SwipeableViews>
                    <ArrowCircleRightOutlinedIcon className='rightArrow' onClick={moveSlideForward} />
                    <ArrowCircleLeftOutlinedIcon className='leftArrow' onClick={moveSlideBackward} />
                </div>
            </div>
        </div>
    )
}
