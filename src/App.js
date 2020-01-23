import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="form">
        <form>
          <div>
            <label>
              <input
                onChange={e => console.log(e.target.value)}
                className="red"
                type="range"
              />
              red {0}
            </label>
          </div>
          <div>
            <label>
              <input className="green" type="range" />
              green {0}
            </label>
          </div>
          <div>
            <label>
              <input className="blue" type="range" />
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
