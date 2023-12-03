// **************************************************************************************************
//⬇️2 <-- <MyComponent /> is exported in UseEffect.jsx 2 number ----  *****************************************
import { useEffect } from "react";
const MyComponent = () => {
  useEffect(() => {
    console.log("My component is mounted.");

    return () => {
      console.log("My component will un mount.");
    };
  }, []);
  return <div>MyComponent</div>;
};

export default MyComponent;
