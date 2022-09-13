import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../../assets/icons/close.png";
import Image from "next/image";
import styles from "../../../../styles/modals/apartmentEditProperty.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import useScreenSizeDetector from "../../../useScreenSizeDetector";
import Select from "react-select";
const AgricultureFarmHouseFeatures = ({ show, handleClose }) => {
  const [value, setValue1] = useState("4");
  const [optionType, setoptionType] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const numRegex = /^[0-9]+$/;

  const width = useScreenSizeDetector();
  const formik = useFormik({
    initialValues: {
      OpenSlides: "",
      FacingWidth: "",
      FloorsAllowed: "",
      BedRoom: "",
      BathRoom: "",
      FurnishedStatus: "",
      BoundaryWall: "no",
      RegistrationStatus: "no",
      TotalFloors: "",
    },

    validationSchema: Yup.object({
      TotalFloors: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      OpenSlides: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      FacingWidth: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      BedRoom: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      BathRoom: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      FloorsAllowed: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      FurnishedStatus: Yup.string().required("Required"),
      BoundaryWall: Yup.string(),
      RegistrationStatus: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleClose();
    },
  });

  const furnishingStatus = [
    { value: "Furnished", label: "Furnished" },
    { value: "Unfurnished", label: "Unfurnished" },
  ];

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

  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles.property_features_commercial_plot_container}`}
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
                <div className="d-flex gx-0 gap-lg-5 gap-2">
                  <div className="col-4 col-lg-3">
                    <div className="">
                      <label
                        htmlFor="bedRoom"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Bedroom
                      </label>
                      <div>
                        <input
                          type="text"
                          className={
                            width < 992
                              ? `form-label ${styles.total_floors_input} w-75  fs_15 fs_sm_12 p-2`
                              : `form-label ${styles.total_floors_input} w-100  fs_15 fs_sm_12 p-2`
                          }
                          id="bedRoom"
                          placeholder="Ex : 2"
                          name="BedRoom"
                          value={formik.values.BedRoom}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.BedRoom && formik.touched.BedRoom && (
                        <div className="d-flex align-items-center text-danger fs_sm_12 fs_13 ">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.BedRoom}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-4 col-lg-3">
                    <div className="">
                      <label
                        htmlFor="bathRoom"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Bathroom
                      </label>
                      <div>
                        <input
                          type="text"
                          className={
                            width < 992
                              ? `form-label ${styles.total_floors_input} w-75  fs_15 fs_sm_12 p-2`
                              : `form-label ${styles.total_floors_input} w-100  fs_15 fs_sm_12 p-2`
                          }
                          id="bathRoom"
                          placeholder="Ex : 2"
                          name="BathRoom"
                          value={formik.values.BathRoom}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.BathRoom && formik.touched.BathRoom && (
                        <div className="d-flex align-items-center text-danger fs_sm_12 fs_13 ">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.BathRoom}</span>
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
                          className={
                            width < 992
                              ? `form-label ${styles.total_floors_input} w-75  fs_15 fs_sm_12 p-2`
                              : `form-label ${styles.total_floors_input} w-100  fs_15 fs_sm_12 p-2`
                          }
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
                <div className="d-flex gx-0 gap-5">
                  <div className="col-4 col-lg-3">
                    <div className="">
                      <label
                        htmlFor="OpenSlides"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 `}
                      >
                        No. of open Sides
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`form-label ${styles.total_floors_input} w-100  fs_15 fs_sm_12 p-2`}
                          id="OpenSlides"
                          placeholder="Ex : 13"
                          name="OpenSlides"
                          value={formik.values.OpenSlides}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.OpenSlides && formik.touched.OpenSlides && (
                        <div className="d-flex  text-danger fs_sm_12 fs_13 ">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span className="">{formik.errors.OpenSlides}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-5 col-lg-7">
                    <div className="">
                      <label
                        htmlFor="facingWidth"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Road facing plot width
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`form-label ${styles.total_floors_input} w-100  fs_15 fs_sm_12 p-2`}
                          id="facingWidth"
                          placeholder="Ex : 13"
                          name="FacingWidth"
                          value={formik.values.FacingWidth}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.FacingWidth && formik.touched.FacingWidth && (
                        <div className="d-flex align-items-center text-danger fs_sm_12 fs_13 ">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span>{formik.errors.FacingWidth}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-start mt-3">
                <div className="d-flex gx-0 gap-lg-4 ">
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

export default AgricultureFarmHouseFeatures;
