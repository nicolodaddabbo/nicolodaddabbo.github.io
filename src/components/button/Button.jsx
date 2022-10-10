import "./button.scss"

export default function Button({text, onClick}) {
  return (
    <button className="defaultButton" onClick={onClick}>{text}</button>
  )
}
