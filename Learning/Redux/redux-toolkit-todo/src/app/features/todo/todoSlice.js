import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // reducers -> property: and functions
    addTodo: (state, action) => {
      const todo = {
        // id: Date.now(),
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// exporting individual functionality
export const { addTodo, removeTodo } = todoSlice.actions;

// exporting individual reducers
export default todoSlice.reducer;
