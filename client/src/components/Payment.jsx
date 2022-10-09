import React, { useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout'
import {  useHistory } from "react-router-dom";


const Payment = () => {
    const { price }=useParams()
    const history = useHistory();
    const [tour, setTour] = useState({
        place:"react from FB",
        price:"10",
        productby:"FB"
        })
        const makePayment = token =>{
        const body = {
        token,
        tour
        }
        const header = {
        "COntent-Type" : "application/json"
        }
        return fetch(`http://localhost:8000/payment`,{
        method:"POST",
        headers: header,
        body: JSON.stringify(body)
        }).then(response => {
        console.log(response)
        // history.goBack()
        history.push("/");
        })
        .catch(err => console.log(err))
        }
 

  return (
    <div className="container">

<StripeCheckout stripeKey="pk_test_51LgGRWBwp5ChlQ01TVwcieBnpKJZC8iyCofhynWscbVhWz0QPQyXDDF3TcXV3DQwxeoCdJXDfEVX7KygSBrV2KJW002S5RpGXL" token={makePayment} name={"Buy "+price+"$"}/>

</div>
  )
}

export default Payment