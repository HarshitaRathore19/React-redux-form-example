import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {

render(){

  return (
    <div className="App">
        <nav>
             <div class="nav-wrapper" style={{backgroundColor: "black"}}>
                 <ul>
                     <li>
                         <Link to="/">Home</Link>
                     </li>
                     <li>
                         <Link to="/signup">Signup</Link>
                     </li>
                     <li>
                         <Link to="/view">View details</Link>
                     </li>
                     <li>
                         <Link to="/profile">Create Profile</Link>
                     </li>
                 </ul>
              </div> 
        </nav>
    </div>
  );
}

}


export default Navbar;
