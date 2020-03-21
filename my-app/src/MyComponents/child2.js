import React from 'react';


class Child2 extends React.Component {


render(){

  return (
    <div className="App">
      <h1>Address: {this.props.address}</h1>
      <h1>City: {this.props.city}</h1>
      <button onClick = {()=>this.props.changeComp('This is changeComp function')}>Change Comp</button>
      
    </div>
  )
}

}



export default Child2;
