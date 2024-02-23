//
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, [navigate]);
  return (
    <div>
      <b>Error, Page not found.</b>
      <br />
      <h2>You will be redirecting to Homepage after 3 seconds...</h2>
    </div>
  );
};

export default PageNotFound;
