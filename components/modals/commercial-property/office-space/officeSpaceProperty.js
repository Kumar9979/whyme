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

const OfficeSpaceProperty = ({ show, handleClose }) => {
  const [value, setValue1] = useState("4");
  const [discloseIdentity, setDiscloseIdentity] = useState("no");
  const [washroom, setWashroom] = useState("no");
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
    initialValues: {
      TotalFloors: "",
      FloorNumber: "",
      WashRoom: "",

      cafeteria: "no",
      PersonalWashRoom: "no",
      FurnishedStatus: "",
      Status: "",
      Transaction: "",
    },

    validationSchema: Yup.object({
      TotalFloors: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      FloorNumber: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),

      WashRoom: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),

      cafeteria: Yup.string(),
      PersonalWashRoom: Yup.string(),
      FurnishedStatus: Yup.string().required("Required"),
      Status: Yup.string().required("Required"),
      Transaction: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleClose();
    },
  });

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

  function handleRadioButton(e) {
    // setDiscloseIdentity(e.target.value);
    // formik.handleChange;

    setDiscloseIdentity(e.target.value);
    let event = {
      target: {
        name: "cafeteria",
        value: e.target.value,
      },
    };
    formik.handleChange(event);
  }

  function handleWashRoomButton(e) {
    setWashroom(e.target.value);
    let event = {
      target: {
        name: "PersonalWashRoom",
        value: e.target.value,
      },
    };
    formik.handleChange(event);
  }

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
                <div className="d-flex gx-0 gap-5">
                  <div className="col-4 col-lg-3">
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
                          className={`form-label ${styles.total_floors_input} w-100  fs_15 fs_sm_12 p-2`}
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

                  <div className="col-4 col-lg-3">
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
                          className={`form-label ${styles.total_floors_input} w-100  fs_15 fs_sm_12 p-2`}
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
                </div>
              </div>
              <div className=" text-start mt-3">
                <div className="d-flex gx-0 gap-lg-5 ">
                  <div className="col-4 col-lg-3">
                    <div className="">
                      <label
                        htmlFor="washroom"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Washrooms
                      </label>
                      <div>
                        <input
                          type="text"
                          className={
                            width < 992
                              ? `form-label ${styles.total_floors_input} w-75  fs_15 fs_sm_12 p-2`
                              : `form-label ${styles.total_floors_input} w-100  fs_15 fs_sm_12 p-2`
                          }
                          id="washroom"
                          placeholder="Ex : 2"
                          name="WashRoom"
                          value={formik.values.WashRoom}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.WashRoom && formik.touched.WashRoom && (
                        <div className="d-flex align-items-center text-danger fs_sm_12 fs_13 ">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.WashRoom}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-4 col-lg-3">
                    <div className="">
                      <label
                        htmlFor="pantry"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Pantry/Cafeteria
                      </label>
                      <div className="d-flex mt-2">
                        <input
                          className={` ms-1 cursor_pointer`}
                          id="yes"
                          type="radio"
                          value="yes"
                          checked={discloseIdentity === "yes"}
                          onChange={handleRadioButton}
                        />
                        <label
                          htmlFor="yes"
                          className={
                            discloseIdentity === "yes"
                              ? ` ${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                              : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          }
                        >
                          Yes
                        </label>
                        <input
                          className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer ms-3`}
                          id="no"
                          type="radio"
                          value="no"
                          checked={discloseIdentity === "no"}
                          onChange={handleRadioButton}
                        />{" "}
                        <label
                          htmlFor="no"
                          className={
                            discloseIdentity === "no"
                              ? ` ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                              : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          }
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-lg-3">
                    <div className="">
                      <label
                        htmlFor="PersonalWashroom"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Personal Washroom
                      </label>
                      <div className="d-flex mt-2">
                        <input
                          className={` ms-1 cursor_pointer`}
                          id="yes"
                          type="radio"
                          value="yes"
                          checked={washroom === "yes"}
                          onChange={handleWashRoomButton}
                        />
                        <label
                          htmlFor="yes"
                          className={
                            washroom === "yes"
                              ? ` ${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                              : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          }
                        >
                          Yes
                        </label>
                        <input
                          className={`  ${styles.membertrade_modal_offer_radiobox} cursor_pointer ms-3`}
                          id="no"
                          type="radio"
                          value="no"
                          checked={washroom === "no"}
                          onChange={handleWashRoomButton}
                        />{" "}
                        <label
                          htmlFor="no"
                          className={
                            washroom === "no"
                              ? ` ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                              : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          }
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" text-start mt-3">
                  <div className={width < 992 ? `row gx-2` : `row `}>
                    <div className="col-4">
                      <div className="">
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
                    <div className="col-4">
                      <div className="">
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
                    <div className="col-lg-3 col-4">
                      <div className="">
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

export default OfficeSpaceProperty;
