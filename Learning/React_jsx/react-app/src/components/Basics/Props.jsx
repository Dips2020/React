/* //!Quick Note: 
importing PropTypes from "prop-types" and then 
example..
'functionName.propTypes ={
    name: PropTypes.string.isRequired, ----(if it is string)
    age: PropTypes.number.isRequired, ----(if it is integer)
    details: PropTypes.object.isRequired, ----(if it is object)
    children: PropTypes.node, (**** if it is children)
}' 
assigning prop validations like 
'string', 'number', and 'object' and  'children'


 */
// **************************************************************************************************
//⬇️1 ---- *****************************************
// import PropTypes from "prop-types";
// const Props = (props) => {
//   //   console.log(props);
//   return (
//     <div>
//       Hello {props.name}
//       <br />
//       Nickname: {props.nickName}
//     </div>
//   );
// };
// // to avoid eslint errors ---- importing PropTypes
// Props.propTypes = {
// //! to avoid eslint errors ---- string is written because the object is in string
//   name: PropTypes.string.isRequired,
//   nickName: PropTypes.string.isRequired,
// };

// export default Props;

// **************************************************************************************************
//⬇️2 ---- defaultProps *****************************************
// import PropTypes from "prop-types";
// const Props = (props) => {
//   return (
//     <div>
//       Hello {props.name} <br /> Nickname: {props.nickName} <br /> Hobbies:{" "}
//       {props.hobbies}
//     </div>
//   );
// };

// // default props
// Props.defaultProps = {
//   hobbies: "Football,Gaming",
// };

// // to avoid eslint errors ---- importing PropTypes
// Props.propTypes = {
//   name: PropTypes.string.isRequired,
//   nickName: PropTypes.string.isRequired,
//   hobbies: PropTypes.string.isRequired,
// };
// export default Props;

// **************************************************************************************************
//⬇️3 ---- passing object in props *****************************************
// import PropTypes from "prop-types";
// const Props = (props) => {
//   console.log(props.info.nickName);
//   return <div>{props.info.country}</div>;
// };

// // to avoid eslint errors ---- importing PropTypes
// Props.propTypes = {
//   //! to avoid eslint errors ---- changed string to object---- because of passing object in props
//   info: PropTypes.object.isRequired,
// };
// export default Props;

// **************************************************************************************************
//⬇️4 ---- Destructuring *****************************************
// import PropTypes from "prop-types";
// // Destructuring
// const Props = ({ name, nickName, hobbies, age }) => {
//   return (
//     <div>
//       Hello {name} <br />
//       Age: {age} <br />
//       Nickname: {nickName} <br /> Hobbies: {hobbies}
//     </div>
//   );
// };
// // default props
// Props.defaultProps = {
//   hobbies: "Gaming, Music",
//   age: 21,
// };

// // to avoid eslint errors ---- changed string to object
// Props.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   nickName: PropTypes.string.isRequired,
//   hobbies: PropTypes.string.isRequired,
// };
// export default Props;

// **************************************************************************************************
//⬇️5 ---- Class props *****************************************
// import React from "react";
// import PropTypes from "prop-types";
// export default class Props extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>{this.props.name}</h1>
//         <h2>{this.props.age}</h2>
//         <h2>{this.props.hobbies}</h2>
//       </>
//     );
//   }
// }
// // default props
// Props.defaultProps = {
//   hobbies: "FootBall, Gaming",
//   age: 21,
// };
// // prop types -- to avoid eslint errors
// Props.propTypes = {
//   name: PropTypes.string.isRequired,
//   hobbies: PropTypes.string.isRequired,
//   //   age: Number,
//   age: PropTypes.number.isRequired,
// };

// **************************************************************************************************
//⬇️6 ---- passing children *****************************************
// import PropTypes from "prop-types";
// const Props = (props) => {
//   console.log(props);
//   return <div>{props.children}</div>;
// };

// Props.propTypes = {
//   children: PropTypes.node,
// };

// export default Props;

// **************************************************************************************************
const Props = () => {
  // return (
  //   <div>Props</div>
  // )
};
export default Props;
