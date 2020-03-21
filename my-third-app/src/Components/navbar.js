import React, { Component } from 'react';
import {Link} from 'react-router-dom';




class Navbar extends React.Component{

	render(){
      return(
             <nav>
               <div className="navbar navbar-inverse">
                 <ul class="nav navbar-nav">
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
                         <Link to="/insert">Add Post</Link>
                     </li>
                     
                 </ul>
                </div> 
            </nav>
           )
           }
}


export default Navbar;