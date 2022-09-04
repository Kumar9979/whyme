import React from "react";
import ProfileLayout from "../../../components/sidebarLayout/Sidebar";
import styles from "../../../styles/profile/sidebar-pages/recent-activities.module.css";
import arrow_left from "../../../assets/images/arrow_left.svg";
import Image from "next/image";
import search from "../../../assets/icons/profile-icons/search.svg";
import view from "../../../assets/icons/profile-icons/view.svg";
import NoRecentSearch from "../../../components/profile/recent-activities/no-recent-search";
import NoRecentView from "../../../components/profile/recent-activities/no-recent-view";
import { useState } from "react";
import RecentSearch from "../../../components/profile/recent-activities/recent-search";
import RecentView from "../../../components/profile/recent-activities/recent-view";
import Link from "next/link";

// import queryString from "query-string"
const RecentlyViewed = () => {
  // const value = queryString.parse(window.location.search)
  // console.log(value.variable)
  const [activityType, SetActivityType] = useState("search");
  return (
    <ProfileLayout>
      <div className={`${styles.recent_activities} mt-5 pt-4`}>
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
            <span
              className={`${styles.edit_profile_heading} fs_20 fw_500 ms-2`}
            >
              Recent Activities
            </span>
          </div>
          <hr className={`${styles.edit_horizontal_line}`}></hr>
          <div className="row">
            <div className={` col-lg-3`}>
              <div className={`${styles.first_column}`}>
              <ul className={`list-unstyled  mt-3 p-3 ${styles.vertical_line}`}>
                <li
                  onClick={() => SetActivityType("search")}
                  className={`mb-4 d-flex align-items-center ${
                    activityType == "search"
                      ? styles.selected_activities_text
                      : styles.search_activities_text
                  }`}
                >

                  <div className={` d-flex align-items-center p-0`}>
                    <Image
                      src={search}
                      alt="Picture of the author"
                      width={13}
                    />
                  </div>
                  <a>
                  <span className="ms-1 fs_12 fw_500 fontFam_poppins">
                    {" "}
                    Search Activities
                  </span>
                  </a>
                 
                </li>
                <li
                  onClick={() => SetActivityType("viewed")}
                  className={`mb-4 d-flex align-items-center ${
                    activityType == "search"
                      ? styles.search_activities_text
                      : styles.selected_activities_text
                  }`}
                >
                  <div className={` d-flex align-items-center p-0`}>
                    <Image src={view} alt="Picture of the author" width={12} />
                  </div>
                  <a>
                    <span className="ms-1 fs_12 fw_500 fontFam_poppins">
                    Viewed Properties
                  </span>
                  </a>
                  
                </li>
              </ul>
              </div>
             
            </div>
            <div className="col-lg-9 col-12">
              {activityType === "search" ? <NoRecentSearch /> : <NoRecentView />}
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default RecentlyViewed;


