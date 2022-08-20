import React from "react";
import styles from "../../styles/propertydetails/ownercontact.module.css";

const OwnerContact = () => {
  return (
    <div>
      <div className={`${styles.owner_contact} mt-lg-2 mt-5 p-4`}>
        <div className={`${styles.talk_owner} d-flex justify-content-center`}>Want to talk with owner?</div>
        <div className={`d-flex justify-content-center mt-4`}>
        <button className={`${styles.owner_contact_button} d-flex justify-content-center py-2`}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default OwnerContact;
