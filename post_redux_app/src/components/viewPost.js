import React from 'react';
import { connect } from 'react-redux';
import {getPost} from "../actions/postAction"



class View extends React.Component{
	componentDidMount(){
		this.props.viewPosts()
	}
	render(){
		return(
			<div>
             <h3>This is view page</h3>
              <p>{JSON.stringify(this.props.data)}</p>
			</div>
			)
      }
}

function mapStateToProps(state,ownProps){
	debugger
	console.log(state.post.result)
	return {data: state.post.result}
}

export default connect(mapStateToProps,{getPost})(View)






