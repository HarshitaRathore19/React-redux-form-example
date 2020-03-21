import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {

render(){

  return (
    <div className="App">
        <nav>
             <div class="nav-wrapper" style={{backgroundColor: "#4d0026"}}>
                 <ul>
                     <li>
                         <Link to="/viewPost">View all post</Link>
                     </li>
                     <li>
                         <Link to="/creatPost">Create post</Link>
                     </li>
                 </ul>
              </div> 
        </nav>
    </div>
  );
}

}


export default Navbar;
