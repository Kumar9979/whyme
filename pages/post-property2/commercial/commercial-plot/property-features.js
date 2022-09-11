import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../../../styles/postProperty/propertyfeatures.module.css";
import { useRouter } from "next/router";
import StepperNew from "../../../stepper/stepper";

const CommercialPlotPropertyFeatures = () => {
  const [value, setValue1] = useState("4");
  const [optionType, setoptionType] = useState("");
  const [currentPage, setCurrentPage] = useState("propertyFeatures");
  const [boundary, setBoundary] = useState("yes");
  const [reraReg, setReraReg] = useState("yes");
  const [mainRoad, setMainRoad] = useState("yes");
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
      FloorNumber: "",
      floorAllowed: "",
      TotalFloors: "",
      Washrooms: "",
      TotalFloors: "",
      NoOfOpenSides: "",
      facing: "",
      AgeOfConstruction: "",
      FurnishedStatus: "",
      Status: "",
      Transaction: "",
      FloorsAllowed: "",
      roadFaceWidth: "",
      Amenities: [],
    },

    validationSchema: Yup.object({
      FloorNumber: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      TotalFloors: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      Washrooms: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      TotalFloors: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      NoOfOpenSides: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      AgeOfConstruction: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      FloorsAllowed: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      facing: Yup.string().required("Required"),
      FurnishedStatus: Yup.string().required("Required"),
      Status: Yup.string().required("Required"),
      Transaction: Yup.string().required("Required"),
      Amenitities: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      router.push("/post-property/price-details/priceDetailsSell");
    },
  });
  function HandleReraStatus(e) {
    setReraReg(e.target.value);
    let event = {
      target: {
        name: "RERA",
        value: e.target.value,
      },
    };
    formik.handleChange(event);
  }
  function handleBoundarywall(e) {
    setBoundary(e.target.value);
    let event = {
      target: {
        name: "BoundaryWall",
        value: e.target.value,
      },
    };
    formik.handleChange(event);
  }
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
            className={` ${styles.property_boxShadow} ${styles.propertyFeature_border_radius}  col-lg-9 col-xl-8  col-xxl-7 col-md-12 pt-5 pb-4 px-lg-3  px-2`}
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
                <div className={`${styles.propertyFeature_padding_l_res} `}>
                  <div className={`${styles.amenities_list_flex_res}  `}>
                    <div className="mb-1">
                      <label
                        htmlFor="NoOfOpenSides"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                      >
                        No. of open Sides
                      </label>
                      <div>
                        <input
                          type="text"
                          className={` ${styles.propertyFeature_width_75_to_100} mb-1 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                          id="NoOfOpenSides"
                          placeholder="Ex : 7"
                          name="NoOfOpenSides"
                          value={formik.values.NoOfOpenSides}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className={`${styles.error_container}`}>
                        {formik.errors.NoOfOpenSides &&
                          formik.touched.NoOfOpenSides && (
                            <div className="d-flex align-items-center text-danger">
                              <i
                                style={{ fontSize: 12, marginRight: ".1rem" }}
                                className="ri-error-warning-line   "
                              ></i>
                              <span className={`fs_12 lh-base `}>
                                {formik.errors.NoOfOpenSides}
                              </span>
                            </div>
                          )}
                      </div>
                    </div>

                    <div className="mb-1">
                      <label
                        htmlFor="roadFaceWidth"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                      >
                        Road facing plot width
                      </label>
                      <div>
                        <input
                          type="text"
                          className={` mb-1 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                          id="roadFaceWidth"
                          placeholder="Ex : 7"
                          name="roadFaceWidth"
                          value={formik.values.roadFaceWidth}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className={`${styles.error_container}`}>
                        {formik.errors.roadFaceWidth &&
                          formik.touched.roadFaceWidth && (
                            <div className="d-flex align-items-center text-danger">
                              <i
                                style={{ fontSize: 12, marginRight: ".1rem" }}
                                className="ri-error-warning-line   "
                              ></i>
                              <span className={`fs_12 lh-base `}>
                                {formik.errors.roadFaceWidth}
                              </span>
                            </div>
                          )}
                      </div>
                    </div>


                  </div>

                  <div
                    className={`${styles.amenities_list_flex_res} gap-0 gap-lg-5 mb-2 mt-2`}
                  >
                    {" "}

                    <div className="mb-1 ">
                      <label
                        htmlFor="floorAllowed"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                      >
                        Floors Allowed for Construction
                      </label>
                      <div>
                        <input
                          type="text"
                          className={` mb-1 w-100 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                          id="floorAllowed"
                          placeholder="Ex : 13"
                          name="floorAllowed"
                          value={formik.values.floorAllowed}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className={`${styles.error_container}`}>
                        {formik.errors.floorAllowed &&
                          formik.touched.floorAllowed && (
                            <div className="d-flex align-items-center text-danger">
                              <i
                                style={{ fontSize: 12, marginRight: ".1rem" }}
                                className="ri-error-warning-line   "
                              ></i>
                              <span className={`fs_12 lh-base `}>
                                {formik.errors.floorAllowed}
                              </span>
                            </div>
                          )}
                      </div>
                    </div>


                    <div className="col-6  mb-4 mb-lg-0">
                      <div
                        className={`text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 mb-1`}
                      >
                        Boundary Wall
                      </div>
                      <div className="d-flex ">
                        <input
                          className={` ms-1 cursor_pointer`}
                          name="boundaryWall"
                          id="boundaryWallYes"
                          type="radio"
                          value="yes"
                          checked={boundary === "yes"}
                          onChange={handleBoundarywall}
                        />
                        <label
                          htmlFor="boundaryWallYes"
                          className={
                            boundary === "yes"
                              ? `${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                              : `${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          }
                        >
                          Yes
                        </label>
                        <input
                          className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer ms-3`}
                          name="boundaryWall"
                          id="boundaryWallNo"
                          type="radio"
                          value="no"
                          checked={boundary === "no"}
                          onChange={handleBoundarywall}
                        />{" "}
                        <label
                          htmlFor="boundaryWallNo"
                          className={
                            boundary === "no"
                              ? `${styles.total_floors_text}   fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                              : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          }
                        >
                          No
                        </label>
                      </div>
                    </div>

                  </div>

                  <div className={`${styles.amenities_list_flex_res}  mt-2`}>







                    <div className="col-6 ">
                      <div
                        className={`text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 mb-1`}
                      >
                        RERA Registration Status
                      </div>
                      <div className="d-flex ">
                        <input
                          className={` ms-1 cursor_pointer`}
                          name="reraReg"
                          id="yesCorner"
                          type="radio"
                          value="yes"
                          checked={reraReg === "yes"}
                          onChange={HandleReraStatus}
                        />
                        <label
                          htmlFor="yesCorner"
                          className={
                            reraReg === "yes"
                              ? `${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                              : `${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          }
                        >
                          Yes
                        </label>
                        <input
                          className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer ms-3`}
                          name="reraReg"
                          id="noCorner"
                          type="radio"
                          value="no"
                          checked={reraReg === "no"}
                          onChange={HandleReraStatus}
                        />{" "}
                        <label
                          htmlFor="noCorner"
                          className={
                            reraReg === "no"
                              ? `${styles.total_floors_text}   fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                              : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          }
                        >
                          No
                        </label>
                      </div>
                    </div>



                  </div>

                  {/* CHECKBOX ITEMS */}

                  <div className={`content-fourth-line mt-4 mt-lg-4 `}>
                    <div className={`content-fourth-name mb-2`}>
                      <h5
                        className={`${styles.font_20} ${styles.font_regular} ${styles.fontFam_poppins}`}
                      >
                        Suitable for
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
                          id="Any Construction"
                          name="Any Construction"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Any Construction"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins} ${styles.amenities_list_title}`}
                          htmlFor="Any Construction"
                        >
                          Any Construction
                        </label>
                      </div>

                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Industrial Construction"
                          name="Industrial Construction"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Industrial Construction"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins} ${styles.amenities_list_title}`}
                          htmlFor="Industrial Construction"
                        >
                          Industrial Construction
                        </label>
                      </div>
                    </div>


                  </div>

                  <div
                    className={`content-btn d-flex justify-content-end mt-5 `}
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

export default CommercialPlotPropertyFeatures;
