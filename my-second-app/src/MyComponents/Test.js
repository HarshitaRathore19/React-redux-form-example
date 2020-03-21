import React, { Component } from 'react';


export default function(Composecomponent){
	class Test extends Component {
		constructor(props){
			super(props)
		}
		componentDidMount(){

		}
	render(){
		
	  return(<Composecomponent {...this.props}/>)
	  }

	}

	return Test
}







