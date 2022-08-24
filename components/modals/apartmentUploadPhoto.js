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
  const [images, setImages] = useState([]);
  const maxNumber = 10;
  const [currentPage, setCurrentPage] = useState("photoDesc");
  // const router = useRouter();
  const [file, setFile] = useState(upload);
  const [uploaded, setUploaded] = useState(false);
  const [size, setSize] = useState(35);
  const [imgName, setImgName] = useState("");
  const [imgTot, setImgTot] = useState(0);

  const formik = useFormik({
    initialValues: {
      image: "",
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required("Upload an Image"),

      // terms: Yup.string().required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImgTot(imageList.length);
    setImages(imageList);
    formik.setFieldValue("image", imageList);
  };

  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      dialogClassName={`${styles.card_width}`}
      contentClassName={`${styles.card_radius}`}
      // size={'lg'}
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
                <Image src={closeIcon} width="20px" height="20px" />
              </span>
            </div>
          </div>
          <div className="mt-1 mt-lg-0 px-lg-2">
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
                <div
                  {...dragProps}
                  className={`${styles.upload_image} `}
                >
                  {images.length === 0 ? (
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
                        {/* <p className={`${styles.upload_text_3}`}>Browse Photos</p> */}
                      </div>
                    </div>
                  ) : (
                    <>
                      {" "}
                      <div className={`row p-2 ps-4`}>
                        {/* {imageList.slice(0,6).map((image, index) => ( */}
                        {images.map((image, index) => (
                          <div className={`col-4 d-flex mb-2`} key={index}>
                            <div
                              className={`${styles.property_upload_preview_image_container}`}
                            >
                              <Image
                                src={image.data_url}
                                name="uploaded-images"
                                layout="fill"
                                objectFit="cover"
                                className={`${styles.property_upload_preview_image}`}
                              />
                            </div>
                            <button
                              type="button"
                              className={`border-0 bg-white`}
                              onClick={() => onImageRemove(index)}
                            >
                              <Image
                                src={closeIcon}
                                alt="remove image icon"
                                width={18}
                                height={18}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                      {images.length > 5 ? (
                        <span>{imgTot - 6} more images</span>
                      ) : null}
                      <div className={`d-flex justify-content-center  mt-4`}>
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
                    </>
                  )}
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

          {/* <div className={`${styles.card} px-lg-2`}>
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
        </div> */}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ApartmentUploadPhoto;
