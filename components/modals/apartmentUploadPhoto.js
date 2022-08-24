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

const ApartmentUploadPhoto = ({ show, handleClose }) => {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  return (
    <Modal centered show={show} onHide={handleClose}
dialogClassName={`${styles.card_width}`}
    contentClassName={`${styles.card_radius}`}
    // size={'lg'}
    >
    
      <Modal.Body
      
      > <div className="">
        <div
              className={`${styles.heading} d-flex justify-content-between `}
            >
              <div className="pt-2 ps-lg-2">
                <span
                  className={`${styles.upload_heading_text} fs_20 fw_600 fs_sm_20 `}
                >
                  Upload Photos
                </span>
              </div>
              <div>
                <span onClick={handleClose} className={`${styles.close_icon}`}>
                  <Image src={closeIcon} width="20px" height="20px" />
                </span>
              </div>
            </div>
        <div className="mt-1 mt-lg-0 px-lg-2">
          <span
            className={`${styles.upload_subheading_text} fs_15 fw_500 fs_sm_15`}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
          </span>
        </div>
        <div className={`${styles.card} px-lg-2`}>
          <div className={`${styles.card_body} border rounded mt-3`}>
            <div
              className={`${styles.upload_icon} d-flex justify-content-center pt-3 pb-1 `}
            >
              <Image src={upload} />
            </div>
            <div
              className={`${styles.upload_image_text_1} d-flex justify-content-center fs_13 fw_500 fs_sm_13`}
            >
              <span>Drag & drop the image of an property</span>
            </div>
            <div
              className={`${styles.upload_image_text_2} d-flex justify-content-center fs_11 fw_500 fs_sm_11`}
            >
              <span>JPG and PNG images - max 20MB each</span>
            </div>
            <div
              className={`${styles.upload_image_text_2} d-flex justify-content-center fs_11 fw_500 fs_sm_11 pt-2`}
            >
              <span>-</span>OR
              <span>-</span>
            </div>
            <form className={``}>
              <input
              style={{ visibility: "hidden" ,position:"absolute" }}
                id="file"
                type="file"
              />
              <label htmlFor="file" className={`${styles.upload_browse_text} d-flex justify-content-center fs_15 fw_500 fs_sm_12 py-2 `}> Browse Photos</label>
            </form>
          </div>
        </div>
      </div>
        
      </Modal.Body>
    </Modal>
  );
};

export default ApartmentUploadPhoto;
