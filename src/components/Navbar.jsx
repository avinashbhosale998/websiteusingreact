import React, { Component } from 'react';
import { Link } from  'react-router-dom';
import './Navbar.css';


class Navbar extends Component{
    render(){
        return(

           <nav className="navbar navbar-expand-lg">
               <div className="container">
           <Link className="navbar-brand" to="/">React Website</Link>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarText">
             <ul className="navbar-nav ml-auto">
               <li className="nav-item active">
                 <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="/about">About</Link>
               </li>
               
             </ul>
        
           </div>
           </div>
         </nav>
            
        );
    }
}


export default Navbar;
