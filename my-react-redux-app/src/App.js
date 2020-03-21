import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import {increment,decrement} from './actions/demoAction'



 
class App extends React.Component {

   constructor(props) {
    super(props);
  }



render(){

  return (
    <div className="App">
      <h1>Hi! Welcome to React</h1> 
      <div><h1>{this.props.res}</h1></div> 
      <button onClick={()=>this.props.increment()}>+</button> 
      <button onClick={()=>this.props.decrement()}>-</button>     
    </div>
  );
}

}


function mapStateToProps(state, ownProps) {
  //console.log(state.demo.result)
  return {
    res: state.demo.result
  }
}

export default connect(mapStateToProps,{increment,decrement})(App);





