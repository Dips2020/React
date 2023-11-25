// ====
// ====
// ! ⚠️: As return() in function () and render(){} in class is same
// =================================== ❗⬇️Mounting⬇️❗ ===================================
// 1⬇️ Functional way----------------------------------
export default function LifeCycle() {
  // return <b>App Class Component</b>;
}

// 2⬇️ Class way----------------------------------
// ! constructor() is always displayed first in console after render()
// import { Component } from "react";
//// Importing {Component} from "react" and writing Component only in class
// class LifeCycle extends Component {
//   constructor() {
//     super();
//     console.log("First, constructor is called.");
//   }
//   render() {
//     console.log("Second, render is done");
//     return <b>App Class Component</b>;
//   }
// }
// export default LifeCycle;

// 3⬇️ Second method of Class way----------------------------------
// ! first constructor() is called and then render() and finally componentDidMount() is displayed
// import React from "react";
// // Importing React only and writing React.Component in class
// class LifeCycle extends React.Component {
//   componentDidMount() {
//     console.log("Third, component is attached to our DOM");
//   }
//   render() {
//     console.log("Second, render is done");
//     return <b>App Class Component</b>;
//   }
//   constructor() {
//     super();
//     console.log("First, constructor is called.");
//   }
// }
// export default LifeCycle;

// =================================== ❗⬇️Updating⬇️❗ ===================================
// 1⬇️ ----------------------------------
// ! render() of mounting and updating life cycle is same
// import React from "react";
// class LifeCycle extends React.Component {
//   render() {
//     console.log("render is done");
//     return <b>App Class Component</b>;
//   }
//   componentDidUpdate() {
//     console.log("After render");
//   }
// }
// export default LifeCycle;

// =====
// =====
// =====

//! just example about --> useEffect ==========================
// import { useEffect } from "react";
// function LifeCycle() {
//   useEffect(() => {
//     // first--> componentDidMount
//     console.log("Component is mounted");
//     // Example
//     window.addEventListener("");

//     return () => {
//       // second --> clean up --> componentWillUnMount
//       window.removeEventListener();
//       console.log("");
//     };
//   }, []);
//   return <p>App</p>;
// }
// export default LifeCycle;
