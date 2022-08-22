import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "../../../styles/modals/property-details-modals/requestcall.module.css";

const RequestCallBack = ({ show, handleClose }) => {
  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles.requestcall_width}`}
      //       contentClassName={`${styles.card_radius}`}
      // size={'lg'}
    >
      <Modal.Body>
        <div className={`p-3`}>
          <div className={`d-flex justify-content-end`}>
            <button className={`${styles.close_button}`}>
              <i class="ri-close-circle-line"></i>
            </button>
          </div>
          <div className={`pe-5`}>Request call back</div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RequestCallBack;
