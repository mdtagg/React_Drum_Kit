import "./index.css"
import ControlButton from "../Control-Button"

interface ControlsProps {
    display:string
    setDisplay:React.Dispatch<React.SetStateAction<string>>
    setVolume:React.Dispatch<React.SetStateAction<string>>
    toggle:boolean
    setToggle:React.Dispatch<React.SetStateAction<boolean>>
}

const Controls = (props:ControlsProps) => {

    const { display, setDisplay, setVolume, toggle, setToggle } = props

    let newDisplay = ''

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const volume = e.target.value
        setDisplay(volume)
        setVolume(volume)
    }

    switch(display) {
        case 'Q':
            newDisplay = "Heater 1"
            break 
        case 'W':
            newDisplay = "Heater 2"
            break 
        case "E":
            newDisplay = "Heater 3"
            break 
        case "A":
            newDisplay = "Heater 4"
            break 
        case "S":
            newDisplay = "Clap"
            break 
        case "D":
            newDisplay = "Open-HH"
            break 
        case "z":
            newDisplay = "Kick-n-Hat"
            break 
        case "X":
            newDisplay = "Kick"
            break 
        case "C":
            newDisplay = "Closed-HH"
            break 
        case "":
            newDisplay = ""
            break
        default: newDisplay = `Volume ${display}`
    }

    return (
        <div className="controls-container">
            <ControlButton
                title="Power"
                toggle={toggle}
                setToggle={setToggle}
                id="Power"
            />
            <div id="display">
                {newDisplay}
            </div>
            <input 
                type="range" 
                min="0" 
                max="100" 
                onChange={(e) => handleChange(e)}
            ></input>
        </div>
    )
}

export default Controls