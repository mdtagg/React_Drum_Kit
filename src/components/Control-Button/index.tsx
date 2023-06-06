import "./index.css"

interface ControlButtonProps {
    title:string

}

const ControlButton = (props:ControlButtonProps) => {

    const { title } = props

    return (
        <>
            <p className="button-title">{title}</p>
            <button className="control-button">
                <div className="slider"></div>
            </button>
        </>
    )
}

export default ControlButton