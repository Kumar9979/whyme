import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../../../assets/icons/close.png";
import Image from "next/image";
import styles from "../../../../styles/modals/apartmentUpdateMap.module.css";
import PropertyLocation from "../../../modal-location";

const AgricultureFarmHouseUpdateMap = ({ show, handleClose }) => {
  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles.map_container}`}
      contentClassName={`${styles.card_radius}`}
    
    >
      <Modal.Body>
        {" "}
        <div className="px-lg-2">
          <div className={`${styles.heading} d-flex justify-content-between `}>
            <div>
            <span
              className={`${styles.upload_heading_text} fs_20 fw_600 fs_sm_20 `}
            >
              Select Your Property In Map
            </span></div>
            <div>
                 <span onClick={handleClose} className={`${styles.close_icon}`}>
              <Image src={closeIcon} width="23px" height="23px"
              
              />
            </span>
            </div>
           
          </div>
          <PropertyLocation/>
          <div className={`d-flex justify-content-end`}>
            <button onClick={handleClose} className={`${styles.save_btn} px-4 px-lg-5 py-lg-2 py-1 fs_15 mt-3`}>
                <span>
                Save
                </span>
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AgricultureFarmHouseUpdateMap ;
