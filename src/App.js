import './App.css';
import Auth from './pages/landingpage/auth/Auth';
import Login from './pages/landingpage/login/Login'
import Signup from './pages/landingpage/signup/Signup';

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
