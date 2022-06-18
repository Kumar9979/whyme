import React, { useState } from "react";
import styles from "../../../styles/postProperty/propertydetails.module.css";
import Mapimages from "../../../assets/icons/download.jpg";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import Image from "next/image";

const PropertyDetails = () => {
  const [value1, setValue1] = useState("4");
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <div className={`${styles.sidebar}`}>
              <div className={`${styles.progressbar} p-5`}>
                <Stepper
                  style={{ width: "0%" }}
                  activeStep={value1}
                  orientation="vertical"
                >
                  <Step>
                    <StepLabel className="">Property Details</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel className="">Property Features</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel className="">Price Details</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel className="">Price Details</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel className="">Photos & Description</StepLabel>
                  </Step>
                </Stepper>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 col-sm-10">
            <div className="mt-5 ms-5">
              <h5 className={`${styles.propertyHeading}`}>Property Details</h5>
              <h6 className={`${styles.selectHeading} mt-5`}>
                Select Your Property In Map
              </h6>
              <form className="mt-3">
                <div className={`${styles.location}form-group`}>
                  <input
                    type="text"
                    className={`${styles.locationform} form-control`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your property location"
                  />
                </div>
              </form>
              <div>
                <Image
                  className="mt-2"
                  src={Mapimages}
                  alt="Picture of the author"
                  width={500}
                  height={250}
                />
              </div>
              <div className="mt-3">
                <label
                  for="exampleFormControlInput1"
                  className={`${styles.labelText} form-label`}
                >
                  Address
                </label>
                <input
                  type="text"
                  className={`${styles.address} form-control`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your property location"
                />
              </div>
              <div className="mt-3">
                <label
                  for="exampleFormControlInput1"
                  className={`${styles.labelText} form-label`}
                >
                  Building Name
                </label>
                <input
                  type="text"
                  className={`${styles.building} form-control`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email address"
                />
              </div>
              <div
                className="btn-group mt-5 me-2 float-end"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-primary">
                  <span>
                    <i class="ri-arrow-left-circle-line"></i>
                  </span>
                  Back
                </button>
                <button type="button" className="btn btn-primary">
                  Next
                  <span>
                    <i class="ri-arrow-right-circle-line"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
