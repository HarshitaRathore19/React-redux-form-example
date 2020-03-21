import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './MyComponents/navbar'
import Home from './MyComponents/home'
import About from './MyComponents/about'
import Contact from './MyComponents/contact'
import Footer from './MyComponents/footer'
import Test from "./MyComponents/Test"
import Signup from "./MyComponents/signup"
import Insert from "./MyComponents/insert"
import Form2 from "./MyComponents/form2"








class App extends React.Component {




render(){

  return (
  <div className="App">

     <Router>
        <Navbar/>
         <Route path="/" exact component={Test(Home)}></Route>
         <Route path="/about" component={Test(About)}></Route>
         <Route path="/contact" component={Test(Contact)}></Route>
         <Route path="/signup" component={Test(Signup)}></Route>
         <Route path="/insert" component={Test(Insert)}></Route>
         <Route path="/form2" component={Test(Form2)}></Route>
     </Router>
     <Footer/>
     
</div>

         )
        }

}







export default App;





