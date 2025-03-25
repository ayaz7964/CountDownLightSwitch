import { useState } from 'react'

import './App.css'
import CountDownLightSwitch from './component/CountDownLightSwitch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <CountDownLightSwitch></CountDownLightSwitch>
     </div>
  )
}

export default App
