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
  const [pantryCafeteria, setPantryCafeteria] = useState("yes");
  const [personalWashroom, setPersonalWashroom] = useState("yes");
  const [cornerShop, setCornerShop] = useState("yes");
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
  function handlePantryCafeteria(e) {
    setPantryCafeteria(e.target.value);
    let event = {
      target: {
        name: "pantryCafeteria",
        value: e.target.value,
      },
    };
    formik.handleChange(event);
  }
  function handlePersonalWashroom(e) {
    setPersonalWashroom(e.target.value);
    let event = {
      target: {
        name: "personalWashroom",
        value: e.target.value,
      },
    };
    formik.handleChange(event);
  }
  function handleCornerShop(e) {
    setCornerShop(e.target.value);
    let event = {
      target: {
        name: "cornerShop",
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

                    <div className="  mb-1  ">
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

                    <div
                      className={`${styles.property_features_list_container}   mb-1 `}
                    >
                      <label
                        htmlFor="Washrooms"
                        className={`form-label text-nowrap ${styles.font_20} ${styles.font_regular} fontFam_poppins`}
                      >
                        Washrooms
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`form-label ${styles.propertyFeature_width_75_to_100} ps-2 pe-2  pt-2 pb-2 ${styles.propetyfeature_input}`}
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
                      </div>{" "}
                    </div>
                  </div>

                  <div
                    className={`${styles.amenities_list_flex_res} mb-2 mt-2`}
                  >
                    <div className="row gx-4  mb-4 mb-lg-0">
                      <div className="col-4 mb-4 mb-lg-3">
                        <div
                          className={`text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 mb-1`}
                        >
                          Corner Shop
                        </div>
                        <div className="d-flex ">
                          <input
                            className={` ms-1 cursor_pointer`}
                            name="cornerShop"
                            id="yes"
                            type="radio"
                            value="yes"
                            checked={cornerShop === "yes"}
                            onChange={handleCornerShop}
                          />
                          <label
                            htmlFor="yes"
                            className={
                              cornerShop === "yes"
                                ? `${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                                : `${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                            }
                          >
                            Yes
                          </label>
                          <input
                            className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer ms-3`}
                            name="conerShop"
                            id="no"
                            type="radio"
                            value="no"
                            checked={cornerShop === "no"}
                            onChange={handleCornerShop}
                          />{" "}
                          <label
                            htmlFor="no"
                            className={
                              cornerShop === "no"
                                ? `${styles.total_floors_text}   fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                                : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                            }
                          >
                            No
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4 mb-4 mb-sm-0">
                        <div
                          className={`text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 mb-1`}
                        >
                          Pantry/Cafeteria
                        </div>
                        <div className="d-flex">
                          <input
                            className={` ms-1 cursor_pointer`}
                            name="PantryCafeteria"
                            id="yesGated"
                            type="radio"
                            value="yes"
                            checked={pantryCafeteria === "yes"}
                            onChange={handlePantryCafeteria}
                          />
                          <label
                            htmlFor="yesGated"
                            className={
                              pantryCafeteria === "yes"
                                ? ` ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                                : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                            }
                          >
                            Yes
                          </label>
                          <input
                            className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer ms-3`}
                            name="gatedColony"
                            id="noGated"
                            type="radio"
                            value="no"
                            checked={pantryCafeteria === "no"}
                            onChange={handlePantryCafeteria}
                          />{" "}
                          <label
                            htmlFor="noGated"
                            className={
                              pantryCafeteria === "no"
                                ? ` ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                                : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                            }
                          >
                            No
                          </label>
                        </div>
                      </div>

                      <div className="col-4 ">
                        <div
                          className={`text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 mb-1`}
                        >
                          Personal Washroom
                        </div>
                        <div className="d-flex ">
                          <input
                            className={` ms-1 cursor_pointer`}
                            name="conerSite"
                            id="yesCorner"
                            type="radio"
                            value="yes"
                            checked={personalWashroom === "yes"}
                            onChange={handlePersonalWashroom}
                          />
                          <label
                            htmlFor="yesCorner"
                            className={
                              personalWashroom === "yes"
                                ? `${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                                : `${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                            }
                          >
                            Yes
                          </label>
                          <input
                            className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer ms-3`}
                            name="conerSite"
                            id="noCorner"
                            type="radio"
                            value="no"
                            checked={personalWashroom === "no"}
                            onChange={handlePersonalWashroom}
                          />{" "}
                          <label
                            htmlFor="noCorner"
                            className={
                              personalWashroom === "no"
                                ? `${styles.total_floors_text}   fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                                : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                            }
                          >
                            No
                          </label>
                        </div>
                      </div>

                      <div></div>
                    </div>
                  </div>

                  <div className={`${styles.amenities_list_flex_res} mt-2`}>
                    <div className="me-5 w-100 mb-1">
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
                    <div className={`me-5 w-100 mb-1`}>
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
                    <div className=" mb-1 w-100">
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
                    </div>
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
                          id="Jewelry Mart"
                          name="Jewelry Mart"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Jewelry Mart"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Jewelry Mart"
                        >
                          Jewelry Mart
                        </label>
                      </div>

                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Clothing And Fashion Stores"
                          name="Clothing And Fashion Stores"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Clothing And Fashion Stores"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Clothing And Fashion Stores"
                        >
                          Clothing And Fashion Stores
                        </label>
                      </div>

                      <div
                        className={`form-check me-4  ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Super Markets"
                          name="Super Markets"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Super Markets"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Super Markets"
                        >
                          Super Markets
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
                          id="Department Store"
                          name="Department Store"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Department Store"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Department Store"
                        >
                          Department Store
                        </label>
                      </div>

                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Grocery Shop"
                          name="Grocery Shop"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Grocery Shop"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Grocery Shop"
                        >
                          Grocery Shop
                        </label>
                      </div>

                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Clinics And Polyclinics"
                          name="Clinics And Polyclinics"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Clinics And Polyclinics"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Clinics And Polyclinics"
                        >
                          Clinics And Polyclinics
                        </label>
                      </div>
                    </div>

                    <div className={`${styles.amenities_list_flex_res}  `}>
                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Chemist And Medical Store"
                          name="Chemist And Medical Store"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Chemist And Medical Store"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Chemist And Medical Store"
                        >
                          Chemist And Medical Store
                        </label>
                      </div>
                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Nursing Home"
                          name="Nursing Home"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Nursing Home"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Nursing Home"
                        >
                          Nursing Home
                        </label>
                      </div>
                      <div className={`form-check ${styles.margin_bottom}`}>
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Optician"
                          name="Optician"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes("Optician")}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Optician"
                        >
                          Optician
                        </label>
                      </div>
                    </div>

                    <div className={`${styles.amenities_list_flex_res}  `}>
                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Stationery"
                          name="Stationery"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Stationery"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Stationery"
                        >
                          Stationery
                        </label>
                      </div>
                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Beauty Parlor/Hairdresser"
                          name="Beauty Parlor/Hairdresser"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Beauty Parlor/Hairdresser"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Beauty Parlor/Hairdresser"
                        >
                          Beauty Parlor/Hairdresser
                        </label>
                      </div>
                      <div className={`form-check ${styles.margin_bottom}`}>
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Book Shop"
                          name="Book Shop"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Book Shop"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Book Shop"
                        >
                          Book Shop
                        </label>
                      </div>
                    </div>

                    <div className={`${styles.amenities_list_flex_res}  `}>
                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Pet Shop/ Pet Clinic"
                          name="Pet Shop/ Pet Clinic"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Pet Shop/ Pet Clinic"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Pet Shop/ Pet Clinic"
                        >
                          Pet Shop/ Pet Clinic
                        </label>
                      </div>
                      <div
                        className={`form-check me-4 ${styles.margin_bottom}`}
                      >
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Butcher Shop"
                          name="Butcher Shop"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes(
                            "Butcher Shop"
                          )}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Butcher Shop"
                        >
                          Butcher Shop
                        </label>
                      </div>
                      <div className={`form-check ${styles.margin_bottom}`}>
                        <input
                          className="form-check-input rounded-0 mt-2"
                          type="checkbox"
                          id="Gyms"
                          name="Gyms"
                          onChange={handleCheckbox}
                          checked={formik.values.Amenities.includes("Gyms")}
                        />
                        <label
                          className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  fontFam_poppins ${styles.amenities_list_title}`}
                          htmlFor="Gyms"
                        >
                          Gyms
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
