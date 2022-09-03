import React from "react";
import ProfileLayout from "../../../components/sidebarLayout/Sidebar";
import styles from "../../../styles/profile/recent-activities/recent-viewed.module.css";
import arrow_left from "../../../assets/images/arrow_left.svg";
import Image from "next/image";
import search from "../../../assets/icons/profile-icons/search.svg";
import view from "../../../assets/icons/profile-icons/view.svg";
import NoRecentSearch from "../../../components/profile/recent-activities/no-recent-search";
import NoRecentView from "../../../components/profile/recent-activities/no-recent-view";
import { useState } from "react";
import RecentSearch from "../../../components/profile/recent-activities/recent-search";
import RecentView from "../../../components/profile/recent-activities/recent-view";

// import queryString from "query-string"
const RecentlyViewed = () => {
  // const value = queryString.parse(window.location.search)
  // console.log(value.variable)
  const [activityType, SetActivityType] = useState("search");
  return (
    <ProfileLayout>
      <div className={`${styles.recent_activities} mt-5 pt-4`}>
        <div className={`${styles.recent_activities_card} p-lg-4 mt-3 p-3`}>
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
            <div className={` col-3`}>
              <ul className={`list-unstyled  mt-3 p-3 ${styles.vertical_line}`}>
                <li
                  onClick={() => SetActivityType("search")}
                  
                  className={`mb-4 d-flex align-items-center ${ activityType == "search" ?styles.selected_activities_text :styles.search_activities_text }`}
                >
                  <div className={` d-flex align-items-center p-0`}>
                    <Image
                      src={search}
                      alt="Picture of the author"
                      width={13}
                    />
                  </div>
                  <span className="ms-2 fs_15 fw_500 fontFam_poppins">
                    {" "}
                    Search Activities
                  </span>
                </li>
                <li
                  onClick={() => SetActivityType("viewed")}
                  className={`mb-4 d-flex align-items-center ${ activityType == "search" ?styles.search_activities_text:styles.selected_activities_text  }`}

                >
                  <div className={` d-flex align-items-center p-0`}>
                    <Image src={view} alt="Picture of the author" width={13} />
                  </div>
                  <span className="ms-2 fs_15 fw_500 fontFam_poppins">
                    Viewed Properties
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-9">
              {activityType === "search" ? (
                <RecentSearch />
              ) : (
                <RecentView />
              )}
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default RecentlyViewed;

{
  /* <div>{value.first_name}</div>
      <div>{value.first_name}</div>
      <div>{value.first_name}</div>
      <div>{value.first_name}</div>
      <div>{value.first_name}</div>
    <div>{value.last_name}</div>       */
}
