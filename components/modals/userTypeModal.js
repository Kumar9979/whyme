import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "../../styles/modals/registerUserModal.module.css";
const UserTypeModal = ({ show, onHide }) => {
  return (
    <div>
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
              What you are
            </h5>

            <p
              className={`${styles.opacity_6} ${styles.fontFam_poppins} ${styles.color_323D5A} ${styles.font_regular} ${styles.font_18}`}
            >
              Please select the Preferred option that are right here
            </p>
          </div>

          <div className="d-flex flex-column justify-content-around ">
            <div
              className={`${styles.modal_box_type} ${styles.color_1D72DB} d-flex justify-content-between mb-3`}
            >
              <div className="d-flex  justify-content-between align-items-center">
                {" "}
                <i
                  className={`${styles.modal_icon_arrowRight}  ms-2 ri-building-2-line`}
                ></i>
                <span
                  className={`${styles.font_20} ${styles.font_medium} ms-3`}
                >
                  Builder/Developer
                </span>
              </div>
              <i
                className={`${styles.modal_icon_arrowRight} ri-arrow-right-s-line mt-1`}
              ></i>
            </div>

            <div
              className={`${styles.modal_box_type} ${styles.color_1D72DB} d-flex justify-content-between  mb-3`}
            >
              <div className="d-flex  justify-content-between align-items-center ">
                <i
                  className={`${styles.modal_icon_arrowRight} ms-2 ri-award-fill`}
                ></i>
                <span
                  className={`${styles.font_20} ${styles.font_medium} ms-3`}
                >
                  Agent
                </span>
              </div>
              <i
                className={`${styles.modal_icon_arrowRight} ri-arrow-right-s-line mt-1`}
              ></i>
            </div>
            <div
              className={`${styles.modal_box_type} ${styles.color_1D72DB} d-flex justify-content-between`}
            >
              <div className="d-flex  justify-content-between align-items-center">
                {" "}
                <i
                  className={`${styles.modal_icon_arrowRight}  ms-2 ri-home-5-line`}
                ></i>
                <span
                  className={`${styles.font_20} ${styles.font_medium} ms-3`}
                >
                  Owner
                </span>
              </div>

              <i
                className={`${styles.modal_icon_arrowRight} ri-arrow-right-s-line mt-1`}
              ></i>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserTypeModal;
