import React, { useState } from 'react';
import './App.css';
//import InputRange from 'react-input-range';

function App() {
  const defaultNum = 127;
  const colorValues = [{red: defaultNum}, {blue: defaultNum}, {green: defaultNum}]
  const [rangeValue, setRangeValue] = useState({red: defaultNum, green: defaultNum, blue: defaultNum});
  // const redValue = 0;
  // const blueValue = 0;
  // const greenValue = 0;

  function onChange(e) {
    const change = {}
    change[e.target.name] = e.target.value
    console.log(rangeValue);
    setRangeValue({...rangeValue, ...change});
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
                name="red"
                onChange={e => onChange(e)}
                className="red"
                type="range"
              />
              red {rangeValue.red}
            </label>
          </div>
          <div>
            <label>
              <input
                min="0"
                max="255"
                onChange={e => onChange(e)}
                className="green"
                name="green"
                type="range"
              />
              green {rangeValue.green}
            </label>
          </div>
          <div>
            <label>
              <input min="0" max="255" className="blue" name="blue" type="range"
              onChange={e => onChange(e)}
               />
              blue {rangeValue.blue}
            </label>
          </div>
        </form>
      </div>
      <div className="box"></div>
    </div>
  );
}

export default App;
