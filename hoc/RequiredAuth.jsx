import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

const RequiredAuth = ({ children }) => {
  const { token } = useContext(AppContext);
  const navigate = useNavigate();

  if (token === "") {
    navigate("/login");
  }

  return children;
};

export default RequiredAuth;
