import "./index.css"
import ControlButton from "../Control-Button"

interface ControlsProps {
    display:string
}

const Controls = (props:ControlsProps) => {

    const { display } = props

    let newDisplay = ''

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
        default: ""
    }

    return (
        <div className="controls-container">
            <ControlButton
                title="Power"
            />
            <div id="display">
                {newDisplay}
            </div>
            {/* <input type="range" min="0" max="1"></input> */}
            {/* <div className="volume-slider-container">
                <div 
                    className="volume-bar"
                >
                </div>
                <div className="volume-tab"></div>
            </div> */}
            <ControlButton
                title="Bank"
            />
        </div>
    )
}

export default Controls