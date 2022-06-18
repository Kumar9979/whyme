import React ,{useState}from "react";

import Styles from "../../styles/authstyles/property2.module.css";
import Head from "next/head";
import Image1 from "../../assets/icons/arrow.png";
import Image from "next/image";
import Image2 from "../../assets/icons/1.png";
import "../../pages/auth/navbar";
import Navbar from "../../pages/auth/navbar";
import Image3 from "../../assets/icons/2.png";
import {useFormik} from "formik"
import * as Yup from "yup"
import {useRouter} from "next/router"
import { Stepper,StepLabel,Step } from '@material-ui/core';
const Register = () => {
const [value1, setValue1] = useState('3')
  const router=useRouter()
  const formik = useFormik({
    initialValues: {
      SuperArea: "",
      CarpetArea: "",
      ExpectedPrice: "",
      MaintenanceFees: "",
    },

    validationSchema: Yup.object({
      SuperArea: Yup.string().required("Required"),
      CarpetArea: Yup.string().required("Required"),
      ExpectedPrice: Yup.string().required("Required"),
      MaintenanceFees: Yup.string().required("Required"),
     
    }),
    onSubmit: (values) => {
      console.log(values);
      router.replace("/auth/property2")
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
        <div className={`${Styles.container}`}>
          <div class="row">
            <div className={`col-md-4  ${Styles.propertycolumn}`}>
              <div className={`${Styles.propertycontainer}`}>
                <div className="row ms-3">

                <div className={`mt-5 ${Styles.media1}`}>
                    <Stepper style={{width:'18%'}} activeStep={value1} orientation='vertical'>
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
        </div>
<div className={`${Styles.media}`}>
        <Stepper style={{width:'18%'}} activeStep={value1} orientation='horizontal' >
            <Step>
                <StepLabel ></StepLabel>
            </Step>
            <Step>
                <StepLabel ></StepLabel>
            </Step>
            <Step>
                <StepLabel ></StepLabel>
            </Step>
            <Step>
                <StepLabel ></StepLabel>
            </Step>
            <Step>
                <StepLabel ></StepLabel>
            </Step>
        </Stepper>
        </div>
                
                </div>
              </div>
            </div>
            <div class="col-md-8 ">
              <div className={`${Styles.carbody} `}>
                <div className="card-body ms-5 mt-4">
                  <div className={`ms-4 ${Styles.sectionbody}`}>
                    <h5 className={Styles.title}>Price details</h5>
                  </div>

                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6 ">
                        <label
                          htmlFor="inputEmail4"
                          class={` mt-3  ${Styles.text}`}
                        >
                          Super Area
                        </label>
                        <div class="input-group  ">
                          <input
                            type="text"
                            className={` ${Styles.formcontrol} `}
                            placeholder="Enter super area"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                           name="MaintenanceFees"
                            value={formik.values.MaintenanceFees}
                            onChange={formik.handleChange}
                          />
                          <span
                            className={`${Styles.inputtext} `} 
                            id="basic-addon2"
                          >
                            sqft
                          </span>
                        </div>
                        {formik.errors.MaintenanceFees &&
                      formik.touched.MaintenanceFees && (
                        <div className="d-flex align-items-center text-danger">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.MaintenanceFees}</span>
                        </div>
                      )}
                      </div>

                      <div class="col-lg-6 mt-3 ">
                        <label htmlFor="inputEmail4" class={Styles.text}>
                          Carpet Area
                        </label>
                        <div class="input-group">
                          <input
                            type="text"
                            className={Styles.formcontrol}
                            placeholder="Enter carpet area"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            name="CarpetArea"
                            value={formik.values.CarpetArea}
                            onChange={formik.handleChange}
                          />
                          <span className={`${Styles.inputtext} `} id="basic-addon2">
                            sqft
                          </span>
                        </div>
                        {formik.errors.CarpetArea &&
                      formik.touched.CarpetArea && (
                        <div className="d-flex align-items-center text-danger">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.CarpetArea}</span>
                        </div>
                      )}
                      </div>
                    </div>
                    <div class="row ">
                      <div class="col mt-3">
                        <p class={` ${Styles.text}`}>Expected Price</p>
                        <div class=" ">
                          <span class={Styles.inputtext1} id="basic-addon1">
                            ₹{" "}
                          </span>
                          <input
                            type="text"
                            class={Styles.formcontrol2}
                            placeholder="Enter property price"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="ExpectedPrice"
                            value={formik.values.ExpectedPrice}
                            onChange={formik.handleChange}
                          />
                        </div>
                        {formik.errors.ExpectedPrice &&
                      formik.touched.ExpectedPrice && (
                        <div className="d-flex align-items-center text-danger">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.ExpectedPrice}</span>
                        </div>
                      )}
                      </div>
                    </div>

                    <div class="row mb-5">
                      <div class="col mt-3">
                        <p class={` ${Styles.text}`}>Maintainence Fees</p>
                        <div class=" ">
                          <span class={Styles.inputtext1} id="basic-addon1">
                            ₹{" "}
                          </span>
                          <input
                            type="text"
                            class={Styles.formcontrol2}
                            placeholder="Enter maintainence price"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="Number"
                            value={formik.values.Number}
                            onChange={formik.handleChange}
                          />
                        </div>
                        {formik.errors.Number &&
                      formik.touched.Number && (
                        <div className="d-flex align-items-center text-danger">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.Number}</span>
                        </div>
                      )}
                      </div>
                    </div>

                    <div className="d-flex me-2 mb-5 mt-5 float-end align-items-end ">
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
                        <label class="form-check-label" htmlFor="inlineFormCheck" onClick={()=>  router.replace("/property/property")}>
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
                    </div>
                  </div>
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

export default Register;
