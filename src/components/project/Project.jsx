import Button from '../button/Button'
import './project.scss'
import { useState } from 'react'
import SingleProject from '../singleProject/SingleProject';

export default function Project({ project: { title, body, imgUrl }, index }) {
  const [isModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(!isModal)
  }

  return (
    <div className='projectWrapper'>
      <div className="textSection">
        <div className="imgSection" style={{backgroundImage : `url(${imgUrl})`}}>
        </div>
        <h1>{title}</h1>
        <p>{body}</p>
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
        >
          {title}
        </SingleProject>
      </div>
    </div>
  )
}
