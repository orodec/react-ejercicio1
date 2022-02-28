import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import Tasks from './Tasks';

const Login = () => {

  const [logged, setlogged] = useState(false);

 
  console.log('estas logeado: ' + logged);
  
  const navigate = useNavigate();
  function navigateTo() {
    navigate("/register");
  }

  

  return (
    <div>
      <h1>Login</h1>
      <h2>You are login: {logged ? 'YES': 'NO'}</h2>
      <button onClick={navigateTo}>Register</button>
      <button onClick={()=> logged ? setlogged(false):setlogged(true)}>LogIn/LogOut</button>
      {logged ? <Tasks></Tasks> : null}

    </div>
  );
};

export default Login;
