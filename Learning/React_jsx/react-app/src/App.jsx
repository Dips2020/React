// import EventHandle from "./components/Basics/EventHandling";
// import LifeCycle from "./components/Basics/LifeCycle";
// import MathRandom from "./components/Basics/MathRandom";
// import Props from "./components/Basics/Props";
// import Header from "./components/Basics/PropsDrilling/Header";
// import UseEffect from "./components/Hooks/UseEffect/UseEffect";
// import UseState from "./components/Hooks/UseState";
// import Rough from "./components/Rough";
// import TodoList from "./components/MiniProject/TodoListApp/TodoList";
// import ImageGallery from "./components/MiniProject/ImageGallery/ImageGallery";
// import UseLayoutEffect from "./components/Hooks/UseLayoutEffect";
// import FormValidation from "./components/MiniProject/FormValidation/FormValidation";
// import FormikFormValidation from "./components/MiniProject/FormValidation/FormikFormValidation";
import ReactRouter from "./components/ReactRouter/ReactRouter";
// import UseContext from "./components/Hooks/useContext_useReducer/UseContext";
// import UseReducer from "./components/Hooks/useContext_useReducer/UseReducer";
// import TodoList_useReducer from "./components/Hooks/useContext_useReducer/UseReducer/TodoList_useReducer/TodoList_useReducer";
// import UseRef from "./components/Hooks/useRef/UseRef";
// import CounterRender from "./components/Hooks/useRef/CounterRender/CounterRender";
// import CrudOperationFirebase from "./components/CRUD_Operation_Firebase/CrudOperationFirebase";
// import Memoization from "./components/Hooks/useCallback_useMemo/useMemo/Memoization";
// import UseCallback from "./components/Hooks/useCallback_useMemo/useCallback/UseCallback";

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
      {/* ------------------------ ⬇️ MiniProjects ⬇️ ------------------------ */}
      {/* <TodoList /> */}
      {/* <ImageGallery /> */}
      {/* <FormValidation /> */}
      {/* <FormikFormValidation /> */}
      {/* ------------------------ ⬇️ Hooks ⬇️ ------------------------ */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseContext /> */}
      {/* <UseReducer /> */}
      {/* <TodoList_useReducer /> */}
      {/* <UseRef /> */}
      {/* <CounterRender /> */}
      {/* <Memoization /> */}
      {/* <UseCallback /> */}
      {/* -------------------------------------------------------------- */}
      {/* ------------------------ ⬇️ Routing ⬇️ ------------------------ */}
      <ReactRouter />
      {/* -------------------------------------------------------------- */}
      {/* ------------------------ ⬇️ CRUD Operation Firebase ⬇️ ------------------------ */}
      {/* <CrudOperationFirebase /> */}

      {/* -------------------------------------------------------------- */}
      {/* ------------------------ ⬇️  ⬇️ ------------------------ */}

      {/* -------------------------------------------------------------- */}
    </>
  );
}
export default App;
