import "./intro.scss"

export default function Intro() {
  return (
    <div id="introContainer">
      <div className="introHeader">
        <h1>
          Intro
        </h1>
      </div>
      <div id="intro">
        <div id="introImg">
          <img src="assets/coding.svg" alt="Nicolò D'Addabbo" />
        </div>
        <div className="introText">
          Passionate about web technologies. I love working at the intersection of creativity and user friendly interfaces. I create memorable web experiences.
          When I'm not building or exploring new web experiences, I'm probably playing games or watching football.
        </div>
      </div>
    </div>
  )
}
