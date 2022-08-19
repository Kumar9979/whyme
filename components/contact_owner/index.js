import React from 'react';
import styles from "../../styles/propertydetails/contactowner.module.css"

const ContactOwner = () => {
  return (
    <div>
        <div className={`${styles.contact_owner} d-flex justify-content-between px-3 py-2 align-items-center mt-3`}>
            <div className={`${styles.contact_owner_text} `}>Want to talk with owner?</div>
            <button className={`${styles.contact_owner_button} px-5 py-2`}>Contact</button>
        </div>
    </div>
  )
}

export default ContactOwner