import "./button.scss"
import React from 'react'

export default function Button({text, onClick}) {
  return (
    <button className="defaultButton" onClick={onClick}>{text}</button>
  )
}
