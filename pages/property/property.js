import React, { useState } from "react";
import Head from "next/head";
import Image1 from "../../assets/icons/arrow.png";
import rent from "../../assets/icons/rent.png";
import Image2 from "../../assets/icons/1.png";
import Image from "next/image";
import Image3 from "../../assets/icons/2.png";
import Styles from "../../styles/propertystyles/property.module.css";
import Navbar from "../../pages/auth/navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Dropdown from "react-bootstrap/Dropdown";
import { Stepper, StepLabel, Step } from "@material-ui/core";
const Auth = () => {
  const router = useRouter();
  const [value1, setValue1] = useState("2");
  const formik = useFormik({
    initialValues: {
      Number: "",
    },

    validationSchema: Yup.object({
      Number: Yup.string().required("!required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      router.replace("/auth/register");
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
      <Navbar />
      <form onSubmit={formik.handleSubmit}>
        <div className={`d-flex justify-content-center ${Styles.body}`}>
          <div className={`  ${Styles.cardbody}`}>
            <div className="row">
              <div className={`col-lg-4 ${Styles.property}`}>
                <div className={`container  ${Styles.container}`}>
                  <div className="row">
                    <div className={`mt-5 ${Styles.media1}`}>
                      <Stepper
                        style={{ width: "18%" }}
                        activeStep={value1}
                        orientation="vertical"
                      >
                        <Step>
                          <StepLabel className={Styles.steplabel}>
                            Property Details
                          </StepLabel>
                        </Step>
                        <Step>
                          <StepLabel className={Styles.steplabel}>
                            Property Features
                          </StepLabel>
                        </Step>
                        <Step>
                          <StepLabel className={Styles.steplabel}>
                            Price Details
                          </StepLabel>
                        </Step>
                        <Step>
                          <StepLabel className={Styles.steplabel}>
                            Price Details
                          </StepLabel>
                        </Step>
                        <Step>
                          <StepLabel className={Styles.steplabel}>
                            Photos & Description
                          </StepLabel>
                        </Step>
                      </Stepper>
                    </div>
                    <div className={`${Styles.media}`}>
                      <Stepper
                        style={{ width: "18%" }}
                        activeStep={value1}
                        orientation="horizontal"
                      >
                        <Step>
                          <StepLabel></StepLabel>
                        </Step>
                        <Step>
                          <StepLabel></StepLabel>
                        </Step>
                        <Step>
                          <StepLabel></StepLabel>
                        </Step>
                        <Step>
                          <StepLabel></StepLabel>
                        </Step>
                        <Step>
                          <StepLabel></StepLabel>
                        </Step>
                      </Stepper>
                    </div>
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
                          name="TotalFloors"
                          value={formik.values.TotalFloors}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.TotalFloors && formik.touched.TotalFloors && (
                        <div className="d-flex align-items-center text-danger">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.TotalFloors}</span>
                        </div>
                      )}
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
                          name="FloorNumber"
                          value={formik.values.FloorNumber}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.FloorNumber && formik.touched.FloorNumber && (
                        <div className="d-flex align-items-center text-danger">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.FloorNumber}</span>
                        </div>
                      )}
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
                          name="CarParkingCount"
                          value={formik.values.CarParkingCount}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.CarParkingCount &&
                        formik.touched.CarParkingCount && (
                          <div className="d-flex align-items-center text-danger">
                            <i className="ri-error-warning-line me-1  "></i>
                            <span>{formik.errors.CarParkingCount}</span>
                          </div>
                        )}
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
                          name="BedRoom"
                          value={formik.values.BedRoom}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.BedRoom && formik.touched.BedRoom && (
                        <div className="d-flex align-items-center text-danger">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.BedRoom}</span>
                        </div>
                      )}
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
                          name="BathRoom"
                          value={formik.values.BathRoom}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.BathRoom && formik.touched.BathRoom && (
                        <div className="d-flex align-items-center text-danger">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.BathRoom}</span>
                        </div>
                      )}
                    </div>
                    <div className="col-lg-5 ">
                      <label
                        for="inputPassword4"
                        className={`form-label  ${Styles.input}`}
                      >
                        Facing{" "}
                      </label>
                      <div
                        onClick={() => setoptionType("facing")}
                        className={
                          optionType === "facing"
                            ? `${Styles.bg_color_1D72DB}  d-flex flex-column  `
                            : ` d-flex flex-columnn `
                        }
                      >
                        {/* <span
              className={
                optionType === "facing"
                  ? `${Styles.fontFam_poppins} ${Styles.font_18} ${Styles.font_medium} $ text-uppercase text-white mt-3`
                  : `${Styles.fontFam_poppins} ${Styles.color_323D5A} ${Styles.font_18} ${Styles.font_medium} $ text-uppercase  mt-3`
              }
            >
             Facing
            </span> */}
                        <Select
                          options={facing}
                          type="text"
                          placeholder="Select.."
                          className="w-75"
                          styles={customStyles}
                          name="facing"
                          value={facing.filter((option) => {
                            return option.value === formik.values.facing;
                          })}
                          onChange={(selectedOption) => {
                            let event = {
                              target: {
                                name: "facing",
                                value: selectedOption.value,
                              },
                            };
                            formik.handleChange(event);
                          }}
                          components={{
                            IndicatorSeparator: () => null,
                          }}
                        />
                      </div>
                      {formik.errors.facing && formik.touched.facing && (
                        <div className="d-flex align-items-center text-danger">
                          <i className="ri-error-warning-line me-1 mt-1 "></i>
                          <span> {formik.errors.facing}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="container mb-5 ms-3">
                  <div className="row">
                    <div className="col-lg-5 ">
                      <label
                        for="inputPassword4"
                        className={`form-label me-5 ${Styles.input}`}
                      >
                        Furnishing status{" "}
                      </label>

                      <div
                        onClick={() => setoptionType("furnishedStatus")}
                        className={
                          optionType === "furnishedStatus"
                            ? `${Styles.bg_color_1D72DB}  d-flex flex-column  `
                            : ` d-flex flex-columnn `
                        }
                      >
                        {/* <span
              className={
                optionType === "facing"
                  ? `${Styles.fontFam_poppins} ${Styles.font_18} ${Styles.font_medium} $ text-uppercase text-white mt-3`
                  : `${Styles.fontFam_poppins} ${Styles.color_323D5A} ${Styles.font_18} ${Styles.font_medium} $ text-uppercase  mt-3`
              }
            >
             Facing
            </span> */}
                        <Select
                          options={furnishingStatus}
                          type="text"
                          placeholder="Select.."
                          className="w-100"
                          styles={customStyles}
                          name="FurnishedStatus"
                          value={furnishingStatus.filter((option) => {
                            return (
                              option.value === formik.values.FurnishedStatus
                            );
                          })}
                          onChange={(selectedOption) => {
                            let event = {
                              target: {
                                name: "FurnishedStatus",
                                value: selectedOption.value,
                              },
                            };
                            formik.handleChange(event);
                          }}
                          components={{
                            IndicatorSeparator: () => null,
                          }}
                        />
                      </div>
                    </div>
                    {formik.errors.FurnishedStatus &&
                      formik.touched.FurnishedStatus && (
                        <div className="d-flex align-items-center text-danger">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.FurnishedStatus}</span>
                        </div>
                      )}
                    <p className={`mt-5   ${Styles.checkheading}`}>Amenities</p>
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
                            onClick={() => router.replace("/auth/property")}
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
                              <Image
                                src={Image2}
                                alt="Picture of the author"
                                className={`${Styles.widthimg}`}
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
                        <label className="form-check-label" for="inlineFormCheck" onClick={()=>  router.replace("/auth/property")}>
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
