import React from "react";
import styles from "../../../styles/profile/sidebar-pages/recent-activities.module.css";
import view from "../../../assets/icons/profile-icons/view.svg";
import Image from "next/image";
import SadEmoji from "../../../assets/icons/profile-icons/sad-emoji.svg";


const NoRecentView = () => {
  return (
    <div className={`d-flex h-100  flex-column d-flex justify-content-center align-items-center pe-0 pe-lg-5 ${styles.sad_emoji} `}>
      <Image src={SadEmoji} alt="Picture of the author" width={50} />
      <h2
        className={`${styles.recent_search_text} fs_20 fontFam_poppins fw_500 mt-3`}
      >
        No Recently Viewed Properties
      </h2>
      <p className={`${styles.explore_search} fs_16 fs_sm_13 fontFam_poppins fw_400`}>
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

export default NoRecentView;
