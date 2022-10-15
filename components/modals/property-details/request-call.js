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
      className={`${styles.requestcall_modal}d-flex justify-content-center`}
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles.requestcall_width}`}
      //       contentClassName={`${styles.card_radius}`}
      // size={'lg'}
    >
      <Modal.Body className={`${styles.requestcall_modal}`}>
        <div className={``}>
          <div className={`${styles.requestcall_div} d-flex justify-content-between pb-1`}>
          <div
              className={` fs_18 fw_600 fontFam_poppins pt-0 ms-2  ${styles.request_call_heading}`}
            >
              Request callback
            </div>
            <button
              onClick={()=>{formik.setErrors({}); handleClose() ; formik.resetForm(); }}
              className={`${styles.close_button} `}
             
           
            >
              <i className={`fs_22 fw-700 ri-close-circle-line `}></i>
            </button>
          </div>
          <div className={`pe-2 ms-2 pb-2`}>
           
            {/* <div
              className={`pt-0 fs_12 fw_500 fontFam_poppins mt-1 ${styles.request_call_title}`}
            >
              Allow our agent to get in contact with <br />
              you
            </div> */}
            <form onSubmit={formik.handleSubmit}>
              <div className="d-flex flex-column mt-2">
                <label
                  className={`${styles.request_label} fs_14 mb-1 fw_400`}
                  for="exampleInputEmail1"
                >
                 Full Name
                </label>
                <input
                  type="text"
                  className={`w-100 py-2 ps-4 ${styles.request_input} `}
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

              <div className="form-group mt-2">
                <label
                  className={`${styles.request_label} fs_14 mb-1 fw_400 `}
                  for="exampleInputEmail1"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  className={`w-100 ${styles.request_input} py-2 ps-4`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your Mobile Number"
                  name="phone"
                  value={formik.values.phone }
                  onChange={formik.handleChange}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p className="text-danger fs_14">{formik.errors.phone}</p>
                )}
                <div className={`d-flex`}>
                <input type="checkbox" />
                <label className={`${styles.checkbox_label} fs_10 mt-2 mb-1 ms-1`}>This is your WhatsApp number</label>
                </div>
              </div>
              <button className={`w-100 mt-3 py-2 ${styles.submit_button}`}
              
              
              >
              Request Callback
              </button>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RequestCallBack;
