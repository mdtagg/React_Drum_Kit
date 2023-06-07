import "./index.css"

interface DrumPadProps {
    drumPadId:string 
    audioId:string 
    content:string
    src:string
}

const DrumPad = (props:DrumPadProps) => {

    const { drumPadId, content, audioId, src } = props

    const handleClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        const audioElement = target.firstElementChild as HTMLAudioElement
        const { id } = audioElement
        const sound = document.getElementById(id) as HTMLAudioElement
        sound.play()
    }

    return (
        <div 
            className="drum-pad" 
            id={drumPadId}
            onClick={(e) => handleClick(e)}
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