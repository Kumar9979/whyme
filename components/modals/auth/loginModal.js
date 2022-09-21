import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import OtpModals from "./otpModal";
import LoginImage from "../../../assets/icons/login.png";
import * as Yup from "yup";
import Close from "../../../assets/icons/close.png";
import Image from "next/image";
import styles from "../../../styles/modals/modal.module.css";
import Select from "react-select";
import { reactSelectSignUp } from "../../reactSelectStyle";
import { countryData } from "../../countryCode";

const LoginModals = ({ show, onShow, onHide }) => {
  const [showOtp, setShowOtp] = useState(false);
  const [timer, setTimer] = useState(false);

  const [number, setNumber] = useState(undefined);
  const phoneRegex =
  /^\d{10}$/;
  // const options = [
  //   { value: "+91", label: "+91" },
  //   { value: "+92", label: "+92" },
  //   { value: "+93", label: "+93" },
  // ];

  const [selectedOption, setSelectedOption] = useState(null);

  const ShowOtpModal = () => setShowOtp(true);
  const closeOtpModal = () => setShowOtp(false);

  const handleTimer = () => setTimer(!timer);

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      countryCode: "+91",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .matches(phoneRegex, "Please enter the valid phone number")
        .required("Required"),
      countryCode:
         Yup.string()
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setNumber(values.phoneNumber);
      setShowOtp(true);
      onHide();
      setTimer(true);
    },
  });

  const Options = countryData.map((item) => ({
    value: item.dial_code,
    label: item.dial_code,
  }));

  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        centered
        dialogClassName={`${styles.login_modal_container}`}
      >
        <div className="d-flex justify-content-end mt-3 me-2">
          <Image src={Close} className={`cursor_pointer`} onClick={onHide} />
        </div>

        <Modal.Body className={``}>
          <form onSubmit={formik.handleSubmit}>
            <div className="d-flex justify-content-center mb-5">
              <Image src={LoginImage} />
            </div>
            <div
              className={` ${styles.head} d-flex justify-content-center mb-2`}
            >
              <h5 className={` ${styles.heading} `}>Mobile Number</h5>
            </div>
            <div className="d-flex justify-content-center me-3 ms-3">
              <div className={`${styles.login_text} `}>
                <p>We will send you a One Time Password on</p>
                <div className="d-flex justify-content-center">
                  {" "}
                  <div className={`${styles.login_text_2} `}>
                    <p>this mobile number.</p>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div
              className={`${
                formik.errors.phoneNumber && formik.touched.phoneNumber
                  ? styles.login_input_container_error
                  : styles.login_input_container
              } d-flex justify-content-center align-items-center me-4 ms-4 `}
            >
              <Select
                defaultValue={{ label: "+91", value: "+91" }}
                name="countryCode"
                options={Options}
                styles={reactSelectSignUp}
                components={{
                  IndicatorSeparator: () => null,
                  // DropdownIndicator,
                }}
                onChange={(selectedOption) => {
                  let event = {
                    target: {
                      name: "countryCode",
                      value: selectedOption.value,
                    },
                  };
                  formik.handleChange(event);
                }}
                instanceId="countryCode"
              />

              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                className={`${
                  formik.errors.phoneNumber && formik.touched.phoneNumber
                    ? styles.input_text_warning_border
                    : styles.input_text
                } my-2 px-3`}
              />
            </div>
            <div className="d-flex  justify-content-center">
              <div className=" w-100 ms-4 me-3 mt-1 ">
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <>
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

      <OtpModals
        onShowModal={onShow}
        number={number}
        show={showOtp}
        onHide={closeOtpModal}
        timerStatus={timer}
        handleTimer={handleTimer}
      />
    </div>
  );
};

export default LoginModals;
