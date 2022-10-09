import React, { useState } from "react";
// import Form from '../components/Form'
// import { useHistory , useParams} from 'react-router'
// import axios from 'axios';
import { Link } from "react-router-dom";

const Form = (props) => {
  // const[errors , setErrors] = useState([])
  const [success, setSuccess] = useState(false);

  const [place, setPlace] = useState(props.initPlace);
  const [desc, setDesc] = useState(props.initDesc);
  const [image, setImage] = useState(props.initImage);
  const [startDate, setStartDate] = useState(props.initStartDate);
  const [endDate, setEndDate] = useState(props.initEndDate);
  const [price, setPrice] = useState(props.initPrice);
  const [typeOfTour, setTypeOfTour] = useState(props.initTypeOfTour);
  const types = ["Desert", "Oceans", "Forests", "Snow", "Heights"];

  const [station1, setStation1] = useState(props.initStation1);
  const [station2, setStation2] = useState(props.initStation2);
  const [station3, setStation3] = useState(props.initStation3);
  const [station4, setStation4] = useState(props.initStation4);
  const [station5, setStation5] = useState(props.initStation5);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmitHandler({
      place,
      desc,
      image,
      startDate,
      endDate,
      typeOfTour,
      price,
      station1,
      station2,
      station3,
      station4,
      station5,
    });
  };

  return (
    <>
      {props.errors.map((errMsg, i) => (
        <p key={i} className="alert alert-danger">
          {" "}
          {errMsg}{" "}
        </p>
      ))}

      <form onSubmit={onSubmitHandler}>
        <sup className="text-secondary">Tour Information</sup>
        <div className="mt-5">
          <div className="text-start">
            <div className="row">
              <p className="col">
                <label>
                  Place <span className="text-danger">*</span>:
                </label>
                <input
                  name="place"
                  type="text"
                  onChange={(e) => setPlace(e.target.value)}
                  value={place}
                  className="form-control"
                />
              </p>

              <p className="col">
                <label>
                  Type of tour <span className="text-danger">*</span> :
                </label>
                <select
                  onChange={(e) => setTypeOfTour(e.target.value)}
                  value={typeOfTour}
                  className="form-select"
                >
                  <option>Select type</option>
                  {types.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </p>

              <p className="col">
                <label>
                  Image link <span className="text-danger">*</span>:
                </label>
                <input
                  name="name"
                  type="text"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                  className="form-control"
                />
              </p>
            </div>
            <div className="row">
              <p className="col">
                <label>
                  Description <span className="text-danger">*</span> :
                </label>
                <textarea
                  name="name"
                  type="text"
                  onChange={(e) => setDesc(e.target.value)}
                  value={desc}
                  className="form-control"
                />
              </p>
              <p className="col">
                <label>
                  Price of tour<span className="text-danger">*</span>:
                </label>
                <input
                  name="name"
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  className="form-control"
                />
              </p>
            </div>

            <div className="row mt-4">
              <p className="col">
                <label>
                  Start Date <span className="text-danger">*</span>:
                </label>
                <input
                  name="name"
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate}
                  className="form-control"

                />
              </p>

              <p className="col">
                <label>
                  End Date <span className="text-danger">*</span>:
                </label>
                <input
                  name="name"
                  type="date"
                  onChange={(e) => setEndDate(e.target.value)}
                  value={endDate}
                  className="form-control"
                />
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <sup className="text-secondary">Stations (Optional)</sup>

            <p className="col">
              <label>Station 1 :</label>
              <input
                name="name"
                type="text"
                onChange={(e) => setStation1(e.target.value)}
                value={station1}
                className="form-control"
              />
            </p>

            <p className="col">
              <label>Station 2 :</label>
              <input
                name="name"
                type="text"
                onChange={(e) => setStation2(e.target.value)}
                value={station2}
                className="form-control"
              />
            </p>

            <p className="col">
              <label>Station 3 :</label>
              <input
                name="name"
                type="text"
                onChange={(e) => setStation3(e.target.value)}
                value={station3}
                className="form-control"
              />
            </p>

            <p className="col">
              <label>Station 4 :</label>
              <input
                name="name"
                type="text"
                onChange={(e) => setStation4(e.target.value)}
                value={station4}
                className="form-control"
              />
            </p>

            <p className="col">
              <label>Station 5 :</label>
              <input
                name="name"
                type="text"
                onChange={(e) => setStation5(e.target.value)}
                value={station5}
                className="form-control"
              />
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <div className="text-center">
            <input
              type="submit"
              className="btn btn-secondary rounded-pill"
            />
          </div>
          <Link to="/" className="btn btn-outline-secondary rounded-pill ms-2 ">
            {" "}
            Cancel{" "}
          </Link>
        </div>
      </form>
    </>
  );
};

export default Form;
