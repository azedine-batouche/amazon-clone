import './App.css';
import Header from "./parts/header/Header";
import Home from './pages/home/Home';
import Checkout from './pages/checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './style/variables.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
        <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
