import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

import OtpImage from "../../assets/icons/otp.png";
import RegisterUserModal from "./registerUserModal";
import Close from "../../assets/icons/close.png";
import Image from "next/image";
import styles from "../../styles/modals/modal.module.css";
import OtpInput from "react-otp-input";
import Modals from "./loginModal";

const OtpModals = ({ onShowModal, show, onHide, number }) => {
  const [OTP, setOTP] = useState("");
  const [nums, setNumbs] = useState("");

  const [counter, setCounter] = useState(10);

  const [isActive, setIsActive] = useState(true);

  const [OtpNumber, setOtpNumber] = React.useState(false);
  const [showRegUserModal, setshowRegUserModal] = useState(false);

  // console.log(number);
  const handleRegModalClose = () => setshowRegUserModal(false);
  const handleREgModalShow = () => setshowRegUserModal(true);

  let value = false;

  function handleClick() {
    if (+OTP === 6789) {
      console.log("success");
      onHide();
      handleREgModalShow();
    } else {
      value = true;
      console.log("error");
      console.log(value);
      setOtpNumber(true);
    }
  }

  function reset() {
    setCounter(10);
    setIsActive(true);
  }
  function timerPause() {
    setCounter(-1);
    setIsActive(false);
  }

  // React.useEffect(() => {
  //   if (counter > 0) {
  //     setTimeout(() => setCounter(counter - 1), 1000);
  //   } else {
  //     setCounter('BOOOOM!');
  //   }
  // });

  useEffect(() => {
    let interval = null;

    if (isActive && number) {
      interval = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
    } else if (!isActive && counter !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, counter, nums]);

  useEffect(() => {
    setNumbs(number);
  }, [number]);

  // console.log(nums);

  return (
    <>
      <div>
        <Modal show={show} onHide={onHide} centered>
          <div className={`${styles.cursor_pointer} d-flex justify-content-end mt-3 me-4`}>
            <Image src={Close} onClick={onHide} />
          </div>

          <Modal.Body>
            <div className="d-flex justify-content-center mb-5">
              <Image src={OtpImage} />
            </div>
            <div
              className={` ${styles.head} d-flex justify-content-center mb-2`}
            >
              <h5 className={` ${styles.heading} `}>OTP Verification</h5>
            </div>
            <div className="d-flex justify-content-center me-2 ms-2">
              <p className={`${styles.login_text}`}>
                Enter 4 digit one time password sent to your mobile
                <div className="d-flex justify-content-center">
                  {" "}
                  <span className={`${styles.login_text}`}>
                    number{" "}
                    <span className={`${styles.phone_number} text-dark`}>
                      {number}
                    </span>
                  </span>{" "}
                  <span
                    onClick={() => {
                      timerPause();
                      onHide();
                      onShowModal();
                    }}
                    className={` ${styles.otp_text} ms-2`}
                  >
                    <i class="ri-pencil-line"></i> change
                  </span>
                </div>
              </p>
            </div>
            <div className={`d-flex justify-content-around ms-3 me-5`}>
              <OtpInput
                input
                value={OTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
                isInputNum={true}
                onChange={setOTP}
                className={`${styles.otp_input}`}
                inputStyle={
                  OtpNumber
                    ? {
                        width: "60px",
                        height: "50px",

                        marginLeft: "18px",
                        borderBottom: "1px solid red",
                        borderRight: "none",
                        borderLeft: "none",
                        borderTop: "none",
                        color: "black",
                        fontSize: "23px",
                      }
                    : {
                        width: "60px",
                        height: "50px",
                        marginLeft: "18px",
                        borderBottom: "1px solid #00000029",
                        borderRight: "none",
                        borderLeft: "none",
                        borderTop: "none",
                        color: "black",
                        fontSize: "23px",
                      }
                }
              />
            </div>
            <div className={`${styles.otp_warning} d-flex mt-1 justify-content-start me-5 `}>
              {" "}
              {OtpNumber ? (
                <span className={`${styles.otp_warning} text-danger `}>
                  Please Enter Valid Otp{" "}
                </span>
              ) : null}
            </div>

            <div className="d-flex justify-content-end  me-3">
              {/* <p className="time-counter ">{counter >= 0 ? counter : null}</p> */}

              {counter < 0 ? (
                <span
                  onClick={() => reset()}
                  className={`${styles.resend_link} `}
                >
                  &nbsp;Resend OTP
                </span>
              ) : (
                <span className={`${styles.otp_timer} `}>{counter >= 0 ? counter : null}</span>
              )}
            </div>
            <div className="d-flex justify-content-center mt-5 mb-3">
              {" "}
              <button
                className={`${styles.login_button} py-2 `}
                type="submit"
                onClick={() => {
                  handleClick();
                }}
              >
                VERIFY
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <RegisterUserModal show={showRegUserModal} onHide={handleRegModalClose} />
    </>
  );
};

export default OtpModals;
