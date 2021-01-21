import React from "react";

const Elevator = ({ id, floors, currentFloor, setCurrentFloor }) => {
  function ascend(e) {
    e.preventDefault();
    if (currentFloor >= 10) {
      window.alert("You're at the top.");
      return;
    }
    return <NumPad floors={floors} />;
    setCurrentFloor(currentFloor + 1);
  }

  function descend(e) {
    e.preventDefault();
    if (currentFloor <= -1) {
      window.alert("You're on the lowest floor.");
      return;
    }
    return <NumPad floors={floors} />;

    setCurrentFloor(currentFloor - 1);
  }

  return (
    <div className="elevator">
      <h1>Elevator {id}</h1>
      <p>current floor: {currentFloor}</p>
      <button onClick={ascend}>Up</button>
      <button onClick={descend}>Down</button>
      <div>
        <label>Jump directly to floor: </label>
        <input type="number" min="-1" max="10"/>
        <button>Jump</button>
      </div>
    </div>
  );
};

export default Elevator;
