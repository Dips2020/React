//=====
//=====
// Difference between useState and useRef hook
//=====
//=====
// //! useState
// import { useState } from "react";
// const CounterRender = () => {
//   let [count, setCount] = useState(0);

//   //*=======
//   //*=======
//   //? in useState for this small work case whole component is rendering again and again after clicking button
//   //? to prevent this using useRef is better choice.
//   console.log("Rendered...");
//   //*=======
//   //*=======
//   return (
//     <div>
//       {count} <br />
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// };
// export default CounterRender;

//=====
//=====
//=====
//! useRef
import { useRef } from "react";
const CounterRender = () => {
  let count = 0;
  let countRef = useRef(null);
  //*=======
  //*=======
  //? so now this is rendered only once at the beginning while clicking button
  console.log("Rendered...");
  //*=======
  //*=======
  return (
    <div>
      <b ref={countRef}>0</b>
      <br />
      <button
        onClick={() => {
          count++;
          countRef.current.innerHTML = count;
        }}
      >
        +
      </button>
    </div>
  );
};
export default CounterRender;
