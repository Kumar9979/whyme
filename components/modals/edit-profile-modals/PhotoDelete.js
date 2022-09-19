import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../../styles/modals/edit-profile-modals/edit-profile.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const PhotoDelete = ({ show, onHide,setuploaded }) => {
  return (
    <Modal
      className={`d-flex justify-content-center`}
      centered
      show={show}
      onHide={onHide}
      dialogClassName={`${styles.requestcall_width}`}
      //       contentClassName={`${styles.card_radius}`}
      // size={'lg'}
    >
      <Modal.Body className={`${styles.undo_modal_width}`}>
        <div className= {`${styles.undo_delete_width} my-4`}  >
          <h1 className={`${styles.save_changes} mx-4 fs_22 fw_700 fontFam_poppins`}>
          Are you sure?
          </h1>
          <p className={`${styles.unsaveChanges} mx-4 fs_16 fw_400 fontFam_poppins`}>
          Do you want to Remove your Picture
          </p>
          <div className="d-flex justify-content-start mt-4 ">
            <button className={`${styles.undo_button} ms-4 px-2 fs_15 fw_400`}
   onClick={() => {setuploaded(false);{onHide
   ()}}}>
              Yes
            </button>
            <button
              className={`${styles.undo_okay_button}  ms-4 px-2  fs_15 fw_500`}
              onClick={onHide}
            >
              No
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PhotoDelete;
