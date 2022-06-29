import React, { useState } from "react";
import styles from "../../../styles/postProperty/propertyupload.module.css";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import upload from "../../../assets/icons/upload.png";
import backButton from "../../../assets/icons/backbutton.png";
import Navbar from "../../navbar/navbar";
import { useRouter } from "next/router";
import StepperNew from "../../stepper/stepper";
import ImageUploading from "react-images-uploading";
import closeIcon from "../../../assets/icons/close.png";

const PropertyUpload = () => {
  const fileTypes = ["JPG", "PNG", "GIF"];

  const [images, setImages] = useState([]);
  const maxNumber = 10;
  const [currentPage, setCurrentPage] = useState("photoDesc");
  const router = useRouter();
  const [file, setFile] = useState(upload);
  const [uploaded, setUploaded] = useState(false);
  const [size, setSize] = useState(35);
  const [imgName, setImgName] = useState("");
  const [imgList, setImgList] = useState([]);

  const formik = useFormik({
    initialValues: {
      image: "",
      description: "",
      terms: false,
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required("Upload an Image"),
      description: Yup.string().required("Required"),
      terms: Yup.boolean().oneOf(
        [true],
        "Terms and condition need to be accepted"
      ),

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
    console.log(imageList.slice(0,6));
    setImages(imageList.slice(0,6));
  };

  function handleChange(e) {
    if (e.target?.files.length !== 0) {
      setImgName(e.target.files[0].name);
      console.log(imgName);
      setUploaded(true);
    } else {
      setUploaded(false);
    }
  }

  const onUpload = (files) => {
    setUploaded(true);
    setFile(files[0]);
    setImgName(files[0].name);
    formik.setFieldValue("image", files[0]);
  };
  console.log(images);
  return (
    <div>
      <Navbar />
      <div className="container mt-5 pt-3">
        <div className="row">
          <div
            className={`col-lg-3 col-md-11 col-sm-11 ${styles.property_boxShadow} ${styles.stepper_border_radius} ${styles.bg_color_1D72DB}`}
          >
            <StepperNew currentPage={currentPage} />
          </div>
          <div
            className={` ${styles.property_boxShadow} ${styles.propertyFeature_border_radius}  col-lg-7 col-md-11 col-sm-11`}
          >
            {/* <div className={`col-lg-6 col-md-10 col-sm-10 `}> */}
            <div className={`${styles.input_container}`}>
              <h5 className={`${styles.propertyHeading} pt-3`}>
                Photos & Descrption
              </h5>
              {/* <FileUploader handleChange={handleChange} multiple={true} name="file" types={fileTypes} /> */}
              <form onSubmit={formik.handleSubmit} className="mt-3">
                <div className="mt-5">
                  <label
                    for="profile"
                    className={`${styles.labelText} form-label`}
                  >
                    {/* <Image
                      src={uploaded ? file : upload}
                      alt="image of camera"
                      width={size}
                      height={size}
                    /> */}
                    Photos
                  </label>
                  {/* <FileUploader onUpload={onUpload} count={5}> */}
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
                      <div {...dragProps} className={`${styles.upload_image} `}>
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
                            <div className={`d-flex p-2`}>
                              {/* {imageList.slice(0,6).map((image, index) => ( */}
                              {images.map((image, index) => (
                                <div className={``} key={index}>
                                  <Image
                                    src={image.data_url}
                                    name="uploaded-images"
                                    width={50}
                                    height={50}
                                  />
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
                            <div
                              className={`d-flex justify-content-center mt-5`}
                            >
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

                <div className="mt-5">
                  <div className="mt-3">
                    <label
                      for="exampleFormControlInput1"
                      className={`${styles.labelText} form-label`}
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      className={`${styles.description} form-control`}
                      id="exampleFormControlInput1"
                      aria-describedby="emailHelp"
                      placeholder="Describe your property"
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                    ></textarea>
                  </div>
                </div>
                {formik.errors.description && formik.touched.description && (
                  <div className="d-flex align-items-center text-danger mt-1">
                    <i className="ri-error-warning-line me-1 0 "></i>
                    <span>{formik.errors.description}</span>
                  </div>
                )}
                <div className={` mt-2 `}>
                  <input
                    type="checkbox"
                    name="terms"
                    onChange={formik.handleChange}
                  />
                  <span className={`ms-2 ${styles.terms_condition_text}`}>
                    Terms and condition
                  </span>
                </div>
                {formik.errors.terms && formik.touched.terms && (
                  <div className="d-flex align-items-center text-danger mt-1">
                    <i className="ri-error-warning-line me-1 0 "></i>
                    <span>{formik.errors.terms}</span>
                  </div>
                )}

                <div
                  className={`content-btn d-flex justify-content-end mt-5 mb-3`}
                >
                  <div className={`d-flex`}>
                    <button
                      type="button"
                      onClick={() =>
                        router.push(
                          "/post-property/price-details/priceDetailsSell"
                        )
                      }
                      className={`bg-white border-0  `}
                    >
                      <span
                        className={`${styles.container_icon_arrowLeftbtn} align-middle me-2`}
                      >
                        <i
                          className={`${styles.icon_arrowLeftbtn} h-100 p-1 ri-arrow-left-line  border mt-1 rounded `}
                        ></i>
                      </span>

                      <span
                        className={` ${styles.color_1D72DB} ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_18} align-middle text-primary`}
                      >
                        Back
                      </span>
                    </button>

                    <button
                      type="submit"
                      className={`${styles.bg_color_1D72DB}  ms-3 text-white d-flex justify-content-between align-items-center rounded-3 border-0  px-3 py-2`}
                    >
                      <span
                        className={` ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_18} align-middle`}
                      >
                        Next
                      </span>
                      <div>
                        <i
                          className={`${styles.modal_icon_arrowRightbtn} h-100 p-1 ri-arrow-right-line text-white border-light border mt-1 rounded ms-5 `}
                        ></i>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyUpload;
