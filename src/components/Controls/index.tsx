import "./index.css"
import ControlButton from "../Control-Button"

const Controls = () => {
    return (
        <div className="controls-container">
            <ControlButton
                title="Power"
            />
            <div id="display">

            </div>
            <div className="volume-slider">
                <div className="volume-tab"></div>
            </div>
            <ControlButton
                title="Bank"
            />
        </div>
    )
}

export default Controls