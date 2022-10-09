import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import deleteIcon from '../assets/deleteIcon.jpeg';
import LoginNav from '../components/LoginNav'
import '../App.css';

const linkStyle = {
  justifyContent: "end",
  display: "flex",
  margin: "20px",
  color: "gray"
};

const AdminDashboard = () => {
  const [tours, setTours] = useState([]);
  const [flag, setFlag] = useState(false);
  const [tourId, setTourId] = useState();
  const [user, setUser] = useState({});
  const id = localStorage.getItem("userId");
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const [userRole, setUserRole] = useState();
  const userId = localStorage.getItem("userId")

  console.log("id is " + id);

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

    axios
      .get("http://localhost:8000/api/tours")
      .then((res) => {
        console.log(res.data.tours);
        setTours(res.data.tours);
        // setMembers(res.data.tours.members[0])
      })
      .catch((err) => console.error(err));
  }, [flag]);



  //not remove the user >> we need remove it from the member only 
  function handleDelete(member, tourId) {
    axios.get("http://localhost:8000/api/tour/" + tourId).then((res) => {
      console.log(res.data)
      const tour = res.data
      console.log("Befor ", tour.members)
      const newMembers = tour.members.filter(m => m.user_id != member.user_id)
      console.log("After ", newMembers)
      tour.members = newMembers

      axios.put("http://localhost:8000/api/tour/" + tourId, tour).then((res) => {
        console.log(res.data)
        setFlag(!flag)

      });

    })



    


  }

  function handleDeleteTour(tourId) {
    axios.delete('http://localhost:8000/api/tour/' + tourId)
      .then(res => {
        removeFromDom(tourId)
      })
      .catch(err => console.error(err));
  }

  const removeFromDom = tourId => {
    setTours(tours.filter(tour => tour._id != tourId))

  }
  if (userRole == "user" || userId == null) {
    return (
      <div>
      <h1>Welcome {user.name}</h1>
      <div> For authorized users only
        <div><Link to="/" className="btn btn-outline-secondary rounded-pill ms-2 ">Back to HOME</Link></div>
      </div>
      </div>
    )
  }


  return (
    <div className="adminBg pt-5">
    <div className="container pt-5">
      {/* <div className="navBg"> */}
        <LoginNav navColor={"navBg"}/>
      {/* </div> */}
      <h2 className="pt-5"> Admin Dashboard</h2>
      <br></br>
      <Link style={linkStyle} to="/addTour"> Add New Tour</Link>
      <div  className="">
      {tours.map((tour, i) => (
        <div className="form-border mt-5" key={i}>
          <div className="row">
           <div className="col">
           <h5 className="">{tour.place}</h5>
             </div> 

          <div className="col">
          <button className="btn btn-danger me-2 rounded-pill" onClick={(event) => handleDeleteTour(tour._id)}>
            Delete
          </button>
          <Link className="btn  btn-outline-dark  me-2 rounded-pill" to={"/tour/"+tour._id+"/edit"} >
        Edit {" "}
      </Link>
            </div> 
      </div>
          <table className="table">
            <thead >
              <tr>
                <td></td>
              </tr>
            </thead>
            <tbody >
              {tour.members.map((member, j) => (
                <tr key={j}>
                  <td className="row">
                    <div className="col-6"> {member.userName} </div>
                   
                    <div className="col-1">
                    <img src={deleteIcon} style={{width: "20px"}} onClick={(event) =>handleDelete(member, tour._id)}/>
                    </div>
                    <div className="col-5"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>



        </div>
      ))}
      </div>


  
    </div>
    </div>

  );
};
export default AdminDashboard;
