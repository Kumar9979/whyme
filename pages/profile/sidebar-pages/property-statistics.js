import { React } from "react";
import ProfileLayout from "../../../components/sidebarLayout/Sidebar";
import styles from "../../../styles/profile/sidebar-pages/property-statistics.module.css";
import arrow_left from "../../../assets/images/arrow_left.svg";
import Image from "next/image";
import tick from "../../../assets/icons/profile-icons/tick.svg";

const PropertyStatistics = () => {
  return (
    <ProfileLayout>
      <div className={`${styles.recent_activities} mt-5 pt-4`}>
        <div
          className={`${styles.recent_activities_card} p-lg-4 mt-3 mt-lg-3 p-0   position-sm-fixed`}
        >
          <div className="d-flex align-items-center px-lg-0 px-4">
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
            <span
              className={`${styles.edit_profile_heading} fs_20 fw_500 ms-2 w-100 justify-content-center`}
            >
              Property Statistics - 2BHK flat in Vijayanagar, Mysuru
            </span>
            <span> <Image
                src={tick}
                alt="Picture of the author"
                width={20}
                height={15}
              /> Verified</span>
          </div>
          <hr className={`${styles.edit_horizontal_line}`}></hr>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default PropertyStatistics;
