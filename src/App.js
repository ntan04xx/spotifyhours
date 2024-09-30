import spotifyhours from './spotifyhours.svg'; // credit to juicy_fish on Freepik
import spotifytile from './spotifytile.svg';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';

function AppToolbar() {
  return (
  <div className="App-toolbar">
  <img src={spotifytile} className="alignLeft" alt="logo" style={{display: 'inline-block', height:'60px', marginTop: '20px'}}/>
  <Router>
    <h4 class="alignLeft"> HOW TO USE </h4>
    <Link to={{}} class="alignRight"> HOME </Link>

    <Routes>
      <Route path="/about" element={<App />}></Route>
    </Routes>
  </Router>
  </div>
  )
}

function LoginForm() {
  return (
    <form>
    <div className='input-username'>
      <label htmlFor='username'>Username: </label>
      <input type='text' id='username' required></input>
    </div>
    <div className='input-password'>
      <label htmlFor='password'>Password: </label>
      <input type='text' id='password' required></input>
    </div>
    <button type='submit' className='submit-btn'>
      Check Now!
    </button>
    </form>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppToolbar/>
        <div style = {{display: 'inline-block', marginTop:'50px'}}>
          <h1 style={{display: 'inline-block'}}>SPOTIFY CHECKER</h1>
          <img src={spotifyhours} className="App-logo" alt="logo" style={{display: 'inline-block', height:'100px', marginLeft:'30px'}}/>
        </div>
        <p>
          Tired of waiting until December for your Wrapped? Find out your most watched songs here first.
        </p>
      
        <div className = "App-signin">
          <p>
            Login in to your account to see now!
          </p>
          <LoginForm/>
        </div>
      </header>
    </div>
  );
}

export default App;
