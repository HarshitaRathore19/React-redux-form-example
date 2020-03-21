import React from 'react';
import { connect } from 'react-redux'


class Insert extends React.Component{

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
        const newPosts = {
           userId: formData.uid,
           id: formData.id,
           title: formData.title,
           body: formData.body
        }
        this.props.formSubmit(newPosts)
      }
 

	    render() {
        debugger
		      return(
			    <div>
			    <h1>This is signup page</h1>
		    	<div className="container" style={this.mystyle}>
                 <form className="col s12" onSubmit={(event)=>this.handleSubmit(event)}>
                  <div class="input-field col s6">
                   <input name="id" id="id" type="number" value={this.state.formData.id} onChange={this.changeForm} class="validate"/>
                   <label for="id">Name</label>
                  </div>
                  <div class="input-field col s6">
                   <input name="userid" id="userid" type="number" value={this.state.formData.userid} onChange={this.changeForm} class="validate"/>
                   <label for="userid">Eamil  id</label>
                  </div>
                  <div class="input-field col s6">
                   <input name="title" id="title" type="text" value={this.state.formData.title} onChange={this.changeForm} class="validate"/>
                   <label for="title">Password</label>
                  </div>
                  <div class="input-field col s6">
                   <input name="body" id="body" type="text" value={this.state.formData.body} onChange={this.changeForm} class="validate"/>
                   <label for="body">Password</label>
                  </div>
                  <div class="input-field col s6">
                   <input type="submit" value="save" style={this.btnstyle}/>
                  </div>
                  </form>
            </div>
          
            </div>
			)
	}
}



export default connect(null,{formSubmit})(Insert)