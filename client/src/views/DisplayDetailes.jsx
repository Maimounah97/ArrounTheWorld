import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";
import './DisplayDetailes.css';
import moment from 'moment';
import map from '../assets/map.jpg';
import mapIcom from '../assets/mapIcom.png';
import dateIcon from '../assets/dateIcon2.png';
import stationIcon from '../assets/loc3d.webp';
import membersIcon from '../assets/membersIcon.webp';
import moneyIcon from '../assets/moneyIcon.png';


const linkStyle = {
  justifyContent: "end",
  display: "flex",
  margin: "20px",
};

const DisplayDetailes = (props) => {
  const [tour, setTour] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({});  
  const [numberOfUser, setNumberOfUser] = useState(0);
  const[flag,setFlag]=useState(false)  
  const userId = localStorage.getItem("userId")
  const [paymentFlag, setPaymentFlag] = useState(false); 

  const logoutHandler = () =>{
    localStorage.removeItem("userId");
    history.push("/login")
}
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tour/" + id)
      .then((res) => {
        console.log(res)
        setTour(res.data)
        setNumberOfUser(res.data.members.length)
        setFlag(!flag)
      })
      .catch((err) => console.error(err));

      //----------userInfo----------
      axios
      .get("http://localhost:8000/api/user/" + userId)
      .then((res) => {
          setUser(res.data)
          console.log(res.data)
          
    })
      .catch((err) => console.error(err));
     
  }, [flag]);

    const handle = (user_id , userName)=> {

      const newMembers = tour.members;
      console.log(newMembers)
      newMembers.push({user_id,userName})
      setTour({...tour, members: newMembers})
    //   tour.members.push(Oneuser._id)
      console.log("befor " + newMembers)
    //   const n = {...Onetour , newMember : [...newMember, Oneuser] }
    //  console.log(n)
    axios.put('http://localhost:8000/api/tour/' + id, tour)
    .then(res => {
        console.log(res)
        console.log("after " + newMembers)
        setPaymentFlag(true)
        // newMember.push(n)
        // {...Onetour , newMember : [...newMember, Oneuser] }
        
    }) .catch(err => console.log("errorr"))

    // {...tour , members : nameOfUser}

  }

  const station1 = tour.station1;
  const station2 = tour.station2;
  const station3 = tour.station3;
  const station4 = tour.station4;
  const station5 = tour.station5;
  console.log(station1)
  console.log(station2)
  console.log(station3)
  console.log(station4)
  console.log(station5)

  // if (userRole == "user" || userId == null) {
  //   return (
  //     
  //   )
  // }
  return (

    //   <div className="mt-5">
    //     <div className="row mt-5">
    //       {/* <div className="secondary"></div> */}
    //         <div className="col">
    //           <img className="formBorderDetailes mb-5" src={tour.image} />
    //           <img className="formBorderDetailes2 me-5" src={tour.image} />
    //         </div>

    //         <div className="col">

    //         <div className="row iconTitleContainer mb-2">
    //           <img src={mapIcom}/>
    //           <h4 >Place: {tour.place}</h4>
    //         </div>

    //         <div className="row mt-5 mb-5">
    //           <div className="col-4"></div>
    //           <div className="col d-flex align-items-center">
    //             <img src={dateIcon} style={{ "width"  : "30px"}}/>
    //             <h6 className="ms-4 text-success"> Start Date: {moment(tour.startDate).format('MM-DD-YYYY')} </h6>
    //           </div>
    //           <div className="col d-flex align-items-center">
    //             <img src={dateIcon} style={{ "width"  : "30px"}}/>
    //             <h6 className="ms-4 text-danger"> End Date: {moment(tour.endDate).format('MM-DD-YYYY')}</h6>
    //           </div>
    //           <div className="col-3"></div>
    //         </div>



    //         <article>Description: {tour.desc}</article>

    //         <h5>Type of tour: {tour.typeOfTour}</h5>
    //         <h5>Price of tour: ${tour.price}</h5>
    //         <h5> Number of members: {numberOfUser}</h5>



    //         <h4 className="mt-5 mb-5">Stations:</h4>

    //         <div className="row mb-5">
    //           <div className="col-1"></div>
    //             <div className="col-2  me-1 bg-secondary bg-opacity-50 rounded-start">
    //                 <img src={stationIcon} style={{ "width"  : "90px"}} />
    //                 <h6>{tour.station1}</h6>
    //             </div>

    //             <div className="col-2 me-1 bg-secondary bg-opacity-50 border-1">
    //                 <img src={stationIcon} style={{ "width"  : "90px"}} />
    //                 <h6>{tour.station2}</h6>
    //             </div>

    //             <div className="col-2 me-1 bg-secondary bg-opacity-50 border-1">
    //                 <img src={stationIcon} style={{ "width"  : "90px"}} />
    //                 <h6>{tour.station3}</h6>
    //             </div>

    //             <div className="col-2 me-1 bg-secondary bg-opacity-50 border-1">
    //                 <img src={stationIcon} style={{ "width"  : "90px"}} />
    //                 <h6>{tour.station4}</h6>
    //             </div>

    //             <div className="col-2 me-1 bg-secondary bg-opacity-50 rounded-end">
    //                 <img src={stationIcon} style={{ "width"  : "90px"}} />
    //                 <h6>{tour.station5}</h6>
    //             </div>

    //               {/* <button className="btn btn-dark" onClick={()=> handle(user._id,user.name)} >Join</button>  */}
    //         </div>

    //     </div>

    //   </div>




    // </div>



    
    <div className="bodyTourDetailesPage">
      
      <div className="tourDetailesPage">
      <img className="img" src={map} />


      <div className="detContent">
        <h1 className="detContentTitles mb-5">{tour.place}</h1>
        {/* <Link style={linkStyle} to="/">
          back to home
        </Link> */}


        <div>
            <img className="formBorderDetailes mb-5 mt-5" src={tour.image} />
            <img className="formBorderDetailes2 me-5 mt-5" src={tour.image} />
            {/* <img className="formBorderDetailes2 me-5" src={tour.image} /> */}
            {/* <img className="formBorderDetailes3" src={tour.image} /> */}
            <div className="row iconTitleContainer mb-2">
              <img src={mapIcom}/>
              <h4 >Place: {tour.place}</h4>
            </div>

            <div className="row mt-5 mb-5">
              <div className="col-4"></div>
              <div className="col d-flex align-items-center">
                <img src={dateIcon} style={{ "width"  : "30px"}}/>
                <h6 className="ms-4 text-success"> Start Date: {moment(tour.startDate).format('MM-DD-YYYY')} </h6>
              </div>
              <div className="col d-flex align-items-center">
                <img src={dateIcon} style={{ "width"  : "30px"}}/>
                <h6 className="ms-4 text-danger"> End Date: {moment(tour.endDate).format('MM-DD-YYYY')}</h6>
              </div>
              <div className="col-3"></div>
            </div>

            <div className="row mt-5 mb-5">
              <div className="col-4"></div>
              <div className="col  d-flex align-items-center"> 
                <img src={moneyIcon}  style={{ "width"  : "55px"}}/>
                <h6 className="ms-4 ">Price of tour: ${tour.price}</h6>
              </div>
              <div className="col d-flex align-items-center">
              <img src={membersIcon} style={{ "width"  : "55px"}}/>
              <h6 className="mt-1"> Number of members: {numberOfUser}</h6>
              </div>
              <div className="col-3"></div>
            </div>

            <div className="row mb-5">
              <div className="col"></div>
              <div className="col">
              <p>Description:</p>
              <article className="mt-1 ">{tour.desc}</article>
              </div>
              <div className="col"></div>
            </div>

            {userId !== null ?
             <button className="btn btn-dark rounded-pill col-2 mb-5" onClick={()=> handle(user._id,user.name)} >Join</button> 
                 : <Link to="/index" className="btn btn-warning col-2">Login to Join </Link>}


                {(paymentFlag)?
                <div>
                  <button className="btn btn-info rounded-pill col-2 mb-5"  onClick={()=> history.push('/payment/'+tour.price)}>Continue To Payment</button> 
                </div>
                : ""}   



            



            <h4 className="mt-5 mb-5">Stations:</h4>

            <div className="row mb-5">
              <div className="col-1"></div>
                <div className="col-2">
                    {station1 !== undefined ?
                    <img src={stationIcon} style={{ "width"  : "200px"}} />
                     : ' ' }
                    <h5>{tour.station1}</h5>
                </div>

                <div className="col-2">
                    {station2 !== undefined ? 
                    <img src={stationIcon} style={{ "width"  : "200px"}} /> 
                    : ' ' }
                    <h5>{tour.station2}</h5>
                </div>

                <div className="col-2">
                    {station3 !== undefined ? 
                    <img src={stationIcon} style={{ "width"  : "200px"}} />
                    : ' ' } 
                    <h5>{tour.station3}</h5>
                </div>

                <div className="col-2">
                    {station4 !== undefined ?  
                    <img src={stationIcon} style={{ "width"  : "200px"}} />
                    : ' ' } 
                    <h5>{tour.station4}</h5>
                </div>

                <div className="col-2">
                    {station5 !== undefined ? 
                    <img src={stationIcon} style={{ "width"  : "200px"}} />
                     : ' ' } 
                    <h5>{tour.station5}</h5>
                </div>
            </div>

            {/* <button  onClick={()=> handle(user._id,user.name)} >Join</button>  */}
        </div>

        {/* <button onClick={()=> logoutHandler()} >
          Logout
        </button>  */}
      </div>



      </div>
    </div>
  );
};


export default DisplayDetailes