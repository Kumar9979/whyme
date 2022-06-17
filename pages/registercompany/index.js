import React, { useState } from "react";

import styles from "../../styles/modals/registerModal.module.css"
import * as Yup from "yup";
import { useFormik } from "formik";
import Image from "next/image";
import camera from "../../assets/icons/camera.png";
import close from "../../assets/icons/close.png";
import SellRentOptionModal from "../../components/modals/sellRentOptionModal";
import { useRouter } from "next/router";

const RegisterCompany = () => {
  const router=useRouter();
  const [file, setFile] = useState(camera);
  const [uploaded, setuploaded] = useState(false);
  const [size, setSize] = useState(35);
  const [sellRentShow, setSellRentShow] = useState();
  const handleSellRentShow = () => setSellRentShow(true);
  const handleSellRentClose = () => setSellRentShow(false);
  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      email: "",
      companyName: "",
      role: "",
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required("Upload an Image"),
      name: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
      companyName: Yup.string().required("Required"),
      role: Yup.string().required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      handleSellRentShow();
      onHide();
      router.replace('/sellrent')

    },
  });

  function handleChange(e) {
    if (e.target?.files.length !== 0) {
      setSize(100);
      setuploaded(true);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }



  function formReset() {
    setuploaded(false);
    setSize(35);
    formik.setFieldValue("image", "");
  }

  return (
    <>

    
        {/* <Modal
      size="lg"
      aria-labelledby="example-modal-sizes-title-lg"
      show={show}
      onHide={() => {
        onHide();
        formReset();
      }}
      centered
    > */}

<div className={`d-flex align-items-center justify-content-center mx-2`}>

      <div className={`${styles.register_form_container} ${styles.margin_top_5}  ${styles.max_height_800} `}>
      <div className="d-flex justify-content-end mt-4 me-4 mb-1">
        {" "}
        <Image
      
          src={close}
          alt="close icon"
          width={30}
          height={30}
          className={`${styles.cursor_pointer}`}
        />
      </div>
      <div className={styles.modal_body_register}>
        <div className="mb-1 mt-1">
          <h5
            className={`${styles.fontFam_poppins} ${styles.font_semibold} ${styles.color_323D5A} ${styles.font_24} text-nowrap`}
          >
            Register your account
          </h5>

          <p
            className={`${styles.opacity_6} ${styles.fontFam_poppins} ${styles.color_323D5A} ${styles.font_regular} ${styles.font_18}`}
          >
            Please register your account to manage all your property.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-3 w-100">
          <label
            className={`${styles.color_1D1E1F} ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_20} mb-1 `}
          >
            Company Logo
          </label>
          <div className="mb-3">
            <label
              htmlFor="profile"
              className={`${styles.fontFam_poppins} ${styles.modal_inputProfile_registeruser} ${styles.color_1D1E1F} ${styles.font_medium}  ${styles.cursor_pointer} ${styles.font_20} mb-1 d-flex justify-content-center align-items-center`}
            >
              <Image
                src={uploaded ? file : camera}
                alt="image of camera"
                width={size}
                height={size}
              />
            </label>

            {/* <div className={styles.modal_inputProfile_registeruser}>
  hi
</div> */}

{formik.errors.image && formik.touched.image && (
              <div className="d-flex align-items-center text-danger mt-1">
                <i className="ri-error-warning-line me-1 0 "></i>
                <span>{formik.errors.image}</span>
              </div>
            )}
            <input
              type={"file"}
              style={{ visibility: "hidden" }}
              id="profile"
              name="img"
              accept="image/*;capture=camera"
              // onChange={(e) => {
              //   handleChange(e);
              // }}
              onChange={(e) => {
                formik.setFieldValue("image", e.target.files[0]);
                handleChange(e);
              }}
            />

           
          </div>

          <div
            className={` ${styles.flex_column} d-flex w-100   justify-content-between`}
          >
            <div className={`${styles.width_res_cen_half} mb-3 `}>
              <label
                id="#name"
                className={`${styles.fontFam_poppins} ${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1`}
              >
                Company Name
              </label>

              <input
                type="text"
                placeholder="Enter your company name"
                className={`${styles.modal_input_registeruser} w-100`}
                value={formik.values.companyName}
                name="companyName"
                onChange={formik.handleChange}
              />
              {formik.errors.companyName && formik.touched.companyName && (
                <div className="d-flex align-items-center text-danger">
                  <i className="ri-error-warning-line me-1  "></i>
                  <span>{formik.errors.companyName}</span>
                </div>
              )}
            </div>

            <div
              className={`${styles.width_res_cen_half} ${styles.margin_l_3}  mb-3 `}
            >
              <label
                id="#name"
                className={`${styles.fontFam_poppins} ${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1`}
              >
                Name
              </label>

              <input
                id="#name"
                type="text"
                placeholder="Enter your name"
                className={`${styles.modal_input_registeruser} w-100`}
                value={formik.values.name}
                name="name"
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name && (
                <div className="d-flex align-items-center text-danger">
                  <i className="ri-error-warning-line me-1  "></i>
                  <span>{formik.errors.name}</span>
                </div>
              )}
            </div>
          </div>

          <div
            className={` ${styles.flex_column} d-flex w-100   justify-content-between`}
          >
            <div className={`${styles.width_res_cen_half} mb-3 `}>
              <label
                className={`${styles.fontFam_poppins} ${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1`}
              >
                Email Address
              </label>

              <input
                type="text"
                placeholder="Enter your email address"
                className={`${styles.modal_input_registeruser} w-100`}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />

              {formik.errors.email && formik.touched.email && (
                <div className="d-flex align-items-center text-danger">
                  <i className="ri-error-warning-line me-1  "></i>
                  <span> {formik.errors.email}</span>
                </div>
              )}
            </div>
            <div
              className={`${styles.width_res_cen_half} ${styles.margin_l_3}  mb-3`}
            >
              <label
                className={`${styles.fontFam_poppins} ${styles.color_1D1E1F} ${styles.font_medium} ${styles.font_20} mb-1`}
              >
                Role
              </label>

              <input
                type="text"
                placeholder="Ex : Agent, Builder, etc,..."
                className={`${styles.modal_input_registeruser} w-100`}
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
              />

              {formik.errors.role && formik.touched.role && (
                <div className="d-flex align-items-center text-danger">
                  <i className="ri-error-warning-line me-1  "></i>
                  <span> {formik.errors.role}</span>
                </div>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={`${styles.modal_btn_complete} ${styles.font_20} ${styles.font_semibold} text-uppercase btn text-white w-100 mt-4`}
            >
            NEXT
            </button>
          </div>
        </form>


        
      </div>
      </div>

      </div>

    </>

  );
};

export default RegisterCompany;