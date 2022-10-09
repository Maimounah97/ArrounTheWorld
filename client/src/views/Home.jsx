import React,{useState} from 'react'
import MainVidBg from '../assets/mainbg.mp4'
import Nav from '../components/Nav'
import LoginNav from '../components/LoginNav'
import Cards from '../components/Cards'
import About from '../components/About'
import './Home.css';
import './HomeJS';

const Home = () => {
  const [dark , setDark] = useState(true)


  return (
    <>
    <LoginNav dark={dark} setDark={setDark} />
    {/* <Nav dark={dark} setDark={setDark} /> */}


    <div className={dark ? "body" : "body-secondary"}>
    {/* <button onClick={(e) => {setDark(!dark)}} className={dark ? "moodBtn btn btn-light mt-5 rounded-pill" : "moodBtn btn btn-dark mt-5 rounded-pill"}>{dark ? "Light" : "Dark"}</button> */}
        <div className={dark ? "main" : "secondary" }>
            <video  className='vid'  src={MainVidBg} autoPlay loop muted />
        </div>

        <Cards/>

        <About/>

    </div>
    </>
  )
}

export default Home