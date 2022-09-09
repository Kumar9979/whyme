import React from "react";
import styles from "../../../styles/profile/sidebar-pages/my-properties.module.css";
import sad from "../../../assets/icons/profile-icons/sad-emoji.svg";
import Image from "next/image";

const ZeroPostedProperties = () => {
  return (
    <div
      className={`${styles.empty_search_container} d-flex h-100 justify-content-center align-items-center`}
    >
      <div className="d-flex  flex-column d-flex justify-content-center align-items-center  pe-0 pe-lg-5">
        <Image src={sad} alt="Picture of the author" width={50} />
        <h2
          className={`${styles.recent_search_text} fs_20 fontFam_poppins fw_500 mt-3 text-center`}
        >
          Not yet posted{" "}
        </h2>
        <p
          className={`${styles.explore_search} fs_13 fontFam_poppins fw_400 text-center`}
        >
          Looks like you haven't posted any properties{" "}
        </p>
        <button
          className={`${styles.explore_button} fs_13 fontFam_poppins fw_400 px-5 py-1 text-center`}
        >
          Post Property{" "}
        </button>
      </div>
    </div>
  );
};

export default ZeroPostedProperties;
