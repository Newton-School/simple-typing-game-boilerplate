import React, { useState, useEffect, useRef } from "react"

import "./style.css"

function App() {
    return (
        <div className="App">
            <h1>How many words can you type in 30 seconds?</h1>
            <textarea
                data-id='textarea'
               
            />
            <h4 data-id="time-remaining">Time remaining: show the time remaining here </h4>
            <button 
                data-id="button"
              
            >  
                Start
            </button>
            <h1 data-id="word-count">Word count: Show word count here on change </h1>
            <button 
                data-id="end-button"
               
            >  
                End Game
            </button>
        
        </div>
    ) 
}

export default App
