import { useState } from 'react';
import './styles/style.css';
import Advice from './components/Advice';
import iconDice from "./images/icon-dice.svg";

function App() {

  let [count, setCounter] = useState(0);

  const generateRandomAdvice = () => {
    setCounter(prevCount => prevCount + 1);
  }

  return (
    <>
    <div id="adviceGenerator">
      <Advice count={count} />
      <div id="patternDivider"></div>
      <button id="generateAdviceBtn" onClick={generateRandomAdvice}>
          <img src={iconDice} alt="Generate advice" />
      </button>
    </div>
    </>
  )
}

export default App;
