import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../../styles/modals/edit-profile-modals/edit-profile.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const SaveChanges = ({ show, handleClose }) => {
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
      <Modal.Body>
        <div className="px-3 py-2">
          <h1 className={`${styles.save_changes} fs_20 fw_700 fontFam_poppins`}>
            Save Changes?
          </h1>
          <p className={`${styles.unsaveChanges} fs_12 fw_400 fontFam_poppins`}>
            Your unsaved changes will be lost. Save <br />
            changes before closing?
          </p>
          <div className="d-flex justify-content-between mt-3 w-100">
            <button className={`${styles.save_button_width} px-4 fs_15 fw_400`}>
              Save Changes
            </button>
            <button
              className={`${styles.cancel_button_width}  px-5 ms-4 fs_15 fw_500`}
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

export default SaveChanges;
