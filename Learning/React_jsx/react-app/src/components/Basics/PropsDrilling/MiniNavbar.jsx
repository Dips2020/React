import PropTypes from "prop-types";

const MiniNavbar = ({ message }) => {
  return <h2>Message in Mini Navbar: {message}</h2>;
};
MiniNavbar.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MiniNavbar;
