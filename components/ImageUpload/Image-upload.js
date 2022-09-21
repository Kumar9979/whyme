import ImageUploading from "react-images-uploading";
import upload from "../../assets/icons/upload.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";

import styles from "../../styles/imageUpload/image-upload.module.css";

import closeIcon from "../../assets/icons/close.png";
import Image from "next/image";

function ImageUpload({ handleImageUpload }) {
  const [images, setImages] = useState([]);
  const maxNumber = 10;
  const [image, setimage] = useState([]);
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
    handleImageUpload(imageList, empty);
    // setImgTot(imageList.length);
    // setimage(imageList);
    // formik.setFieldValue("image", imageList);
  };
  function empty() {
    console.log("uploaded");
  }

  return (
    <div>
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
                    <span className={`${styles.upload_text_1} fs_15 fw_500`}>
                      Drag & drop the image of an property
                    </span>

                    <span className={`${styles.upload_text_2} fs_13 fw_500`}>
                      JPG and PNG images - max 20MB each
                    </span>
                    <span className={`${styles.upload_text_2}`}>
                      <span className={`${styles.or_text}`}>-</span>OR
                      <span>-</span>
                    </span>
                    <button
                      {...dragProps}
                      onClick={onImageUpload}
                      className={`${styles.upload_button} fs_15 fw_600`}
                      type="button"
                      variant="contained"
                      component="label"
                    >
                      Browse Photos
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {" "}
                  <div className={`row p-2 ps-4`}>
                    {/* {imageList.slice(0,6).map((image, index) => ( */}
                    {images.map((image, index) => (
                      <div className={`col-4 d-flex mb-2`} key={index}>
                        <div className="position-relative">
                          <Image
                            src={image.data_url}
                            name="uploaded-images"
                            width={20}
                            height={20}
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
    </div>
  );
}

export default ImageUpload;
