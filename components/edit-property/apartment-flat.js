import React from 'react'
import styles from "../../styles/edit-property/apartment-flat.module.css"
import Image from "next/image";
import backIcon from "../../assets/icons/back-icon.svg";

const ApartmentFlat = () => {
  return (
    <div>
        <div className={`${styles.back_icon} d-flex justify-content-center`}>
          <span>
            {" "}
            <Image src={backIcon} />
            <span className={`${styles.back_text} ms-2 fs_15 fw_500 fontFam_poppins`}>Back</span>{" "}
          </span>
        </div>
        <div className={`${styles.card} container d-flex justify-content-center`}>
            <div className={`${styles.card_body}`}>
               jhkjk
            </div>

        </div>
    </div>
  )
}

export default ApartmentFlat