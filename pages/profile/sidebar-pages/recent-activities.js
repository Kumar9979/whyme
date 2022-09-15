import { React, useState, useEffect } from "react";
import ProfileLayout from "../../../components/sidebarLayout/Sidebar";
import styles from "../../../styles/profile/sidebar-pages/recent-activities.module.css";
import arrow_left from "../../../assets/images/arrow_left.svg";
import Image from "next/image";
import NoRecentSearch from "../../../components/profile/recent-activities/no-recent-search";
import NoRecentView from "../../../components/profile/recent-activities/no-recent-view";
import RecentSearch from "../../../components/profile/recent-activities/recent-search";
import RecentView from "../../../components/profile/recent-activities/recent-view";
import Link from "next/link";
import SearchIcon from "../../../assets/icons/profile-icons/search";
import See from "../../../assets/icons/profile-icons/see";
import UseResponisve from "../../../components/useResponsive";

const RecentlyViewed = () => {
const [activityType, SetActivityType] = useState("search");
const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1400) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1400) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ProfileLayout>
      <div className={`${styles.recent_activities} mt-5 pt-5`}>
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
              Recent Activities
            </span>
          </div>
          <hr className={`${styles.edit_horizontal_line}`}></hr>

          <div className="row">
            {mobile ? (
              <div className="col-12 ">
                <div className="w-100 px-4">
                  <div
                    className={`${styles.recent_activities_toggler} d-flex `}
                  >
                    <button
                      onClick={() => SetActivityType("search")}
                      className={`mb-4 d-flex align-items-center w-100 h-100 justify-content-center ${
                        activityType == "search"
                          ? styles.search_activities_button
                          : styles.view_activities_button
                      }`}
                    >
                      <div className={` d-flex align-items-center p-0`}>
                        {activityType == "search" ? (
                          <SearchIcon fill="#FFFFFF" width={20} />
                        ) : (
                          <SearchIcon fill="#323D5A" width={20} />
                        )}
                      </div>
                      <a>
                        <span className="ms-1 ms-lg-2 fs_15 fs_sm_10 fw_500 fontFam_poppins">
                          {" "}
                          Search Activities
                        </span>
                      </a>
                    </button>
                    <button
                      onClick={() => SetActivityType("viewed")}
                      className={`mb-4 d-flex align-items-center w-100 h-100 justify-content-center ${
                        activityType == "search"
                          ? styles.view_activities_button
                          : styles.search_activities_button
                      }`}
                    >
                      <div className={` d-flex align-items-center p-0`}>
                        {activityType == "search" ? (
                          <See fill="#323D5A" width={20} />
                        ) : (
                          <See fill="#FFFFFF" width={20} />
                        )}
                      </div>
                      <a>
                        <span className="ms-1 ms-lg-2 fs_15 fs_sm_10 fw_500 fontFam_poppins">
                          Viewed Properties
                        </span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className={` col-xl-3`}>
                <div className={`${styles.first_column}`}>
                  <ul
                    className={`list-unstyled  mt-3 p-3 ${styles.vertical_line}`}
                  >
                    <li
                      onClick={() => SetActivityType("search")}
                      className={`mb-4 d-flex align-items-center ${
                        activityType == "search"
                          ? styles.selected_activities_text
                          : styles.search_activities_text
                      }`}
                    >
                      <div className={` d-flex align-items-center p-0`}>
                        {activityType == "search" ? (
                          <SearchIcon fill="#1D72DB" width={25} />
                        ) : (
                          <SearchIcon fill="#323D5A" width={25} />
                        )}
                      </div>
                      <a>
                        <span className="ms-2 fs_16 fw_500 fontFam_poppins">
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
                        {activityType == "search" ? (
                          <See fill="#323D5A" width={25} />
                        ) : (
                          <See fill="#1D72DB " width={25} />
                        )}
                      </div>
                      <a>
                        <span className="ms-2 fs_16 fw_500 fontFam_poppins">
                          Viewed Properties
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div className="col-xl-9 col-12">
              {activityType === "search" ? <RecentSearch /> : <RecentView />}
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default RecentlyViewed;
