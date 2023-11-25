import PropTypes from "prop-types";
import MiniNavbar from "./MiniNavbar";

const NavBar = (props) => {
  return (
    <div>
      {/* Passing message from Navbar to mini navbar */}
      <MiniNavbar message={props.message} />
    </div>
  );
};

NavBar.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NavBar;
