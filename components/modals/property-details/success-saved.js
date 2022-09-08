import React from "react";
import Modal from "react-bootstrap/Modal";
import successsv from "../../../styles/modals/property-details-modals/successsaved.module.css"
import Image from "next/image";
import success from "../../../assets/icons/modals/success.svg";


const SuccessSave = ({ show, handleClose }) => {
  return (
    <Modal
      className={`d-flex justify-content-center`}
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${successsv.shareproperty_container}`}
      
    >
      <Modal.Body className={`${successsv.success_container}`}>
        <div className= {`${successsv.success_containerr} my-4 justify-content-center`}  >
                <div className="d-flex justify-content-center"> <Image
                    src={success}
                    alt="Picture of the author"
                    width={36}
                    height={35.88}
                    className={` `}
                  />
                  </div>
                  <div className="d-flex justify-content-center">
                  <span className={`${successsv.success_texthead} mt-lg-3 mt-md-3 mt-sm-3 mt-3 fs_20 fw_600`}>Changes Saved Successfully</span>
                  </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SuccessSave;
