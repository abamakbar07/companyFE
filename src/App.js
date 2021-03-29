import './App.css';
import Auth from './pages/auth/Auth';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup';

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
