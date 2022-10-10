import './singleProject.scss'

export default function SingleProject({ handleClose, show, children, index }) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const translateValue = (index) * 100

    return (
        <div className={showHideClassName} style={{
            transform : `translate(${translateValue}%)`
        }}>
            {children}
            <button onClick={handleClose}>CLOSE</button>
        </div>
    )
}
