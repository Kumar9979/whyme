import React, { useState } from "react";
import styles from "../../../styles/postProperty/propertyupload.module.css";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import upload from "../../../assets/icons/upload.png";
import backButton from "../../../assets/icons/backbutton.png";
import PostPropertySubmitButton from "../../../components/postproperty/components/submitButton";
import { useRouter } from "next/router";
import StepperNew from "../../stepper/stepper";
import ImageUploading from "react-images-uploading";
import closeIcon from "../../../assets/icons/close.png";
import { FormikErrorGenerator } from "../../../components/postproperty/formData/formikErrorGenerator";
import PostPropertyLayout from "../../../components/postproperty/components/propertyLayout";

const PropertyUpload = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 5;
  const [currentPage, setCurrentPage] = useState("photoDesc");
  const router = useRouter();
  const [file, setFile] = useState(upload);
  const [uploaded, setUploaded] = useState(false);
  const [size, setSize] = useState(35);
  const [imgName, setImgName] = useState("");
  const [imgTot, setImgTot] = useState(0);

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
        "Accept terms and conditon"
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
    setImgTot(imageList.length);
    setImages(imageList);
    formik.setFieldValue("image", imageList);
  };

  return (
    <PostPropertyLayout>
      <div
        className={` ${styles.property_boxShadow} ${styles.propertyFeature_border_radius} px-3 px-xl-5 pb-4 col-12 col-xl-6 col-lg-7  `}
      >
        {/* <div className={`col-lg-6 col-md-10 col-sm-10 `}> */}
        <div className={`${styles.input_container} mt-4 mt-sm-0`}>
          <h5 className={`${styles.propertyHeading} mt-md-5 mt-sm-3 mt-1 `}>
            Photos & Descrption
          </h5>
          {/* <FileUploader handleChange={handleChange} multiple={true} name="file" types={fileTypes} /> */}
          <form onSubmit={formik.handleSubmit} className="">
            <div className="mt-4 ">
              <label
                htmlFor="profile"
                className={`${styles.labelText} form-label`}
              >
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
                              width={50}
                              height={40}
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
                        <div
                          {...dragProps}
                          onClick={onImageUpload}
                          className={`row p-2 ps-4`}
                        >
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
                        {/* <div className={`d-flex justify-content-center  mt-4`}>
                          <button
                          
                            className={`${styles.upload_button}`}
                            type="button"
                            variant="contained"
                            component="label"
                          >
                            Browse Photos
                          </button>
                        </div> */}
                      </>
                    )}
                  </div>
                )}
              </ImageUploading>
            </div>
            <FormikErrorGenerator
              formikError={formik.errors.image}
              formikTouched={formik.touched.image}
            />

            <div className="mt-2">
              <label
                htmlFor="exampleFormControlInput1"
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

            <FormikErrorGenerator
              formikError={formik.errors.description}
              formikTouched={formik.touched.description}
            />
            <div className={` mt-1`}>
              <input
                type="checkbox"
                name="terms"
                onChange={formik.handleChange}
              />
              <span className={`ms-2 ${styles.terms_condition_text}`}>
                Terms and condition
              </span>
            </div>
            <FormikErrorGenerator
              formikError={formik.errors.terms}
              formikTouched={formik.touched.terms}
            />

            <PostPropertySubmitButton paddingTop="1rem" marginTop="mt-2" />
          </form>
        </div>
      </div>
    </PostPropertyLayout>
  );
};

export default PropertyUpload;
