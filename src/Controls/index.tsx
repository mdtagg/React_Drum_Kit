import "./index.css"

const Controls = () => {
    return (
        <div className="controls-container">
            <p className="button-title">Power</p>
            <button className="power-button">
                <div className="slider"></div>
            </button>
        </div>
    )
}

export default Controls