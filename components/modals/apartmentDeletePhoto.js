import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import styles from "../../styles/modals/apartmentDeletePhoto.module.css";

const ApartmentDeletePhoto = ({ show, handleClose, index, deleteFn }) => {
  function handleDelete() {
    deleteFn(index);
    handleClose();
  }
  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles.deleteCard_width}`}
      contentClassName={`${styles.card_radius}`}
      size={"sm"}
    >
      <Modal.Body>
        {" "}
        <div className="">
          <div className={`${styles.heading} d-flex justify-content-between `}>
            <span
              className={`${styles.upload_heading_text} fs_20 fw_600 fs_sm_20 px-lg-2`}
            >
              Are you sure?
            </span>
          </div>
          <div className="px-lg-2">
            <span
              className={`${styles.upload_subheading_text} fs_12 fw_500 fs_sm_15 `}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </span>
          </div>
          <div className={`d-flex justify-content-center mt-3 mb-1 px-lg-2`}>
            <button
              className={`${styles.delete_btn} py-2 `}
              onClick={handleDelete}
            >
              <span className={`${styles.delete_text} fs_15 fw_500 `}>
                Delete
              </span>
            </button>
            <button className={`${styles.no_btn} ms-4 `} onClick={handleClose}>
              <span className={`${styles.no_text} fs_15 fw_500`}>No</span>
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ApartmentDeletePhoto;
