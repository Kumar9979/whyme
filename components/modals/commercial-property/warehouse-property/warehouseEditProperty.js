import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../../assets/icons/close.png";
import Image from "next/image";
import styles from "../../../../styles/modals/apartmentEditProperty.module.css";
import Select from "react-select";

import { useFormik } from "formik";
import * as Yup from "yup";
import useScreenSizeDetector from "../../../useScreenSizeDetector";

const WarehouseEditProperty = ({ show, handleClose }) => {
  const [value, setValue1] = useState("4");
  const [optionType, setoptionType] = useState("");
  const numRegex = /^[0-9]+$/;
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useScreenSizeDetector();

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
    valueContainer: (provided, state) => ({
      ...provided,
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

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      TotalFloors: "",
      FloorNumber: "",

      Washrooms: "",
      OpenSites:"",
      FloorsAllowed: "",
      RoadFacing:"",

      FurnishedStatus: "",
      Status: "",
      Transaction: "",
      Amenities: [],
    },

    validationSchema: Yup.object({
      TotalFloors: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      FloorNumber: Yup.number()
        .typeError("invalid value")
        .max(
          Yup.ref("TotalFloors"),
          "Must be less than or equal to TotalFloors"
        )
        .required("Required"),

      Washrooms: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      OpenSites: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      FloorsAllowed: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      RoadFacing: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),

      FurnishedStatus: Yup.string().required("Required"),
      Status: Yup.string().required("Required"),
      Transaction: Yup.string().required("Required"),
      Amenitities: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleClose();
    },
  });

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
  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles.property_features_container}`}
      contentClassName={`${styles.card_radius}`}
    >
      <Modal.Body contentClassName={`${styles.card_radius}`}>
        {" "}
        <div className="px-lg-2">
          <div className={`${styles.heading} d-flex justify-content-between `}>
            <div>
              <span
                className={`${styles.upload_heading_text} fs_20 fw_600 fs_sm_20 `}
              >
                Property Features
              </span>
            </div>
            <div>
              <span onClick={handleClose} className={`${styles.close_icon}`}>
                <Image src={closeIcon} width="23px" height="23px" />
              </span>
            </div>
          </div>
          <hr />
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className=" text-start mt-3">
                <div className="d-flex gx-0">
                  <div className="col-4 col-lg-4">
                    <div className="">
                      <label
                        htmlFor="totalFloors"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Total floors
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`form-label ${styles.total_floors_input} w-75  fs_15 fs_sm_12 p-2`}
                          id="totalFloors"
                          placeholder="Ex : 13"
                          name="TotalFloors"
                          value={formik.values.TotalFloors}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.TotalFloors && formik.touched.TotalFloors && (
                        <div className="d-flex align-items-center text-danger fs_sm_12 fs_13 ">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.TotalFloors}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-4 col-lg-4">
                    <div className="">
                      <label
                        htmlFor="FloorNumber"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 `}
                      >
                        Floor number
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`form-label ${styles.total_floors_input} w-75  fs_15 fs_sm_12 p-2`}
                          id="FloorNumber"
                          placeholder="Ex : 13"
                          name="FloorNumber"
                          value={formik.values.FloorNumber}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.FloorNumber && formik.touched.FloorNumber && (
                        <div className="d-flex align-items-center text-danger fs_sm_12 fs_13 ">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.FloorNumber}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="">
                      <div className={`${styles.total_floors_text}  `}>
                        <label
                          htmlFor="FurnishedStatus"
                          className={`form-label ${styles.total_floors_text} text-nowrap fs_15 fs_sm_12 fw_500`}
                        >
                          Furnishing status{" "}
                        </label>
                        <div
                          onMouseEnter={() => setMenuOpen(true)}
                          onClick={() => setoptionType("furnishingStatus")}
                        >
                          <Select
                            // menuIsOpen={menuOpen}
                            id="FurnishedStatus"
                            options={furnishingStatus}
                            type="text"
                            className={` w-100  fs_15 fs_sm_12 `}
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
                        {formik.errors.FurnishedStatus &&
                          formik.touched.FurnishedStatus && (
                            <div className="d-flex align-items-center text-danger mt-1 mt-lg-2 fs_sm_12 fs_13 ">
                              <i className="ri-error-warning-line me-1  "></i>
                              <span> {formik.errors.FurnishedStatus}</span>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-start mt-3">
                <div className="d-flex gx-0">
                  <div className="col-4 col-lg-4">
                    <div className="">
                      <label
                        htmlFor="Washrooms"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Washrooms
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`form-label ${styles.total_floors_input} w-75  fs_15 fs_sm_12 p-2`}
                          id="Washrooms"
                          placeholder="Ex : 2"
                          name="Washrooms"
                          value={formik.values.Washrooms}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.Washrooms && formik.touched.Washrooms && (
                        <div className="d-flex align-items-center text-danger fs_sm_12 fs_13 ">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.Washrooms}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-6 col-lg-6">
                    <div className="">
                      <label
                        htmlFor="FloorsAllowed"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Floors Allowed for Construction
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`form-label ${styles.total_floors_input} w-100  fs_15 fs_sm_12 p-2`}
                          id="FloorsAllowed"
                          placeholder="Ex : 2"
                          name="FloorsAllowed"
                          value={formik.values.FloorsAllowed}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.FloorsAllowed &&
                        formik.touched.FloorsAllowed && (
                          <div className="d-flex align-items-center text-danger fs_sm_12 fs_13 ">
                            <i className="ri-error-warning-line me-1  "></i>
                            <span>{formik.errors.FloorsAllowed}</span>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                <div className="row gx-0 mt-lg-3">
                  <div className="col-12 col-lg-5 mt-3 mt-lg-0">
                    <div className="">
                      <label
                        htmlFor="OpenSites"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Number of Open Sides
                      </label>
                      <div>
                        <input
                          type="text"
                          className={width < 992 ? `form-label ${styles.total_floors_input} w-100 fs_15 fs_sm_12 p-2` : `form-label ${styles.total_floors_input} w-75 fs_15 fs_sm_12 p-2`}
                          id="OpenSites"
                          placeholder="Ex : 2"
                          name="OpenSites"
                          value={formik.values.OpenSites}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.OpenSites && formik.touched.OpenSites && (
                        <div className="d-flex align-items-center text-danger fs_sm_12 fs_13 ">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.OpenSites}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 ">
                    <div className="">
                      <label
                        htmlFor="RoadFacing"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Width of Road Facing the Plot(in meters)
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`form-label ${styles.total_floors_input} w-100  fs_15 fs_sm_12 p-2`}
                          id="RoadFacing"
                          placeholder="Ex : 2"
                          name="RoadFacing"
                          value={formik.values.RoadFacing}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.RoadFacing &&
                        formik.touched.RoadFacing && (
                          <div className="d-flex align-items-center text-danger fs_sm_12 fs_13 ">
                            <i className="ri-error-warning-line me-1  "></i>
                            <span>{formik.errors.RoadFacing}</span>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                <div class=" text-start mt-3">
                  <div className={ `row `}>
                    <div class="col-5">
                      <div class="">
                        <div className={`${styles.total_floors_text} `}>
                          <label
                            htmlFor="Status"
                            className={`form-label ${styles.total_floors_text} text-nowrap fs_15 fs_sm_12 fw_500 ms-2 ms-lg-0`}
                          >
                            Status{" "}
                          </label>
                          <div onClick={() => setoptionType("status")}>
                            <Select
                              id="Status"
                              options={status}
                              type="text"
                              className={` w-100  fs_15 fs_sm_12 `}
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
                          {formik.errors.Status && formik.touched.Status && (
                            <div className="d-flex align-items-center text-danger mt-1 mt-lg-2 fs_sm_12 fs_13 ">
                              <i className="ri-error-warning-line me-1 "></i>
                              <span> {formik.errors.Status}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="col-5">
                      <div class="">
                        <div className={`${styles.total_floors_text}  mb-3`}>
                          <label
                            htmlFor="Transaction"
                            className={`form-label ${styles.total_floors_text} text-nowrap fs_15 fs_sm_12 fw_500`}
                          >
                            Transaction{" "}
                          </label>
                          <div onClick={() => setoptionType("transaction")}>
                            <Select
                              id="Transaction"
                              options={transaction}
                              type="text"
                              className={` w-100  fs_15 fs_sm_12 `}
                              placeholder="Select.."
                              styles={customStyles}
                              name="Transaction"
                              value={transaction.filter((option) => {
                                return (
                                  option.value === formik.values.Transaction
                                );
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
                          {formik.errors.Transaction &&
                            formik.touched.Transaction && (
                              <div className="d-flex align-items-center text-danger mt-1 fs_sm_12 fs_13 ">
                                <i className="ri-error-warning-line me-1  "></i>
                                <span> {formik.errors.Transaction}</span>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`d-flex justify-content-end`}>
              <button
                type="submit"
                className={`${styles.save_btn} px-4 px-lg-5 py-lg-2 py-1 fs_12 fs_sm_15 mt-2`}
              >
                <span>Save</span>
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WarehouseEditProperty;
