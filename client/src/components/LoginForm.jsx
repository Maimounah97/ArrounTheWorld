import React, { useState } from "react";
import axios from "axios";

import { Link, useHistory } from "react-router-dom";
import backk from '../assets/backk.jpg';
import "../views/Home.css";
import jwt_decode from "jwt-decode";
import LoginNav from '../components/LoginNav'


const linkStyle = {
  justifyContent: "end",
  display: "flex",
  margin: "20px",
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  // const [dark, setDark] = useState(dark);
  const history = useHistory();

  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new product
    axios
      .post("http://localhost:8000/api/login", {
        email,
        password,

      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token",res.data.userToken)
        var decoded = jwt_decode(res.data.userToken);
        localStorage.setItem("userId", decoded.userId)


        history.push("/");
      })
      .catch((err) => {
        const data = err.response.data;
        console.log("Errroooorrrr")
        console.log(data);
        setErrors(data)

        
        // if (err){
        //     return (
        //       <div className={myStyles.container}>
        //         <ul className={myStyles.err}>
        //           Error:
        //           <li> Your Email or Password wrong</li>
        //         </ul>
        //       </div>
        //     );
        // }
        const errorMessages = [];
        // if ("errors" in data) {
        //   for (let field in data.errors) {
        //     const validationError = data.errors[field];
        //     errorMessages.push(validationError.message);
        //   }
        // }
        // setErrors(errorMessages);
      });
  };

  return (
    <div>
    <LoginNav/>

    <img className="imageBack" src={backk} alt="" />
    <div className="loginForm">
    <div className="mt-5">
    <div className="text-start">



    <form onSubmit={onSubmitHandler} >
    <div className='container pt-5 col-4 '>
        <div  className='login-border'>
        <h3 className="text-center text-warning" >Login Form</h3>
        { (errors == "Bad Request") ? (<div class="alert alert-warning container" role="alert">
                  
                  Your Email or Password wrong
              </div> ) : " "
        }
        <div className="row">
            <div className="col">
                <p className="text-light">
                    Email:
                    
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="form-control"
                    />
                </p>
                <p className="text-light">
                    Password:
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="form-control"
                    />
                </p>
            </div>

        </div>
        <button type="submit"
        className="btn btn-light rounded-pill" >
            Login
        </button>
        <p className="text-light text-center">you don't have account? <Link to={"/register"} className="text-warning" >
        Register </Link></p>
        </div>
    </div>
    </form>
    </div>
    </div>
    </div>
</div>
  );
};
export default LoginForm;
