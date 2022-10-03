import { useEffect, useState } from "react"

export default function ChangingText( {array, length} ) {
    const [changingTextIndex, setChangingTextIndex] = useState(0) 

    useEffect(() => {
        const timer = () => {
            setChangingTextIndex(prevIndex => {
                if (prevIndex === length - 1) {
                    return 0
                }
                else {
                    return prevIndex + 1
                }
            })
        }

        setInterval(timer, 2000)
        
        return () => { clearInterval(timer) }
    }, [])

    return (
    <span>{array[changingTextIndex]}</span>
  )
}
