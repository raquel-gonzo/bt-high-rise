import React from "react";
import Elevator from "./Elevator";
// const HighRise = (props) => {
// const { floors } = props;
//}

const HighRise = ({ floors, foo }) => {
  return (
    <div>
      <div id="floor-column">
        {floors.map((floor, index) => {
          return (
            <p className="floor" key={index}>
              Floor {floor}
            </p>
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
