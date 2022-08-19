import Link from "next/link";
import React from "react";
import { Sidebar } from "../../components/styledComponents";
import MyProperties from "./myProperties";
import RecentlyViewed from "./recentlyViewed";
import styles from "../../styles/sidebar/sidebar.module.css";
const ProfileLayout = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className={`${styles.sidebar}`}>
              <div>
                <div className={`${styles.card} card`}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="me-3">
                        <div
                          style={{
                            border: "1px solid black",
                            width: "4rem",
                            height: "4rem",
                          }}
                        ></div>
                      </div>

                      <div>
                        <div>
                          <div className={`${styles.profile_name}`}>
                            Amal Sabu
                            <br />
                          </div>
                          <div className={`${styles.phone_number}`}>
                            +91 9875643210
                            <br />
                          </div>
                          <div
                            className={`${styles.edit_profile} d-flex align-item-center`}
                          >
                            <i className="ri-home-line me-2"></i> Edit Profile
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="list-unstyled  mt-5">
                <li
                  className={`${styles.sidebar_list} mb-3 d-flex align-items-center`}
                >
                  <i className="ri-home-line me-2"></i>
                  <Link href="/">
                    <a className={`${styles.sidebar_links}`}>Recently Viewed</a>
                  </Link>
                </li>
                <li
                  className={`${styles.sidebar_list} mb-3 d-flex align-items-center`}
                >
                  <i className="ri-home-line me-2"></i>
                  <Link href="/">
                    <a className={`${styles.sidebar_links}`}>
                      Shortlisted Properties
                    </a>
                  </Link>
                </li>
                <li
                  className={`${styles.sidebar_list} mb-3 d-flex align-items-center`}
                >
                  <i className="ri-home-line me-2"></i>
                  <Link href="/">
                    <a className={`${styles.sidebar_links}`}>My Properties</a>
                  </Link>
                </li>
                <li
                  className={`${styles.sidebar_list} mb-3 d-flex align-items-center`}
                >
                  <i className="ri-home-line me-2"></i>
                  <Link href="/">
                    <a className={`${styles.sidebar_links}`}>Add a Property</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;
