import React from 'react'
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = ({dark,setDark}) => {
    return (
        <>

              
            <nav className="bgcolor">
            <button onClick={(e) => {setDark(!dark)}} className={dark ? "moodBtn btn btn-light rounded-pill" : "moodBtn btn btn-dark rounded-pill"}>{dark ? "Light" : "Dark"}</button>  
                <ul>
                    <li><Link to='/contact'>CONTACT US</Link></li>
                    <li><Link to=''>ABOUT</Link></li>
                    
                    <li><Link to="/">HOME</Link></li>
                    {/* <li><Link to="/addTour">Add</Link></li> */}
                    <li><Link to="/index" class="text-warning">LOGIN</Link></li>
                    {/* <li><Link to="/adminDashboard" class="text-warning">ADMIN DASHBOARD</Link></li> */}
                    <li><Link to="/logout" class="text-danger"><img src={''} class="logout"/></Link></li>
                </ul>
            </nav>
            
        </>
    )
}

export default Nav