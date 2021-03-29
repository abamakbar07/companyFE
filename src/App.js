import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/home/dashboard/Dashboard';
import Auth from './pages/landingpage/auth/Auth';
import Login from './pages/landingpage/login/Login'
import Signup from './pages/landingpage/signup/Signup';

function App() {
  return (
    <div className="App">
      <Dashboard />

      {/* <Auth />
      <Login />
      <Signup /> */}

    </div>
  );
}

export default App;
