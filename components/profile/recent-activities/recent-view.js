import React from "react";
import styles from "../../../styles/profile/recent-activities/recent-search.module.css";
import view from "../../../assets/icons/profile-icons/view.svg";
import Image from "next/image";


const RecentView = () => {
  return (
    <div className="d-flex h-100 flex-column d-flex justify-content-center align-items-center pe-5">
      <Image src={view} alt="Picture of the author" width={50} />
      <h2
        className={`${styles.recent_search_text} fs_24 fontFam_poppins fw_500`}
      >
        No Recent Searches
      </h2>
      <p className={`${styles.explore_search} fs_16 fontFam_poppins fw_400`}>
        We guess this is your first time! explore properties now.
      </p>
      <button
        className={`${styles.explore_button} fs_13 fontFam_poppins fw_400 px-5 py-1`}
      >
        Explore
      </button>
    </div>
  );
};

export default RecentView;
