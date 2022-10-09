import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import backk from '../assets/backk.jpg';
import "../views/Home.css";
import LoginNav from '../components/LoginNav'

const linkStyle = {
  justifyContent: "end",
  display: "flex",
  margin: "20px",
};


const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new product
    axios
      .post("http://localhost:8000/api/signup", {
        name,
        email,
        password,
        confirmPassword,
        role

      })
      .then((res) => {
        console.log(res);
        // setRole("admin")
        console.log(res.data.role)

        history.push("/")
   
      })
      .catch((err) => {
        const data = err.response.data;
        console.log(data);
        const errorMessages = [];
        if ("errors" in data) {
          for (let field in data.errors) {
            const validationError = data.errors[field];
            errorMessages.push(validationError.message);
          }
        }
        setErrors(errorMessages);
      });
  };

  return (
    
    <div >
      <LoginNav/>
      <img className="imageBack" src={backk} alt="" />
      {/* <Link to={"/"} style={linkStyle}>
        back to home
      </Link> */}
      {errors.map((errorMessage, index) => (
        <ul key={index} >
          Error:
          <li>{errorMessage}</li>
        </ul>
      ))}
      <form onSubmit={onSubmitHandler} >
      <div className='container pt-5 col-4 '>
        <div  className='login-border text-start text-light mt-5'>
        <h3 className="text-center text-warning" >Register Form</h3>
        <div className="row">
          <div className="col ">
            <p>
              Name:
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="form-control"
              />
            </p>
            <p>
              Email:
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
              />
            </p>
            <p>
              Password:
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control"
              />
            </p>
          </div>
          <div>
            <div>
              <label>Confirm Password:</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type="password"
                className="form-control"
              />
            </div>
            {/* <div> */}
              {/* <label>Role:</label> */}
              {/* <input
                onChange={(e) => setRole("admin")}
                value={role}
                type="hidden"
                className="form-control"
              />
            </div> */}
          </div>
        </div>
        <button type="submit"
        className="btn btn-light rounded-pill mt-3">
          Sign Up 
        </button>
        <p className="text-light text-center">you already have account? <Link to={"/index"} className="text-warning" >
        Login </Link></p>
        </div>
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
