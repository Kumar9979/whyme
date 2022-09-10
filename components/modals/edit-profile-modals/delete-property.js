import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../../styles/modals/edit-profile-modals/edit-profile.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Delete = ({ show, handleClose }) => {
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
        <div className= {`${styles.undo_delete_width} my-4`}  >
          <h1 className={`${styles.save_changes} mx-4 fs_20 fw_700 fontFam_poppins`}>
          Are you sure?
          </h1>
          <p className={`${styles.unsaveChanges} mx-4 fs_12 fw_400 fontFam_poppins`}>
          Do you want to delete your property
          </p>
          <div className="d-flex justify-content-start mt-3 ">
            <button className={`${styles.undo_button} ms-4 px-2 fs_15 fw_400`}>
              Yes
            </button>
            <button
              className={`${styles.undo_okay_button}  ms-4 px-2  fs_15 fw_500`}
              onClick={handleClose}
            >
              No
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Delete;
