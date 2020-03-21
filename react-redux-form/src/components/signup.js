import React from 'react';
import { connect } from 'react-redux';
import {formSubmit} from '../actions/demoAction'



class Signup extends React.Component{

    mystyle = {
	    height : "330px",	
      width : "400px",
      padding : "30px",
      borderStyle: "solid",
      borderWidth : "1px",
      borderColor: "lightgrey",
      borderRadius: "10px 10px 10px 10px"
              }

    btnstyle = {
                 borderRadius: "30px 30px 30px 30px",
                 width: "350px",
                 height: "30px",
                 backgroundColor: "black",
                 color: "white"
               }

      state = {
              formData: {}
              } 
          
      changeForm = (event) => {
        this.state.formData[event.target.name] = event.target.value
        this.setState({...this.state})            
      }


      handleSubmit = (event) => {
        event.preventDefault()
        let dd = Object.assign({},this.state.formData)
        this.props.formSubmit(dd)
      }
 

	    render() {
        debugger
		      return(
			    <div>
			    <h1>This is signup page</h1>
		    	<div className="container" style={this.mystyle}>
                 <form className="col s12" onSubmit={(event)=>this.handleSubmit(event)}>
                  <div class="input-field col s6">
                   <input name="name" id="name" type="text" value={this.state.formData.name} onChange={this.changeForm} class="validate"/>
                   <label for="name">Name</label>
                  </div>
                  <div class="input-field col s6">
                   <input name="email" id="email" type="email" value={this.state.formData.email} onChange={this.changeForm} class="validate"/>
                   <label for="email">Eamil  id</label>
                  </div>
                  <div class="input-field col s6">
                   <input name="password" id="password" type="password" value={this.state.formData.password} onChange={this.changeForm} class="validate"/>
                   <label for="password">Password</label>
                  </div>
                  <div class="input-field col s6">
                   <input type="submit" value="save" style={this.btnstyle}/>
                  </div>
                  </form>
            </div>
            <p>{JSON.stringify(this.props.all_data)}</p>
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



export default connect(mapStateToProps,{formSubmit})(Signup)