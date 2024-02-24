//
// ========================== ❗❗❗❗❗❗❗===============  basic 1
// import { useReducer } from "react";

// const UseReducer = () => {
//   const reducer = (state, action) => {
//     // console.log(action);

//     // if else
//     // if (action === "increase") {
//     //   //* to access previous value, we use "state".
//     //   //* state always have whole object like {count: 0} from useReducer(reducer, {count: 0}).
//     //   return { count: state.count + 1 }; // returning object
//     // } else if (action === "decrease") {
//     //   return { count: state.count - 1 };
//     // } else if (action === "increaseByTwo") {
//     //   return { count: state.count + 2 };
//     // }

//     // switch case
//     // switch (action) {
//     switch (
//       action.type //! actual process
//     ) {
//       case "increase":
//         console.log(action.extraData); //! actual process and extra data....
//         // console.log(action.extraData.text); //! actual process and extra data....
//         return { count: state.count + 1 };

//       case "decrease":
//         return { count: state.count - 1 };

//       case "increaseByTwo":
//         return { count: state.count + 2 };

//       default:
//         return state;
//     }
//   };
//   //! useReducer(reducer, 0): reducer -> function , 0-> initial value
//   // const [state, dispatch] = useReducer(reducer, 0);
//   const [state, dispatch] = useReducer(reducer, { count: 0 }); //* object as initial value now {count: 0}

//   return (
//     <div>
//       {state.count} <br />{" "}
//       <button
//         onClick={() => {
//           //     setCount(count + 1);
//           //   ? When clicking in button, dispatch function is called and it will trigger reducer (i.e. useReducer(reducer, 0)) and
//           //   * dispatch ko j j value xa, it will access by 'action"  inside reducer function: const reducer = (state, action)=>{}
//           //     dispatch("abc");
//           //   dispatch("increase");
//           //   dispatch({ type: "increase" }); //! actual process
//           //   dispatch({ type: "increase", payloads: { text: "Hello" } }); //! actual process and extra data....
//           dispatch({ type: "increase", extraData: { text: "Hello" } }); //! actual process and extra data....
//         }}
//       >
//         Add +
//       </button>
//       <br />
//       <button
//         onClick={() => {
//           //   dispatch("decrease");
//           dispatch({ type: "decrease" }); //! actual process
//         }}
//       >
//         Subtract -
//       </button>
//       <button
//         onClick={() => {
//           //   dispatch("increaseByTwo");
//           dispatch({ type: "increaseByTwo" }); //! actual process
//         }}
//       >
//         Increase by 2
//       </button>
//     </div>
//   );
// };

// export default UseReducer;

//? ===============
//? ===============
//? ===============
//? ===============

// ========================== ❗❗❗ Splitting Logic part and UI part ❗❗❗==========================
//! UI Part here and importing logic part from ReducersLogicPart.jsx
import { useReducer } from "react";
import { ReducerLogicPart } from "./UseReducer/ReducersLogicPart";
import { ACTION_TYPES } from "./UseReducer/CountActions";
const UseReducer = () => {
  const [state, dispatch] = useReducer(ReducerLogicPart, { count: 0 });

  //! ============
  //! ============
  //! ============ it is split into new file CountActions.jsx and is imported above
  //! Action Types instead of hardcore writing
  // const ACTION_TYPES = {
  //   INCREASE_COUNT: "increase",
  //   DECREASE_COUNT: "decrease",
  //   INCREASE_COUNT_BY_TWO: "increaseByTwo",
  // };

  return (
    <div>
      {state.count} <br />{" "}
      <button
        onClick={() => {
          // dispatch({ type: "increase", extraData: { text: "Hello" } }); //! actual process and extra data....
          //? now using COUNT ACTIONS
          dispatch({
            type: ACTION_TYPES.INCREASE_COUNT,
            extraData: { text: "Hello" },
          }); //! actual process and extra data....
        }}
      >
        Add +
      </button>
      <br />
      <button
        onClick={() => {
          //   dispatch("decrease");
          // dispatch({ type: "decrease" }); //! actual process
          //? now using COUNT ACTIONS
          dispatch({ type: ACTION_TYPES.DECREASE_COUNT }); //! actual process
        }}
      >
        Subtract -
      </button>
      <button
        onClick={() => {
          //   dispatch("increaseByTwo");
          // dispatch({ type: "increaseByTwo" }); //! actual process
          //? now using COUNT ACTIONS
          dispatch({ type: ACTION_TYPES.INCREASE_COUNT_BY_TWO }); //! actual process
        }}
      >
        Increase by 2
      </button>
    </div>
  );
};

export default UseReducer;
