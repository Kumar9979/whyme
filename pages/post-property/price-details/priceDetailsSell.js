import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../styles/postProperty/pricedetails.module.css";
import Steeper from "../property-details/Steeper";
import { useRouter } from "next/router";
import Navbar from "../../navbar/navbar";
import StepperNew from "../../stepper/stepper";
const PriceDetailsSell = () => {
  const [currentPage, setCurrentPage] = useState("priceDetails");

  const numRegex = /^[0-9]+$/;
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      SuperArea: "",
      CarpetArea: "",
      ExpectedPrice: "",
      MaintenanceFees: "",
    },

    validationSchema: Yup.object({
      SuperArea: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      CarpetArea: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
      ExpectedPrice: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
      // RentPrice: Yup.string()
      //   .matches(numRegex, "invalid value")
      //   .required("Required"),
      MaintenanceFees: Yup.string()
        .matches(numRegex, "invalid value")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      router.push(
        "/post-property/propertyUpload/propertyUpload"
      )
    },
  });

  return (
    <div>
      <Navbar/>
    <div className="container mt-5 pt-5">
      <div className={`row`}>
        <div className={`col-lg-4 col-md-12 p-5 ${styles.bg_color_1D72DB} `}>
          {/* <div className={`${styles.sidebar}`}>
            <div className={`${styles.progressbar} p-5 `}>
              <Steeper active={3} />
            </div>
          </div> */}
          <StepperNew  currentPage={currentPage}/>
        </div>
        <div
          className={`${styles.input_container}  d-flex justify-content-center align-items-center col-lg-6 py-5`}
        >
          {/* <div>stepper</div> */}

          <div className="">
            <div className={`mb-4`}>
              <h5
                className={`${styles.color_1D72DB} ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_24}`}
              >
                Price Details
              </h5>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className={``}>
                <div className={`row  mb-4`}>
                  <div className={`col-lg-6 col-sm-12 `}>
                    <label
                      htmlFor="SuperArea"
                      className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                    >
                      Super Area
                    </label>
                    <div
                      className={`${styles.propetyfeature_input} w-100  d-flex`}
                    >
                      <input
                        type="text"
                        className={`form-label ps-2 pe-2  pt-2 w-100  ${styles.propetyfeature_input}`}
                        id="SuperArea"
                        placeholder="Enter super area"
                        name="SuperArea"
                        value={formik.values.SuperArea}
                        onChange={formik.handleChange}
                      />
                      <div
                        className={`d-flex justify-content-center align-items-center`}
                      >
                        <span className={`${styles.input_bar} mx-2`}></span>
                        <span
                          className={`${styles.fontFam_poppins} ${styles.font_medium} align-middle me-3`}
                        >
                          Sqft
                        </span>
                      </div>
                    </div>
                    {formik.errors.SuperArea && formik.touched.SuperArea && (
                      <div className="d-flex align-items-center text-danger">
                        <i className="ri-error-warning-line me-1  "></i>
                        <span>{formik.errors.SuperArea}</span>
                      </div>
                    )}
                  </div>
                  <div className={`col-lg-6 col-sm-12`}>
                    <label
                      htmlFor="CarpetArea"
                      className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                    >
                      Carpet Area
                    </label>
                    <div
                      className={`${styles.propetyfeature_input} w-100 d-flex`}
                    >
                      <input
                        type="text"
                        className={`form-label ps-2 pe-2  pt-2  w-100   ${styles.propetyfeature_input}`}
                        id="CarpetArea"
                        placeholder="Enter carpet area"
                        name="CarpetArea"
                        value={formik.values.CarpetArea}
                        onChange={formik.handleChange}
                      />
                      <div
                        className={`d-flex justify-content-center align-items-center`}
                      >
                        <span className={`${styles.input_bar} mx-2`}></span>
                        <span
                          className={`${styles.fontFam_poppins} ${styles.font_medium} align-middle me-3`}
                        >
                          Sqft
                        </span>
                      </div>
                    </div>
                    {formik.errors.CarpetArea && formik.touched.CarpetArea && (
                      <div className="d-flex align-items-center text-danger">
                        <i className="ri-error-warning-line me-1  "></i>
                        <span>{formik.errors.CarpetArea}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className={`mb-4`}>
                  <label
                    htmlFor="ExpectedPrice"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                  >
                    Expected Price
                  </label>
                  <div className={`${styles.propetyfeature_input} d-flex`}>
                    <div
                      className={`d-flex justify-content-center align-items-center`}
                    >
                      <span
                        className={`${styles.fontFam_roboto} ${styles.font_regular} ${styles.font_24}  align-middle ms-2`}
                      >
                        ₹
                      </span>
                      <span className={`${styles.input_bar} mx-2`}></span>
                    </div>
                    <input
                      type="text"
                      className={`form-label ps-2 pe-2  pt-2   w-100 ${styles.propetyfeature_input} `}
                      id="ExpectedPrice"
                      placeholder="Enter property price"
                      name="ExpectedPrice"
                      value={formik.values.ExpectedPrice}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.ExpectedPrice && formik.touched.ExpectedPrice && (
                    <div className="d-flex align-items-center text-danger">
                      <i className="ri-error-warning-line me-1  "></i>
                      <span>{formik.errors.ExpectedPrice}</span>
                    </div>
                  )}
                </div>

                <div className={"mb-4"}>
                  <label
                    htmlFor="MaintenanceFees"
                    className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                  >
                    Maintenance Fees
                  </label>
                  <div className={`${styles.propetyfeature_input} d-flex`}>
                    <div
                      className={`d-flex justify-content-center align-items-center`}
                    >
                      <span
                        className={`${styles.fontFam_roboto} ${styles.font_regular} ${styles.font_24} align-middle ms-2`}
                      >
                        ₹
                      </span>{" "}
                      <span className={`${styles.input_bar} mx-2`}></span>
                    </div>

                    <input
                      type="text"
                      className={`form-label ps-2 pe-2  pt-2   w-100  ${styles.propetyfeature_input}`}
                      id="MaintenanceFees"
                      placeholder="Enter maintenance price"
                      name="MaintenanceFees"
                      value={formik.values.MaintenanceFees}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.MaintenanceFees &&
                    formik.touched.MaintenanceFees && (
                      <div className="d-flex align-items-center text-danger">
                        <i className="ri-error-warning-line me-1  "></i>
                        <span>{formik.errors.MaintenanceFees}</span>
                      </div>
                    )}
                </div>
              </div>

              <div
                className={`${styles.PriceDetails_margin_top_res} d-flex justify-content-end `}
              >
                <div className={`d-flex`}>
                  <button type="button"   onClick={() =>
                        router.push(
                          "/post-property/property-features/propertyFeatures"
                        )
                      } className={`bg-white border-0  `}>
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
                    className={`${styles.bg_color_1D72DB} ms-3 text-white d-flex justify-content-between align-items-center rounded-3 border-0  px-3 py-2`}
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

export default PriceDetailsSell;
