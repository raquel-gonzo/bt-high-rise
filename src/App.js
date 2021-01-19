import './App.css';
import { useState } from "react";
import HighRise from "./components/HighRise";

function App() {

  // declare the high-rise building using an array containing a number to represent each floor.
  const floors = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  

  return (
    <div className="App">
      < HighRise floors={floors} />
    </div>
  );
}

export default App;
