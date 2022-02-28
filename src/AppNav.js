import logo from "./logo.svg";
import "./App.css";
import Componentea from "./components/componenteA";
import { Clock, ClockFuntion } from "./components/Reloj";
import Allcycles from "./components/Ciclos";
import Colorsquare from "./components/colorSquare";
import{ BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nohaynada from './components/NoHayNada';
import Login from './components/Login';
import Register from './components/Register';



function AppNav() {
  return (
    <Router>
      <div>
        
      </div>
      <Routes>
        
      <Route path='/' element={ <Login/> }/> 
      <Route path='/login' element={ <Login/> }/> 
      <Route path='/register' element={ <Register/> }/> 



      <Route path='*' element={ <Nohaynada /> }/>
      </Routes>
     

    </Router>
  );
}

export default AppNav;
