import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import userTypeModal from "../components/modals/userTypeModal";
import RegisterCompanyModal from "../components/modals/registerCompanyModal";
import RegisterUserModal from "../components/modals/registerUserModal";

const modals = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      {/* <userTypeModal show={show} onHide={handleClose}/> */}
      {/* <RegisterCompanyModal show={show} onHide={handleClose}/> */}
      <RegisterUserModal show={show} onHide={handleClose}/>
    </>
  );
};

export default modals;
