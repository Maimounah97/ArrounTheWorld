import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import './Cards.css';
import sea from '../assets/seaMain.jpeg';
import des from '../assets/desertMain.webp';
import forest from '../assets/forestsMain.jpeg';
import snow from '../assets/snowMain.jpeg';
import heights from '../assets/heightsMain.jpeg';
import high from '../assets/high.webp';
import AOS from 'aos'
import 'aos/dist/aos.css'


const Cards = () => {


    useEffect(() => {
        AOS.init({duration : 3000})
    },[])



  return (
    <>

    {/* <div className='main-container cardsStyle'>
        <div className="card cardsStyle" style={{'width': '18rem'}}>
            <img src={sea} className="card-img-top cardsStyle"/>
            <div className="card-body"><Link>aaaaaaa</Link></div>
        </div>
    </div> */}


<h3 className='orangeText cards-header text-uppercase' data-aos="zoom-in" style={{"color" : "#ffbc15"}}>Sections</h3>
<div className='cards-container' >
    <div className='wrapper'>

    <Link to='/oceans'>
    <div className='cssCard'  data-aos="zoom-in">
        <img src={sea} />
        <div className='info'>
            <h4>OCEANS</h4>
        </div>
    </div>
    </Link>

    <Link to='/deserts'>
    <div className='cssCard'  data-aos="zoom-in">
        <img src={des} />
        <div className='info'>
            <h4>DESERTS</h4>
        </div>
    </div>
    </Link>

    <Link to='/forests'>
    <div className='cssCard'  data-aos="zoom-in">
        <img src={forest} />
        <div className='info' >
            <h4>FORESTS</h4>
        </div>
    </div>
    </Link>

    <Link to='/snows'>
    <div className='cssCard'  data-aos="zoom-in">
        <img src={snow} />
        <div className='info'>
            <h4>SNOW</h4>
        </div>
    </div>
    </Link>

    <Link to='/heights'>
    <div className='cssCard'  data-aos="zoom-in">
        <img src={high} />
        <div className='info'>
            <h4>HEIGHTS</h4>
        </div>
    </div>
    </Link>

    </div>
</div>

    
        
    </>
  )
}

export default Cards