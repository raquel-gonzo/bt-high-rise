import React from "react";

const HighRise = (floors) => {
  return (
    <div>
      <div id="floor-column">
        <p id="10">10</p>
        <p id="9">9</p>
        <p id="8">8</p>
        <p id="7">7</p>
        <p id="6">6</p>
        <p id="5">5</p>
        <p id="4">4</p>
        <p id="3">3</p>
        <p id="2">2</p>
        <p id="1">1</p>
        <p id="0">0</p>
        <p id="-1">-1</p>
      </div>
      <div id="elevator-group">
        <div className="elevator-subgroup">
          <h1>Elevator 1</h1>
          <button>Up</button>
          <button>Down</button>
        </div>
        <div className="elevator-subgroup">
          <h1>Elevator 2</h1>
          <button>Up</button>
          <button>Down</button>
        </div>
        <div className="elevator-subgroup">
          <h1>Elevator 3</h1>
          <button>Up</button>
          <button>Down</button>
        </div>
      </div>
    </div>
  );
};

export default HighRise;
