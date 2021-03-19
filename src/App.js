import React, { useEffect } from "react";
import './App.css';
import Header from "./parts/header/Header";
import Home from './pages/home/Home';
import Checkout from './pages/checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './style/variables.css';
import LoginPage from './pages/login/LoginPage';
import { auth } from "./config/firebase";
import { useStateValue } from "./context/StateProvider";



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS ===> ', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
 
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/login">
            <LoginPage/>
          </Route>
        <Route path="/checkout">
        <Header />
            <Checkout/>
          </Route>
          <Route path="/">
          <Header />
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
