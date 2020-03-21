import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './MyComponents/child1'





 

class App extends React.Component {

  state = {name:'Harshita',
           surname:'Rathore'}

changeProps = () => {
  debugger
  //alert(value)
  this.setState({name:'Ram',
                 surname:'Kumar'})
}



render(){

  return (
    <div className="App">
      <h1>Hi! Welcome to React</h1>
      
      <Child1 name={this.state.name} surname={this.state.surname} changeProps={this.changeProps} />
        
    </div>
  );
}

}


export default App;





