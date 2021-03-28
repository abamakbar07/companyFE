import './App.css';
import Auth from './components/auth/Auth';
import Login from './components/login/Login.js'
import Signup from './components/signup/Signup';

function App() {
  return (
    <div className="App">
      <Auth />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
