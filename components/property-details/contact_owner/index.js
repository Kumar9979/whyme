import React from "react";
import styles from "../../../styles/propertydetails/contactowner.module.css";

const ContactOwner = () => {
  return (
    <div>
      <div
        className={`${styles.contact_owner} d-flex flex-column flex-sm-row justify-content-between  px-3 py-3  align-items-center mt-4`}
      >
        <div
          className={`${styles.contact_owner_text}  d-flex justify-content-center`}
        >
          Want to talk with owner?
        </div>
        <button className={`${styles.contact_owner_button} px-5 py-2 mt-3 mt-lg-0`}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default ContactOwner;

