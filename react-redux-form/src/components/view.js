import React from 'react';
import { connect } from 'react-redux';
import thunk from 'redux-thunk'


class View extends React.Component{
	constructor(props) {
    super();
  }
	render(){
		debugger
		return(
			<div>
			<h1>All user details</h1>
			<p>{JSON.stringify(this.props.all_data)}</p>
			<table>
			</table>
			</div>
			)
	}
}

function mapStateToProps(state, ownProps){
	
  return {
    data: state.demo.result,
    all_data: state.demo.all_data
  }
}

export default connect(mapStateToProps)(View)