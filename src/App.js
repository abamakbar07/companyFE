import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ModalContextProvider } from './components/context/ModalContext';
import { PrivateRoute } from './components/routes/PrivateRoute';

import LandingPage from './pages/landingpage/LandingPage';

function App() {
  return (
    <ModalContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            {/* <PrivateRoute /> */}
          </Switch>
        </div>
      </Router>
    </ModalContextProvider>
  );
}

export default App;
