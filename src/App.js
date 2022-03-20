import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [display, setDisplay] = useState("0");
  const [formula, setFuromula] = useState("");

  const handleDisplay = (dis, form) => {
    setDisplay(dis);
    setFuromula(form);
  };

  return (
    <div className="App">
      <div id="calculator-container">
        <Display display={display} formula={formula} />
        <Buttons onClick={handleDisplay} />
      </div>
    </div>
  );
}

export default App;
