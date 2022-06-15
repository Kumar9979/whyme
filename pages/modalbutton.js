import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OtpModals from "../components/modals/otpModal";
import Modals from "../components/modals/modal";

const userTypeModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modals show={show} onHide={handleClose}/>
      {/* <OtpModals show={show} onHide={handleClose}/> */}
    </>
  );
};

export default userTypeModal;
