import React , { useState, useEffect }from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import forest from '../assets/forestsMain.jpeg';
import AOS from 'aos'
import 'aos/dist/aos.css'



const Card = () => {
  

  return (
    <>
        {/* <h3 className='cards-header' >Sections</h3> */}
       
                    <div className='cssCard mb-5'>
                        <img src={forest} />
                        <div className='info'>
                            <h4>OCEANS</h4>
                            <p>qwkdmowd</p>
                            <Link to='/'><button className='btn btn-outline-success'>Read More</button>  </Link>
                        </div>
                    </div>
               
           
    </>
  )
}

export default Card