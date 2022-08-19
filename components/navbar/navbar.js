import React, { useEffect, useState } from "react";
import Styles from "../../styles/navbarStyles/navbar.module.css";
import Image from "next/image";
import ZameenSquareImage from "../../assets/icons/zameen.png";
import { useRouter } from "next/router";
import Link from "next/link";
import Dp from "../../assets/images/dp.jpg";
import styles from "../../styles/sidebar/sidebar.module.css";
import { Offcanvas } from "react-bootstrap";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [topBar, setTopBar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

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

  return (
    <div className={`handbook-section ${Styles.container}`}>
      {mobile === false && (
        <div className="header container-fluid">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid academy-header">
              <div className={Styles.zameenimage}>
                <Image
                  src={ZameenSquareImage}
                  alt="Picture of the author"
                  width={300}
                  height={50}
                />
              </div>
              <div
                className={`collapse navbar-collapse pt-2`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto">
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
                  <li
                    className={`${Styles.navbar} nav-item ms-5 d-lg-flex align-items-center`}
                  >
                    <Link href="#">
                      <a className={`${Styles.headerIcon}`}>
                        <i
                          className={`ms-2 me-2 mt-5 pt-1  ri-heart-3-fill `}
                        ></i>
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`${Styles.navbar} nav-item ms-5 d-lg-flex align-items-center `}
                  >
                    <Link href="#">
                      <a className={`${Styles.headerIcon}`}>
                        <i className="ms-2 me-2 mt-5   ri-user-add-line "></i>
                      </a>
                    </Link>
                  </li>

                  <button
                    type="button"
                    className={`ms-5 px-5  btn-primary text-nowrap ${Styles.landingheader}`}
                    onClick={() => {
                      router.push("/registercompany/userType");
                    }}
                  >
                    Post Property
                  </button>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )}
      {mobile === true && (
        <div className={`container-fluid handbook-section ${Styles.container}`}>
          <nav className="p-2">
            <div className="d-flex align-items-center justify-content-between">
              <div className={Styles.zameenimage}>
                <Image
                  src={ZameenSquareImage}
                  alt="Picture of the author"
                  width={300}
                  height={50}
                />
              </div>

              <div className="float-end">
                <button onClick={() => setSidebar(!sidebar)} className="btn">
                  <i className="ri-user-3-fill"></i>
                </button>
                <button onClick={() => setTopBar(!topBar)} className="btn">
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
            <li
              className={`${Styles.navbar} nav-item mb-4 d-lg-flex align-items-center`}
            >
              <Link href="#">
                <a className={`${Styles.headerIcon}`}>
                  <i className={`ms-2 me-2 mt-5 pt-1  ri-heart-3-fill `}></i>
                </a>
              </Link>
            </li>
            <li
              className={`${Styles.navbar} nav-item mb-4 d-lg-flex align-items-center `}
            >
              <Link href="#">
                <a className={`${Styles.headerIcon}`}>
                  <i className="ms-2 me-2 mt-5   ri-user-add-line "></i>
                </a>
              </Link>
            </li>

            <button
              type="button"
              className={`px-5  btn-primary text-nowrap ${Styles.landingheader}`}
              onClick={() => {
                router.push("/registercompany/userType");
              }}
            >
              Post Property
            </button>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        style={{ width: "20rem" }}
        show={sidebar}
        onHide={() => setSidebar(!sidebar)}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
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
                      <div className={`${styles.profile_name}`}>Amal Sabu</div>
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
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <hr />
            <ul
              onClick={() => setSidebar(false)}
              className="list-unstyled  mt-5"
            >
              <li
                className={`${
                  router.pathname === "/profile/recently-viewed"
                    ? styles.sidebar_listActive
                    : styles.sidebar_list
                } mb-3 d-flex align-items-center`}
              >
                <i className={`${styles.icon} ri-time-fill me-2`}></i>
                <Link href="/profile/recently-viewed">
                  <a className={`${styles.sidebar_links}`}>Recently Viewed</a>
                </Link>
              </li>
              <li
                className={`${
                  router.pathname === "/profile/shortlisted-properties"
                    ? styles.sidebar_listActive
                    : styles.sidebar_list
                }  mb-3 d-flex align-items-center`}
              >
                <i className={`${styles.icon} ri-heart-fill me-2`}></i>
                <Link href="/profile/shortlisted-properties">
                  <a className={`${styles.sidebar_links}`}>
                    Shortlisted Properties
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
                <i className={`${styles.icon} ri-key-fill me-2`}></i>
                <Link href="/profile/my-properties">
                  <a className={`${styles.sidebar_links}`}>My Properties</a>
                </Link>
              </li>
              <li
                className={`${
                  router.pathname === "/profile/add-a-property"
                    ? styles.sidebar_listActive
                    : styles.sidebar_list
                }  mb-3 d-flex align-items-center`}
              >
                <i className={`${styles.icon} ri-add-box-fill me-2`}></i>
                <Link href="/profile/add-a-property">
                  <a className={`${styles.sidebar_links}`}>Add a Property</a>
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
