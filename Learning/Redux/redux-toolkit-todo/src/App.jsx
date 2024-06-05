import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-gray-500 p-4 flex justify-center flex-col items-center">
        <h1 className="font-bold text-[20px]">Learn about redux toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
