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
  const [cornerShop, setCornerShop] = useState("yes");
  const [personalWashroom, setPersonalWashroom] = useState("yes");
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
                  className={`color_light_blue fontFam_poppins ${styles.font_medium} ${styles.font_24}`}
                >
                  Property Features
                </h5>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className={`${styles.propertyFeature_padding_l_res}`}>
                  <div className={`${styles.amenities_list_flex_res} `}>
                    <div className="mb-1 ">
                      <label
                        htmlFor="FloorNumber"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                      >
                        Floor Number
                      </label>
                      <div>
                        <input
                          type="text"
                          className={` ${styles.propertyFeature_width_75_to_100} mb-1 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                          id="FloorNumber"
                          placeholder="Ex : 13"
                          name="FloorNumber"
                          value={formik.values.FloorNumber}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className={`${styles.error_container}`}>
                        {formik.errors.FloorNumber &&
                          formik.touched.FloorNumber && (
                            <div className="d-flex align-items-center text-danger">
                              <i
                                style={{ fontSize: 12, marginRight: ".1rem" }}
                                className="ri-error-warning-line   "
                              ></i>
                              <span className={`fs_12 lh-base `}>
                                {formik.errors.FloorNumber}
                              </span>
                            </div>
                          )}
                      </div>
                    </div>

                    <div className="mb-1">
                      <label
                        htmlFor="TotalFloors"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                      >
                        Total Floors
                      </label>
                      <div>
                        <input
                          type="text"
                          className={` ${styles.propertyFeature_width_75_to_100} mb-1 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                          id="TotalFloors"
                          placeholder="Ex : 7"
                          name="TotalFloors"
                          value={formik.values.TotalFloors}
                          onChange={formik.handleChange}
                        />
                      </div>
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
                      </div>
                    </div>

                    <div className="   mb-1">
                      <label
                        htmlFor="FurnishedStatus"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                      >
                        Furnishing Status{" "}
                      </label>
                      <div
                        className={`mb-1`}
                        onClick={() => setoptionType("furnishingStatus")}
                      >
                        <Select
                          id="FurnishedStatus"
                          options={furnishingStatus}
                          type="text"
                          placeholder="Select.."
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
                      <div className={`${styles.error_container}`}>
                        {formik.errors.FurnishedStatus &&
                          formik.touched.FurnishedStatus && (
                            <div className="d-flex align-items-center text-danger">
                              <i
                                style={{ fontSize: 12, marginRight: ".1rem" }}
                                className="ri-error-warning-line   "
                              ></i>
                              <span className={`fs_12 lh-base `}>
                                {formik.errors.FurnishedStatus}
                              </span>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles.amenities_list_flex_res} mb-2 mt-2`}
                  >
                    <div className="mb-1 ">
                      <label
                        htmlFor="Washrooms"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                      >
                        Washrooms
                      </label>
                      <div>
                        <input
                          type="text"
                          className={` ${styles.propertyFeature_width_75_to_100} mb-1 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                          id="Washrooms"
                          placeholder="Ex : 13"
                          name="Washrooms"
                          value={formik.values.Washrooms}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className={`${styles.error_container}`}>
                        {formik.errors.Washrooms && formik.touched.Washrooms && (
                          <div className="d-flex align-items-center text-danger">
                            <i
                              style={{ fontSize: 12, marginRight: ".1rem" }}
                              className="ri-error-warning-line   "
                            ></i>
                            <span className={`fs_12 lh-base `}>
                              {formik.errors.Washrooms}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mb-1 ">
                      <label
                        htmlFor="floorAllowed"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
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
                  </div>

                  <div className={`${styles.amenities_list_flex_res} mt-2`}>
                    <div className="mb-1 me-0 me-lg-5 ">
                      <label
                        htmlFor="NoOfOpenSides"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                      >
                        Number of Open Sides
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`w-100 mb-1 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                          id="NoOfOpenSides"
                          placeholder="Ex : 13"
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
                    <div className="mb-1 ">
                      <label
                        htmlFor="widthOfRoad"
                        className={`form-label  ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                      >
                        Width of Road Facing the Plot(in meters)
                      </label>
                      <div>
                        <input
                          type="text"
                          className={` w-100 mb-1 ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
                          id="widthOfRoad"
                          placeholder="Ex : 13"
                          name="widthOfRoad"
                          value={formik.values.widthOfRoad}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className={`${styles.error_container}`}>
                        {formik.errors.widthOfRoad &&
                          formik.touched.widthOfRoad && (
                            <div className="d-flex align-items-center text-danger">
                              <i
                                style={{ fontSize: 12, marginRight: ".1rem" }}
                                className="ri-error-warning-line   "
                              ></i>
                              <span className={`fs_12 lh-base `}>
                                {formik.errors.widthOfRoad}
                              </span>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.amenities_list_flex_res} mt-2`}>
                    <div
                      className={`me-5 ${styles.propertyFeature_width_50_to_100} mb-1`}
                    >
                      <label
                        htmlFor="Status"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                      >
                        Status{" "}
                      </label>
                      <div
                        className={`mb-1`}
                        onClick={() => setoptionType("status")}
                      >
                        <Select
                          id="Status"
                          options={status}
                          type="text"
                          placeholder="Select.."
                          styles={customStyles}
                          name="Status"
                          value={status.filter((option) => {
                            return option.value === formik.values.Status;
                          })}
                          onChange={(selectedOption) => {
                            let event = {
                              target: {
                                name: "Status",
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
                      <div className={`${styles.error_container}`}>
                        {formik.errors.Status && formik.touched.Status && (
                          <div className="d-flex align-items-center text-danger">
                            <i
                              style={{ fontSize: 12, marginRight: ".1rem" }}
                              className="ri-error-warning-line   "
                            ></i>
                            <span className={`fs_12 lh-base `}>
                              {formik.errors.Status}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={`mb-1 ${styles.propertyFeature_width_50_to_100}`}
                    >
                      <label
                        htmlFor="Transaction"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                      >
                        Transaction{" "}
                      </label>
                      <div
                        className={`mb-1 ${styles.propertyFeature_width_75_to_100}`}
                        onClick={() => setoptionType("transaction")}
                      >
                        <Select
                          id="Transaction"
                          options={transaction}
                          type="text"
                          placeholder="Select.."
                          styles={customStyles}
                          name="Transaction"
                          value={transaction.filter((option) => {
                            return option.value === formik.values.Transaction;
                          })}
                          onChange={(selectedOption) => {
                            let event = {
                              target: {
                                name: "Transaction",
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
                      <div className={`${styles.error_container}`}>
                        {formik.errors.Transaction &&
                          formik.touched.Transaction && (
                            <div className="d-flex align-items-center text-danger">
                              <i
                                style={{ fontSize: 12, marginRight: ".1rem" }}
                                className="ri-error-warning-line   "
                              ></i>
                              <span className={`fs_12 lh-base `}>
                                {formik.errors.Transaction}
                              </span>
                            </div>
                          )}
                      </div>
                    </div>{" "}
                  </div>
                  {/* CHECKBOX ITEMS */}

                  <div className={`content-fourth-line mt-4 mt-lg-3 `}>
                    <div className={`content-fourth-name mb-2`}>
                      <h5
                        className={`${styles.font_20} ${styles.font_regular} fontFam_poppins`}
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
                          id="Godown For Any Dry Storage"
                          name="Godown For Any Dry Storage"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Godown For Any Dry Storage"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Godown For Any Dry Storage"
                        >
                          Godown For Any Dry Storage
                        </label>
                      </div>

                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Distribution Center"
                          name="Distribution Center"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Distribution Center"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Distribution Center"
                        >
                          Distribution Center
                        </label>
                      </div>
                    </div>
                    <div className={`${styles.amenities_list_flex_res}`}>
                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2 "
                          type="checkbox"
                          id="Godown For Cold Storage"
                          name="Godown For Cold Storage"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Godown For Cold Storage"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Godown For Cold Storage"
                        >
                          Godown For Cold Storage
                        </label>
                      </div>

                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Godown With Climate Control"
                          name="Godown With Climate Control"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Godown With Climate Control"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Godown With Climate Control"
                        >
                          Godown With Climate Control
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
                          className={` color_light_blue fontFam_poppins ${styles.font_medium} ${styles.font_18} align-middle`}
                        >
                          Back
                        </span>
                      </button>
                      <button
                        type="submit"
                        className={`${styles.bg_color_1D72DB} text-white d-flex justify-content-between align-items-center rounded-3 border-0 ms-3  px-3 py-2`}
                      >
                        <span
                          className={` fontFam_poppins ${styles.font_medium} ${styles.font_18} align-middle`}
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
