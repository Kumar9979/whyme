import React, { useState } from "react";
import styles from "../../../styles/postProperty/propertydetails.module.css";
import Mapimages from "../../../assets/icons/download.jpg";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import Image from "next/image";

const PropertyDetails = () => {
  const [value, setValue1] = useState("4");
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <div className={`${styles.sidebar}`}>
              <div className={`${styles.progressbar} p-5`}>
                <Stepper
                  style={{ width: "0%" }}
                  activeStep={value}
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
              <div className={`content-btn d-flex justify-content-end mt-5`}>
                <div className={`d-flex`}>
                  <button className={`bg-white border-0  `}>
                    <span
                      className={`${styles.container_icon_arrowLeftbtn} align-middle me-2`}
                    >
                      <i
                        className={`${styles.icon_arrowLeftbtn} h-100 p-1 ri-arrow-left-line  border mt-1 rounded `}
                      ></i>
                    </span>

                    <span
                      className={` ${styles.color_1D72DB} ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_18} align-middle`}
                    >
                      Back
                    </span>
                  </button>

                  <button
                    type="submit"
                    className={`${styles.bg_color_1D72DB} bg-primary ms-3 text-white d-flex justify-content-between align-items-center rounded-3 border-0  px-3 py-2`}
                  >
                    <span
                      className={` ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_18} align-middle`}
                    >
                      Next
                    </span>
                    <div>
                      <i
                        className={`${styles.modal_icon_arrowRightbtn} h-100 p-1 ri-arrow-right-line text-white border-light border mt-1 rounded ms-5 `}
                      ></i>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
