import spotifyhours from './spotifyhours.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spotifyhours} className="App-logo" alt="logo" />
        <p>
          Tired of waiting until December for your Wrapped? Find out your most watched songs here first.
        </p>
        <p>
          Login in to your account to see now!
        </p>
        <form>
          <div className='input-username'>
            <label htmlFor='username'>Username: </label>
            <input type='text' id='username'></input>
          </div>
          <div className='input-password'>
            <label htmlFor='password'>Password: </label>
            <input type='text' id='password'></input>
          </div>
          <button type='submit' className='submit-btn'>
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
