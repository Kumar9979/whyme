import React from "react";
import styles from "../../styles/edit-property/apartment-flat.module.css";
import Image from "next/image";
import backIcon from "../../assets/icons/back-icon.svg";
import Location from "../../assets/icons/location-icon.svg";

const ApartmentFlat = () => {
  return (
    <div className={`d-flex justify-content-center`}>
      <div className={`${styles.abcd}`}>
        <div
          className={`${styles.back_icon} d-flex justify-content-start ps-2`}
        >
          <span>
            {" "}
            <Image src={backIcon} />
            <span
              className={`${styles.back_text} ms-2 fs_15 fw_500 fontFam_poppins`}
            >
              Back
            </span>{" "}
          </span>
        </div>
        <div className={`${styles.card} d-flex justify-content-center px-2 pt-3`}>
          <div className={`${styles.card_body}`}>
            <div className=" ">
              <div className="d-lg-flex d-md-flex d-sm-block justify-content-between">
                <div className="col-lg-6 ">
                <p className={`${styles.flat_heading} fs_18 fw_500`}>2BHK Flat in Vijayanagar, Mysuru</p>
                </div>
                <div className={`d-flex mb-3`}>
                    <span className={`${styles.location_icon} mt-0`}>
                      <Image src={Location} />
                    </span>
                    <span className={`${styles.address_heading} ms-1`}>
                      2Nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd,
                      Mysuru, Karnataka 570017
                    </span>
                  </div>
                
                <div className="col-6 text-lg-end">Column</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentFlat;
