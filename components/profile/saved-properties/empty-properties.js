import React from "react";
import sad from "../../../assets/icons/profile-icons/sad-emoji.svg";
import Image from "next/image";
import styles from "../../../styles/profile/sidebar-pages/saved-properties.module.css";

const EmptySearch = () => {
  return (
    <div
      className={`${styles.empty_search_container} d-flex h-100 justify-content-center align-items-center`}
    >
      <div className="d-flex  flex-column d-flex justify-content-center align-items-center  pe-0 pe-lg-5">
        <Image src={sad} alt="Picture of the author" width={50} />
        <h2
          className={`${styles.recent_search_text} fs_20 fontFam_poppins fw_500 mt-3 text-center`}
        >
          Your Saved Property is Empty
        </h2>
        <p
          className={`${styles.explore_search} fs_13 fontFam_poppins fw_400 text-center`}
        >
          Explore more and shortlist some properties
        </p>
        <button
          className={`${styles.explore_button} fs_13 fontFam_poppins fw_400 px-5 py-1 text-center`}
        >
          Start Shortlisting
        </button>
      </div>
    </div>
  );
};

export default EmptySearch;
