//
// //! this just props drilling -> Header -> Navbar -> MiniNavbar -> and then display data
// import PropTypes from "prop-types";
// import MiniNavbar from "./MiniNavbar";

// Navbar.propTypes = {
//   data: PropTypes.string.isRequired,
// };

// const Navbar = (props) => {
//   return (
//     <div>
//       <MiniNavbar data={props.data} />
//     </div>
//   );
// };

// export default Navbar;

// ======
// ======
// ======
//! ============= now using useContext
import { useContext } from "react";
import MiniNavbar from "./MiniNavbar";
import { UserContext } from "../UseContext";

const Navbar = () => {
  let sth = useContext(UserContext);
  return (
    <div>
      <MiniNavbar />
      {/* //! Accessing String */}
      {/* <h1>{sth}</h1> */}

      {/* //! Accessing object  */}
      {/* <b style={{ color: "red" }}>
        This is from Navbar.jsx
        <br /> {sth.name} <br /> {sth.location}{" "}
      </b> */}

      {/* //! Accessing Array */}
      {/* Mapping over the array*/}
      {sth.map((data, index) => (
        <div
          key={index}
          style={{
            borderTop: "2px solid green",
            color: "green",
          }}
        >
          <h1>Name: {data.name}</h1>
          <p>Age: {data.age}</p>
          <p>Location: {data.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
