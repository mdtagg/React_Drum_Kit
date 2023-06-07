import "./index.css"

interface DrumPadProps {
    drumPadId:string 
    audioId:string 
    content:string
    src:string
}

const DrumPad = (props:DrumPadProps) => {

    const { drumPadId, content, audioId, src } = props

    return (
        <div 
            className="drum-pad" 
            id={drumPadId}
        >
            {content}
            <audio 
                className="clip" 
                id={audioId}
                src={src}
            ></audio>
        </div>
    )
}

export default DrumPad