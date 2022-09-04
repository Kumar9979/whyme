import React from "react";
import styles from "../../../styles/profile/sidebar-pages/recent-activities.module.css";
import see from "../../../assets/icons/profile-icons/see-button.svg";
import Image from "next/image";


const RecentSearch = () => {
  return (
    <div className="d-flex h-100 flex-column pe-3">
      <ul className="list-unstyled">
        <li className="mt-3">
          <h1 className={`${styles.search_dates} fs_18 fw_500 fontFam_poppins`}>
            Yesterday
          </h1>
          <ul className={`${styles.property_location} list-unstyled ms-lg-4 ms-1 fs_14 fw_600 fontFam_poppins`} >
            <li className="mb-4 mt-4 d-flex justify-content-between align-items-center">
              2 BHK Flat in Vijayanagar Mysuru
              <Image src={see} alt="Picture of the author" width={15} />
            </li>
            <li className="mb-4 d-flex justify-content-between align-items-center">
              1200sqft plot in JP Nagar Mysuru
              <Image src={see} alt="Picture of the author" width={15} />
            </li>
          </ul>
        </li>


        <li className="mt-3">
          <h1 className={`${styles.search_dates} fs_18 fw_500 fontFam_poppins`}>
         26 Aug 2022
          </h1>
          <ul className={`${styles.property_location} list-unstyled ms-lg-4 ms-1 fs_14 fw_600 fontFam_poppins`} >
            <li className="mb-4 mt-4 d-flex justify-content-between align-items-center">
            3BHK Villa in Whitefield, Banglore
              <Image src={see} alt="Picture of the author" width={15} />
            </li>
            <li className="mb-4 d-flex justify-content-between align-items-center">
            2 BHK Flat in Vijayanagar Mysuru
              <Image src={see} alt="Picture of the author" width={15} />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default RecentSearch;
