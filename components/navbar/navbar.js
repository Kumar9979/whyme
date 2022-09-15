import React, { useEffect, useState } from "react";
import Styles from "../../styles/navbarStyles/navbar.module.css";
import Image from "next/image";
import ZameenSquareImage from "../../assets/icons/zameen.png";
import { useRouter } from "next/router";
import Link from "next/link";
import Dp from "../../assets/images/dp.jpg";
import styles from "../../styles/sidebar/sidebar.module.css";
import { Offcanvas } from "react-bootstrap";
import ProfileImage from "../../assets/images/dp.jpg";
import { Button, Dropdown, Menu, Space } from "antd";
import UserIcon from "../../assets/icons/user.svg";
import Clock from "../../assets/icons/clock.svg";
import Key from "../../assets/icons/key.svg";
import Settings from "../../assets/icons/settings.svg";
import Heart from "../../assets/icons/heart.svg";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [topBar, setTopBar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();
  var login = true;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setTopBar(false);
        setSidebar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <div
              onClick={() => {
                router.push("/profile/profile-pages/my-profile");
              }}
            >
              <div
                className={`${Styles.linkMenu} d-flex align-items-center mb-2`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={Styles.DropdownIcon}
                  width={16}
                  height={16}
                  src={UserIcon}
                />
                <div className={`ms-3 ${Styles.DropdownText}`}>My Profile</div>
              </div>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div
              onClick={() => {
                router.push("/profile/sidebar-pages/recent-activities");
              }}
            >
              <a
                className={`${Styles.linkMenu} d-flex align-items-center mb-2`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={Styles.DropdownIcon}
                  width={16}
                  height={16}
                  src={Clock}
                />
                <div className={`ms-3 ${Styles.DropdownText}`}>
                  Recent Activities
                </div>
              </a>
            </div>
          ),
        },
        {
          key: "3",
          label: (
            <div
              onClick={() => {
                router.push("/profile/sidebar-pages/saved-properties");
              }}
            >
              <a
                onClick={() => {
                  router.push("/profile/sidebar-pages/saved-properties");
                }}
                className={`${Styles.linkMenu} d-flex align-items-center mb-2`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={Styles.DropdownIcon}
                  width={16}
                  height={16}
                  src={Heart}
                />
                <div className={`ms-3 ${Styles.DropdownText}`}>
                  Saved Properties
                </div>
              </a>
            </div>
          ),
        },
        {
          key: "4",
          label: (
            <div
              onClick={() => {
                router.push("/profile/sidebar-pages/my-properties");
              }}
            >
              <a
                onClick={() => {
                  router.push("/profile/sidebar-pages/my-properties");
                }}
                className={`${Styles.linkMenu} d-flex align-items-center mb-2`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={Styles.DropdownIcon}
                  width={16}
                  height={16}
                  src={Key}
                />
                <div className={`ms-3 ${Styles.DropdownText}`}>
                  My Properties
                </div>
              </a>
            </div>
          ),
        },
        {
          key: "5",
          label: (
            <div
              onClick={() => {
                router.push("/profile/sidebar-pages/settings");
              }}
            >
              <a
                onClick={() => {
                  router.push("/profile/sidebar-pages/settings");
                }}
                className={`${Styles.linkMenu} d-flex align-items-center mb-2`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={Styles.DropdownIcon}
                  width={16}
                  height={16}
                  src={Settings}
                />
                <div className={`ms-3 ${Styles.DropdownText}`}>Settings</div>
              </a>
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <div className={`handbook-section fixed-top ${Styles.container}`}>
      {mobile === false && (
        <div className="header container-fluid">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid academy-header">
              <Link href="/">
                <Image
                  src={ZameenSquareImage}
                  alt="Picture of the author"
                  width={300}
                  height={50}
                />
              </Link>{" "}
              <div className={Styles.zameenimage}></div>
              <div
                className={`collapse navbar-collapse pt-2`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto align-items-center">
                  <li className={`${Styles.navbar} nav-item ms-5 `}>
                    <Link href="#">
                      <a className={`${Styles.headermenu}`}> Buy</a>
                    </Link>
                  </li>
                  <li className={`${Styles.navbar} nav-item ms-5 `}>
                    <Link href="#">
                      <a className={`${Styles.headermenu}`}>Rent</a>
                    </Link>
                  </li>
                  <li className={`${Styles.navbar} nav-item ms-5 `}>
                    <Link href="#">
                      <a className={`${Styles.headermenu}`}>Sell</a>
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      className={`ms-5 px-5  btn-primary text-nowrap ${Styles.landingheader}`}
                      onClick={() => {
                        router.push("/registercompany/userType");
                      }}
                    >
                      Post Property
                    </button>
                  </li>
                  {login !== false ? (
                    <li className={`${Styles.navbar} nav-item`}>
                      <Dropdown overlay={menu} placement="bottomLeft">
                        <div
                          className={`ms-5 ${Styles.navProfile} pe-5`}
                          onClick={() => {
                            router.push("");
                          }}
                        >
                          <Image
                            className={`${Styles.navProfile}`}
                            src={ProfileImage}
                            width={40}
                            height={40}
                          />
                        </div>
                      </Dropdown>
                    </li>
                  ) : (
                    <li>
                      <button
                        type="button"
                        className={`ms-5 px-5 btn text-nowrap ${Styles.loginBtn}`}
                        onClick={() => {
                          router.push("/registercompany/userType");
                        }}
                      >
                        Login
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )}
      {mobile === true && (
        <div className={`container-fluid handbook-section ${Styles.container}`}>
          <nav className="p-2">
            <div
              className={`${styles.linkMenu} d-flex align-items-center mb-2`}
            >
              <div className={Styles.zameenimage}>
                <Image
                  src={ZameenSquareImage}
                  alt="Picture of the author"
                  width={300}
                  height={50}
                />
              </div>

              <div className="d-flex align-items-center justify-content-between ms-auto">
                <div onClick={() => setSidebar(!sidebar)} className="btn">
                  <Image
                    className={`${Styles.mobile_ProfileIcon}`}
                    src={ProfileImage}
                    width={30}
                    height={30}
                  />
                </div>
                <button
                  onClick={() => setTopBar(!topBar)}
                  className={`${Styles.mobile_burger}`}
                >
                  <i className="ri-menu-3-fill"></i>
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
      <Offcanvas
        show={topBar}
        onHide={() => setTopBar(false)}
        placement={"top"}
        style={{ height: "80rem" }}
      >
        <Offcanvas.Header closeButton>
          <div className={Styles.zameenimage}>
            <Image
              src={ZameenSquareImage}
              alt="Picture of the author"
              width={300}
              height={50}
            />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav">
            <li className={`${Styles.navbar} nav-item mb-4 `}>
              <Link href="#">
                <a className={`${Styles.headermenu}`}> Buy</a>
              </Link>
            </li>
            <li className={`${Styles.navbar} nav-item mb-4 `}>
              <Link href="#">
                <a className={`${Styles.headermenu}`}>Rent</a>
              </Link>
            </li>
            <li className={`${Styles.navbar} nav-item mb-4 `}>
              <Link href="#">
                <a className={`${Styles.headermenu}`}>Sell</a>
              </Link>
            </li>
            {login === true ? (
              <button
                type="button"
                className={`px-5  btn-primary text-nowrap ${Styles.landingheader}`}
                onClick={() => {
                  router.push("/registercompany/userType");
                }}
              >
                Post Property
              </button>
            ) : (
              <button
                type="button"
                className={`px-5 btn text-nowrap ${Styles.loginBtn}`}
                onClick={() => {
                  router.push("/registercompany/userType");
                }}
              >
                Login
              </button>
            )}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        style={{ width: "18rem" }}
        show={sidebar}
        onHide={() => setSidebar(!sidebar)}
      >
        <Offcanvas.Body>
          <div>
            <div className={`${styles.card} card`}>
              <div className="card-body">
                <div className="d-flex">
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
                      <div className={`${styles.profile_name}`}>Amal Sabu</div>
                      <div className={`${styles.phone_number}`}>
                        +91 9875643210
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <ul
              onClick={() => setSidebar(false)}
              className="list-unstyled  mt-4"
            >
              <li
                className={`${
                  router.pathname === "/profile/profile-pages/my-profile"
                    ? styles.sidebar_listActive
                    : styles.sidebar_list
                } mb-3 d-flex align-items-center`}
              >
                <Image
                  className={Styles.DropdownIcon}
                  width={16}
                  height={16}
                  src={UserIcon}
                />
                <Link href="/profile/profile-pages/my-profile">
                  <a className={`ms-3 ${styles.sidebar_links}`}>My Profile</a>
                </Link>
              </li>
              <li
                className={`${
                  router.pathname === "/profile/recently-viewed"
                    ? styles.sidebar_listActive
                    : styles.sidebar_list
                } mb-3 d-flex align-items-center`}
              >
                <Image
                  className={Styles.DropdownIcon}
                  width={16}
                  height={16}
                  src={Clock}
                />
                <Link href="/profile/recently-viewed">
                  <a className={`ms-3 ${styles.sidebar_links}`}>
                    Recently Viewed
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
                  className={Styles.DropdownIcon}
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
                  className={Styles.DropdownIcon}
                  width={16}
                  height={16}
                  src={Key}
                />
                <Link href="/profile/my-properties">
                  <a className={`ms-3 ${styles.sidebar_links}`}>
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
                  className={Styles.DropdownIcon}
                  width={16}
                  height={16}
                  src={Settings}
                />
                <Link href="/profile/add-a-property">
                  <a className={`ms-3 ${styles.sidebar_links}`}>Settings</a>
                </Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Navbar;
