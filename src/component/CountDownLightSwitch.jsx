import React, { useState } from 'react'

export default function CountDownLightSwitch() {
    let [timer , setTimmer ] = useState(30)
    let [pro , setPro] = useState(20)
    let cl 
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
        <div className="progress" id="progress" width={pro}>
        <div className='AHP' > </div>
        </div>
        
      </div>
      <div className="timer" id="timerDisplay">{timer}s   </div>
      <div className="btn-group">
        <button id="startButton" onClick={()=>{
             cl = setInterval(()=>{
                setTimmer(timer--)
                if(timer ==-1 ){
                    clearInterval(cl)
                }
            } , 1000)
           
            
            console.log(timer--)
        }}>Start Timer</button>
        <button id="resetButton" onClick={()=>{
            
            setTimmer(30)}}>Reset Timer</button>
      </div>
      <div className="message" id="messageArea"></div>
    </div>
  </div>

  </div>

  
  )
}
