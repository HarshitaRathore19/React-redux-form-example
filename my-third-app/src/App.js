import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './Components/navbar'
import Home from './Components/home'
import Insert from './Components/insert'




class App extends React.Component {
  render(){
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Route path="/" exact component={Home}></Route>
      <Route path="/insert" component={Insert}></Route>
    </Router>
    </div>
  )
}
}

export default App;
