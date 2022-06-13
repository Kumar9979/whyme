import React from 'react'
import {Modal,Button} from "react-bootstrap"
const RegisterCompanyModal = ({show,onHide}) => {
  return (
    <div>
    <Modal show={show} onHide={onHide}>
  
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    
    </Modal></div>
  )
}

export default RegisterCompanyModal;