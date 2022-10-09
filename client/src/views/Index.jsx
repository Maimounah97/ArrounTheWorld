import React, { useState ,useEffect } from 'react'
// import Form from '../components/Form'
import { useHistory } from 'react-router'
import axios from 'axios';
import { Link } from "react-router-dom";
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Index = (props) => {

    // const {id} = useParams();
    const history = useHistory();
    const [active, setActive] = useState(); 
    
    
return (
    <>
    {/* <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
  <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div> */}


        <LoginForm/>
    
    </>
)
}







export default Index