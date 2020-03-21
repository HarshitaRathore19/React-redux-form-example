import React, { Component } from 'react';
import {Link} from 'react-router-dom';




class Navbar extends React.Component{

	render(){
      return(
             <nav>
               <div class="nav-wrapper" style={{backgroundColor: "#009999"}}>
                 <ul>
                     <li>
                         <Link to="/">Home</Link>
                     </li>
                     <li>
                         <Link to="/about">About Us</Link>
                     </li>
                     <li>
                         <Link to="/contact">Contact Us</Link>
                     </li>
                     <li>
                         <Link to="/signup">Signup</Link>
                     </li>
                     <li>
                         <Link to="/insert">Insert</Link>
                     </li>
                     <li>
                         <Link to="/form2">Form2</Link>
                     </li>
                     
                 </ul>
                </div> 
            </nav>
           )
           }
}


export default Navbar;
