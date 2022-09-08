import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OtpModals from "../components/modals/otpModal";
import Modals from "../components/modals/loginModal";


const Main = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showModal, setShowModal] = useState(false);

  const handleCloseOtp = () => setShowModal(false);
  const handleShowOtp = () => setShowModal(true);

  return (
    <>
      <div className="mt-5 pt-5">
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      </div>

      <Modals show={show} onShow={handleShow} onHide={handleClose} />
      {/* <OtpModals show={showModal} onHide={handleCloseOtp}/> */}

    </>
  );
};

export default Main;
