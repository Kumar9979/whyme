import React from "react";
import styles from "../../../styles/propertydetails/profile/profileCard.module.css";
import Image from "next/image";
import Building from "../../../assets/images/property-details/building.jpg";
import profile from "../../../assets/images/property-details/profile.png";
import rupee from "../../../assets/icons/rupee-icon.svg";

const CompanyCard = () => {
  return (
    <div>
      <div
        className={`${styles.container} col-lg-7 col-md-10 col-sm-10 col-11`}
      >
        <div
          className={`${styles.imagecontainer} px-lg-3 py-lg-3 px-md-3 py-md-3 px-sm-3 py-sm-3 px-2 py-2`}
        >
          <div>
            <Image
              src={Building}
              alt="Picture of the card"
              width={1060}
              height={550}
              className={`${styles.cardimage} w-100 `}
            />
          </div>
          <div className=" d-flex justify-content-between">
            <div className=" d-flex align-content-center">
              <div className={`${styles.profilecontainer}`}>
                <Image
                  src={profile}
                  alt="Picture of the card"
                  width={110}
                  height={110}
                  className={`${styles.cardimage} `}
                />
              </div>
              <div className="ms-lg-3 mt-lg-3 ms-md-3 mt-md-3 ms-sm-3 mt-sm-3">
                <span className={`${styles.cardtitle} fs_24 fw_500 `}>
                  2 & 3 BHK Hi-End living spaces in Mysuru
                </span>
                <br />
                <span className={`${styles.cardsubtitle} fs_18  `}>
                  By Brigade Group Sector 36 Vijayanagar, Mysuru
                </span>
              </div>
            </div>
            <div className={`${styles.btn_container}`}>
              <div className="ms-md-3">
                <span
                  className={`${styles.cardtext} pb-0 mb-0 color_light_blue d-flex justify-content-end fw_500  fs_12`}
                >
                  Starting From
                </span>

                <span
                  className={`${styles.cardprice} d-flex justify-content-end m-0 p-0 fs_30 fw_500`}
                >
                  ₹30 Lac
                </span>
              </div>

              <button
                className={`${styles.cardbutton} fs_20 py-lg-2 py-md-1  `}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
