//
// instead of using anchor <a></a> tag using useNavigate hook to ensure not to refresh page while clicking in the link """
import { useNavigate } from "react-router-dom";
const ContactUs = () => {
  let navigate = useNavigate();
  return (
    <div>
      Contact Us
      <br />
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default ContactUs;
