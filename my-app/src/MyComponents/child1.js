import React from 'react';
import Child2 from './child2'



 class Child1 extends React.Component{

changeComp(value){
  debugger
  alert(value)
}

  render(){
  return(
  <div>
  <h1>First Name: {this.props.name}</h1>
  <h1>Second Name: {this.props.surname}</h1>
   
  <Child2 address="Vijay Nagar" city="Indore" changeComp={this.changeComp}/>

  <button onClick = {()=>this.props.changeProps()}>Change</button>
  </div>
        )
 }
}



 


export default Child1;







