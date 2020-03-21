import React from 'react';

class Profile extends React.Component{

    mystyle = {
	  height : "800px",	
      width : "700px",
      padding : "30px",
      borderStyle: "solid",
      borderWidth : "1px",
      borderColor: "lightgrey",
      borderRadius: "10px 10px 10px 10px"
              }

	render(){
		return(
<div>
			<h1>This is profile page</h1>
  <div className="row" style={this.mystyle}>
    <form className="col s12">
      <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate"/>
            <label for="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate"/>
            <label for="last_name">Last Name</label>
          </div>
      </div>
      <div className="row">
          <div className="input-field col s12">
            <input id="number" type="number" className="validate"/>
            <label for="number">Contact number</label>
          </div>
      </div>
      <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate"/>
            <label for="email">Email</label>
          </div>
      </div>
      <div className="row">
          <div className="input-field col s12">
            <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
            <label for="textarea2">Address</label>
          </div>
      </div>
      <div style={{width: "50px"}}>
          <p>
            <label>
            <input className="with-gap" name="group1" type="radio"  />
            <span>Female</span>
            </label>
          </p>
          <p>
            <label>
            <input class="with-gap" name="group1" type="radio"  />
            <span>Male</span>
            </label>
         </p>
      </div>
      
         <div className="input-field col s6">
            <select className="browser-default" id="opt">
              <option value="" disabled selected>Select designation</option>
              <option value="1">Designer</option>
              <option value="2">Developer</option>
              <option value="3">Teamlead</option>
              <option value="3">QA</option>
            </select>
         </div>
         <div className="input-field col s6">
         <input type="date" id="date" className="validate"/>
         <label for="date">Birth date</label>
         </div>
      
    </form>
  </div>
</div>
			)
	}
}

export default Profile;