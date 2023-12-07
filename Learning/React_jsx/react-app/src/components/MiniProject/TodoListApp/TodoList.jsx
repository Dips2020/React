import { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";

const TodoList = () => {
  // Fetching initial data from localStorage or setting an empty array
  const initialData = JSON.parse(localStorage.getItem("Todo")) || [];
  // Setting up state variables using React Hooks
  const [TodoList, setTodoList] = useState([...initialData]);

  const [text, setText] = useState("");

  // Function to add a new todo item
  const addTodo = () => {
    // Creating a new todo with text, date, and completion status
    const newTodo = [
      ...TodoList,
      {
        data: text,
        date: new Date().toLocaleDateString().split(",")[0],
        isCompleted: false,
      },
    ];

    // Clearing the input field
    setText("");

    // Updating state and saving to localStorage
    setTodoList(newTodo);
    localStorage.setItem("Todo", JSON.stringify(newTodo));
  };

  // Function to toggle the completion status of a todo
  const toggleTodoCompletion = (idx) => {
    // Updating completion status for the selected todo
    const newTodo = TodoList.map((todo, index) =>
      index === idx ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );

    // Updating state and saving to localStorage
    setTodoList(newTodo);
    localStorage.setItem("Todo", JSON.stringify(newTodo));
  };

  // Function to delete a todo item
  const deleteTodo = (idx) => {
    // Confirming the deletion action with a window prompt
    const response = window.confirm("Do you really want to delete?");

    // If the user confirms, filter out the selected todo
    if (response) {
      const newTodo = TodoList.filter((_, index) =>
        index === idx ? false : true
      );

      // Updating state and saving to localStorage
      setTodoList(newTodo);
      localStorage.setItem("Todo", JSON.stringify(newTodo));
    }
  };

  // JSX structure for the TodoList component
  return (
    <Container className="mt-3 text-center">
      <h3>TodoList App</h3>

      {/* Input field for adding new todo */}
      <Form.Control
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && addTodo()}
      />
      <br />

      {/* Button to add a new todo */}
      <Button onClick={addTodo}>
        <FaPlus />
        <label className="ms-2">Add</label>
      </Button>

      <br />
      <br />

      {/* Rendering todo, or displaying a message if there are none */}
      {TodoList.length > 0
        ? TodoList.map((todo, index) => {
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
                    onClick={() => toggleTodoCompletion(index)}
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
                    onClick={() => deleteTodo(index)}
                  />
                </Col>
              </Row>
            );
          })
        : "No Todo"}
    </Container>
  );
};

export default TodoList;
