//
// //! this just props drilling -> Header -> Navbar -> MiniNavbar -> and then display data
// import PropTypes from "prop-types";

// MiniNavbar.propTypes = {
//   data: PropTypes.string.isRequired,
// };

// const MiniNavbar = ({ data }) => {
//   return (
//     <div>
//       <button>{data}</button>
//     </div>
//   );
// };

// export default MiniNavbar;

// ======
// ======
// ======
//! ============= now using useContext
import { useContext } from "react";
import { UserContext } from "../UseContext";

const MiniNavbar = () => {
  let sth = useContext(UserContext);
  console.log(sth);
  return (
    <div>
      {/* //! Accessing String */}
      {/* <h1>{sth}</h1> */}

      {/* //! Accessing object  */}
      {/* <b style={{ color: "purple" }}>
        {" "}
        This is from MiniNavbar.jsx <br /> {sth.name} {sth.location}
      </b> */}

      {/* //! Accessing Array */}
      {/* Mapping over the array */}
      {sth.map((data, index) => (
        <div
          key={index}
          style={{
            borderTop: "2px solid orange",
            color: "orange",
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

export default MiniNavbar;
