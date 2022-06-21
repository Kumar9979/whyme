import React from "react";
import Styles from "../../styles/navbarStyles/navbar.module.css";
import Image from "next/image";
import ZameenSquareImage from "../../assets/icons/zameen.png";
import { useRouter } from "next/router";
import Link from 'next/link'
const Navbar = () => {
  const router = useRouter();
  
  return (
    <div>
      <div className={`container-fluid handbook-section ${Styles.container}`}>
        <div className="header  container-fluid">
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
              <button
                className={` navbar-toggler `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className={`${Styles.navbar_icon_menu} align-middle ri-menu-line `}></i>
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
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
                  <li className={`${Styles.navbar} nav-item ms-5 `} >
                    <Link href="#">
                      <a className={`${Styles.headerIcon}`}><i className={`ms-2 me-2 mt-5  ri-heart-3-fill`}></i></a>
                    </Link>
                  </li>
                  <li className={`${Styles.navbar} nav-item ms-5 `}>
                    <Link href="#">
                      <a className={`${Styles.headerIcon}`}> <i className="ms-2 me-2 mt-5 ri-user-add-line"></i></a>
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
      </div>
    </div>
  );
};

export default Navbar;
