import React, { useState } from "react";
import styles from "../../../styles/postProperty/propertydetails.module.css";
import Mapimages from "../../../assets/icons/download.jpg";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Steeper from "./Steeper";

const PropertyDetails = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      Map: "",
      Address: "",
      BuildingName: "",
    },

    validationSchema: Yup.object({
      Map: Yup.string("").required("Required"),
      Address: Yup.string("").required("Required"),
      BuildingName: Yup.string("").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
   
        router.push(
          "/post-property/property-features/propertyFeatures"
        )
    
    },
  });
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <div className={`${styles.sidebar}`}>
              <div className={`${styles.progressbar} p-5 `}>
                <Steeper active={0} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 col-sm-10 pt-3">
            <div className="mt-2">
              <h5 className={`${styles.propertyHeading}`}>Property Details</h5>
              <form onSubmit={formik.handleSubmit}>
                <h6 className={`${styles.selectHeading} mt-5 `}>
                  Select Your Property In Map
                </h6>

                <div className={`${styles.location}form-group`}>
                  <input
                    type="text"
                    className={`${styles.locationform} form-control`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your property location"
                    name="Map"
                    value={formik.values.Map}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.Map && formik.touched.Map && (
                  <div className="d-flex align-items-center text-danger">
                    <i className="ri-error-warning-line me-1  "></i>
                    <span>{formik.errors.Map}</span>
                  </div>
                )}
                <div>
                  <Image
                    className="mt-2"
                    src={Mapimages}
                    alt="Picture of the author"
                    width={400}
                    height={150}
                  />
                </div>
                <div className="mt-3">
                  <label
                    for="exampleFormControlInput1"
                    className={`${styles.labelText} form-label`}
                  >
                    Address
                  </label>
                  <textarea
                    type="text"
                    className={`${styles.address} form-control`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your property location"
                    name="Address"
                    value={formik.values.Address}
                    onChange={formik.handleChange}
                  ></textarea>
                </div>
                {formik.errors.Address && formik.touched.Address && (
                  <div className="d-flex align-items-center text-danger">
                    <i className="ri-error-warning-line me-1  "></i>
                    <span>{formik.errors.Address}</span>
                  </div>
                )}
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
                    name="BuildingName"
                    value={formik.values.BuildingName}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.BuildingName && formik.touched.BuildingName && (
                  <div className="d-flex align-items-center text-danger">
                    <i className="ri-error-warning-line me-1  "></i>
                    <span>{formik.errors.BuildingName}</span>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
