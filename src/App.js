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
  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => (s === 0 ? 0 : s - 1))}>-</button>
        <span>Steps: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCounter((c) => c - step)}>-</button>
        <span>Count: {counter}</span>
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
    </div>
  );
}
export default App;
