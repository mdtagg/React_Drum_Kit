import "./index.css"
import DrumKeys from "../components/DrumKeys"
import Controls from "../components/Controls"
import { useState, useEffect } from "react"

function App() {

  const [ display, setDisplay ] = useState('')
  const [ volume, setVolume ] = useState('50')

  useEffect(() => {
    window.addEventListener('keydown',(e) => {
      const key = e.key.toUpperCase()
      const validKeys = ['Q','W','E','A','S','D','Z','X','C']
      if(validKeys.includes(key)) {
        setDisplay(key)
        const sound = document.getElementById(key) as HTMLAudioElement
        sound.play()
      }
    })
  },[])

  return (
    <div id="drum-machine">
      <DrumKeys
        setDisplay={setDisplay}
        volume={volume}
      />
      <Controls
        display={display}
        setDisplay={setDisplay}
        setVolume={setVolume}
      />
    </div>
  )
}

export default App
