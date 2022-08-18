import React from 'react';
import styles from "../../styles/propertydetails/aboutproperty.module.css"

const Aboutproperty = () => {
  return (
    
        <div className={`${styles.aboutproperty} mt-5 p-3`}>
            <h1 className={`${styles.about_property_text}`}>About the Property</h1>
            <hr className={`${styles.about_property_horizontal}`}></hr>
        </div>
  )
}

export default Aboutproperty