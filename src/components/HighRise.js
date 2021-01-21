import React from "react";
// import Elevator from "./Elevator";
import Car from "./Car";
import NumPad from "./NumPad";

// const HighRise = (props) => {
// const { floors } = props;
//}

const HighRise = ({
  floors,
  currentFloor,
  setCurrentFloor,
  isOnFloor,
  setIsOnFloor,
  direction, 
  setDirection
}) => {
  return (
    <div id="high-rise">
      {/* <div id="floor-column">
        <Car bgColor="blue" />
        {floors.map((floor, index) => {
          return (
            <div key={"floor-" + index} className="floor">
              <p key={index}>Floor {floor}</p>
              {}
            </div>
          );
        })}
      </div> */}

      <div>
        <NumPad
          floors={floors}
          currentFloor={currentFloor}
          setCurrentFloor={setCurrentFloor}
          direction={direction}
          setDirection={setDirection}
        />
      </div>

      {/* <div id="elevator-group">
        <Elevator
          id={1}
          floors={floors}
          currentFloor={currentFloor}
          setCurrentFloor={setCurrentFloor}
        />
      </div> */}
    </div>
  );
};

export default HighRise;
