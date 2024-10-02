import spotifyhours from './spotifyhours.svg'; // credit to juicy_fish on Freepik
import './App.css';
import Toolbar from './Toolbar';

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
        <Toolbar/>
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
