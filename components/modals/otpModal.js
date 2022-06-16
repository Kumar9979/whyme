import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

import OtpImage from "../../assets/icons/otp.png";

import Close from "../../assets/icons/close.png";
import Image from "next/image";
import styles from "../../styles/modals/modal.module.css";
import OtpInput from "react-otp-input";
import Modals from "./modal";

const OtpModals = ({ onShowModal, show, onHide, number }) => {
  const [OTP, setOTP] = useState("");
  const [nums, setNumbs] = useState("");

  const [counter, setCounter] = useState(10);

  const [isActive, setIsActive] = useState(true);

  const [OtpNumber, setOtpNumber] = React.useState(false);

  console.log(number);

  let value = false;

  function handleClick() {
    if (+OTP === 6789) {
      console.log("success");
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
    setCounter(10);
    setIsActive(false);
  }

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

  console.log(nums);

  return (
    <>
      <div>
        <Modal show={show} onHide={onHide} centered>
          <div className="d-flex justify-content-end mt-3 me-2">
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
            <div className="d-flex justify-content-center me-3 ms-3">
              <p className={`${styles.login_text}`}>
                Enter 4 digit one time password sent to your mobile
                <div className="d-flex justify-content-center">
                  {" "}
                  <p className={`${styles.login_text}`}>
                    number{" "}
                    <span className={`${styles.phone_number} text-dark`}>
                      {number}
                    </span>
                  </p>{" "}
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
            <div className={`d-flex justify-content-around me-2`}>
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
            <div className="d-flex mt-3 ms-5">
              {" "}
              {OtpNumber ? (
                <span className="text-danger ">The OTP entered is invalid</span>
              ) : null}
            </div>

            <div className="d-flex justify-content-end  me-5">
              {/* <p className="time-counter ">{counter >= 0 ? counter : null}</p> */}

              {counter < 0 ? (
                <span
                  onClick={() => reset()}
                  className={`${styles.resend_link} pe-4`}
                >
                  &nbsp;Resend OTP
                </span>
              ) : (
                <p className="time-counter ">{counter >= 0 ? counter : null}</p>
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
      {/* <Modals show={showModal} onHide={handleCloseOtp}/> */}
    </>
  );
};

export default OtpModals;
