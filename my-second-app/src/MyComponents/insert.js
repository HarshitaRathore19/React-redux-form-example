import React from 'react';




class Insert extends React.Component {


	mystyle = {
	  height : "400px",	
      width : "500px",
      padding : "50px",
      align : "center"
    }


  constructor(props) {
    super(props);
    this.myRef1 = React.createRef()
    this.myRef2 = React.createRef()
    this.myRef3 = React.createRef();
  }

  // componentDidMount() {
  //   this.myRef.current.focus();
  //   console.log(this.myRef.current)
  // }

  submitForm = () => {
  	alert(`You have submitted ${this.myRef1.current.value} ${this.myRef2.current.value} ${this.myRef3.current.value}`)
  	    //console.log(this.myRef.current)

  }
render(){

  return (
  <div className="container" style={this.mystyle}>
     
                   <form onSubmit={this.submitForm}>
                   <label>Employee ID</label>
                   <input type="number" ref={this.myRef1} name="empid"/>
                   <label>Employee Name</label>
                   <input type="text" ref={this.myRef2} name="empname" />
                   <label>Employee Contact number</label>
                   <input type="number" ref={this.myRef3} name="empnum"/>
                   <input type="submit" value="save"/>
                   </form>
                 
  </div>
         )
        }
}

export default Insert
