import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../../styles/modals/property-details-modals/scheduleVisit.module.css";

const ScheduleVisit = ({ show, handleClose }) => {
  return (
    <Modal
      className={`d-flex justify-content-center`}
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles.Schedule_visit}`}
      //       contentClassName={`${styles.card_radius}`}
      // size={'lg'}
    >
      <Modal.Body className="p-0">
        <div className={``}>
          <div className={`d-flex justify-content-end p-1`}>
            <button onClick={handleClose} className={`${styles.close_button} `}>
              <i className={`fs_22 fw-700 ri-close-circle-line`}></i>
            </button>
          </div>

          <div className={`p-3`}>
            <span
              className={`${styles.schedule_visit_heading} fs_22 fw_700 fontFam_poppins`}
            >
              Schedule a Visit
            </span>
            <p>
              Check out the property before <br />
              booking
            </p>
            <div className={`d-flex justify-content-between`}>
              <h2 className={`${styles.select_date} fw_600 fs_20`}>
                Select a Date
              </h2>
              <div className="d-flex">
                <i class="ri-arrow-left-s-line"></i>
                <i class="ri-arrow-right-s-line"></i>
              </div>
            </div>
            <div>
                <div className="d-flex justify-contenyt-between">
                <div className={`d-flex flex-column`}>
                    <span>Mon</span>
                    <span>5</span>
                </div>
                <div className={`d-flex flex-column`}>
                    <span>Mon</span>
                    <span>5</span>
                </div>
                <div className={`d-flex flex-column`}>
                    <span>Mon</span>
                    <span>5</span>
                </div>
                <div className={`d-flex flex-column`}>
                    <span>Mon</span>
                    <span>5</span>
                </div>
                </div>
               
            </div>
          </div>


        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ScheduleVisit;
