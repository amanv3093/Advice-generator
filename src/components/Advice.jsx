import { useState, useEffect } from "react";
import AdviceCounter from "./AdviceCounter";

function Advice(props) {
  let [adviceID, setAdviceID] = useState(null);
  let [advice, setAdvice] = useState(null);

  useEffect(() => {
    setAdvice(null);
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((adviceData) => {
        setAdvice(adviceData.slip.advice);
        setAdviceID(adviceData.slip.id);
      })
      .catch((error) => console.log("Error:", error));
  }, [props.count]);

  if (advice === null) {
    return (
      <>
        <div id="loader">Loading...</div>
      </>
    );
  }

  return (
    <>
      <div id="advice">
        <AdviceCounter adviceID={adviceID} />
        <p>&ldquo;{advice}&rdquo;</p>
      </div>
    </>
  );
}

export default Advice;
