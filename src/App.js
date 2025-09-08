import "./App.css";
import { useState } from "react";
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + counter);

  function handleReset() {
    setCounter(0);
    setStep(1);
  }
  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <div>
        <span>Steps: {step}</span>
      </div>
      <div>
        <button onClick={() => setCounter((c) => c - step)}>-</button>
        <input
          type="text"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button onClick={() => setCounter((c) => c + step)}>+</button>
      </div>
      <p>{counter === 0 && `Today is ${date.toDateString()}`}</p>
      <p>
        {counter < 0 &&
          `${Math.abs(counter)} days ago it was ${date.toDateString()}`}
      </p>
      <p>
        {counter > 0 &&
          `In ${counter} days time it will be ${date.toDateString()}`}
      </p>
      {counter !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
export default App;
