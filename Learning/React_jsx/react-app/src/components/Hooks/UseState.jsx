//
// **************************************************************************************************
//⬇️1 ----  *****************************************
// import { useState } from "react";
// const UseState = () => {
//   // useState(0) = means initialization from 0 (like 'let count = 0')
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       {console.log("Rendered")}
//       {count} <br />
//       <button
//         onClick={() => {
//           setCount(count + 1);
////          console.log(count);
//         }}
//       >
//         Increase
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
////          console.log(count);
//         }}
//       >
//         Decrease
//       </button>
//     </div>
//   );
// };
// export default UseState;

// **************************************************************************************************
//⬇️2 ----  *****************************************
// import { useState } from "react";
// const UseState = () => {
//   // useState(0) = means initialization from 0 (like 'let count = 0')
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       {console.log("Rendered")}
//       {count} <br />
//       <button
//         //*   Increase by double with previous data
//         onClick={() => {
//           setCount((previousValue) => previousValue + 1);
//           setCount((previousValue) => previousValue + 1);
//         }}
//       >
//         Increase
//       </button>
//     </div>
//   );
// };
// export default UseState;

// **************************************************************************************************
//⬇️3 ---- Input Binding *****************************************
// import { useState } from "react";
// const UseState = () => {
//   const [text, setText] = useState("");
//   return (
//     <div>
//       <input type="text" onChange={(e) => setText(e.target.value)} />
//       <br />
//       {text}
//     </div>
//   );
// };
// export default UseState;

// **************************************************************************************************
//⬇️4 ---- Toggle *****************************************
// import { useState } from "react";
// const UseState = () => {
//   const [text, setText] = useState("abc");
//   const [visibility, setVisibility] = useState(true);
//   const handleToggle = () => {
//     if (visibility) {
//       setText("");
//     } else {
//       setText("abc");
//     }
//     setVisibility(!visibility);
//   };
//   return (
//     <div>
//       {text}
//       <br />
//       <button onClick={handleToggle}>Toggle</button>
//     </div>
//   );
// };
// export default UseState;

// **************************************************************************************************
//⬇️5 ---- using state class component---- alternate way *****************************************
// ! example for using state in class component
// import React from "react";
// class UseState extends React.Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//   }
//   render() {
//     return (
//       <>
//         {this.state.count}
//         <br />
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increase
//         </button>
//       </>
//     );
//   }
// }
// export default UseState;

// **************************************************************************************************
//⬇️6 ----  *****************************************

const UseState = () => {
  // return <div>UseState</div>;
};

export default UseState;
// **************************************************************************************************
//⬇️7 ----  *****************************************
