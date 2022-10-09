import React, { useEffect } from 'react'
import './About.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import mainLogo from '../assets/mainLogo.png'

const About = () => {

  useEffect(() => {
    AOS.init({duration : 3000})
},[])


  return (
    <>

   <div className='about-container'>
   <h3 data-aos="fade-up" className='orangeText mb-5'>ABOUT US</h3>
    <div className='row mt-5' data-aos="fade-up">
    <div className='col'>
      <img src={mainLogo}  style={{ "width"  : "300px"}}/>
    </div>
    <div className='col'>
      <article className=' text-uppercase mt-5 ts-big'>
      AroundTheWorld is the world’s first Adventure Booking Platform, where you can effortlessly book private, group, and tailor-made multi-day organized adventures TourRadar further revolutionized the industry by introducing the Adventure Booking Platform, connecting travelers, operators, and travel advisors to organized adventures through one platform.
      </article>
    </div>
    </div>
   </div>
    
    </>
  )
}

export default About