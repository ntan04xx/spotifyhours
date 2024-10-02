import './Toolbar.css'
import spotifytile from './spotifytile.svg';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Instruction from './Instruction.js';
import App from './App.js';

function Toolbar() {
    return (
        <div className="Toolbar">
        <img src={spotifytile} className="alignLeft" alt="logo" style={{display: 'inline-block', height:'60px', marginTop: '20px'}}/>
        <Router>
          <Link to="/Instruction" class="alignLeft"> HOW TO USE </Link>
          <Link to="/App" class="alignRight"> HOME </Link>
      
          <Routes>
            <Route path="/Instruction" element={<Instruction />}></Route>
            <Route path="/App" element={<App />}></Route>
          </Routes>
        </Router>
        </div>
    );
}

export default Toolbar;
