import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/postProperty/propertyfeatures.module.css";
import Select from "react-select";
import { useRouter } from "next/router";
import StepperNew from "../../../stepper/stepper";

const propertyFeatures = () => {
  const [value, setValue1] = useState("4");
  const [optionType, setoptionType] = useState("");
  const [currentPage, setCurrentPage] = useState("propertyFeatures");

  const router = useRouter();
  const numRegex = /^[0-9]+$/;
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#F4F8FB",
      // match with the menu
      borderRadius: "7px",
      width: "100%",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#1D72DB" : "#F4F8FB",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#1D72DB" : "#F4F8FB",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#1D72DB" : null,
      borderBottom: "1px solid #F5F5F5",
      fontFamily: "Poppins",
      "&:hover": {
        backgroundColor: state.isFocused ? "#1D72DB" : "#1D72DB",
      },
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#BCC7CE",
        fontFamily: "Poppins",
        fontSize: "0.8rem",
      };
    },
    dropdownIndicator: (provided) => ({
      ...provided,
      svg: {
        fill: "#323D5A",
      },
    }),
  };

  const facing = [
    { value: "North", label: "North" },
    { value: "South", label: "South" },
    { value: "East", label: "East" },
    { value: "West", label: "West" },
  ];
  const status = [
    { value: "Ready To Move", label: "Ready To Move" },
    { value: "Under Construction", label: "Under Construction" },
  ];

  const furnishingStatus = [
    { value: "Furnished", label: "Furnished" },
    { value: "Unfurnished", label: "Unfurnished" },
  ];
  const transaction = [
    { value: "Resale", label: "Resale" },
    { value: "Fresh", label: "Fresh" },
  ];
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      NoOfOpenSides: "",
      FloorsAllowed: "",
      Amenities: [],
    },
    validationSchema: Yup.object({
      NoOfOpenSides: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      FloorsAllowed: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      Amenitities: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      router.push("/post-property/price-details/priceDetailsSell");
    },
  });

  const handleCheckbox = (e) => {
    const { checked, name } = e.target;
    if (e.target.checked) {
      formik.setFieldValue("Amenities", [
        ...formik.values.Amenities,
        e.target.name,
      ]);
    } else {
      formik.setFieldValue(
        "Amenities",
        formik.values.Amenities.filter((item) => item !== e.target.name)
      );
    }
  };

  console.log(formik.values);

  return (
    <div>
      <div className={`${styles.whole_container} container mb-5 mb-lg-5`}>
        <div className={`row justify-content-center mx-0 mx-lg-2 mx-lg-0`}>
          <div
            className={`col-lg-3 col-md-12  ${styles.property_boxShadow} ${styles.stepper_border_radius} ${styles.bg_color_1D72DB} `}
          >
            {" "}
            <StepperNew currentPage={currentPage} />
          </div>

          <div
            className={` ${styles.property_boxShadow} ${styles.propertyFeature_border_radius}  col-lg-8 col-xl-6 col-12 pt-5 pb-4 px-lg-3  px-2`}
          >
            {/* <div className={`col-lg-6 col-md-12 py-5 px-3` }> */}
            <div className={`${styles.input_container}`}>
              <div className={`  mb-4`}>
                <h5
                  className={`${styles.color_1D72DB} ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_24}`}
                >
                  Property Features
                </h5>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className={`${styles.propertyFeature_padding_l_res}`}>
                  <div className={`d-flex gap-5 `}>
                    <div className="mb-1">
                      <label
                        htmlFor="FloorsAllowed"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                      >
                        Floors allowed for construction
                      </label>
                      <div>
                        <input
                          type="text"
                          className={` w-100 mb-1 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                          id="FloorsAllowed"
                          placeholder="Ex : 13"
                          name="FloorsAllowed"
                          value={formik.values.FloorsAllowed}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className={`${styles.error_container}`}>
                        {formik.errors.FloorsAllowed &&
                          formik.touched.FloorsAllowed && (
                            <div className="d-flex align-items-center text-danger">
                              <i
                                style={{ fontSize: 12, marginRight: ".1rem" }}
                                className="ri-error-warning-line   "
                              ></i>
                              <span className={`fs_12 lh-base `}>
                                {formik.errors.FloorsAllowed}
                              </span>
                            </div>
                          )}
                      </div>
                    </div>

           

                    <div className=" mb-1 ">
                      <label
                        htmlFor="TotalFloors"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                      >
                        No. of Open Sides
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`mb-1 w-100 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                          id="TotalFloors"
                          placeholder="Ex : 3"
                          name="TotalFloors"
                          value={formik.values.TotalFloors}
                          onChange={formik.handleChange}
                        />
                      </div>{" "}
                      <div className={`${styles.error_container}`}>
                        {formik.errors.TotalFloors &&
                          formik.touched.TotalFloors && (
                            <div className="d-flex align-items-center text-danger">
                              <i
                                style={{ fontSize: 12, marginRight: ".1rem" }}
                                className="ri-error-warning-line   "
                              ></i>
                              <span className={`fs_12 lh-base `}>
                                {formik.errors.TotalFloors}
                              </span>
                            </div>
                          )}
                      </div>{" "}
                    </div>
                  </div>

                  {/* CHECKBOX ITEMS */}

                  <div className={`content-fourth-line mt-4 mt-lg-3 `}>
                    <div className={`content-fourth-name mb-2`}>
                      <h5
                        className={`${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                      >
                        Amenities
                      </h5>
                    </div>
                    {/* CHECKBOX ITEMS LIST  */}

                    <div className={`${styles.amenities_list_flex_res}`}>
                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2 "
                          type="checkbox"
                          id="Basic Amenities"
                          name="Basic Amenities"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Basic Amenities"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins} ${styles.amenities_list_title}`}
                          htmlFor="Basic Amenities"
                        >
                          Basic Amenities
                        </label>
                      </div>

                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Underground Drainage System"
                          name="Underground Drainage System"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Underground Drainage System"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins} ${styles.amenities_list_title}`}
                          htmlFor="Underground Drainage System"
                        >
                          Underground Drainage System
                        </label>
                      </div>

                  
                    </div>

                    <div className={`${styles.amenities_list_flex_res}  `}>
                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input mt-2 rounded-0"
                          type="checkbox"
                          id="Highway Access"
                          name="Highway Access"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Highway Access"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins} ${styles.amenities_list_title}`}
                          htmlFor="Highway Access"
                        >
                          Highway Access
                        </label>
                      </div>

                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Main Road Access"
                          name="Main Road Access"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Main Road Access"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins} ${styles.amenities_list_title}`}
                          htmlFor="Main Road Access"
                        >
                     Main Road Access
                        </label>
                      </div>

                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Electricity Line"
                          name="Electricity Line"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes("Electricity Line")}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins} ${styles.amenities_list_title}`}
                          htmlFor="Electricity Line"
                        >
         Electricity Line
                        </label>
                      </div>
                    </div>

                
                  </div>

                  <div
                    className={`content-btn d-flex justify-content-end mt-4 me-0 me-lg-3`}
                  >
                    <div className={`d-flex`}>
                      <button
                        type="button"
                        onClick={() =>
                          router.push(
                            "/post-property/property-details/propertyDetails"
                          )
                        }
                        className={`bg-white border-0 `}
                      >
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
                        className={`${styles.bg_color_1D72DB} text-white d-flex justify-content-between align-items-center rounded-3 border-0 ms-3  px-3 py-2`}
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
                          {/* <Image className={styles.modal_icon_arrowRightbtn} src={
                        
arrowRightIcon} alt="arrowRightIcon" width={14} height={14} /> */}
                        </div>
                      </button>
                    </div>
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

export default propertyFeatures;
