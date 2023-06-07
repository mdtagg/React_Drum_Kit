import "./index.css"
import DrumKeys from "../components/DrumKeys"
import Controls from "../components/Controls"
import { useState, useEffect } from "react"

function App() {

  const [ display, setDisplay ] = useState('')

  useEffect(() => {
    window.addEventListener('keydown',(e) => {
      const key = e.key.toUpperCase()
      setDisplay(key)
      const sound = document.getElementById(key) as HTMLAudioElement
      sound.play()
    })
  },[])

  return (
    <div id="drum-machine">
      <DrumKeys
        setDisplay={setDisplay}
      />
      <Controls
        display={display}
      />
    </div>
  )
}

export default App
