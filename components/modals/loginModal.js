import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import OtpModal from "./otpModal";
import LImage from "../../assets/icons/login.png";
import * as Yup from "yup";
import Close from "../../assets/icons/close.png";
import Image from "next/image";
import styles from "../../styles/modals/modal.module.css";
// import Select from "react-select";

const Modals = ({ show, onShow, onHide }) => {
  const [showOtp, setShowOtp] = useState(false);
  const [number, setNumber] = useState(undefined);
  const phoneRegex = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;
  // const options = [
  //   { value: "+91", label: "+91" },
  //   { value: "+92", label: "+92" },
  //   { value: "+93", label: "+93" },
  // ];

  const [selectedOption, setSelectedOption] = useState(null);

  const [num, setNum] = useState("");
  const [numPass, setNumPass] = useState(false);

  const ShowOtpModal = () => setShowOtp(true);
  const closeOtpModal = () => setShowOtp(false);

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .matches(phoneRegex, "Please enter the valid phone number")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setNumber(values.phoneNumber);
      setShowOtp(true);
      onHide();
    
    },
  });

  return (
    <div>
      <Modal show={show} onHide={onHide} centered>
        <div className={`${styles.cursor_pointer} d-flex justify-content-end mt-3 me-4`}>
          <Image src={Close} onClick={onHide} />
        </div>

        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <div className="d-flex justify-content-center mb-5">
              <Image src={LImage} />
            </div>
            <div
              className={` ${styles.head} d-flex justify-content-center mb-2`}
            >
              <h5 className={` ${styles.heading} `}>Mobile Number</h5>
            </div>
            <div className="d-flex justify-content-center me-3 ms-3">
              <p className={`${styles.login_text}`}>
                We will send you a One Time Password on
                <div className="d-flex justify-content-center">
                  {" "}
                  <p className={`${styles.login_text}`}>
                    this mobile number.
                  </p>{" "}
                </div>
              </p>
            </div>
            <div className="d-flex justify-content-center me-4 ms-4 ">
              {/*             
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              /> */}

              {formik.errors.phoneNumber &&
              formik.touched.phoneNumber ? null : (
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  className={`${styles.input_text}  px-3`}
                />
              )}
            </div>
            <div className="d-flex  justify-content-center">
              <div className=" w-100 ms-4 me-4 mt-2">
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      className={`${styles.input_text} ${styles.input_text_warning} px-3`}
                    />

                    <div>
                      {" "}
                      <p className="d-flex text-danger">
                        <i className="ri-error-warning-line me-1 "></i>

                        {formik.errors.phoneNumber}
                      </p>{" "}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="d-flex justify-content-center mt-5 mb-3">
              {" "}
              <button className={`${styles.login_button} py-2 `} type="submit">
                CONTINUE
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <OtpModal
        onShowModal={onShow}
        number={number}
        show={showOtp}
        onHide={closeOtpModal}
      />
    </div>
  );
};

export default Modals;
