import logo from "./logo.svg";
import "./App.css";
import Componentea from "./components/componenteA";
import { Clock, ClockFuntion } from "./components/Reloj";
import Allcycles from "./components/Ciclos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Componentea></Componentea>
        {/* <Clock></Clock> */}
        {/* <ClockFuntion></ClockFuntion> */}
        {/* <Allcycles></Allcycles> */}
      </header>
    </div>
  );
}

export default App;
