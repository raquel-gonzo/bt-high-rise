import "./App.css";
import Car from "./components/Car";
import HighRise from "./components/HighRise";

function App() {
  // declare the high-rise building using an array containing a number to represent each floor.
  const floors = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1];

  return (
    <div className="App">
      <HighRise floors={floors} />
      <Car bgColor="blue" />
      <Car bgColor="red" />
      <Car bgColor="yellow" />
    </div>
  );
}

export default App;
