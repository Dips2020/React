//
import { useState, useMemo } from "react";
import Child from "./Child";

const Memoization = () => {
  let [count, setCount] = useState(0);
  const generateRandomNumbers = () => Math.random() * 10;
  console.log("I am useState.");

  //! useMemo
  const randomNumbers = useMemo(() => Math.random() * 10, []);
  return (
    <div>
      <div>
        <b style={{ color: "red" }}>
          This is from useState. It is always rendering once the button is
          clicked.
        </b>
        <br />
        {generateRandomNumbers()}
      </div>
      <div>
        <b style={{ color: "Blue" }}>
          And to stop rendering again and again we use useMemo hook.
        </b>
        <br />
        {/* //! this a variable in useMemo ---- but in useCallback it becomes function {randomNumbers()} */}
        {randomNumbers}
        <br />
        We can see the above numbers are not changing and it is{" "}
        <span style={{ fontWeight: "bold" }}>memoized</span>
      </div>
      <br />
      {count} <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase +
      </button>
      <div>
        <Child />
      </div>
    </div>
  );
};

export default Memoization;
