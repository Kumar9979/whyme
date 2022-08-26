import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../../styles/modals/property-details-modals/activities.module.css"

const Activities = ({ show, handleClose }) => {
  return (
    <Modal
      className={`d-flex justify-content-sm-center ${styles.modal_position}`}
      right
      show={show}
      onHide={handleClose}
      dialogClassName={``}
      //       contentClassName={`${styles.card_radius}`}
      // size={'lg'}
    >
      <Modal.Body className="p-0">
        <div className="p-3">
          <h1>My Activities</h1>
          <div className="d-flex flex-column">
            {activities.map((item, index) => {
              return <p>{item.types}</p>;
            })}
          </div>
          <hr/>
          <h2>My Profile</h2>
          <hr/>
          <button className={`border-0 w-100 ${styles.login_button} `}>Login</button>
          <p className="m-0 d-flex justify-content-center">New to Zameen Square?</p>
          <span className="m-0 d-flex justify-content-center">Sign Up</span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Activities;
const activities = [
  {
    types: "Recently Searched",
  },
  {
    types: "Recently Viewed",
  },
  {
    types: "Shortlisted Properties",
  },
];
