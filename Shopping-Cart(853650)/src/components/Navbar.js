import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper" style={{backgroundColor:"blue"}}>
                <div className="container">
                    <p className="brand-logo">Shopping</p>
                    
                    <ul className="right">
                        <li><Link  to="/Home">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;