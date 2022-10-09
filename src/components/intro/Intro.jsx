import "./intro.scss"

export default function Intro() {
  return (
    <div id="introContainer">
      <div className="introHeader right">
        <h1>
          Intro
        </h1>
      </div>
      <div className="intro">
        <div className="introImg">
          <img src="assets/coding.svg" alt="Nicolò D'Addabbo" />
        </div>
        <div className="introText right">
          Passionate about web technologies. I love working at the intersection of creativity and user friendly interfaces. I create memorable web experiences.
          When I'm not building or exploring new web experiences, I'm probably playing games or watching football.
        </div>
      </div>
      {/* <div className="introHeader left">
        <h1>
          Intro
        </h1>
      </div> */}
      <div className="intro">
        <div className="introText left">
          Passionate about web technologies. I love working at the intersection of creativity and user friendly interfaces. I create memorable web experiences.
          When I'm not building or exploring new web experiences, I'm probably playing games or watching football.
        </div>
        <div className="introImg">
          <img src="assets/coding.svg" alt="Nicolò D'Addabbo" />
        </div>
      </div>
    </div>
  )
}
