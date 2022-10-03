import "./bigText.scss"
import AnimatedText from 'react-animated-text-content';

export default function BigText(props) {
    return (
        <div className="bigText">
            <AnimatedText
                type="words"
                animationType= {props.animationType}
                interval={props.interval}
                duration={props.duration}
                tag={props.tag}
                className={props.className}
            >
                {props.text}
            </AnimatedText>
        </div>
    )
}
