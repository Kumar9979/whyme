import React, { useState } from "react";
import styles from "../../../styles/modals/property-details-modals/reportProperty.module.css";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";

const ReportProperty = ({ show, handleClose }) => {
  const phoneregex = /^([+]\d{2})?\d{10}$/;
  const nameregex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
  const [reportType, setReportType] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      report: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(nameregex, "Invalid First Name")
        .required("Required"),
      phone: Yup.string()
        .matches(phoneregex, "Invalid Phone Number")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      localStorage.setItem("User", JSON.stringify(values));
      alert(values);
      resetForm();
    },
  });

  function handleRadioButton(e) {
    setReportType(e.target.value);
    let event = {
      target: {
        name: "report",
        value: e.target.value,
      },
    };
    formik.handleChange(event);
  }
  console.log(formik.values);
  return (
    <Modal
      className={`d-flex justify-content-center`}
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles.reportProperty_width}`}
      //       contentClassName={`${styles.card_radius}`}
      // size={'lg'}
    >
      <Modal.Body className="p-0">
        <div className={``}>
          <div className={`d-flex justify-content-end p-1`}>
            <button
              onClick={handleClose}
              className={`${styles.close_button} pe-1`}
            >
              <i className={`fs_22 fw-700 ri-close-circle-line`}></i>
            </button>
          </div>
          <div className={`p-3`}>
            <h1
              className={`fs_22 fw_700 fontFam_poppins ${styles.report_property_heading}`}
            >
              Report this Property
            </h1>
            <p
              className={`fs_12 fw_600 fontFam_poppins ${styles.report_property_title}`}
            >
              If you've noticed anything wrong with the property information, or
              if it's of poor quality, complete the form below to pass your
              concerns on to the advertiser.
            </p>
            <h2
              className={`fs_18 fw_700 fontFam_poppins ${styles.report_property_reason}`}
            >
              Reason of Report
            </h2>
            <div>
              <div className="form-check p-0 m-0">
                <input
                  className={`form-check-input${styles.report_reason}`}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className={`form-check-label ps-1 ${styles.report_label_reason} fs_12 fw_500 fontFam_poppins`}
                  for="flexRadioDefault1"
                >
                  The property is already sold
                </label>
              </div>
              <div className="form-check p-0 m-0">
                <input
                  className={`form-check-input${styles.report_reason}`}
                  type="radio"
                  name="propertySold"
                  onChange={handleRadioButton}
                  checked={"propertySold" === reportType}
                />
                <label
                  className={`form-check-label ps-1 ${styles.report_label_reason} fs_12 fw_500 fontFam_poppins`}
                  for="flexRadioDefault1"
                >
                  The property does not look as in the photos
                </label>
              </div>
              <div className="form-check p-0 m-0">
                <input
                  className={`form-check-input${styles.report_reason}`}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className={`form-check-label ps-1 ${styles.report_label_reason} fs_12 fw_500 fontFam_poppins`}
                  for="flexRadioDefault1"
                >
                  The property location is incorrect
                </label>
              </div>
              <div className="form-check p-0 m-0">
                <input
                  className={`form-check-input${styles.report_reason}`}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className={`form-check-label ps-1 ${styles.report_label_reason} fs_12 fw_500 fontFam_poppins`}
                  for="flexRadioDefault1"
                >
                  Unclear Description
                </label>
              </div>
              <div className="form-check p-0 m-0">
                <input
                  className={`form-check-input${styles.report_reason}`}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className={`form-check-label ps-1 ${styles.report_label_reason} fs_12 fw_500 fontFam_poppins`}
                  for="flexRadioDefault1"
                >
                  Incorrect property information
                </label>
              </div>
              <div className="form-check p-0 m-0">
                <input
                  className={`form-check-input${styles.report_reason}`}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className={`form-check-label ps-1 ${styles.report_label_reason} fs_12 fw_500 fontFam_poppins`}
                  for="flexRadioDefault1"
                >
                  The property is already sold
                </label>
              </div>
              <div className="form-check p-0 m-0">
                <input
                  className={`form-check-input${styles.report_reason}`}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className={`form-check-label ps-1 ${styles.report_label_reason} fs_12 fw_500 fontFam_poppins`}
                  for="flexRadioDefault1"
                >
                  Other
                </label>
              </div>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="d-flex">
                <div className="w-50 d-flex flex-column mt-3">
                  <label for="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your name"
                    name="name"
                    value={formik.name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <p className={`text-danger fs_14`}>{formik.errors.name}</p>
                  )}
                </div>

                <div className="form-group ms-2 w-50 mt-3 d-flex flex-column ">
                  <label for="exampleInputEmail1">Contact Number</label>
                  <input
                    type="text"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your contact number"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <p className="text-danger fs_14">{formik.errors.phone}</p>
                  )}
                </div>
              </div>

              <button className={`w-100 mt-4 py-2 `}>Report</button>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ReportProperty;
