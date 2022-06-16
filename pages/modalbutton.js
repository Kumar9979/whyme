import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OtpModals from "../components/modals/otpModal";
import Modals from "../components/modals/loginModal";

const ModalButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showModal, setShowModal] = useState(false);

  const handleCloseOtp = () => setShowModal(false);
  const handleShowOtp = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       modals
      </Button>
      <Modals show={show} onShow={handleShow}   onHide={handleClose}/>
      {/* <OtpModals show={showModal} onHide={handleCloseOtp}/> */}

    </>
  );
};

export default ModalButton;
