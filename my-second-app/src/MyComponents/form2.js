import React from 'react';



class Form2 extends React.Component{

	  mystyle = {
	  height : "350px",	
    width : "350px",
    padding : "50px"
    }
	
	state = {
              formData: {}
	        }

	          

    changeForm = (event) => {
      this.state.formData[event.target.name] = event.target.value
      this.setState({...this.state})
    // 	this.setState({
    //                  values:event.target.value
    //                })
     }


    submitForm = (event) => {
    	//alert(`you have submitted  ${this.state.formData.eid}  ${this.state.formData.cnum}  ${this.state.formData.pass}`)
      alert(this.state)
      console.log(this.state)
    }

	render(){

		return(
               <div className="container" style={this.mystyle}>
                  <form onSubmit={this.submitForm}>
                   <label>Email ID</label>
                   <input type="email" value={this.state.formData.eid} name="eid" onChange={this.changeForm}/>
                   <label>Contact number</label>
                   <input type="number" value={this.state.formData.cnum} name="cnum" onChange={this.changeForm}/>
                   <label>Password</label>
                   <input type="password" value={this.state.formData.pass} name="pass" onChange={this.changeForm}/>
                   <input type="submit" value="Save"/>
                  </form>
               </div>
 
			  )
	        }
}


export default Form2;











