import React ,{useState } from "react";
import Head from "next/head";
import Image1 from "../../assets/icons/arrow.png";
import rent from "../../assets/icons/rent.png";
import Image2 from "../../assets/icons/1.png";
import Image from "next/image";
import Image3 from '../../assets/icons/2.png'
import Styles from "../../styles/propertystyles/property.module.css";
import Navbar from "../../pages/auth/navbar";
import {useFormik} from "formik"
import * as Yup from "yup"
import {useRouter} from "next/router"
import Dropdown from 'react-bootstrap/Dropdown'
import { Stepper,StepLabel,Step } from '@material-ui/core';
const Auth = () => {
  const router=useRouter()
  const [value1, setValue1] = useState('2')
  const formik = useFormik({
    initialValues: {
      Number:"",
    },

    validationSchema: Yup.object({
  
      Number: Yup.string().required("!required"),
    }),
    onSubmit: (values) => {
      console.log(values);
        router.replace("/auth/register")
    },
  });
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
<Navbar/>
<form onSubmit={formik.handleSubmit}>
      <div className={`d-flex justify-content-center ${Styles.body}`}>
        <div className={`  ${Styles.cardbody}`}>
          <div className="row">
            <div className={`col-lg-4 ${Styles.property}`}>
              <div className={`container ms-3 ${Styles.container}`}>
                <div className="row ">
                <Stepper style={{width:'18%'}} activeStep={value1} orientation='vertical' className="mt-5">
            <Step>
                <StepLabel className={Styles.steplabel}>Property Details</StepLabel>
            </Step>
            <Step>
                <StepLabel className={Styles.steplabel}>Property Features</StepLabel>
            </Step>
            <Step>
                <StepLabel className={Styles.steplabel}>Price Details</StepLabel>
            </Step>
            <Step>
                <StepLabel className={Styles.steplabel}>Price Details</StepLabel>
            </Step>
            <Step>
                <StepLabel className={Styles.steplabel}>Photos & Description</StepLabel>
            </Step>
        </Stepper>
                  {/* <div
                    className={`col-lg-12 col-md-12 mb-5  mt-5 ${Styles.propertyheading}`}
                  >
                    <span className='me-2 '  >
                      {" "}
                      <Image src={Image3} alt="Picture of the author" 
                             width={20}
                             height={20}
                          
                            />
                    </span>
                  <span className={`  ${Styles.propertyborder}`}> Property Details </span>
                  </div>
                  <div
                    className={`col-lg-12  col-md-12 mb-5   ${Styles.propertyheading}`}
                  >
                    <span className="me-2">
                      {" "}
                      <Image src={Image3} alt="Picture of the author" 
                             width={20}
                             height={20}
                            />
                    </span>
                    Property Features
                  </div>
                  <div
                    className={`col-lg-12 col-md-12 mb-5   ${Styles.propertyheading}`}
                  >
                    <span className="me-2">
                      {" "}
                      <Image src={Image3} alt="Picture of the author" 
                             width={20}
                             height={20}
                            />
                    </span>
                    Price Details
                  </div>
                  <div
                    className={`col-lg-12 col-md-12 mb-5  ${Styles.propertyheading}`}
                  >
                    <span className="me-2">
                      {" "}
                      <Image src={Image3} alt="Picture of the author" 
                             width={20}
                             height={20}
                            
                            />
                    </span>
                    Photos & Description
                  </div> */}
                </div>
              </div>
            </div>

            <div className={`col-lg-8  mt-5  ${Styles.property2}`}>
              <p className={`ms-5 ${Styles.heading}`}>Property Features</p>
              <div className="container mb-3 ms-3">
                <div className="row ">
                  <div className="col-lg-3 ">
                    <label
                      for="inputEmail4"
                      className={`form-label   ${Styles.input}`}
                    >
                      Total floors
                    </label>
                    <div>
                      <input
                        type="text"
                        className={`form-label ps-2 pe-2  pt-2 pb-2 ${Styles.placeholder}`}
                        id="inputEmail4"
                        placeholder="Ex : 13"
                        name="Number"
                        value={formik.values.Number}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <p className="text-danger">{formik.errors.Number}</p>
                  </div>
                  <div className="col-lg-3 ">
                    <label
                      for="inputPassword4"
                      className={`form-label   ${Styles.input}`}
                    >
                      Floor number
                    </label>
                    <div>
                      <input
                        type="text"
                        className={`form-label ps-2 pe-2  pt-2 pb-2 ${Styles.placeholder}`}
                        id="inputPassword4"
                        placeholder="Ex : 7"
                        name="Number"
                        value={formik.values.Number}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <p className="text-danger">{formik.errors.Number}</p>
                  </div>
                  <div className="col-lg-3 ">
                    <label
                      for="inputPassword4"
                      className={`form-label ${Styles.input}`}
                    >
                      Car Parking Count
                    </label>
                    <div>
                      <input
                        type="text"
                        className={`form-label ps-2 pe-2  pt-2 pb-2 ${Styles.placeholder}`}
                        id="inputPassword4"
                        placeholder="Ex : 3"
                        name="Number"
                        value={formik.values.Number}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <p className="text-danger">{formik.errors.Number}</p>
                  </div>
                </div>
              </div>

              <div className="container mb-3 ms-3">
                <div className="row">
                  <div className="col-lg-3 ">
                    <label
                      for="inputEmail4"
                      className={`form-label  ${Styles.input}`}
                    >
                      Bedroom
                    </label>
                    <div>
                      <input
                        type="text"
                        className={`form-label ps-2 pe-2  pt-2 pb-2 ${Styles.placeholder}`}
                        id="inputEmail4"
                        placeholder="Ex : 13"
                        name="Number"
                        value={formik.values.Number}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <p className="text-danger">{formik.errors.Number}</p>
                  </div>
                  <div className="col-lg-3">
                    <label
                      for="inputPassword4"
                      className={`form-label  ${Styles.input}`}
                    >
                      Bathroom
                    </label>
                    <div>
                      <input
                        type="text"
                        className={`form-label ps-2 pe-2  pt-2 pb-2 ${Styles.placeholder}`}
                        id="inputPassword4"
                        placeholder="Ex : 7"
                        name="Number"
                        value={formik.values.Number}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <p className="text-danger">{formik.errors.Number}</p>
                  </div>
                  <div className="col-lg-3 ms-2">
                    <label
                      for="inputPassword4"
                      className={`form-label me-5 ${Styles.input}`}
                    >
                      Facing{" "}
                    </label>
                    {/* <div className="dropdown">
                      <button
                        className={`btn  dropdown-toggle ${Styles.dropdown}`}
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        North
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div> */}
                    <Dropdown className={Styles.dropdown}>
  <Dropdown.Toggle variant="" id="dropdown-basic">
    North
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">south</Dropdown.Item>
    <Dropdown.Item href="#/action-2">east</Dropdown.Item>
    <Dropdown.Item href="#/action-3">west</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                  </div>
                </div>
              </div>

              <div className="container mb-5 ms-3">
                <div className="row">
                  <div className="col-lg-4 ">
                    <label
                      for="inputPassword4"
                      className={`form-label me-5 ${Styles.input}`}
                    >
                      Furnishing status{" "}
                    </label>
                    {/* <div className="dropdown">
                      <button
                        className={`btn  dropdown-toggle ${Styles.dropdown}`}
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Furnished
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div> */}
                            <Dropdown className={Styles.dropdown}>
  <Dropdown.Toggle variant="" id="dropdown-basic">
    Furnished
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">unfurnished</Dropdown.Item>
    <Dropdown.Item href="#/action-2">none</Dropdown.Item>
    <Dropdown.Item href="#/action-3">none1</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                  </div>

                  <p className={`mt-5   ${Styles.checkheading}`}>
                    Amenities
                  </p>
                  <div>
                    <div className="container mb-2 ms-2 ">
                      <div className="row ">
                        <div className="col-lg-4 ">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className={`form-check-label  ${Styles.checkcontent}`}
                              for="flexCheckChecked"
                            >
                              Elevators/Lifts
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-5 ">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className={`form-check-label ${Styles.checkcontent}`}
                              for="flexCheckDefault"
                            >
                              Guest Parking Spaces
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-3 ">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className={`form-check-label ${Styles.checkcontent}`}
                              for="flexCheckChecked"
                            >
                              Gym
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="container mb-2 ms-2">
                      <div className="row ">
                        <div className="col-lg-4 ">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className={`form-check-label ${Styles.checkcontent}`}
                              for="flexCheckChecked"
                            >
                              CCTV Surveillance
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className={`form-check-label ${Styles.checkcontent}`}
                              for="flexCheckDefault"
                            >
                              Guest Parking Spaces
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className={`form-check-label ${Styles.checkcontent}`}
                              for="flexCheckChecked"
                            >
                              Gym
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container mb-2 ms-2">
                      <div className="row ">
                        <div className="col-lg-3 ">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className={`form-check-label ${Styles.checkcontent}`}
                              for="flexCheckChecked"
                            >
                              Kids Play Area
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className={`form-check-label ${Styles.checkcontent}`}
                              for="flexCheckDefault"
                            >
                              Swimming Pool
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className={`form-check-label ${Styles.checkcontent}`}
                              for="flexCheckChecked"
                            >
                              Play Ground
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container mb-2 ms-2">
                      <div className="row ">
                        <div className="col-lg-5">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className={`form-check-label ${Styles.checkcontent}`}
                              for="flexCheckChecked"
                            >
                              Pet Washing Stations
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className={`form-check-label ${Styles.checkcontent}`}
                              for="flexCheckDefault"
                            >
                              Rooftop Lounge Areas
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container  ms-2">
                      <div className="row">
                        <div className="col-lg-7">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className={`form-check-label ${Styles.checkcontent}`}
                              for="flexCheckChecked"
                            >
                              Electronic Vehicle Charging Points
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="form-check">
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className={`form-check-label ${Styles.checkcontent}`}
                              for="flexCheckDefault"
                            >
                              Barbecue Areas
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                   <div className={`ms-auto w-50 ${Styles.buttoncontainer}`}>
                    <div className="d-flex ">
                      <div className="d-flex mt-5 ms-2">
                        <div className="me-3 mt-1">
                         
                          <Image
                            src={Image1}
                            alt="Picture of the author"
                            className={` ${Styles.buttonicon}`}
                            width={15}
                            height={15}
                          />
                        </div>

                        <label
                          className={`form-check-label mt-1  ${Styles.backbutton}`}
                          for="inlineFormCheck"
                          onClick={()=>  router.replace("/auth/property")}
                        >
                          Back
                        </label>
                      </div>
                      <div className="mt-5 ms-3">
                        <button
                          type="submit"
                          className={`me-5   ${Styles.button}`}
                        >
                        Next
                          <span className="ms-5 ">
                            <Image src={Image2} alt="Picture of the author" className={`${Styles.widthimg}`}
                             width={15}
                             height={15}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div> 
                      {/* <div className="d-flex mb-2  me-2 mt-3  float-end align-items-end ">
                      <div
                        className={`d-flex mt-5 ms-5 ${Styles.formchecklabel}`}
                      >
                        <div className="ms-5 me-3">
                          <Image
                            src={Image1}
                            alt="Picture of the author"
                            className={` ${Styles.buttonicon}`}
                            width={15}
                            height={15}
                          />
                        </div>
                        <label class="form-check-label" for="inlineFormCheck" onClick={()=>  router.replace("/auth/property")}>
                          Back
                        </label>
                      </div>

                      <div className="mt-5 ms-3">
                        <button
                          type="submit"
                          className={`me-5   ${Styles.button}`}
                        >
                          Next
                          <span className="ms-5 ">
                            <Image
                              src={Image2}
                              alt="Picture of the author"
                              className={Styles.widthimg}
                              width={15}
                              height={15}
                            />
                          </span>
                        </button>
                      </div>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};

export default Auth;
