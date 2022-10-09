import React, { useState ,useEffect } from 'react'
// import Form from '../components/Form'
import { useHistory } from 'react-router'
import axios from 'axios';
import { Link } from "react-router-dom";
import Form from '../components/Form';


const CreateTour = (props) => {

    // const {id} = useParams();
    const history = useHistory();
    const[errors , setErrors] = useState([])
    const[success , setSuccess] = useState(false)
    const userId = localStorage.getItem("userId")
    const [user, setUser] = useState({});  
    const [userRole, setUserRole] = useState(); 
    
    useEffect(() => {
          //----------userInfo----------
          axios
          .get("http://localhost:8000/api/user/" + userId)
          .then((res) => {
              setUser(res.data)
              console.log( res.data.role)
              setUserRole(res.data.role)
        })
          .catch((err) => console.error(err));
         
      }, []);


    const onSubmitHandler = (tour) => {
        setSuccess(false)
        setErrors([])
        axios.post('http://localhost:8000/api/tour/new', tour)
            .then(res=>{
                console.log(res)
                setSuccess(true)
                // history.push("/")
            })
            .catch(err=>{
                console.log(err)
                const data = err.response.data
                const errorMessages = [];
                if("errors" in data){
                    for(let field in data.errors){
                        const validationError = data.errors[field]
                        errorMessages.push(validationError.message)
                    }
                }
                setErrors(errorMessages)
            })
    }



return (
    <><div className='adminBg'>
    <div className='container pt-5 col-7 '>
        <div  className='form-border'>
            {(userRole == "admin")?
            <div className='container mt-5'>
            
            {success && <p  className='alert alert-success'>Tour has been successafully Add</p>}

            <div className='d-flex justify-content-between mt-3'>
            <div className='text-secondary'><h5>Add Tour</h5></div>
            <div onClick={() => {history.goBack()}} className="btn btn-outline-secondary rounded-pill ms-2 ">Back to Dashboard</div>
            </div>
            <Form onSubmitHandler ={onSubmitHandler} errors={errors} />
            </div>
            :
            <div> For authorized users only
                    <div><Link to="/" className="btn btn-outline-secondary rounded-pill ms-2 ">Back to HOME</Link></div>
            </div>
}
        </div>
    </div>
    </div>
    </>
)
}







export default CreateTour