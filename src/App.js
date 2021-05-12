import './App.css';
import Auth from './components/Auth';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Service from './components/Service';
import About from './pages/About';
import Login from './pages/Login';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Service} />
          <Route path="/Login" exact component={Login} />

        </Switch>
        {/* <Service /> */}
      </div>
    </Router>
  );
}

export default App;
