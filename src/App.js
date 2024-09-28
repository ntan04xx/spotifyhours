import spotifyhours from './spotifyhours.svg'; // credit to juicy_fish on Freepik
//import {Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-toolbar">
          <h4 class="alignLeft"> HOW TO USE </h4>
          <h4 class="alignRight"> HOME </h4>
        </div>

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
        </div>
      </header>
    </div>
  );
}

export default App;
