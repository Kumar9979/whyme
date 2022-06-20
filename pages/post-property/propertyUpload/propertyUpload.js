import React, { useState } from "react";
import styles from "../../../styles/postProperty/propertyupload.module.css";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import upload from "../../../assets/icons/upload.png";
import backButton from "../../../assets/icons/backbutton.png";
import Navbar from "../../auth/navbar";

const PropertyUpload = () => {
  const [value, setValue1] = useState("4");
  const [file, setFile] = useState(upload);
  const [uploaded, setuploaded] = useState(false);
  const [size, setSize] = useState(35);

  const formik = useFormik({
    initialValues: {
      image: "",
      description: "",
      terms: false,
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required("Upload an Image"),
      description: Yup.string().required("Required"),
      terms: Yup.boolean().oneOf(
        [true],
        "Terms and condition need to be accepted"
      ),

      // terms: Yup.string().required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  // function handleChange(e) {
  //   if (e.target?.files.length !== 0) {
  //     setSize(100);
  //     setuploaded(true);
  //     setFile(URL.createObjectURL(e.target.files[0]));
  //   }
  // }

  // function formReset() {
  //   setuploaded(false);
  //   setSize(35);
  //   formik.setFieldValue("image", "");
  // }

  return (
    <div>
      <Navbar />
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
            <div className="mt-5 ms-2">
              <h5 className={`${styles.propertyHeading}`}>
                Photos & Descrption
              </h5>

              <form onSubmit={formik.handleSubmit} className="mt-3">
                <div className="mt-5">
                  <label
                    for="profile"
                    className={`${styles.labelText} form-label`}
                  >
                    {/* <Image
                      src={uploaded ? file : upload}
                      alt="image of camera"
                      width={size}
                      height={size}
                    /> */}
                    Photos
                  </label>
                  <div className={`${styles.upload_image} mt-3`}>
                    <div
                      htmlFor="upload"
                      className="d-flex justify-content-center mt-3 mb-2"
                    >
                      <label htmlFor="upload">
                        {" "}
                        <Image
                          src={upload}
                          name="image"
                          value={formik.values.image}
                          alt="image of camera"
                        />
                      </label>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center ">
                      <input
                        type={"file"}
                        // style={{ visibility: "hidden" }}
                        id="upload"
                        name="image"
                        accept="image/*;capture=camera"
                        multiple
                        onChange={(e) => {
                          formik.setFieldValue("image", e.target.files[0]);
                        }}
                        hidden
                      />
                      <p className={`${styles.upload_text_1}`}>
                        Drag & drop the image of an property
                      </p>

                      <p className={`${styles.upload_text_2}`}>
                        JPG and PNG images - max 20MB each
                      </p>
                      <p className={`${styles.upload_text_2}`}>
                        <span className={`${styles.or_text}`}>-</span>OR
                        <span>-</span>
                      </p>
                      <button
                        className={`${styles.upload_button}`}
                        type="submit"
                        variant="contained"
                        component="label"
                      >
                        <label>
                          <input
                            type="file"
                            //  style={{ visibility: "hidden" }}
                            name="image"
                            accept="image/*;capture=camera"
                            multiple
                            onChange={(e) => {
                              formik.setFieldValue("image", e.target.files[0]);
                            }}
                            hidden
                          />
                          Browse Photos
                        </label>
                      </button>
                      {/* <p className={`${styles.upload_text_3}`}>Browse Photos</p> */}
                    </div>
                    {formik.errors.image && formik.touched.image && (
                      <div className="d-flex align-items-center text-danger mt-5">
                        <i
                          className={` ${styles.error_message} ri-error-warning-line me-1 `}
                        ></i>
                        <span className={`${styles.error_message}`}>
                          {formik.errors.image}
                        </span>
                      </div>
                    )}

                    {/* <input
                    type={text}
                    className={` ${styles.input_text}`}
                    id="profile"
                    aria-describedby="emailHelp"
                    placeholder="Drag & drop the image of an property"
                  /> */}
                  </div>
                </div>
                <div className="mt-5">
                  <div className="mt-3">
                    <label
                      for="exampleFormControlInput1"
                      className={`${styles.labelText} form-label`}
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      className={`${styles.description} form-control`}
                      id="exampleFormControlInput1"
                      aria-describedby="emailHelp"
                      placeholder="Describe your property"
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                    ></textarea>
                  </div>
                </div>
                {formik.errors.description && formik.touched.description && (
                  <div className="d-flex align-items-center text-danger mt-1">
                    <i className="ri-error-warning-line me-1 0 "></i>
                    <span>{formik.errors.description}</span>
                  </div>
                )}
                <div className={` mt-2 `}>
                  <input
                    type="checkbox"
                    // name="terms"
                    name="terms"
                    onChange={formik.handleChange}
                  />
                  <span className={`ms-2 ${styles.terms_condition_text}`}>
                    Terms and condition
                  </span>
                </div>
                {formik.errors.terms && formik.touched.terms && (
                  <div className="d-flex align-items-center text-danger mt-1">
                    <i className="ri-error-warning-line me-1 0 "></i>
                    <span>{formik.errors.terms}</span>
                  </div>
                )}

                <div className={`content-btn d-flex justify-content-end mt-5`}>
                  <div className={`d-flex`}>
                    <button className={`bg-white border-0  `}>
                      <span
                        className={`${styles.container_icon_arrowLeftbtn} align-middle me-2`}
                      >
                        <i
                          className={`${styles.icon_arrowLeftbtn} h-100 p-1 ri-arrow-left-line  border mt-1 rounded `}
                        ></i>
                        {/* <Image
                      src={backButton}
                      className={`${styles.back_button_image} `}/> */}
                      </span>

                      <span
                        className={` ${styles.color_1D72DB} ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_18} align-middle text-primary`}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyUpload;
