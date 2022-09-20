import React from "react";
import styles from "../../../styles/cards/homePageCards/popular_apartments.module.css";
import Image from "next/image";
import apartment from "../../../assets/apartment.jpg";
import profile from "../../../assets/images/property-details/profile.png";

const PopularApartmentCard = () => {
  return (
    <div
      className={`${styles.popular_apartments_card} me-3 ms-3 mt-3 p-2 mb-2`}
    >
      <Image
        width={1000}
        height={550}
        src={apartment}
        className={`${styles.image}`}
        alt="Picture of the author"
      />
      <div className="row">
        <div className="col-3">
          <div className={`${styles.profile_image}`}>
            <Image
              width={600}
              height={500}
              src={profile}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="fs_15 fs_sm_10 fw_500 fontFam_poppins color_black">
            2 & 3 BHK Hi-End living spaces in Mysuru
          </div>
          <div>
            <div className="color_grey3 fontFam_poppins fs_12 fs_sm_8 fw_500">
              By Brigade GdivSector 36 Vijayanagar, Mysuru
            </div>
          </div>
        </div>
        <div className="col-3">
          <span className="color_dark_blue fs_8 text-nowrap fw_400 fontFam_poppins d-flex justify-content-end">
            Starting From
          </span>
          <div>
            <span className="color_cloudBurst fontFam_poppins fs_20 fs_sm_15 fw_600 d-flex justify-content-end text-nowrap">
              ₹ 30 Lac
            </span>
          </div>
          <div className="d-flex justify-content-end">
            <button
              className={`${styles.view_details_button} py-1 py-lg-2 px-2 px-lg-4 color_white fontFam_poppins fw_400 fs_12 fs_sm_10 text-nowrap`}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularApartmentCard;
