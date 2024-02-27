//
import { memo } from "react";
const Child = () => {
  let message = "I am rendered from child class.";
  console.log("I am rendered from child class");
  return (
    <div>
      <h4>
        <b>{message}</b>
      </h4>
    </div>
  );
};

// memo -> now it is higher order component and taking param as a Child component
export default memo(Child);
