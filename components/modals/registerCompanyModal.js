import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "../../styles/modals/registerModal.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import Image from "next/image";
import camera from "../../assets/icons/camera.png";
import close from "../../assets/icons/close.png"

const RegisterCompanyModal = ({ show, onHide }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      companyName: "",
      role: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
      companyName: Yup.string().required("Required"),
      role: Yup.string().required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <Modal
      size="lg"
      aria-labelledby="example-modal-sizes-title-lg"
      show={show}
      onHide={onHide}
      centered
    >
      <div className="d-flex justify-content-end mt-4 me-4 mb-1">
        {" "}
   
        <Image  onClick={onHide}
                src={close}
                alt="close icon"
                width={30}
                height={30}
                className={ `${styles.cursor_pointer}`}
               
              />

      </div>
      <Modal.Body className={styles.modal_body_register}>
        <div className="mb-1 mt-1">
          <h5
            className={`${styles.fontFam_poppins} ${styles.font_semibold} ${styles.color_323D5A} ${styles.font_24} text-nowrap`}
          >
            Register your account
          </h5>

          <p
            className={`${styles.opacity_6} ${styles.fontFam_poppins} ${styles.color_323D5A} ${styles.font_regular} ${styles.font_18}`}
          >
            Please register your account to manage all your property.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-4 w-100">
          <label
            className={`${styles.color_1D1E1F} ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_20} mb-1 `}
          >
            Company Logo
          </label>
          <div className="mb-3">
            <label
              htmlFor="profile"
              className={`${styles.fontFam_poppins} ${styles.modal_inputProfile_registeruser} ${styles.color_1D1E1F} ${styles.font_medium}  ${styles.cursor_pointer} ${styles.font_20} mb-1 d-flex justify-content-center align-items-center`}
            >
                <Image
                src={camera}
                alt="image of camera"
                width={35}
                height={35}
               
              />
            </label>

            {/* <div className={styles.modal_inputProfile_registeruser}>
  hi
</div> */}

            <input
              type={"file"}
              style={{ visibility: "hidden" }}
              id="profile"
              name="img"
              accept="image/*;capture=camera"
           
            />
          </div>

          <div className={ ` ${styles.flex_column} d-flex w-100   justify-content-between`}>
            <div className={`${styles.width_res_cen_half} mb-3 `}>
              <label
                id="#name"
                className={`${styles.fontFam_poppins} ${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1`}
              >
                Company Name
              </label>

              <input
                type="text"
                placeholder="Enter your company name"
                className={`${styles.modal_input_registeruser} w-100`}
                value={formik.values.companyName}
                name="companyName"
                onChange={formik.handleChange}
              />
              {formik.errors.companyName && formik.touched.companyName && (
                <div className="d-flex align-items-center text-danger">
                  <i className="ri-error-warning-line me-1 mt-1 "></i>
                  <span>{formik.errors.companyName}</span>
                </div>
              )}
            </div>

            <div className={`${styles.width_res_cen_half} ${styles.margin_l_3}  mb-3 `}>
              <label
                id="#name"
                className={`${styles.fontFam_poppins} ${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1`}
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
          </div>

          <div className={ ` ${styles.flex_column} d-flex w-100   justify-content-between`}>


            <div className={`${styles.width_res_cen_half} mb-3 `}>
              <label
                className={`${styles.fontFam_poppins} ${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1`}
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
            <div className={`${styles.width_res_cen_half} ${styles.margin_l_3}  mb-3`}>
              <label
                className={`${styles.fontFam_poppins} ${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1`}
              >
                Role
              </label>

              <input
                type="text"
                placeholder="Ex : Agent, Builder, etc,..."
                className={`${styles.modal_input_registeruser} w-100`}
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
              />

              {formik.errors.role && formik.touched.role && (
                <div className="d-flex align-items-center text-danger">
                  <i className="ri-error-warning-line me-1 mt-1 "></i>
                  <span> {formik.errors.role}</span>
                </div>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={`${styles.modal_btn_complete} ${styles.font_20} ${styles.font_semibold} text-uppercase btn text-white w-100 mt-4`}
            >
              COMPLETE
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterCompanyModal;
