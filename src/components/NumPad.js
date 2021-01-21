import React, { useState } from "react";

const NumPad = ({
  floors,
  currentFloor,
  setCurrentFloor,
  direction,
  setDirection,
}) => {
  const [keypadLock, setKeyPadLock] = useState(true);

  function ascend(e) {
    e.preventDefault();
    setDirection("up");
    // compare the values of each button with currentFloor
    setKeyPadLock(false);
  }

  function descend(e) {
    e.preventDefault();
    setDirection("down");
    console.log(currentFloor);

    // compare the values of each button with currentFloor
    setKeyPadLock(false);
  }

  // checkFloors -> 
  // disable/enable buttons based on currentFloor && direction

  function numClick(e) {
    e.preventDefault();
    setCurrentFloor(parseInt(e.target.value));
    setKeyPadLock(true);
  }

  return (
    <div>
      <div>
        {floors.map((floor, i) => {
          return (
            <button
              className="keypad"
              disabled={keypadLock && floor.disabled}
              key={i}
              value={floor}
              onClick={numClick}
            >
              {floor}
            </button>
          );
        })}
      </div>
      <div>
        <button id="up" name="up" value="up" onClick={ascend}>
          UP
        </button>
        <button id="down" name="down" value="down" onClick={descend}>
          DOWN
        </button>
      </div>
    </div>
  );
};

export default NumPad;
