import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../../styles/modals/edit-profile-modals/edit-profile.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Logout = ({ show, handleClose }) => {
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
      <Modal.Body className={`${styles.undo_modal_width}`}>
        <div className= {`${styles.undo_delete_width}  my-4`}  >
            <div className="mx-lg-4 mx-md-4 mx-sm-4 mx-4">
          <h1 className={`${styles.save_changes} fs_20 fw_700 fontFam_poppins`}>
          Are you sure?
          </h1>
          <p className={`${styles.unsaveChanges}  fs_12 fw_400 fontFam_poppins`}>
          Do you want to logout from Zameen Square
          </p>
          </div>
          <div className="d-flex justify-content-start mt-3 ">
            <button className={` ${styles.undo_okay_button} ms-lg-4 ms-md-4 ms-sm-4 ms-4  px-2 fs_15 fw_500`}>
            Logout
            </button>
            <button
              className={` ${styles.undo_button}  ms-lg-4 ms-md-4 ms-sm-4 ms-4 px-2  fs_15  fw_400`}
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Logout;
