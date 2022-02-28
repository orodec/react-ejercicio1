import React, { useState } from "react";
let intervalID;

const Colorsquare = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const [state, setstate] = useState("black");
  const [state2, setstate2] = useState("255px");
 
  let estilo = {
    margin: "20px",
    height: "255px",
    width: `${state2}`,
    backgroundColor: `${state}`,
    transition: "backgroundColor 3000ms ease-in-out, width 3s linear"
  };

  function iris() {
    let r = getRandomInt(0, 256);
    let g = getRandomInt(0, 256);
    let b = getRandomInt(0, 256);
    setstate(`rgb(${r}, ${g}, ${b})`);
  }

  function arrancaIris() {
    iris();
    intervalID = setInterval(iris, 3000);
    setstate2("500px")
  }

  function paraIris() {
    clearInterval(intervalID);
    setstate2("255px")



  }

  return (
    <div
      style={estilo}
      onMouseOver={arrancaIris}
      onDoubleClick={paraIris}
      onMouseLeave={paraIris}
    ></div>
  );
};

export default Colorsquare;
