import logo from "./logo.svg";
import "./App.css";
import Componentea from "./components/componenteA";
import { Clock, ClockFuntion } from "./components/Reloj";
import Allcycles from "./components/Ciclos";
import Colorsquare from "./components/colorSquare";
import{ BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Fetchexample from './components/FetchExample'
import Axioschuck from './components/AxiosChuck.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Colorsquare></Colorsquare> */}
        {/* <Componentea></Componentea> */}
        {/* <Clock></Clock> */}
        {/* <ClockFuntion></ClockFuntion> */}
        {/* <Allcycles></Allcycles> */}
        {/* <Fetchexample></Fetchexample> */}
        <Axioschuck></Axioschuck>
      </header>
    </div>
  );
}

export default App;
