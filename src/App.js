import React, { useState } from 'react';
import './App.css';
import InputRange from 'react-input-range';

function App() {
  const [rangeValue, setRangeValue] = useState({min: 0, max: 255});
  const redValue = 0;
  const blueValue = 0;
  const greenValue = 0;

  function onChange() {
    
  } 

  return (
    <div className="container">
      <div className="form">
        <form>
          <div>
            <label>
              <input
                min="0"
                max="255"
                onChange={e => console.log(e.target.value)}
                className="red"
                type="range"
              />
              red {rangeValue.max}
            </label>
          </div>
          <div>
            <label>
              <input 
              min="0"
              max="255"
              onChange={e => console.log(e.target.value)}
              className="green" 
              type="range" />
              green {0}
            </label>
          </div>
          <div>
            <label>
              <input 
              min="0"
              max="255"
              className="blue"
               type="range" />
              blue {0}
            </label>
          </div>
        </form>
      </div>
      <div className="box"></div>
    </div>
  );
}

export default App;
