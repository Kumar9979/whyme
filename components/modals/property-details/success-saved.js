import React from "react";
import Modal from "react-bootstrap/Modal";
// import styles from "../../../styles/modals/edit-profile-modals/edit-profile.module.css";
import Styles from "../../../styles/modals/property-details-modals/reportProperty.module.css";
import styles2 from "../../../styles/modals/property-details-modals/shareproperty.module.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import Image from "next/image";
import success from "../../../assets/icons/modals/success.svg";


const SuccessSave = ({ show, handleClose }) => {
  return (
    <Modal
      className={`d-flex justify-content-center`}
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles2.shareproperty_container}`}
      
    >
      <Modal.Body className={`${styles2.shareproperty_container}`}>
        <div className= {`${styles2.shareproperty_containerr} my-4 justify-content-center`}  >
                <div className="d-flex justify-content-center"> <Image
                    src={success}
                    alt="Picture of the author"
                    width={36}
                    height={35.88}
                    className={` `}
                  />
                  </div>
                  <div className="d-flex justify-content-center">
                  <span className={`${Styles.report_texthead} mt-lg-3 fs_20 fw_600`}>Changes Saved Successfully</span>
                  </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SuccessSave;
