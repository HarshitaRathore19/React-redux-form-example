import React from 'react';




class Signup extends React.Component{

	  mystyle = {
	               height : "400px",	
                 width : "400px",
                 padding : "50px",
                 borderStyle: "solid",
                 borderWidth : "1px",
                 borderColor: "lightgrey",
                 marginTop: "50px",
                 marginBottom: "50px"
              }

    btnstyle = {
                 borderRadius: "50px 50px 50px 50px",
                 width: "300px"
               }
   
    lblstyle = {
                 align : "left",
                 textAlign : "left"
               }
               
	
	state = {
                  email : '',
                  number: '',
                  password : '',
                  emailerr: '',
                  numerr: '',
                  passerr: '',
                  sub: ''
	        }

	valid(){
		if(this.state.email.length == 0)
		{
			this.setState({emailerr:"Please filled out email field"})
    }
       else if(this.state.number.length > 10)
    {
      this.setState({numerr:"Contact number should have 10 digits"})
    } 
       else if(this.state.password.length < 8)
    {
      this.setState({passerr:"Password must be at least 8 characters"})
    }
		
    
		else return true
	}             

    changeEmailid = (event) => {
    	this.setState({email:event.target.value})
    }

    changePass = (event) => {
    	this.setState({password:event.target.value})
    }

    changeNum = (event) => {
    	this.setState({number:event.target.value})
    }

    submitForm = (event) => {
      event.preventDefault()
    	if(this.valid())
        this.setState({sub: 'Form submitted succesfuly'})
    	//alert('Form submited successfully')
    }

	render(){

		debugger
		return(
               <div className="container" style={this.mystyle}>
                  <div class="msg msg-info z-depth-3" style={{color: "green"}}>{this.state.sub}</div>
                   <form onSubmit={this.submitForm}>
                   <label>Email ID</label>
                   <input type="email" value={this.state.email} onChange={this.changeEmailid} placeholder="Email ID"/>
                   <div class="msg msg-error z-depth-3 scale-transition" style={{color: "red"}}> {this.state.emailerr} </div>
                   <br/>
                   <label>Contact number</label>
                   <input type="number" value={this.state.number} onChange={this.changeNum} placeholder="
                   Contact number"/>
                   <div class="msg msg-error z-depth-3 scale-transition" style={{color: "red"}}> {this.state.numerr} </div>
                   <br/>
                   <label>Password</label>
                   <input type="password" value={this.state.password} onChange={this.changePass} placeholder="Password"/>
                   <div class="msg msg-error z-depth-3 scale-transition" style={{color: "red"}}> {this.state.passerr} </div>
                   <input type="submit" value="Save" className="btn waves-effect waves-light" style={this.btnstyle}/>
                  </form>
               </div>
 
			  )
	        }
}


export default Signup;
