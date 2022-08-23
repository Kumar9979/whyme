import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../../styles/modals/property-details-modals/requestcall.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const RequestCallBack = ({ show, handleClose }) => {
  const phoneregex = /^([+]\d{2})?\d{10}$/;
  const nameregex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
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

  return (
    <Modal
      className={`d-flex justify-content-center`}
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles.requestcall_width}`}
      //       contentClassName={`${styles.card_radius}`}
      // size={'lg'}
    >
      <Modal.Body className="p-0">
        <div className={`p-1`}>
          <div className={`d-flex justify-content-end`}>
            <button
              onClick={handleClose}
              className={`${styles.close_button} pe-1`}
            >
              <i className={`fs_22 fw-700 ri-close-circle-line`}></i>
            </button>
          </div>
          <div className={`pe-4 ps-4 pb-4`}>
            <div
              className={`pt-0 fs_18 fw_700 fontFam_poppins ${styles.request_call_heading}`}
            >
              Request call back
            </div>
            <div
              className={`pt-0 fs_12 fw_500 fontFam_poppins mt-1 ${styles.request_call_title}`}
            >
              Allow our agent to get in contact with <br />
              you
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="d-flex flex-column mt-3">
                <label
                  className={`${styles.request_label} fs_15 fw_700`}
                  for="exampleInputEmail1"
                >
                  Name
                </label>
                <input
                  type="text"
                  className={`w-100 py-3 ps-4 ${styles.request_input} `}
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

              <div className="form-group mt-3">
                <label
                  className={`${styles.request_label} fs_15 fw_700 `}
                  for="exampleInputEmail1"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  className={`w-100  ${styles.request_input}  py-3 ps-4`}
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
              <button className={`w-100 mt-4 py-2 ${styles.submit_button}`}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RequestCallBack;
