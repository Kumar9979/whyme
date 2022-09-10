import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { StylesContext } from "@material-ui/styles";
import ImageUploading from "react-images-uploading";
import closeIcon from "../../../assets/icons/close.png";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import upload from "../../../assets/icons/upload.png";
import styles from "../../../styles/modals/apartmentUploadPhoto.module.css";

const ApartmentUploadPhoto = ({ show, handleClose, handleImageUpload }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 10;

  const formik = useFormik({
    initialValues: {
      image: "",
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required("Upload an Image"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList);
    handleImageUpload(imageList, handleClose);
  };

  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles.card_width}`}
      contentClassName={`${styles.card_radius}`}
    >
      <Modal.Body>
        {" "}
        <div className="">
          <div className={`${styles.heading} d-flex justify-content-between `}>
            <div className="pt-2 ps-lg-2">
              <span
                className={`${styles.upload_heading_text} fs_20 fw_600 fs_sm_20 `}
              >
                Upload Photos
              </span>
            </div>
            <div>
              <span onClick={handleClose} className={`${styles.close_icon}`}>
                <Image src={closeIcon} width="23px" height="23px" />
              </span>
            </div>
          </div>
          <div className={`${styles.upload_photo_text} mt-1 mt-lg-0 px-lg-2 `}>
            <span
              className={`${styles.upload_subheading_text} fs_15 fw_500 fs_sm_15`}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </span>
          </div>
          <div className="mt-2">
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
                errors,
              }) => (
                <div {...dragProps} className={`${styles.upload_image} m-2 `}>
                  <div>
                    <div
                      htmlFor="upload"
                      className="d-flex justify-content-center mt-3 mb-2"
                    >
                      <label htmlFor="upload">
                        {" "}
                        <Image
                          src={upload}
                          name="image"
                          value={formik.values.image}
                          alt="image of camera"
                        />
                      </label>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center ">
                      <p className={`${styles.upload_text_1}`}>
                        Drag & drop the image of an property
                      </p>

                      <p className={`${styles.upload_text_2}`}>
                        JPG and PNG images - max 20MB each
                      </p>
                      <p className={`${styles.upload_text_2}`}>
                        <span className={`${styles.or_text}`}>-</span>OR
                        <span>-</span>
                      </p>
                      <button
                        {...dragProps}
                        onClick={onImageUpload}
                        className={`${styles.upload_button}`}
                        type="button"
                        variant="contained"
                        component="label"
                      >
                        Browse Photos
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </ImageUploading>
          </div>
          {formik.errors.image && formik.touched.image && (
            <div className="d-flex align-items-center text-danger mt-1">
              <i
                className={` ${styles.error_message} ri-error-warning-line me-1 `}
              ></i>
              <span className={`${styles.error_message}`}>
                {formik.errors.image}
              </span>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ApartmentUploadPhoto;
