import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "../../styles/modals/registerUserModal.module.css";

const RegisterUserModal = ({ show, onHide }) => {
  return (
    <div>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Body className={styles.modal_body_register}>
          <div className="mb-1">
            <h5
              className={`${styles.fontfam_poppins} ${styles.font_semibold} ${styles.color_323D5A} ${styles.font_24}`}
            >
              Register your account
            </h5>

            <p
              className={`${styles.opacity_6} ${styles.fontfam_poppins} ${styles.color_323D5A} ${styles.font_regular} ${styles.font_18}`}
            >
              Please register your account to manage all your property.
            </p>
          </div>

          <form action="" className="mt-4">
          <label className={`${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1 `}>Profile Picture</label>
            <div className="mb-3">

         
              <label
           htmlFor="profile"  className={`${styles.modal_inputProfile_registeruser} ${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1`}
              >
              
              </label>

{/* <div className={styles.modal_inputProfile_registeruser}>
  hi
</div> */}

              <input type={"file"} style={{visibility:"hidden"}}  id="profile" name="img" accept="image/*"/>

            </div>

            <div className="mb-3">
              <label
                className={`${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1`}
              >
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className={`${styles.modal_input_registeruser} w-100`}
              />
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
              />
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
    </div>
  );
};

export default RegisterUserModal;
