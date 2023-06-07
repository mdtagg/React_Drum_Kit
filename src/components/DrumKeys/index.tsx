import "./index.css"
import DrumPad from "../DrumPad"
import S1 from "../../assets/Heater-1.mp3"
import S2 from "../../assets/Heater-2.mp3"
import S3 from "../../assets/Heater-3.mp3"
import S4 from "../../assets/Heater-4_1.mp3"
import S5 from "../../assets/Heater-6.mp3"
import S6 from "../../assets/Dsc_Oh.mp3"
import S7 from "../../assets/Kick_n_Hat.mp3"
import S8 from "../../assets/RP4_KICK_1.mp3"
import S9 from "../../assets/Cev_H2.mp3"

export type setDisplayType = {
    setDisplay:React.Dispatch<React.SetStateAction<string>>
    volume:string
    toggle:boolean
}

const DrumKeys = (props:setDisplayType) => {

    const { setDisplay, volume, toggle } = props

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
        newDrumPad("H1","Q","Q",S1),
        newDrumPad("H2","W","W",S2),
        newDrumPad("H3","E","E",S3),
        newDrumPad("H4","A","A",S4),
        newDrumPad("Clap","S","S",S5),
        newDrumPad("Open-H","D","D",S6),
        newDrumPad("Kick-Hat","Z","Z",S7),
        newDrumPad("Kick","X","X",S8),
        newDrumPad("Closed-H","C","C",S9)
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
                        toggle={toggle}
                    />
                )
            })}
        </div>
    )
}

export default DrumKeys
