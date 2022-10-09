import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from '../components/Form';



const UpdateTour = (props) => {


    const { id } = useParams();
    const [tour, setTour] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false)
    const [userRole, setUserRole] = useState();
    const userId = localStorage.getItem("userId")
    const [user, setUser] = useState({});


    const history = useHistory()
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/user/" + userId)
        .then((res) => {
          console.log(res.data.role)
          setUserRole(res.data.role)
          setUser(res.data)
        })
        .catch((err) => console.error(err));
        axios.get('http://localhost:8000/api/tour/' + id)
            .then(res => {
                console.log(res.data)
                setTour(res.data);
                setLoading(false);
                setLoaded(true);
            })
            .catch(err => {
                setLoading(false);
                console.error("We have an error");
            })
    }, [])


    const updateTour = tour => {
        axios.put('http://localhost:8000/api/tour/' + id, tour)
            .then(res => {
                console.log(res)
                history.goBack()
            })
            .catch(err => {
                console.log(err)
                const data = err.response.data
                const errorMessages = [];
                if ("errors" in data) {
                    for (let field in data.errors) {
                        const validationError = data.errors[field]
                        errorMessages.push(validationError.message)
                    }
                }
                setErrors(errorMessages)
            })
    }

    //In our return

    if (isLoading) {
        return <div>...Loading</div>;
    }
    if (userRole == "user" || userRole == "") {
        return (
          <div>
          <h1 >Welcome {user.name}</h1>
          <div> For authorized users only
            <div><Link to="/" className="btn btn-outline-secondary rounded-pill ms-2 ">Back to HOME</Link></div>
          </div>
          </div>
        )
      }


    return (
        <div className='adminBg pt-5 pb-5'>
        <div className='container pt-5 col-7 '>
            <div className='form-border'>

                <div className='container mt-5'>

                    {success && <p className='alert alert-success'>Tour has been successafully Add</p>}

                    <div className='d-flex justify-content-between mt-3'>
                        <div className='text-secondary'><h5>Edit Tour</h5></div>
                        <div onClick={() => {history.goBack()}} className="btn btn-outline-secondary rounded-pill ms-2 ">Back to Dashboard</div>
                    </div>
                    <Form onSubmitHandler={updateTour} errors={errors}
                        initPlace={tour.place}
                        initDesc={tour.desc}
                        initImage={tour.image}
                        initStartDate={tour.startDate}
                        initEndDate={tour.endDate}
                        initTypeOfTour={tour.typeOfTour}
                        initPrice={tour.price}
                        initStation1={tour.station1}
                        initStation2={tour.station2}
                        initStation3={tour.station3}
                        initStation4={tour.station4}
                        initStation5={tour.station5}
                    />
                </div>

            </div>
        </div>

        </div>


    )
}


export default UpdateTour;

