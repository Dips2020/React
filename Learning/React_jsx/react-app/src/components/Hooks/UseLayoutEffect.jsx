// 1⬇️ ---------------------------------------------------
// // Syntax of useEffect and useLayoutEffect hooks are same
// import { useEffect, useLayoutEffect } from "react";
// const UseLayoutEffect = () => {
//   // ! useLayoutEffect is always executed first (it is a initial stage before printing in DOM)
//   useEffect(() => {
//     console.log("This is useEffect hook.");
//   }, []);
//   useLayoutEffect(() => {
//     console.log("This is useLayoutEffect hook.");
//   }, []);
//   return <div>UseLayoutEffect</div>;
// };

// export default UseLayoutEffect;

// 2⬇️ ---------------------------------------------------
// import { useEffect, useLayoutEffect, useState } from "react";
// const UseLayoutEffect = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("This is useEffect hook.");
//   }, [count]);
//   useLayoutEffect(() => {
//     console.log("This is useLayoutEffect hook.");
//   }, [count]);
//   return (
//     <div>
//       UseLayoutEffect
//       <br />
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// };

// export default UseLayoutEffect;
