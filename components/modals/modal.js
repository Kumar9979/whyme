import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import OtpModal from "./otpModal";
import LImage from "../../assets/icons/login.png";
import * as Yup from "yup";
import Close from "../../assets/icons/close.png";
import Image from "next/image";
import styles from "../../styles/modals/modal.module.css";
import "react-phone-number-input/style.css";
import Select from "react-select";


const Modals = ({ show, onHide }) => {
  const [showOtp, setShowOtp] = useState(false);
  const [number, setNumber] = useState('');



  const options = [
    { value: '+91', label: '+91' },
    { value: '+92', label: '+92' },
    { value: '+93', label: '+93' }
   ,
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const [num, setNum] = useState("");
  const [numPass, setNumPass] = useState(false);
  // const phoneRegex = /^[0-9]{10}$/;
  // const router = useRouter();

  const ShowOtpModal = () => setShowOtp(true);
  const closeOtpModal = () => setShowOtp(false);

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      phoneNumber:
        Yup.string()
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    setNumber(values.phoneNumber)
    setShowOtp(true)
    },
  });
 







  return (
    <div>
      <Modal show={show} onHide={onHide} centered>
        <div className="d-flex justify-content-end mt-3 me-2">
          <Image src={Close} onClick={onHide} />
        </div>

        <Modal.Body>
          <form onSubmit={
          formik.handleSubmit
          
          }>
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
              {/* <PhoneInput
                placeholder="Enter phone number"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                className={` ${styles.input_text} form-control w-100 px-2 py-2`}
                // inputstyle={{
                //   border:"none",
                // }}
              /> */}
     <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
              
              />


            
<input type="text" 

name="phoneNumber"
value={formik.values.phoneNumber}
onChange={formik.handleChange}
/>

            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <p className="d-flex warningmsg">
                  <i className="ri-error-warning-line me-1 "></i>
                  {formik.errors.phoneNumber}
                </p>
              )}

            </div>
            <div className="d-flex justify-content-center mt-5 mb-3">
              {" "}
              <button
                className={`${styles.login_button} py-2 `}
                type="submit"
              >
                CONTINUE
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <OtpModal number={number} show={showOtp} onHide={closeOtpModal} />
    </div>
  );
};

export default Modals;
