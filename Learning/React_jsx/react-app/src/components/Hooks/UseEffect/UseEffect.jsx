// **************************************************************************************************
//⬇️1 ----  *****************************************
// import { useEffect } from "react";
// const UseEffect = () => {
//   useEffect(() => {
//     // componentDidMount
//     //add event listener
//     // document title
//     // database/socket connect
//     // network request
//     // graphql subscription

//     // ------------------------------------------
//     // optional -- ('return()=>{}') ⬇️
//     // cleanup function
//     // componentWillUnMount
//     return () => {
//       // remove event listener
//       // database/socket connection close
//       // graphql subscription cancel
//     };
//   }, []);
//   return <div>UseEffect</div>;
// };
// export default UseEffect;

// **************************************************************************************************
//⬇️2 ----  *****************************************
// import { useState } from "react";
// import MyComponent from "./MyComponent";
// const UseEffect = () => {
//   const [toggle, setToggle] = useState(true);
//   return (
//     <div>
//       {/* calling <MyComponent /> from MyComponent.jsx */}
//       {toggle ? <MyComponent /> : null}
//       <button onClick={() => setToggle(!toggle)}>Toggle</button>
//     </div>
//   );
// };
// export default UseEffect;

// **************************************************************************************************
//⬇️3 ---- dependencies *****************************************
// import { useState, useEffect } from "react";
// const UseEffect = () => {
//   const [toggle, setToggle] = useState(true);
//   useEffect(() => {
//     console.log("Component is mounted.");
//     return () => {
//       console.log("Component will un mount");
//     };
//     // []⬇️ -- is dependencies to update
//   }, [toggle]);

//   return (
//     <div>
//       <button onClick={() => setToggle(!toggle)}>Toggle</button>
//     </div>
//   );
// };
// export default UseEffect;

// **************************************************************************************************
//⬇️4 ---- more dependencies *****************************************
// import { useState, useEffect } from "react";
// const UseEffect = () => {
//   const [toggle, setToggle] = useState(true);
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("Component is mounted.");
//     return () => {
//       console.log("Component will un mount");
//     };
//     // []⬇️ -- is dependencies to update
//   }, [toggle, count]);

//   return (
//     <div>
//       {/* {count} */}
//       <button onClick={() => setCount(count + 1)}>Count</button>
//       <button onClick={() => setToggle(!toggle)}>Toggle</button>
//     </div>
//   );
// };
// export default UseEffect;

// **************************************************************************************************
//⬇️5 ---- using fetch library *****************************************
// import { useState, useEffect } from "react";
// const UseEffect = () => {
//   const [toggle, setToggle] = useState(true);
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     // // fetch(`http://numbersapi.com/40`).then((response) => console.log(response));
//     // fetch(`http://numbersapi.com/${count}`).then((response) =>
//     //   response.text().then((data) => console.log(data))
//     // );

//     fetch(`http://numbersapi.com/${count}`).then((response) =>
//       response.text().then((data) => setText(data))
//     );
//   }, [count]);

//   return (
//     <div>
//       {text}
//       <br />
//       <button onClick={() => setCount(count + 1)}>Count</button>
//       <button onClick={() => setToggle(!toggle)}>Toggle</button>
//     </div>
//   );
// };
// export default UseEffect;

// **************************************************************************************************
//⬇️6 ---- using axios library *****************************************
//!  axios library
// import { useState, useEffect } from "react";
// import axios from "axios";
// const UseEffect = () => {
//   const [toggle, setToggle] = useState(true);
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     axios
//       .get(`http://numbersapi.com/${count}`)
//       // .then((response) => console.log(response));
//       .then((response) => setText(response.data));
//   }, [count]);

//   return (
//     <div>
//       {text}
//       <br />
//       <button onClick={() => setCount(count + 1)}>Count</button>
//       <button onClick={() => setToggle(!toggle)}>Toggle</button>
//     </div>
//   );
// };
// export default UseEffect;

// **************************************************************************************************
//⬇️7 ---- *****************************************
