import "./index.css"
import ControlButton from "../Control-Button"

const Controls = () => {

    return (
        <div className="controls-container">
            <ControlButton
                title="Power"
            />
            <div id="display"></div>
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