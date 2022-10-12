import Button from '../button/Button'
import './project.scss'
import { useState } from 'react'
import SingleProject from '../singleProject/SingleProject';

export default function Project({ project: { title, intro, body, images }, index }) {
  const [isModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(!isModal)
  }

  return (
    <div className='projectWrapper'>
      <div className="textSection">
        <div className="imgSection" style={{backgroundImage : `url(${images[0]})`}}>
        </div>
        <h1>{title}</h1>
        <p>{intro}</p>
        <div className="buttonScopri">
          <Button
            text="SCOPRI"
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
  )
}
