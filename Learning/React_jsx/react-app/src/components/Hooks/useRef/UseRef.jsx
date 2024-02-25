//
import { useRef } from "react";
const UseRef = () => {
  //TODO: step -1 - normal vanilla js
  const doSomething = () => {
    document.getElementById("field").value = "Hello";
    // document.getElementById("data").innerHTML = "Hello 2"; //! innerHTML or innerText
    document.getElementById("data").innerText = "Hello 2";
    document.getElementById("data").style.color = "red";
  };

  // TODO: step - 2 - useRef hook
  let inputRef = useRef(null);
  let divRef = useRef(null);
  const doUseRef = () => {
    // console.log(inputRef); // it prints object {current: input}
    // console.log(inputRef.current); //? it prints the DOM element -> <input type="text">
    inputRef.current.value = "useRef hook";
    //? useRef hook is mutable
    inputRef.current.value = "hello";
    inputRef.current.value = 1;
    inputRef.current.value = 2;

    inputRef.current.style.color = "red";
    inputRef.current.focus();
    inputRef.current.select();

    divRef.current.innerHTML = `<b>Hello there, I am from div section.</b>`;
  };
  //!-------------------------

  return (
    <div>
      {/* //TODO: step -1 - normal vanilla js */}
      <div>
        <h1>Normal Vanilla JS</h1>
        <b id="data"></b>
        <input type="text" id="field" />
        <button
          onClick={() => {
            doSomething();
          }}
        >
          Vanilla JS
        </button>
      </div>
      <br />
      {/* //! -------------------- */}
      {/* //TODO: step -2 - useRef */}
      <div>
        <h1>useRef hook</h1>
        <div ref={divRef}></div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            doUseRef();
          }}
        >
          useRef
        </button>
      </div>
    </div>
  );
};

export default UseRef;
