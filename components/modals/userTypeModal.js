import React from 'react'
import {Modal,Button} from "react-bootstrap"
const userTypeModal = ({show,onHide}) => {
  return (
    <div>
    <Modal show={show} onHide={onHide}>
  
      <Modal.Body className='rounded-3'>Woohoo, you're reading this text in a modal!</Modal.Body>
    
    </Modal></div>
  )
}

export default userTypeModal;