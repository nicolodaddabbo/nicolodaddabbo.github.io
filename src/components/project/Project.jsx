import './project.scss'

export default function Project({ project: { title, body, imgUrl }, index }) {
  return (
    <div className='projectWrapper'>
      <div className="textSection">
        <div className="imgSection" style={{backgroundImage : `url(${imgUrl})`}}>
        </div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  )
}
