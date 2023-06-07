import "./index.css"

interface DrumPadProps {
    drumPadId:string 
    audioId:string 
    content:string
    src:string
    setDisplay:React.Dispatch<React.SetStateAction<string>>
    volume:string
    toggle:boolean
}

const DrumPad = (props:DrumPadProps) => {

    const { drumPadId, content, audioId, src, setDisplay, volume, toggle } = props

    const handleClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(toggle) {
            const audioElement = (e.target as HTMLDivElement).firstElementChild as HTMLAudioElement
            const { id } = audioElement
            setDisplay(id)
            const intVolume = parseInt(volume) as number * .01
            audioElement.volume = intVolume
            audioElement.play()
        }
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