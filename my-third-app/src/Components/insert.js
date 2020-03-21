import React from 'react'
import axios from 'axios'
import {postData} from "../actions/apiAction"
import _ from "lodash"




class Insert extends React.Component{


      mystyle = {
                 height : "400px", 
                 width : "400px",
                 padding : "20px",
                 borderStyle: "solid",
                 borderWidth : "1px",
                 borderColor: "lightgrey",
                 marginTop: "10px",
                 marginBottom: "10px",
                 backgroundColor: "#cce6ff"
      }

      btnstyle = {
                 borderRadius: "5px 5px 5px 5px",
                 width: "350px",
                 height : "40px",
                 backgroundColor: "#0099ff"

               }



      state= {
      	        formData: []
      }

      changeForm = (event) =>{
      	this.state.formData[event.target.name] = event.target.value
        this.setState({...this.state})
      }

      submitForm = (event) =>{
      	event.preventDefault()
      	const {formData} = this.state
      	alert(`You have posted ${formData.uid} ${formData.id} ${formData.title} ${formData.body}`)
      	const newPosts = {
		       userId: formData.uid,
		       id: formData.id,
		       title: formData.title,
		       body: formData.body
		    }
		  
       postData('/posts',newPosts).then(storedData => {this.props.onSave(storedData.data)})	
      }

	render(){
		const {formData} = this.state
		return(
			<div className="container" style={this.mystyle}>
              <h2>Create post here</h2>
              <form onSubmit={this.submitForm}>
              User id: <input className="form-control mb-4" placeholder="User id" type="number" name="uid" value={formData.uid} onChange={this.changeForm}/>
              Id:      <input className="form-control mb-4" placeholder="Id" type="number" name="id" value={formData.id} onChange={this.changeForm}/>
              Title:   <input className="form-control mb-4" placeholder="Title" type="text" name="title" value={formData.title} onChange={this.changeForm}/>
              Body:    <textarea className="form-control mb-4" placeholder="Body" row="3" col="4" name="body" value={formData.body} onChange={this.changeForm}/><br/>
                       <input type="submit" value="save" style={this.btnstyle}/>
              
              
              </form>
             </div>
			)
	}
}

export default Insert