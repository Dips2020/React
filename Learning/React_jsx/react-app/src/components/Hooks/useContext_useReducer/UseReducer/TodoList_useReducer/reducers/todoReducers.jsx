import TODO_ACTIONS from "../actions/todoActions";
//! useReducer
const todoReducer = (state, action) => {
  let response;
  let newTodo;
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      newTodo = [
        ...state,
        {
          data: action.payloads.text,
          date: new Date().toLocaleDateString().split(",")[0],
          isCompleted: false,
        },
      ];
      // Clearing the input field
      action.payloads.setText("");
      // Updating state and saving to localStorage
      // setTodoList(newTodo);
      localStorage.setItem("Todo", JSON.stringify(newTodo));
      return newTodo;

    case TODO_ACTIONS.TOGGLE_TODO:
      // Updating completion status for the selected todo
      newTodo = state.map((todo, index) =>
        index === action.payloads.index
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      // Updating state and saving to localStorage
      localStorage.setItem("Todo", JSON.stringify(newTodo));
      return newTodo;

    case TODO_ACTIONS.DELETE_TODO:
      response = window.confirm("Do you really want to delete?");
      if (response) {
        newTodo = state.filter((_, index) =>
          index === action.payloads.index ? false : true
        );
        localStorage.setItem("Todo", JSON.stringify(newTodo));
        return newTodo;
      } else {
        // Returning a new array reference representing the same state
        return state;
      }
    default:
      return state;
  } //! end of reducer function
};

export default todoReducer;
