import Link from "next/link";
import React from "react";
import Dp from "../../assets/images/dp.jpg";
import styles from "../../styles/sidebar/sidebar.module.css";
import Image from "next/image";
import Navbar from "../navbar/navbar";
import { useRouter } from "next/router";
const ProfileLayout = ({ children }) => {
  const router = useRouter()
  console.log(router.pathname)
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
                        <div className={`${styles.DpContainer}`}>
                          <Image
                            className={`${styles.Dp}`}
                            src={Dp}
                            width={800}
                            height={800}
                          />
                        </div>
                      </div>

                      <div>
                        <div>
                          <div className={`${styles.profile_name}`}>
                            Amal Sabu
                          </div>
                          <div className={`${styles.phone_number}`}>
                            +91 9875643210
                          </div>
                          <div
                            className={`${styles.edit_profile} d-flex align-item-center`}
                          >
                            <i
                              className={`${styles.icon} ri-edit-box-line me-2`}
                            ></i>
                            <div> Edit Profile</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <ul className="list-unstyled  mt-5">
                <li
                  className={`${router.pathname==="/profile/recently-viewed"?styles.sidebar_listActive:styles.sidebar_list} mb-3 d-flex align-items-center`}
                >
                  <i className={`${styles.icon} ri-time-fill me-2`}></i>
                  <Link href="/profile/recently-viewed">
                    <a className={`${styles.sidebar_links}`}>Recently Viewed</a>
                  </Link>
                </li>
                <li
                  className={`${router.pathname==="/profile/shortlisted-properties"?styles.sidebar_listActive:styles.sidebar_list}  mb-3 d-flex align-items-center`}
                >
                  <i className={`${styles.icon} ri-heart-fill me-2`}></i>
                  <Link href="/profile/shortlisted-properties">
                    <a className={`${styles.sidebar_links}`}>
                      Shortlisted Properties
                    </a>
                  </Link>
                </li>
                <li
                  className={`${router.pathname==="/profile/my-properties"?styles.sidebar_listActive:styles.sidebar_list}  mb-3 d-flex align-items-center`}
                >
                  <i className={`${styles.icon} ri-key-fill me-2`}></i>
                  <Link href="/profile/my-properties">
                    <a className={`${styles.sidebar_links}`}>My Properties</a>
                  </Link>
                </li>
                <li
                  className={`${router.pathname==="/profile/add-a-property"?styles.sidebar_listActive:styles.sidebar_list}  mb-3 d-flex align-items-center`}
                >
                  <i className={`${styles.icon} ri-add-box-fill me-2`}></i>
                  <Link href="/profile/add-a-property">
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

