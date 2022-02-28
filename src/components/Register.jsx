import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  function navigateTo() {
    navigate("/login");
  }
  return (
    <div>
      <h1>Register</h1>
      <button onClick={navigateTo}>Login</button>
    </div>
  );
};

export default Register;
