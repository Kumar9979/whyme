import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "../../styles/modals/registerModal.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import Image from "next/image";
import camera from "../../assets/icons/camera.png";
import close from "../../assets/icons/close.png";
import { useRouter } from "next/router";
import UserTypeModal from "./userTypeModal";

const RegisterUserModal = ({ show, onHide }) => {
  const router = useRouter();
  const [file, setFile] = useState();
  const [size, setSize] = useState(35);
  const [uploaded, setUploaded] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false)
  function closeUserModal(){
setShowUserModal(false)
  }
  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required("Upload an Image"),
      name: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      formReset();
      onHide();
      setShowUserModal(true)
    },
  });

  function handleChange(e) {
    if (e.target?.files.length !== 0) {
      setSize(100);
      setUploaded(true);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }




  function formReset() {
    formik.handleReset();
    setUploaded(false);
    setSize(35);
    formik.setFieldValue("image", "");
    console.log(uploaded);
  }

  return (
    <>
    <Modal
      show={show}
      onHide={() => {
        onHide();
        formReset();
      }}
      centered
    >
      <div className="d-flex justify-content-end mt-4 me-4 mb-1">
        {" "}
        <Image
          onClick={() => {
            onHide();
            formReset();
          }}
          src={close}
          alt="close icon"
          width={30}
          height={30}
          className={`${styles.cursor_pointer}`}
        />
      </div>
      <Modal.Body className={styles.modal_body_register}>
        <div className="mb-1 mt-1">
          <h5
            className={`fontFam_poppins ${styles.font_semibold} ${styles.color_323D5A} ${styles.font_24} text-nowrap`}
          >
            Register your account
          </h5>

          <p
            className={`${styles.opacity_6} fontFam_poppins ${styles.color_323D5A} ${styles.font_regular} ${styles.font_18}`}
          >
            Please register your account to manage all your property.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-4">
          <label
            className={`${styles.color_1D1E1F} ${styles.font_medium} fontFam_poppins ${styles.font_20} mb-1 `}
          >
            Profile Picture
          </label>
          <div className="">
            <label
              htmlFor="profile"
              className={`${styles.modal_inputProfile_registeruser} ${styles.color_1D1E1F} ${styles.font_medium}  ${styles.cursor_pointer} ${styles.font_20} mb-1 d-flex justify-content-center align-items-center`}
            >
              <Image
                src={uploaded ? file : camera}
                alt="image of camera"
                width={size}
                height={size}
              />
            </label>

            {/* <div className={styles.modal_inputProfile_registeruser}>
  hi
</div> */}

            {formik.errors.image && formik.touched.image && (
              <div className="d-flex align-items-center text-danger mt-1">
                <i className="ri-error-warning-line me-1 "></i>
                <span>{formik.errors.image}</span>
              </div>
            )}

            <input
              type={"file"}
              style={{ visibility: "hidden" }}
              id="profile"
              name="image"
              accept="image/*;capture=camera"
              onChange={(e) => {
                formik.setFieldValue("image", e.target.files[0]);
                handleChange(e);
              }}
            />
          </div>

          <div className="mb-3">
            <label
              id="#name"
              className={`${styles.color_1D1E1F} ${styles.font_medium}  fontFam_poppins ${styles.font_20} mb-1`}
            >
              Name
            </label>

            <input
              id="#name"
              type="text"
              placeholder="Enter your name"
              className={` ${styles.register_form_inputField} w-100`}
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="d-flex align-items-center text-danger">
                <i className="ri-error-warning-line me-1 "></i>
                <span>{formik.errors.name}</span>
              </div>
            )}
          </div>

          <div className="">
            <label
              className={`${styles.color_1D1E1F} ${styles.font_medium}  fontFam_poppins ${styles.font_20} mb-1`}
            >
              Email Address
            </label>

            <input
              type="text"
              placeholder="Enter your email address"
              className={` ${styles.register_form_inputField} w-100`}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />

            {formik.errors.email && formik.touched.email && (
              <div className="d-flex align-items-center text-danger">
                <i className="ri-error-warning-line me-1 "></i>
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
      <UserTypeModal onHide={closeUserModal} show={showUserModal}/>
</>
  );
};

export default RegisterUserModal;
