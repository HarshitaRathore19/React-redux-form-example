import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Footer extends React.Component{

	render(){
      return(
             <footer class = "page-footer" style={{backgroundColor: "#009999"}}>
         <div class = "row">
            <div class = "col s12 m6 l6">
               <h5 class = "white-text">Footer Content</h5>
            </div>
            
            <div class = "col">
               <ul>
                  <li><a href = "https://www.facebook.com/" class="fa fa-facebook" style={{color: "white"}}>
                     </a></li>
                  <li><a href = "https://twitter.com/" class="fa fa-twitter" style={{color: "white"}}>
                     </a></li>
                  <li><a href = "https://in.linkedin.com/" class="fa fa-linkedin" style={{color: "white"}}>
                     </a></li>
                  <li><a href = "https://www.youtube.com/" class="fa fa-youtube" style={{color: "white"}}>
                     </a></li>
               </ul>
            </div>
         </div>
         
         <div class = "footer-copyright">
            <div class = "container">
               © 2016 Copyright Information
               <a class = "grey-text text-lighten-4 right" href = "#!">Links</a>
            </div>
         </div>         
       </footer>
           )
           }
}


export default Footer;

