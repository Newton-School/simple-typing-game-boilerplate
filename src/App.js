import React, { useState, useEffect, useRef } from "react"
import useGameLogic from "./useGameLogic"
import "./style.css"

function App() {
const [textBoxRef, handleChange,text,timeRemaining,startGame,isTimeRunning,wordCount, endGame] = useGameLogic()    
    return (
        <div className="App">
            <h1>How many words can you type in 30 seconds?</h1>
            <textarea
                data-id='textarea'
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4 data-id="time-remaining">Time remaining: {timeRemaining}</h4>
            <button 
                data-id="button"
                onClick={startGame}
                disabled={isTimeRunning}
            >  
                Start
            </button>
            <h1 data-id="word-count">Word count: {wordCount}</h1>
            <button 
                data-id="end-button"
                onClick={endGame}
                disabled={!isTimeRunning}
            >  
                End Game
            </button>
        
        </div>
    ) 
}

export default App
