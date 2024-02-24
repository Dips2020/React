//
// //! this just props drilling -> Header -> Navbar -> MiniNavbar -> and then display data
// import PropTypes from "prop-types";
// import Navbar from "./Navbar";
// Header.propTypes = {
//   data: PropTypes.string.isRequired,
// };
// const Header = (props) => {
//   return (
//     <div>
//       <Navbar data={props.data} />
//     </div>
//   );
// };
// export default Header;

// ======
// ======
// ======
//! ============= now using useContext
import { useContext } from "react";
import { UserContext } from "../UseContext";
import Navbar from "./Navbar";

const Header = () => {
  let sth = useContext(UserContext);
  console.log(sth);
  return (
    <div>
      <Navbar />

      {/* //! Accessing String */}
      {/* <h1>{sth}</h1> */}

      {/* //! Accessing object  */}
      {/* <h4 style={{ color: "blue" }}>
        This is from Header.jsx <br />
        {sth.name} <br /> {sth.age} <br /> {sth.location} <br />
      </h4> */}

      {/* //! Accessing Array */}
      {/* Mapping over the array */}
      {sth.map((data, index) => (
        <div
          key={index}
          style={{
            borderTop: "2px solid blue",
            color: "blue",
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

export default Header;
