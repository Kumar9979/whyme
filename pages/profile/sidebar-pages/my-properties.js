import React from "react";
import ProfileLayout from "../../../components/sidebarLayout/Sidebar";
import styles from "../../../styles/profile/sidebar-pages/my-properties.module.css";
import arrow_left from "../../../assets/images/arrow_left.svg";
import Image from "next/image";
import EmptySearch from "../../../components/profile/saved-properties/empty-properties";
import SavedProperties from "../../../components/profile/saved-properties/properties-saved";
import ZeroPostedProperties from "../../../components/profile/my-properties/empty-properties";
import Postproperties from "../../../components/profile/my-properties/posted-properties";
import SentProperties from "../../../components/profile/my-properties/posted-properties";

const MyProperties = () => {
  return (
    <ProfileLayout>
      <div className={`${styles.recent_activities} mt-5 pt-5`}>
        <div className={`${styles.recent_activities_card} p-lg-4 mt-3 p-3 `}>
          <div className="d-flex align-items-center ">
            <button
              className={`${styles.arrow_left_button} d-flex align-items-center p-0`}
            >
              <Image
                src={arrow_left}
                alt="Picture of the author"
                width={20}
                height={15}
              />
            </button>
            <div className="d-flex  justify-content-center justify-content-lg-start w-100">
              <span
                className={`${styles.edit_profile_heading} fs_20 fw_500 ms-2`}
              >
                My Properties
              </span>
              <div
                className={`${styles.background_color} px-2 py-1 fs_12 fw_400 color_white fontFam_poppins ms-3`}
              >
                <span>3 Properties</span>
              </div>
            </div>
          </div>
          <hr className={`${styles.edit_horizontal_line}`}></hr>
          <div className={`${styles.cards_width}`}>
            <SentProperties />
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default MyProperties;
