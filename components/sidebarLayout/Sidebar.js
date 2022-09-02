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
                    <div className={`${styles.card} card mt-4`}>
                      <div className="card-body">
                        <div className="d-flex justify-content-center align-items-center">
                          <div className="me-2">
                            <div className={`${styles.DpContainer}`}>
                              <Image
                                className={`${styles.Dp}`}
                                src={Dp}
                                width={600}
                                height={600}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="">
                              <div
                                className={`${styles.profile_name} d-flex align-items-center`}
                              >
                                Amal Sabu
                              </div>
                              <div
                                className={`${styles.phone_number} d-flex align-items-center`}
                              >
                                +91 9875643210
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="list-unstyled  mt-3 p-3">
                      <li
                        className={`${
                          router.pathname === "/profile/recently-viewed"
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
                        <Link href="/profile/recently-viewed">
                          <a className={`ms-3 ${styles.sidebar_links}`}>
                            Recent Activities
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`${
                          router.pathname === "/profile/shortlisted-properties"
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
                        <Link href="/profile/shortlisted-properties">
                          <a className={`ms-3 ${styles.sidebar_links}`}>
                            Saved Properties
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`${
                          router.pathname === "/profile/my-properties"
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
                        <Link href="/profile/my-properties">
                          <a className={` ms-3 ${styles.sidebar_links}`}>
                            My Properties
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`${
                          router.pathname === "/profile/add-a-property"
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
                        <Link href="/profile/add-a-property">
                          <a className={` ms-3 ${styles.sidebar_links}`}>
                            Settings
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
<<<<<<< HEAD
                  <div className={`${styles.logout} p-3 mb-4`}>
                    <hr></hr>
                    <div className="d-flex align-items-center justify-content-between ">
                      <p className={`${styles.logoutText}`}>Logout</p>
                      <p className={`${styles.arrow} d-flex align-items-center`}>
                        <i className="ri-arrow-right-s-line fw_700 fs_14"></i>
                      </p>
                    </div>
=======
                </div>
                <hr />
                <ul className="list-unstyled  mt-5">
                  <li
                    className={`${
                      router.pathname === "/profile/recently-viewed"
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
                    <Link
                      href={`/profile/recently-viewed?first_name=${fname}&last_name=${lname}`}
                    >
                      <a className={`ms-3 ${styles.sidebar_links}`}>
                        Recent Activities
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      router.pathname === "/profile/shortlisted-properties"
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
                    <Link href="/profile/shortlisted-properties">
                      <a className={`ms-3 ${styles.sidebar_links}`}>
                        Saved Properties
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      router.pathname === "/profile/my-properties"
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
                    <Link href="/profile/my-properties">
                      <a className={` ms-3 ${styles.sidebar_links}`}>
                        My Properties
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      router.pathname === "/profile/add-a-property"
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
                    <Link href="/profile/add-a-property">
                      <a className={` ms-3 ${styles.sidebar_links}`}>
                        Settings
                      </a>
                    </Link>
                  </li>
                </ul>
                <div className={`${styles.logout}`}>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className={`${styles.logoutText}`}>Logout</p>
                    <p className={`${styles.arrow}`}>
                      <i className="ri-arrow-right-s-line"></i>
                    </p>
>>>>>>> 4f795ca6a6de9190f4f2071df968c9dc6d32805f
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
