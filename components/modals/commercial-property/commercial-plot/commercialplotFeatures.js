import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../../assets/icons/close.png";
import Image from "next/image";
import styles from "../../../../styles/modals/apartmentEditProperty.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import useScreenSizeDetector from "../../../useScreenSizeDetector";

const CommercialPlotFeatures = ({ show, handleClose }) => {
  const [value, setValue1] = useState("4");
  const [discloseIdentity, setDiscloseIdentity] = useState("no");
  const [status, setStatus] = useState("no");

  const numRegex = /^[0-9]+$/;

  const width = useScreenSizeDetector();
  const formik = useFormik({
    initialValues: {
      OpenSlides: "",
      FacingWidth: "",
      FloorsAllowed: "",

      BoundaryWall: "no",
      RegistrationStatus: "no",
    },

    validationSchema: Yup.object({
      OpenSlides: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),
      FacingWidth: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),

      FloorsAllowed: Yup.string()
        .matches(numRegex, "Invalid value")
        .required("Required"),

      BoundaryWall: Yup.string(),
      RegistrationStatus: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleClose();
    },
  });

  function handleRadioButton(e) {
    setDiscloseIdentity(e.target.value);
    let event = {
      target: {
        name: "BoundaryWall",
        value: e.target.value,
      },
    };
    formik.handleChange(event);
  }

  function handleStatusButton(e) {
    setStatus(e.target.value);
    let event = {
      target: {
        name: "RegistrationStatus",
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
                  <div className="col-8 col-lg-7">
                    <div className="">
                      <label
                        htmlFor="construction"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Floors Allowed for Construction
                      </label>
                      <div>
                        <input
                          type="text"
                          className={
                            width < 992
                              ? `form-label ${styles.total_floors_input} w-75  fs_15 fs_sm_12 p-2`
                              : `form-label ${styles.total_floors_input} w-100  fs_15 fs_sm_12 p-2`
                          }
                          id="construction"
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

                  <div className="col-4 col-lg-5">
                    <div className="">
                      <label
                        htmlFor="RegistrationStatus"
                        className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                      >
                        Boundary Wall
                      </label>
                      <div className="d-flex mt-2">
                        <input
                          className={` ms-1 cursor_pointer`}
                          id="yestext"
                          type="radio"
                          value="yes"
                          checked={discloseIdentity === "yes"}
                          onChange={handleRadioButton}
                        />
                        <label
                          htmlFor="yestext"
                          className={
                            discloseIdentity === "yes"
                              ? ` ${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                              : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                          }
                        >
                          Yes
                        </label>
                        <input
                          className={`   cursor_pointer ms-3`}
                          id="notext"
                          type="radio"
                          value="no"
                          checked={discloseIdentity === "no"}
                          onChange={handleRadioButton}
                        />{" "}
                        <label
                          htmlFor="notext"
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
                </div>
                <div className=" text-start mt-3">
                  <div className="row">
                    <div className="col-6">
                      <div className="">
                        <label
                          htmlFor="RegistrationStatus"
                          className={`form-label text-nowrap ${styles.total_floors_text} fs_15 fs_sm_12 fw_500`}
                        >
                          RERA Registration Status
                        </label>
                        <div className="d-flex mt-2">
                          <input
                            className={` ms-1 cursor_pointer`}
                            id="yes"
                            type="radio"
                            value="yes"
                            checked={status === "yes"}
                            onChange={handleStatusButton}
                          />
                          <label
                            htmlFor="yes"
                            className={
                              status === "yes"
                                ? ` ${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                                : `${styles.total_floors_text}  fs_15 fs_sm_12 fw_500 ms-1 cursor_pointer`
                            }
                          >
                            Yes
                          </label>
                          <input
                            className={`   cursor_pointer ms-3`}
                            id="no"
                            type="radio"
                            value="no"
                            checked={status === "no"}
                            onChange={handleStatusButton}
                          />{" "}
                          <label
                            htmlFor="no"
                            className={
                              status === "no"
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

export default CommercialPlotFeatures;
