import React, { useState } from 'react'

export default function CountDownLightSwitch() {
    let [timer , setTimmer ] = useState(30)
    function ChangeHandle(){
       
    }


  return (

<div class="container">
    {/* <!-- Header with Title and Theme Toggle --> */}
    <div>
    <div className="header">
      <h1>Countdown & Light Switch</h1>
      <div className="toggle-container">
        <label className="toggle-switch"> 
          <input type="checkbox" id="themeToggle" />
          <span className="slider"></span>
        </label>
        <span>Light Mode</span>
      </div>
    </div>
    <div className="timer-section">
      <div className="progress-bar">
        <div className="progress" id="progress"></div>
        
      </div>
      <div className="timer" id="timerDisplay">{timer}s   </div>
      <div className="btn-group">
        <button id="startButton" onClick={()=>{
            
        }}>Start Timer</button>
        <button id="resetButton">Reset Timer</button>
      </div>
      <div className="message" id="messageArea"></div>
    </div>
  </div>

  </div>

  
  )
}
