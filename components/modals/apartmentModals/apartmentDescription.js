import React from 'react'

const ApartmentDescription = () => {
  return (
    <div>
        <Modal
        centered
        show={show}
        onHide={handleClose}
        dialogClassName={`${styles.deleteCard_width}`}
        contentClassName={`${styles.card_radius}`}
        //   size={'lg'}
      >
        <Modal.Body>
            <div>
                
            </div>
        </Modal.Body>
       

      </Modal>
    </div>
  )
}

export default ApartmentDescription