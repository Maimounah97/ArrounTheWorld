import React , { useState, useEffect }from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import ForestImg from '../assets/f3.jpg'
import './Category.css';
import Card from '../components/Card'
import LoginNav from '../components/LoginNav'
import forest from '../assets/forestsMain.jpeg';
import moment from 'moment';


const Category = ({backGround, bgColor , bgContrast, sectionTitle ,propsType}) => {
    const [tours, setTours] = useState([]);
    const [detailes, tourDetailes] = useState(false);
    const [oneTour, setOneTour] = useState({});

    
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tours")
      .then((res) => {
        console.log(res);
        setTours(res.data.tours);
        console.log(propsType)
        // setMembers(res.data.tours.members[0])
      })
      .catch((err) => console.error(err));
  }, []);


  async function fetchOneTour(toirId) {

    let res = await axios('http://localhost:8000/api/tour/'+ toirId)
    setOneTour(res.data)
    console.log(res.data)
    tourDetailes(true)

}




  return (
    <>
        <LoginNav />
        {/* <div className={dark ? "main" : "secondary" }> */}
        <div className={bgColor}>

            <div className={bgContrast}>
                <img src={backGround}  />
                <h1 className='sectionTitle'>{sectionTitle}</h1>
            </div>

            <h6>All the Tours</h6>          

            <div className='cards-container'>
                <div className='wrapper' style={{flexWrap : "wrap"}}>
                {/* ["Desert", "Oceans", "Forests", "Snow", "Heights"]; */}
                {tours.filter((tour,index) => tour.typeOfTour == propsType).map((tour, i) => (
                    <div key={i} className='cssCard mb-5'>
                        <img src={tour.image} />
                        <div className='info'>
                            <h4>{tour.place}</h4>
                            {/* <p>qwkdmowd</p> */}
                            <button onClick={() => fetchOneTour(tour._id)} className='btn btn-outline-secondary'>Read More</button>
                            {/* <Link to=''><button onClick={() => setDetailes(true)} className='btn btn-outline-secondary'>Read More</button>  </Link> */}
                        </div>
                    </div>
            ))}

{/* {'/tour/'+tour._id} */}
                   
                </div>
            </div>

                        {detailes? 
                        <div className='popupDetContainer'>
                          <span onClick={() => tourDetailes(false)} className='exitButton'>&times;</span>
                          <div className='popupCont'>
                            <img src={oneTour.image} />
                            <div className='popupInfo'>
                                <h1 className='mb-5 text-warning'>{oneTour.place}</h1>
                                <p>
                                <p> Start Date: <span className='text-warning'>{moment(oneTour.startDate).format('MM-DD-YYYY')} </span></p>
                                <p> End Date: <span className='text-warning'>{moment(oneTour.endDate).format('MM-DD-YYYY')}</span></p>
                                </p>
                                <Link to={'/tour/'+oneTour._id}><button className='btn btn-warning rounded-pill mt-5'>More Details</button>  </Link>
                                {/* <button className='btn btn-warning rounded-pill mt-5'>Join</button> */}
                            </div>
                          </div>
                        </div>
                          : '' }



                          

        </div>

    </>
  )
}

export default Category