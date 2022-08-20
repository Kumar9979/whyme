import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { StylesContext } from "@material-ui/styles";
import ImageUploading from "react-images-uploading";
import closeIcon from "../../assets/icons/close.png";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import upload from "../../assets/icons/upload.png";
import styles from "../../styles/modals/apartmentUploadPhoto.module.css";

const ApartmentDeletePhoto = ({ show, handleClose }) => {
    return (
      <Modal centered show={show} onHide={handleClose}
  dialogClassName={`${styles.deleteCard_width}`}
//       contentClassName={`${styles.card_radius}`}
      // size={'lg'}
      >
      
        <Modal.Body
        
        > <div className="p-lg-3">
          <div className={`${styles.heading} d-flex justify-content-between `}>
            <span
              className={`${styles.upload_heading_text} fs_30 fw_600 fs_sm_20`}
            >
              Are you sure?
            </span>
            
          </div>
          <div>
            <span
              className={`${styles.upload_subheading_text} fs_18 fw_500 fs_sm_15`}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </span>
          </div>
          <div className={`d-flex justify-content-between `}>
          <Button className={`${styles.delete_btn}`} onClick={handleClose}
          >
          <span className={`${styles.delete_text} fs_20 fw_500`}>Delete</span>
          </Button>
          <Button className={`${styles.edit_btn} ms-5`} onClick={handleClose}>
            <span className={`${styles.edit_text} fs_20 fw_500`}>No</span>
          </Button>
          </div>
          
        </div>
          
        </Modal.Body>
      </Modal>
    );
  };
  
  export default ApartmentDeletePhoto;