import React from "react";
import Head from "next/head";

import Styles from "../../styles/propertystyles/property.module.css";
import { Stepper, StepLabel, Step } from "@material-ui/core";
const Auth = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className={`d-flex justify-content-center ${Styles.body}`}>
        <div className={`w-50    ${Styles.cardbody}`}>
          <div className="row">
            <div className={`col-lg-4 ${Styles.property}`}>
              <div className={`container ms-3 ${Styles.container}`}>
                <div className="row ">
                  <div
                    className={`col-lg-12 col-md-12 mb-5  mt-5 ${Styles.propertyheading}`}
                  >
                    <span className={`me-2 ${Styles.propertyborder}`}>
                      {" "}
                      <i class="ri-checkbox-line"></i>
                    </span>
                    Property Details
                  </div>
                  <div
                    className={`col-lg-12  col-md-12 mb-5   ${Styles.propertyheading}`}
                  >
                    <span className="me-2">
                      {" "}
                      <i class="ri-checkbox-line"></i>
                    </span>
                    Property Features
                  </div>
                  <div
                    className={`col-lg-12 col-md-12 mb-5   ${Styles.propertyheading}`}
                  >
                    <span className="me-2">
                      {" "}
                      <i class="ri-checkbox-line"></i>
                    </span>
                    Price Details
                  </div>
                  <div
                    className={`col-lg-12 col-md-12 mb-5  ${Styles.propertyheading}`}
                  >
                    <span className="me-2">
                      {" "}
                      <i class="ri-checkbox-line"></i>
                    </span>
                    Photos & Description
                  </div>
                </div>
              </div>
            </div>

            <div className={`col-lg-8 mt-5  ${Styles.property2}`}>
              <p className={`ms-5 ${Styles.heading}`}>Property Features</p>
              <div className="container mb-3 ">
                <div className="row ">
                  <div className="col-lg-3 ms-4">
                    <label
                      for="inputEmail4"
                      className={`form-label   ${Styles.input}`}
                    >
                      Total floors
                    </label>
                    <div>
                      <input
                        type="text"
                        className={`form-label  ${Styles.placeholder}`}
                        id="inputEmail4"
                        placeholder="Ex : 13"
                      />
                    </div>
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
                        className={`form-label  ${Styles.placeholder}`}
                        id="inputPassword4"
                        placeholder="Ex : 7"
                      />
                    </div>
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
                        className={`form-label ${Styles.placeholder}`}
                        id="inputPassword4"
                        placeholder="Ex : 3"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="container mb-3">
                <div className="row">
                  <div className="col-lg-3 ms-4">
                    <label
                      for="inputEmail4"
                      className={`form-label  ${Styles.input}`}
                    >
                      Bedroom
                    </label>
                    <div>
                      <input
                        type="text"
                        className={`form-label  ${Styles.placeholder}`}
                        id="inputEmail4"
                        placeholder="Ex : 13"
                      />
                    </div>
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
                        className={`form-label  ${Styles.placeholder}`}
                        id="inputPassword4"
                        placeholder="Ex : 7"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <label
                      for="inputPassword4"
                      className={`form-label me-5 ${Styles.input}`}
                    >
                      Facing{" "}
                    </label>
                    <div className="dropdown">
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
                    </div>
                  </div>
                </div>
              </div>

              <div className="container mb-5">
                <div className="row">
                  <div className="col-lg-4 ms-4">
                    <label
                      for="inputPassword4"
                      className={`form-label me-5 ${Styles.input}`}
                    >
                      Furnishing status{" "}
                    </label>
                    <div className="dropdown">
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
                    </div>
                  </div>

                  <p className={`mt-3 ms-4 ${Styles.checkheading}`}>
                    Amenities
                  </p>
                  <div>
                    <div className="container mb-4  ">
                      <div className="row ms-2">
                        <div className="col-lg-4 ">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className={`form-check-label ${Styles.checkcontent}`}
                              for="flexCheckChecked"
                            >
                              Elevators/Lifts
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-5 ">
                          <div className="form-check">
                            <input
                              className="form-check-input"
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
                              className="form-check-input"
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

                    <div className="container mb-3">
                      <div className="row ms-2">
                        <div className="col-lg-4 ">
                          <div className="form-check">
                            <input
                              className="form-check-input"
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
                              className="form-check-input"
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
                              className="form-check-input"
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
                    <div className="container mb-3">
                      <div className="row ms-2">
                        <div className="col-lg-3 ">
                          <div className="form-check">
                            <input
                              className="form-check-input"
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
                              className="form-check-input"
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
                              className="form-check-input"
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
                    <div className="container mb-3">
                      <div className="row ms-2">
                        <div className="col-lg-5">
                          <div className="form-check">
                            <input
                              className="form-check-input"
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
                              className="form-check-input"
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
                    <div className="container ">
                      <div className="row ms-2">
                        <div className="col-lg-7">
                          <div className="form-check">
                            <input
                              className="form-check-input"
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
                              className="form-check-input"
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

                  <div className="ms-auto w-50">
                    <div className="d-flex align-items-center">
                      <div className="d-flex mt-5 ms-2">
                        <div className="ms-5">
                        <i className={`ri-arrow-left-circle-line me-3 ${Styles.buttonicon}`}></i>
                        </div>
                        <label className={`form-check-label ${Styles.backbutton}`}for="inlineFormCheck">
                          Back
                        </label>
                      </div>
                      <div className="mt-5 ms-3">
                        <button type="submit" className={`me-5 ${Styles.button}`}>
                          Next<span className="ms-5"><i class="ri-arrow-right-circle-line"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
