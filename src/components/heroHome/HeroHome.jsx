import BigText from "../bigText/BigText"
import "./heroHome.scss"

const freelanceArray = ["Full-Stack Developer", "Web Designer", "Web Developer", "Web Designer"]

export default function HeroHome() {

    return (
        <div id="heroHome">
            <div className="heroTitle-container">
                <BigText
                    text="Nicolo'"
                    duration={1}
                    animationType={"blocks"}
                    tag={"h1"}
                    className={"heroTitle"}
                />
                <BigText
                    text="D'Addabbo"
                    duration={1}
                    animationType={"blocks"}
                    tag={"h1"}
                    className={"heroTitle"}
                />
            </div>
            
        </div>
    )
}