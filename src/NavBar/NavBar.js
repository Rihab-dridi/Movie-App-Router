import React, {components} from 'react';
import {Link} from 'react-router-dom';
import "./NavBarChild.css";


const NavBarChild =()=>{
 
        return (
          <nav className="navbar">
          <h1 className="noun" >  CINé </h1>

          <ul  className="items">
           
             <a> <li>Home</li></a>
         

           <Link to='/Movies/Add'>
             <a> <li>Movies</li></a>
           </Link>

           <Link to='/Detail-List'>
             <a> <li>Details</li></a>
           </Link>
          </ul>
             
          </nav>
  )

    
}



export default NavBarChild
