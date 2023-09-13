import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="text"
        name="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn" onClick={() => setResult(eval(input))}>
        Calculate
      </button>
      <h4>Result is: {result}</h4>

      <div className="calculate-values">
        <div className="first-row">
          <button onClick={() => setInput(input + "1")}>1</button>
          <button onClick={() => setInput(input + "2")}>2</button>
          <button onClick={() => setInput(input + "3")}>3</button>
          <button onClick={() => setInput(input + "4")}>4</button>
          <button onClick={() => setInput(input + "5")}>5</button>
        </div>
        <div className="second-row">
          <button onClick={() => setInput(input + "6")}>6</button>
          <button onClick={() => setInput(input + "7")}>7</button>
          <button onClick={() => setInput(input + "8")}>8</button>
          <button onClick={() => setInput(input + "9")}>9</button>
          <button onClick={() => setInput(input + "0")}>0</button>
        </div>
        <div className="third-row">
          <button onClick={() => setInput(input + "+")}>+</button>
          <button onClick={() => setInput(input + "-")}>-</button>
          <button onClick={() => setInput(input + "*")}>*</button>
          <button onClick={() => setInput(input + "/")}>/</button>
          <button onClick={() => setInput("")}>Clr</button>
        </div>
      </div>
    </div>
  );
}

export default App;
