import React from "react";
import ProfileLayout from "../../../components/sidebarLayout/Sidebar";
import styles from "../../../styles/profile/recent-activities/recent-viewed.module.css";
import arrow_left from "../../../assets/images/arrow_left.svg";
import Image from "next/image";
import Link from "next/link";

// import queryString from "query-string"
const RecentlyViewed = () => {
  // const value = queryString.parse(window.location.search)
  // console.log(value.variable)
  return (
    <ProfileLayout>
      <div className={`${styles.recent_activities} mt-5 pt-5`}>
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
            <div className="col-3">
              <ul className="list-unstyled  mt-3 p-3">
                <li className={`mb-3 d-flex align-items-center`}>
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
                  Search Activities
                </li>
                <li className={`mb-3 d-flex align-items-center`}>
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
                  Viewed Properties
                </li>
              </ul>
            </div>
            <div className="col-9"></div>
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
