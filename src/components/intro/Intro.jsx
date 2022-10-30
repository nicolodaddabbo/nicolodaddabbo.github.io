import "./intro.scss"
import React from 'react'

export default function Intro() {
  return (
    <div id="introContainer">
      <div className="introHeader right">
        <h1>
          Whoami
        </h1>
      </div>
      <div className="intro">
        <div className="introImg">
          <img src="assets/coding2.svg" alt="Nicolò D'Addabbo" />
        </div>
        <div className="introText right">
          I'm an enthusiastic and motivated "Computer Science and Engineering" undergraduate student at <a href="https://corsi.unibo.it/1cycle/ComputerScienceEngineering" target="_blank" rel="noopener noreferrer">Unibo</a>. Looking for a position of responsibility
          to be able to showcase the skills acquired in years of experience and study in the IT field. In my free time I always try to deepen my
          knowledge by realizing practical projects, even with an entrepreneurial eye. I currently create websites on commission for
          companies and activities in my city: Rimini.
        </div>
      </div>
      {/* <div className="introHeader left">
        <h1>
          Intro
        </h1>
      </div> */}
      <div className="intro">
        <div className="introText left">
          When I'm not building or exploring new software experiences, I'm probably playing Ultimate Frisbee or playing for the most awesome band in Rimini: the <a href="https://www.instagram.com/bronx.express/" rel="noopener noreferrer" target="_blank">Bronx Express</a>, for which I organized many events at clubs on the Rimini Riviera.
        </div>
        <div className="introImg">
          <img src="assets/coding.svg" alt="Nicolò D'Addabbo" />
        </div>
      </div>
    </div>
  )
}
