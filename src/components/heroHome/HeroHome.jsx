import BigText from "../bigText/BigText"
import "./heroHome.scss"

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
                <BigText
                    text="Web Developer"
                    duration={1}
                    animationType={"blocks"}
                    tag={"h1"}
                    className={"heroTitleUppercase"}
                />
                <BigText
                    text="Full-Stack Developer"
                    duration={1}
                    animationType={"blocks"}
                    tag={"h1"}
                    className={"heroTitleUppercase"}
                />
                <BigText
                    text="Web Designer"
                    duration={1}
                    animationType={"blocks"}
                    tag={"h1"}
                    className={"heroTitleUppercase"}
                />
            </div>
            
        </div>
    )
}