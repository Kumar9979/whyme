import React from "react";
import styles from "../../styles/footerPage/footer.module.css";
import ZameenLogo from "../../assets/icons/zameen-logo.png";
import Image from "next/image";
import Link from "next/link"

const Footer = () => {
  return (
    <div>
      <div className={`${styles.footer_container} p-3 p-lg-5 border `}>
        <div className="container-fluid text-start ">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 ps-lg-5 ">
              <div className={`${styles.footer_logo} w-50`}>
                <Image src={ZameenLogo} alt="zameen-square logo" />
              </div>
              <div
                className={`${styles.footer_subheading} font_FamPoppins fs_12 mt-2 fw_400`}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </div>
              <div
                className={`${styles.subscribe_heading} font_FamPoppins fw_600 fs_18 mt-3`}
              >
                Subscribe Us
              </div>
              <div className={`${styles.subscribe_input} `}>
                <div
                  className={`${styles.input_box} d-flex justify-content-between`}
                >
                  <input
                    className={`${styles.input} ps-2 pe-3`}
                    type="email"
                    id="exampleInput1"
                    placeholder="Enter your email address"
                  />

                  <div className="row pe-3 p-1">
                    <button className={`${styles.subscribe_btn} `}>
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 ps-3">
              <div
                className={`${styles.quick_heading} fw_600 fs_19 mt-3 mt-lg-0`}
              >
                Quick Links
              </div>
              <p className={`${styles.footer_link}`}>
                <Link
                  href=""
                  className={`${styles.footer_link} `}
                >
                  <a
                    className={`${styles.footer_list_link} fs_18 fw_500`}
                  >
                    {" "}
                    Blogs
                  </a>
                </Link>
              </p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">Column</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
