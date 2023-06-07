import "./index.css"

interface DrumPadProps {
    drumPadId:string 
    audioId:string 
    content:string
    src:string
    setDisplay:React.Dispatch<React.SetStateAction<string>>
}

const DrumPad = (props:DrumPadProps) => {

    const { drumPadId, content, audioId, src, setDisplay } = props

    const handleClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        const audioElement = target.firstElementChild as HTMLAudioElement
        const { id } = audioElement
        setDisplay(id)
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