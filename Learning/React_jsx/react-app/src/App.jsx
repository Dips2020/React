// import EventHandle from "./components/Basics/EventHandling";
// import LifeCycle from "./components/Basics/LifeCycle";
// import MathRandom from "./components/Basics/MathRandom";
// import Props from "./components/Basics/Props";
// import Header from "./components/Basics/PropsDrilling/Header";
// import UseEffect from "./components/Hooks/UseEffect/UseEffect";
// import UseState from "./components/Hooks/UseState";
// import Rough from "./components/Rough";
// import TodoList from "./components/TodoListApp/TodoList";

function App() {
  return (
    <>
      {/* <Rough /> */}
      {/* <MathRandom /> */}
      {/* <EventHandle /> */}
      {/* <LifeCycle /> */}
      <div>
        {/* //! Props.jsx ⬇️ */}
        {/* ⬇️1 */}
        {/* <Props name="DiPS" nickName="NA" /> */}

        {/* ⬇️2 ---- defaultProps.... not passing hobbies props and setting default props in Props.jsx */}
        {/* <Props name="DiPS" nickName="NA" /> */}

        {/* ⬇️3 ---- passing object in props */}
        {/* <Props info={{ nickName: "DiPS", country: "Nepal" }} /> */}

        {/* ⬇️4 ---- Destructuring */}
        {/* <Props name="DiPS" nickName="NA" /> */}

        {/* ⬇️5 ---- Class Props */}
        {/* <Props name="DiPS" nickName="NA" /> */}

        {/* ⬇️6 ---- Passing Children */}
        {/* <Props>Hello Children</Props> */}

        {/* Props Drilling -- it is in PropsDrilling Folder*/}
        {/* <Header message="Prop Drilling. Hello....." /> */}
      </div>
      {/* <UseState /> */}
      {/* <TodoList /> */}
      {/* <UseEffect /> */}
    </>
  );
}
export default App;
