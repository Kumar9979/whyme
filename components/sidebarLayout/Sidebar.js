import Link from "next/link";
import React, { useEffect, useState } from "react";
import Dp from "../../assets/images/dp.jpg";
import styles from "../../styles/sidebar/sidebar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import UserIcon from "../../assets/icons/user.svg";
import Clock from "../../assets/icons/clock.svg";
import Key from "../../assets/icons/key.svg";
import Settings from "../../assets/icons/settings.svg";
import Heart from "../../assets/icons/heart.svg";
const ProfileLayout = ({ children }) => {
  const router = useRouter();
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const fname = "Tony";
  const lname = "Stark";
  useEffect(() => {
    if (window.innerWidth < 992) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <div className="row">
          <div className="col-2 hideSidebar">
            {mobile !== true && (
              <div className={`${styles.sidebar}    position-fixed`}>
                <div className="d-flex flex-column h-100 justify-content-between">
                  <div>
                    <div
                      onClick={() => {
                        router.push(
                          "/profile/profile-pages/company-my-profile"
                        );
                      }}
                      className={`${styles.card} card mt-4 `}
                    >
                      <div className="card-body">
                        <div className="d-flex align-items-center">
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
                            <div className="">
                              <div
                                className={`${styles.profile_name} d-flex align-items-center `}
                              >
                                Amal Sabu
                              </div>
                              <div
                                className={`${styles.phone_number} d-flex align-items-center pt-1`}
                              >
                                +91 9875643210
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="list-unstyled  mt-3 py-3 me-5 pe-5 ps-4">
                      <li
                        className={`${
                          router.pathname ===
                          "/profile/sidebar-pages/recent-activities"
                            ? styles.sidebar_listActive
                            : styles.sidebar_list
                        } mb-3 d-flex align-items-center`}
                      >
                        <Image
                          className={styles.DropdownIcon}
                          width={16}
                          height={16}
                          src={Clock}
                        />
                        <Link href="/profile/sidebar-pages/recent-activities">
                          <a className={`ms-3 ${styles.sidebar_links}`}>
                            Recent Activities
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`${
                          router.pathname ===
                          "/profile/sidebar-pages/saved-properties"
                            ? styles.sidebar_listActive
                            : styles.sidebar_list
                        }  mb-3 d-flex align-items-center`}
                      >
                        <Image
                          className={styles.DropdownIcon}
                          width={16}
                          height={16}
                          src={Heart}
                        />
                        <Link href="/profile/sidebar-pages/saved-properties">
                          <a className={`ms-3 ${styles.sidebar_links}`}>
                            Saved Properties
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`${
                          router.pathname === "/profile/sidebar-pages/my-properties"
                            ? styles.sidebar_listActive
                            : styles.sidebar_list
                        }  mb-3 d-flex align-items-center`}
                      >
                        <Image
                          className={styles.DropdownIcon}
                          width={16}
                          height={16}
                          src={Key}
                        />
                        <Link href="/profile/sidebar-pages/my-properties">
                          <a className={` ms-3 ${styles.sidebar_links}`}>
                            My Properties
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`${
                          router.pathname === "/profile/sidebar-pages/settings"
                            ? styles.sidebar_listActive
                            : styles.sidebar_list
                        }  mb-3 d-flex align-items-center`}
                      >
                        <Image
                          className={styles.DropdownIcon}
                          width={16}
                          height={16}
                          src={Settings}
                        />
                        <Link href="/profile/sidebar-pages/settings">
                          <a className={` ms-3 ${styles.sidebar_links}`}>
                            Settings
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className={`${styles.logout} p-3 mb-4`}>
                    <hr></hr>
                    <div className="d-flex align-items-center justify-content-between ">
                      <p className={`${styles.logoutText}`}>Logout</p>
                      <p
                        className={`${styles.arrow} d-flex align-items-center`}
                      >
                        <i className="ri-arrow-right-s-line fw_700 fs_14"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


          
          <div className="col-lg-10 d-flex justify-content-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;
