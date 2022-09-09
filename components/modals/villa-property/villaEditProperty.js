import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../assets/icons/close.png";
import Image from "next/image";
import styles from "../../../styles/modals/apartmentEditProperty.module.css";
import Select from "react-select";

import { useFormik } from "formik";
import * as Yup from "yup";

const VillaEditProperty = ({ show, handleClose }) => {
  const [value, setValue1] = useState("4");
  const [optionType, setoptionType] = useState("");
  const numRegex = /^[0-9]+$/;
  const [menuOpen, setMenuOpen] = useState(false);
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
      CarParkingCount: "",
      BedRoom: "",
      BathRoom: "",
      facing: "",
      FurnishedStatus: "",
      Status: "",
      Transaction: "",
      Amenities: [],
    },

    validationSchema: Yup.object({
      TotalFloors: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      FloorNumber: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      CarParkingCount: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      BedRoom: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      BathRoom: Yup.string()
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
      handleClose();
    },
  });

  // const handleCheckbox = (e) => {
  //   const { checked, name } = e.target;
  //   if (e.target.checked) {
  //     formik.setFieldValue("Amenities", [
  //       ...formik.values.Amenities,
  //       e.target.name,
  //     ]);
  //   } else {
  //     formik.setFieldValue(
  //       "Amenities",
  //       formik.values.Amenities.filter((item) => item !== e.target.name)
  //     );
  //   }
  // };

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
                          className={`form-label ${styles.total_floors_input} w-50  fs_15 fs_sm_12 p-2`}
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
                          className={`form-label ${styles.total_floors_input} w-50  fs_15 fs_sm_12 p-2`}
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
                  <div className="col-5">
                    
                    <div className="">
                      <label
                        htmlFor="CarParkingCount"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500 `}
                      >
                        Car Parking Count
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`form-label ${styles.total_floors_input} w-50  fs_15 fs_sm_12 p-2`}
                          id="CarParkingCount"
                          placeholder="Ex : 43"
                          name="CarParkingCount"
                          value={formik.values.CarParkingCount}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.CarParkingCount &&
                        formik.touched.CarParkingCount && (
                          <div className="d-flex align-items-center text-danger fs_sm_12 fs_13 ">
                            <i className="ri-error-warning-line me-1  "></i>
                            <span>{formik.errors.CarParkingCount}</span>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-start mt-3">
                <div className="d-flex gx-0">
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
                          className={`form-label ${styles.total_floors_input} w-50  fs_15 fs_sm_12 p-2`}
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
                          className={`form-label ${styles.total_floors_input} w-50  fs_15 fs_sm_12 p-2`}
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
                  <div className="col-lg-5 col-4">
                    <div className={`${styles.total_floors_text}  `}>
                      <label
                        htmlFor="facing"
                        className={`form-label text-nowrap fs_15 fs_sm_12 fw_500`}
                      >
                        Facing{" "}
                      </label>
                      <div onClick={() => setoptionType("facing")}>
                        <Select
                          id="facing"
                          options={facing}
                          type="text"
                          className={` w-100  fs_15 fs_sm_12 `}
                          placeholder="Select.."
                          styles={customStyles}
                          name="facing"
                          value={facing.filter((option) => {
                            return option.value === formik.values.facing;
                          })}
                          onChange={(selectedOption) => {
                            let event = {
                              target: {
                                name: "facing",
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
                      {formik.errors.facing && formik.touched.facing && (
                        <div className="d-flex align-items-center text-danger mt-1 mt-lg-2 fs_sm_12 fs_13 ">
                          <i className="ri-error-warning-line me-1  "></i>
                          <span> {formik.errors.facing}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div class=" text-start mt-3">
                <div className={width<992?`row gx-2` : `row `} >
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
                    <div class="col-4">
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
                    <div class="col-4">
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

export default VillaEditProperty;
