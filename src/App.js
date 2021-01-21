import "./App.css";
import Car from "./components/Car";
import HighRise from "./components/HighRise";
import { useState } from "react";

function App() {
  // declare the high-rise building using an array containing a number to represent each floor.
  const floors = [
    { value: 10, disabled: false }, 
    9, 
    8, 
    7, 
    6, 
    5, 
    4, 
    3, 
    2, 
    1, 
    0, 
    -1
  ];
  const [currentFloor, setCurrentFloor] = useState(0);
  const [isOnFloor, setIsOnFloor] = useState(false);
  const [direction, setDirection] = useState("");

  return (
    <div className="App">
      <HighRise
        floors={floors}
        currentFloor={currentFloor}
        setCurrentFloor={setCurrentFloor}
        isOnFloor={isOnFloor}
        setIsOnFloor={setIsOnFloor}
        direction={direction}
        setDirection={setDirection}
      />
    </div>
  );
}

export default App;
