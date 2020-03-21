import React from 'react';


class About extends React.Component {

	state = {arr : [1,2,3,4,5,6]}


	submit = (event) => {
		  debugger
	    let arr = this.state.arr.filter(value => value !== parseInt(event.target.name))
	    this.setState({arr: arr})
         
    }

	render(){
       const {arr} = this.state
	    return(
		       <div>
                  <a style={{fontSize:"50px"}} name = {arr[0]} onClick={this.submit}>{arr[0]}</a>
                  <a style={{fontSize:"50px"}} name = {arr[1]} onClick={this.submit}>{arr[1]}</a>
                  <a style={{fontSize:"50px"}} name = {arr[2]} onClick={this.submit}>{arr[2]}</a>
                  <a style={{fontSize:"50px"}} name = {arr[3]} onClick={this.submit}>{arr[3]}</a>
                  <a style={{fontSize:"50px"}} name = {arr[4]} onClick={this.submit}>{arr[4]}</a>
                  <a style={{fontSize:"50px"}} name = {arr[5]} onClick={this.submit}>{arr[5]}</a>
		       </div>
		      )
        
}
}



export default About;

