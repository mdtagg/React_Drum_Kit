import "./index.css"
import DrumPad from "../DrumPad"

export type setDisplayType = {
    setDisplay:React.Dispatch<React.SetStateAction<string>>
    volume:string
}

const DrumKeys = (props:setDisplayType) => {

    const { setDisplay,volume } = props

    const newDrumPad = (
        drumPadId:string,
        content:string,
        audioId:string,
        src:string
        ) => {
        return {
            drumPadId:drumPadId,
            content:content,
            audioId:audioId,
            src:src
        }
    }

    const drumPadValues = [
        newDrumPad("H1","Q","Q","/Heater-1.mp3"),
        newDrumPad("H2","W","W","/Heater-2.mp3"),
        newDrumPad("H3","E","E","/Heater-3.mp3"),
        newDrumPad("H4","A","A","/Heater-4_1.mp3"),
        newDrumPad("Clap","S","S","/Heater-6.mp3"),
        newDrumPad("Open-H","D","D","/Dsc_Oh.mp3"),
        newDrumPad("Kick-Hat","Z","Z","/Kick_n_Hat.mp3"),
        newDrumPad("Kick","X","X","/RP4_KICK_1.mp3"),
        newDrumPad("Closed-H","C","C","/Cev_H2.mp3")
    ]

    return (
        <div className="key-container">
            {drumPadValues.map(value => {
                return (
                    <DrumPad
                        drumPadId={value.drumPadId}
                        content={value.content}
                        audioId={value.audioId}
                        src={value.src}
                        setDisplay={setDisplay}
                        volume={volume}
                    />
                )
            })}
        </div>
    )
}

export default DrumKeys
