import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import './Nav.css';
import './Contact.css';
import logout from '../assets/logut-bg2.png';

const LoginNav = ({dark,setDark , navColor}) => {
    const [user, setUser] = useState({});
    const history = useHistory();
    const [userRole, setUserRole] = useState();
    // const [userFlag, setUserFlag] = useState(false);

    const userId = localStorage.getItem("userId")


  
  
  
    useEffect(() => {
      //----------userInfo----------
      axios
        .get("http://localhost:8000/api/user/" + userId)
        .then((res) => {
          console.log(res.data.role)
          setUserRole(res.data.role)
          setUser(res.data)
        })
        .catch((err) => console.error(err));

    }, []);

    const logoutHandler = () =>{
        localStorage.removeItem("userId");
        history.push("/")
    }

    if (userRole == "user") {
        return (
            <>

              
            <nav className={navColor} style={{"zIndex" : "9999999000000000000000000000000000"}}>
            <button onClick={(e) => {setDark(!dark)}} className={dark ? "moodBtn btn btn-light rounded-pill" : "moodBtn btn btn-dark rounded-pill"}>{dark ? "Light" : "Dark"}</button>  
                <ul>
                    <li><Link to='/contact'>CONTACT US</Link></li>
                    
                    <li><Link to="/">HOME</Link></li>
                    <li><img src={logout} onClick={logoutHandler} className="logout"/></li>
                </ul>
            </nav>
            
        </>
        )
      }

      if (userRole == "admin") {
        
        return (
            <>
    
                
                <nav className={navColor} style={{"zIndex" : "999999999000000000000000000000000000"}}>  
                <button onClick={(e) => {setDark(!dark)}} className={dark ? "moodBtn btn btn-light rounded-pill" : "moodBtn btn btn-dark rounded-pill"}>{dark ? "Light" : "Dark"}</button>  
                    <ul className="mb-5">
                        <li><Link to='/contact'>CONTACT US</Link></li>
                        <li><Link to="/" className="text-light">HOME</Link></li>
                        <li><Link to="/addTour" className="text-light">ADD TOUR</Link></li>
                        <li><Link to="/adminDashboard" className="text-light">ADMIN DASHBOARD</Link></li>
                        <li><img src={logout} onClick={logoutHandler} className="logout"/></li>
                    </ul>
                </nav>
                
            </>
        )
      }


      if (userId !== null) {
        // setUserFlag(true)
        return (
            <>

            <nav className={navColor} style={{"zIndex" : "9999999000000000000000000000000000"}}>
                <button onClick={(e) => {setDark(!dark)}} className={dark ? "moodBtn btn btn-light rounded-pill" : "moodBtn btn btn-dark rounded-pill"}>{dark ? "Light" : "Dark"}</button>  
                <ul>
                    <li><Link to='/contact'>CONTACT US</Link></li>
                    
                    
                    <li><Link to="/">HOME</Link></li>
                    {/* <li><Link to="/addTour">Add</Link></li> */}
                    <li><img src={logout} onClick={logoutHandler} className="logout"/></li>
                    {/* <li><Link to="/adminDashboard" class="text-warning">ADMIN DASHBOARD</Link></li> */}
                    {/* <li><Link to="/logout" class="text-danger"><img src={''} class="logout"/></Link></li> */}
                </ul>
            </nav>
    
                
                
            </>
        )
      }


      if (userId === null) {
        return (
            <>

            <nav className={navColor} style={{"zIndex" : "9999999900000000000000000000000"}}>
            <button onClick={(e) => {setDark(!dark)}} className={dark ? "moodBtn btn btn-light rounded-pill" : "moodBtn btn btn-dark rounded-pill"}>{dark ? "Light" : "Dark"}</button>  
                <ul>
                    <li><Link to='/contact'>CONTACT US</Link></li>
                    
                    
                    <li><Link to="/">HOME</Link></li>
                    {/* <li><Link to="/addTour">Add</Link></li> */}
                    <li><Link to="/index" className="text-warning">LOGIN</Link></li>
                    {/* <li><Link to="/adminDashboard" class="text-warning">ADMIN DASHBOARD</Link></li> */}
                    <li><Link to="/logout" className="text-danger"><img src={''} className="logout"/></Link></li>
                </ul>
            </nav>
    
                
                
            </>
        )
      }


  

   
}

export default LoginNav