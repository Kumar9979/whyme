import React from "react";
import styles from "../../../styles/profile/sidebar-pages/recent-activities.module.css";
import see from "../../../assets/icons/profile-icons/see-button.svg";
import Image from "next/image";

const RecentSearch = () => {
  return (
    <div className="d-flex h-100 flex-column">
      <ul className="list-unstyled">
        <li className="mt-3">
          <h1
            className={`fs_18 fw_500 fontFam_poppins  ${styles.searched_dates} py-2 px-3   mb-3`}
          >
            Yesterday
          </h1>
          <ul
            className={`${styles.property_location} list-unstyled ms-lg-4 ms-1 fs_18 fs_sm_14 fw_600 fontFam_poppins  px-4 px-lg-0`}
          >
            <li className="mb-4 mt-4 d-flex justify-content-between align-items-center">
              2 BHK Flat in Vijayanagar Mysuru
              <Image src={see} alt="Picture of the author" width={25} />
            </li>
            <li className="mb-4 d-flex justify-content-between align-items-center">
              1200sqft plot in JP Nagar Mysuru
              <Image src={see} alt="Picture of the author" width={25} />
            </li>
          </ul>
        </li>

        <li className="mt-3">
          <h1
            className={`fs_18 fs_sm_15 fw_500 fontFam_poppins  ${styles.searched_dates} py-2 px-3 mb-3`}
          >
            26 Aug 2022
          </h1>
          <ul
            className={`${styles.property_location} list-unstyled ms-lg-4 ms-1 fs_18 fs_sm_14 fw_600 fontFam_poppins  px-4 px-lg-0`}
          >
            <li className="mb-4 mt-4 d-flex justify-content-between align-items-center">
              3BHK Villa in Whitefield, Banglore
              <Image src={see} alt="Picture of the author" width={25} />
            </li>
            <li className="mb-4 d-flex justify-content-between align-items-center">
              2 BHK Flat in Vijayanagar Mysuru
              <Image src={see} alt="Picture of the author" width={25} />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default RecentSearch;
