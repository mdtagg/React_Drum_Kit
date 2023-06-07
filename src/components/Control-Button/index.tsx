import "./index.css"
import { useEffect } from "react"

interface ControlButtonProps {
    title:string
    toggle:boolean
    setToggle:React.Dispatch<React.SetStateAction<boolean>>
    id:string
}

const ControlButton = (props:ControlButtonProps) => {

    const { title, toggle, setToggle, id } = props

    const handleClick = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        const test = document.querySelector(".slider")
        if(!toggle && id === "Power") {
            test?.classList.add("transition-left")
        }else if(toggle && id === "Power") {
            test?.classList.remove("transition-left")
        }
    },[toggle])

    return (
        <>
            <p className="button-title">{title}</p>
            <button 
                id={id}
                className="control-button"
                onClick={handleClick}
            >
                <div className="slider"></div>
            </button>
        </>
    )
}

export default ControlButton