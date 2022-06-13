import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "../../styles/modals/registerUserModal.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";

const RegisterUserModal = ({ show, onHide }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <Modal show={show} onHide={onHide} centered>
      <div className="d-flex justify-content-end ">
        {" "}
        <i
          onClick={onHide}
          className={`${styles.modal_icon_close} ${styles.cursor_pointer} ri-close-circle-line me-4 mt-4 `}
        ></i>
      </div>
      <Modal.Body className={styles.modal_body_register}>
        <div className="mb-1">
          <h5
            className={`${styles.fontFam_poppins} ${styles.font_semibold} ${styles.color_323D5A} ${styles.font_24}`}
          >
            Register your account
          </h5>

          <p
            className={`${styles.opacity_6} ${styles.fontFam_poppins} ${styles.color_323D5A} ${styles.font_regular} ${styles.font_18}`}
          >
            Please register your account to manage all your property.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-4">
          <label
            className={`${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1 `}
          >
            Profile Picture
          </label>
          <div className="mb-3">
            <label
              htmlFor="profile"
              className={`${styles.modal_inputProfile_registeruser} ${styles.color_1D1E1F} ${styles.font_medium}  ${styles.cursor_pointer} ${styles.font_20} mb-1 d-flex justify-content-center align-items-center`}
            >
              <i className="ri-camera-line"></i>
            </label>

            {/* <div className={styles.modal_inputProfile_registeruser}>
  hi
</div> */}

            <input
              type={"file"}
              style={{ visibility: "hidden" }}
              id="profile"
              name="img"
              accept="image/*"
            />
          </div>

          <div className="mb-3">
            <label
              id="#name"
              className={`${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1`}
            >
              Name
            </label>

            <input
              id="#name"
              type="text"
              placeholder="Enter your name"
              className={`${styles.modal_input_registeruser} w-100`}
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="d-flex align-items-center text-danger">
                <i className="ri-error-warning-line me-1 mt-1 "></i>
                <span>{formik.errors.name}</span>
              </div>
            )}
          </div>

          <div className="">
            <label
              className={`${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1`}
            >
              Email Address
            </label>

            <input
              type="text"
              placeholder="Enter your email address"
              className={`${styles.modal_input_registeruser} w-100`}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />

            {formik.errors.email && formik.touched.email && (
              <div className="d-flex align-items-center text-danger">
                <i className="ri-error-warning-line me-1 mt-1 "></i>
                <span> {formik.errors.email}</span>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className={`${styles.modal_btn_complete} ${styles.font_20} ${styles.font_semibold} text-uppercase btn text-white w-100 mt-5`}
            >
              COMPLETE
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterUserModal;
