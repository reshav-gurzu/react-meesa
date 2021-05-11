import './App.css';
import Auth from './components/Auth';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Service from './components/Service';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
