//
import { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";

const TodoList = () => {
  // const initialData = JSON.parse(localStorage.getItem("Todo")) || [];
  // const [todoList, setTodoList] = useState([...initialData]);
  // const [todoList, setTodoList] = useState([...initialData]);

  const initialData = JSON.parse(localStorage.getItem("Todo")) || [];
  const defaultData = initialData ? initialData : [];
  const [todoList, setTodoList] = useState([...defaultData]);

  // const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");
  /*
    Format example
    [{
      data: "todo",
      data: "current date",
      isCompleted: "true/false"
    }]
   */
  const addTodo = () => {
    // (...todoList) it will add previous every data to todoList
    const newTodo = [
      ...todoList,
      {
        data: text,
        date: new Date().toLocaleDateString().split(",")[0],
        isCompleted: false,
      },
    ];
    setText(""); // setText("")--> it set to make input field empty after adding todoList
    setTodoList(newTodo);

    localStorage.setItem("Todo", JSON.stringify(newTodo));
  };
  const toggleTodoCompletion = (idx) => {
    const newTodo = todoList.map((todo, index) =>
      index === idx ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodoList(newTodo);

    localStorage.setItem("Todo", JSON.stringify(newTodo));
  };
  const deleteTodo = (idx) => {
    const response = window.confirm("Do you really want to delete?");
    if (response) {
      const newTodo = todoList.filter((_, index) =>
        index === idx ? false : true
      );

      setTodoList(newTodo);
      localStorage.setItem("Todo", JSON.stringify(newTodo));
    }
  };

  return (
    <Container className="mt-3 text-center">
      <h3>TodoList App</h3>
      <Form.Control
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && addTodo()}
      />
      <br />
      <Button onClick={addTodo}>
        <FaPlus />
        <label className="ms-2">Add</label>
      </Button>

      <br />
      <br />

      {todoList.length > 0
        ? todoList.map((todo, index) => {
            return (
              <Row key={index}>
                {/* xs = extra small screen */}
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
