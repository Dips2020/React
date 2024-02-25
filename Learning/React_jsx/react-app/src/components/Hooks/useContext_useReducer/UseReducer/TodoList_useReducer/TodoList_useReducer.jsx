// ==========
// ==========
// ==========
//! In MiniProject folder TodoList is created using useState hook.
//! this is todo list app using ------------> useReducer hook.
//========
//========
import { useState, useReducer } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";
//
import TODO_ACTIONS from "./actions/todoActions";
import todoReducer from "./reducers/todoReducers";

const TodoList_useReducer = () => {
  // Fetching initial data from localStorage or setting an empty array
  const initialData = JSON.parse(localStorage.getItem("Todo")) || [];
  const [text, setText] = useState("");

  // // it is imported from actions folder
  // const TODO_ACTIONS = {
  //   ADD_TODO: "ADD_TODO",
  //   TOGGLE_TODO: "TOGGLE_TODO",
  //   DELETE_TODO: "DELETE_TODO",
  // };

  // //! useReducer
  // const reducer = (state, action) => {
  //   let newTodo;
  //   let response;
  //   switch (action.type) {
  //     case TODO_ACTIONS.ADD_TODO:
  //       newTodo = [
  //         ...state,
  //         {
  //           data: text,
  //           date: new Date().toLocaleDateString().split(",")[0],
  //           isCompleted: false,
  //         },
  //       ];
  //       // Clearing the input field
  //       setText("");
  //       // Updating state and saving to localStorage
  //       // setTodoList(newTodo);
  //       localStorage.setItem("Todo", JSON.stringify(newTodo));
  //       return newTodo;

  //     case TODO_ACTIONS.TOGGLE_TODO:
  //       // Updating completion status for the selected todo
  //       newTodo = state.map((todo, index) =>
  //         index === action.payloads.index
  //           ? { ...todo, isCompleted: !todo.isCompleted }
  //           : todo
  //       );
  //       // Updating state and saving to localStorage
  //       localStorage.setItem("Todo", JSON.stringify(newTodo));
  //       return newTodo;

  //     case TODO_ACTIONS.DELETE_TODO:
  //       // Confirming the deletion action with a window prompt
  //       response = window.confirm("Do you really want to delete?");

  //       // If the user confirms, filter out the selected todo
  //       if (response) {
  //         newTodo = state.filter((_, index) =>
  //           index === action.payloads.index ? false : true
  //         );

  //         // Updating state and saving to localStorage
  //         localStorage.setItem("Todo", JSON.stringify(newTodo));
  //         return newTodo;
  //       } else return state;
  //     default:
  //       return state;
  //   } //! end of reducer function
  // };

  const [state, dispatch] = useReducer(todoReducer, initialData);

  // JSX structure for the TodoList component
  return (
    <Container className="mt-3 text-center">
      <h3>TodoList App</h3>

      {/* Input field for adding new todo */}
      <Form.Control
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) =>
          e.key === "Enter" &&
          dispatch({
            type: TODO_ACTIONS.ADD_TODO,
            payloads: { text: text, setText: setText },
          })
        }
      />
      <br />

      {/* Button to add a new todo */}
      <Button
        onClick={() => {
          dispatch({
            type: TODO_ACTIONS.ADD_TODO,
            payloads: { text: text, setText: setText },
          });
        }}
      >
        <FaPlus />
        <label className="ms-2">Add</label>
      </Button>

      <br />
      <br />

      {/* Rendering todo, or displaying a message if there are none */}
      {state.length > 0
        ? state.map((todo, index) => {
            return (
              <Row key={index}>
                {/* Todo item with completion status and date */}
                <Col xs={10}>
                  <Alert
                    key={index}
                    variant={todo.isCompleted ? "danger" : "primary"}
                    className="text-start"
                    style={{
                      cursor: "pointer",
                      textDecoration: todo.isCompleted
                        ? "line-through"
                        : "none",
                    }}
                    onClick={() =>
                      dispatch({
                        type: TODO_ACTIONS.TOGGLE_TODO,
                        payloads: { index: index },
                      })
                    }
                  >
                    <h3>{todo.data}</h3>
                    <br />
                    <small>{todo.date}</small>
                  </Alert>
                </Col>

                {/* Button to delete a todo */}
                <Col className="mt-4">
                  <FaTrash
                    size={40}
                    color="red"
                    onClick={() =>
                      dispatch({
                        type: TODO_ACTIONS.DELETE_TODO,
                        payloads: { index: index },
                      })
                    }
                  />
                </Col>
              </Row>
            );
          })
        : "No Todo"}
    </Container>
  );
};

export default TodoList_useReducer;
