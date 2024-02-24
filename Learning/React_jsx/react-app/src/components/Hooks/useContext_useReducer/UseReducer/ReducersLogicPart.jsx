// //! logic part ------------
// const ReducerLogicPart = (state, action) => {
//   switch (
//     action.type //! actual process
//   ) {
//     case "increase":
//       console.log(action.extraData); //! actual process and extra data....
//       // console.log(action.extraData.text); //! actual process and extra data....
//       return { count: state.count + 1 };

//     case "decrease":
//       return { count: state.count - 1 };

//     case "increaseByTwo":
//       return { count: state.count + 2 };

//     default:
//       return state;
//   }
// };
// export { ReducerLogicPart };

//!========
//!========
//!========
//! COUNT_ACTIONS part --------- added
import { ACTION_TYPES } from "./CountActions";

const ReducerLogicPart = (state, action) => {
  switch (
    action.type //! actual process
  ) {
    case ACTION_TYPES.INCREASE_COUNT:
      console.log(action.extraData); //! actual process and extra data....
      // console.log(action.extraData.text); //! actual process and extra data....
      return { count: state.count + 1 };

    case ACTION_TYPES.DECREASE_COUNT:
      return { count: state.count - 1 };

    case ACTION_TYPES.INCREASE_COUNT_BY_TWO:
      return { count: state.count + 2 };

    default:
      return state;
  }
};
export { ReducerLogicPart };
