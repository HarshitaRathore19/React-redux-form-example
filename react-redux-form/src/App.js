import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/navbar'
import Home from './components/home'
import Signup from './components/signup'
import View from './components/view'
import Profile from './components/profile'





class App extends React.Component {

render(){

  return (
    <div className="App">
      <Router>
      <Navbar/>
         <Route path="/" exact component={Home}></Route>
         <Route path="/signup" component={Signup}></Route>
         <Route path="/view" component={View}></Route>
         <Route path="/profile" component={Profile}></Route>
      </Router>
    </div>
  );
}

}


export default App;





