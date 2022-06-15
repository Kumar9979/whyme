import React from 'react'
import Styles from '../../styles/authstyles/navbar.module.css'
import Image from "next/image";
import Image3 from '../../assets/icons/3.png';
const Navbar = () => {
  return (
    <div>
 <div className={`container-fluid handbook-section ${Styles.container}` }>
        <div className="header mt-4 container-fluid">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid academy-header">
            <Image src={Image3} alt="Picture of the author" 
                             width={400}
                             height={70}
                          
                            />
              <button
                className=" ms-auto navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item ms-5">
                  <a className={Styles.headermenu}href="#">
                  Buy
                    </a>
                  </li>
                  <li className="nav-item ms-5">
                    <a className={Styles.headermenu} href="#">
                    Rent
                    </a>
                  </li>
                  <li className="nav-item ms-5">
                    <a className={Styles.headermenu} href="#">
                    Sell
                    </a>
                  </li>
                  <li className="nav-item ms-5">
                    <a className={Styles.headermenu} href="#">
                    <i class="ri-heart-3-fill"></i>
                    </a>
                  </li>
                  <li className="nav-item ms-5">
                    <a className={Styles.headermenu} href="#">
                    <i class="ri-user-add-line"></i>
                    </a>
                  </li>
                
                  <button
                    type="button"
                    className={`ms-5 px-5  btn-primary ${Styles.landingheader}`}
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
  )
}

export default Navbar