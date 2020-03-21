import React from 'react';
import axios from 'axios'
import {getData} from "../actions/apiAction"
import Insert from './insert'
import _ from "lodash"



class Home extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        posts: [],
        insrt : false,
        flag: false
      }
      this.onSave = this.onSave.bind(this)
    }
   

    
    addPost = () =>{
     this.setState({insrt:true})
     } 

  
   componentDidMount(){
     getData('/posts').then((data) => {
       let results = _.concat(JSON.parse(sessionStorage.post1 || "[]"), data.data)
        this.setState({posts:results})
     })
   }

   onSave = (data) => {
    let postsStr = JSON.parse(sessionStorage.getItem('post1') || "[]")
    postsStr.unshift(data)     
    sessionStorage.setItem('post1',JSON.stringify(postsStr))
    let results = _.concat(JSON.parse(sessionStorage.post1 || "[]"), this.state.posts)
    this.setState({posts: results})
   }

	render(){
     //debugger

		const {posts} = this.state

		const newPost = posts.map((value)=>{
               //console.log(value.title)
               return  <tr className="success">
                        <td>{value.userId}</td>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.body}</td>
                       </tr> 
		}) 
      
	return(
		<div>
            <h2>Hi! This is Home Page</h2>
           {this.state.insrt ? <Insert onSave={this.onSave}/> : <button onClick={this.addPost}>Add new post</button>}
            <table className= "table table-hover">
            {newPost}
            </table>

            
		</div>
		  )
}
}

export default Home;