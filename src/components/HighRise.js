import React from "react";
import Elevator from "./Elevator";
import Car from "./Car";
// const HighRise = (props) => {
// const { floors } = props;
//}

const HighRise = ({ floors }) => {
  return (
    <div id="high-rise">
      <div id="floor-column">
        {floors.map((floor, index) => {
          return (
            <div key={"floor-"+index} className="floor">
              <p key={index}>
                Floor {floor}
              </p>
              <Car key={'blue-car-' + index} bgColor="blue"/>
              <Car key={'red-car-' + index} bgColor="red" />
              <Car key={'yellow-car-' + index} bgColor="yellow"/>
            </div>
          );
        })}
      </div>

      <div id="elevator-group">
        <Elevator id={1} />
        <Elevator id={2} />
        <Elevator id={3} />
      </div>
    </div>
  );
};

export default HighRise;
