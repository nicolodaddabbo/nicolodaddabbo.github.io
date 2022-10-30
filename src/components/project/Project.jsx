import Button from '../button/Button'
import './project.scss'
import { useState } from 'react'
import SingleProject from '../singleProject/SingleProject';
import React from 'react'

export default function Project({ project: { title, intro, body, images }, index }) {
  const [isModal, setIsModal] = useState(false);
  const showHide = !isModal ? '' : 'display-none-not-modal'

  const showModal = () => {
    setIsModal(!isModal)
  }

  return (
    <div className={showHide}>
      <div className='projectWrapper'>
        <div className="textSection">
          <div className="imgSection" style={{backgroundImage : `url(${images[0]})`}}>
          </div>
          <h1 className='projectTitle'>{title}</h1>
          <p className='projectIntro'>{intro}</p>
          <div className="buttonScopri">
            <Button
              text="DISCOVER"
              onClick={showModal}
            />
          </div>
          <SingleProject
            show={isModal}
            handleClose={showModal}
            index={index}
            project={{title, body, images}}
          />
        </div>
      </div>
    </div>
  )
}
