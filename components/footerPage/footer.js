import React, { useEffect, useState } from "react";
import styles from "../../styles/footerPage/footer.module.css";
import ZameenLogo from "../../assets/icons/zameen-logo.png";
import Image from "next/image";
import Link from "next/link";
import Facebook from "../../assets/icons/facebook-icon.svg";
import Insta from "../../assets/icons/insta-icon.svg";
import Twitter from "../../assets/icons/twitter-icon.svg";
import LinkedIn from "../../assets/icons/linkedIn-icon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useMediaQuery } from "react-responsive";

const Foter = () => {
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [isTabletOrMobile, setMobile] = useState(false);

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
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      //   localStorage.setItem("User", JSON.stringify(values));
      //   alert(values);
      resetForm();
    },
  });

  return (
    <div>
      <div
        className={`${styles.footer_container} p-3 pt-lg-5 ps-lg-5 pe-lg-5 border `}
      >
        <form onSubmit={formik.handleSubmit}>
        <div className="container-fluid text-start ">
          <div className="row">
            
              <div className="col-lg-4 col-md-6 col-sm-12 ps-lg-5 ">
                <div className={`${styles.footer_logo} w-50`}>
                  <Image src={ZameenLogo} alt="zameen-square logo" />
                </div>
                <div
                  className={`${styles.footer_subheading} fontFam_poppins fs_12 mt-2 fw_400 pe-lg-3`}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </div>
                <div
                  className={`${styles.subscribe_heading} fontFam_poppins fw_600 fs_18 mt-3`}
                  htmlFor="email"
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
                      id="email"
                      placeholder="Enter email address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />

                    <div className="row pe-3 p-1">
                      <button
                        className={`${styles.subscribe_btn} fontFam_poppins`}
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-danger">{formik.errors.email}</p>
                  )}
                </div>
              </div>
            
            <div className="col-lg-3 col-md-6 col-sm-12 ps-lg-5">
              <div
                className={`${styles.quick_heading} fw_600 fs_20 mt-3 mt-lg-0 fs_sm_18 fontFam_poppins`}
              >
                Quick Links
              </div>
              <div className={`${styles.footer_link} mt-2 mt-lg-3`}>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_list_link} fs_16 fw_500 fs_sm_13 fontFam_poppins`}
                  >
                    {" "}
                    Blogs
                  </a>
                </Link>
              </div>
              <div className={`${styles.footer_link} mt-1 mt-lg-2`}>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_list_link} fs_16 fw_500 fs_sm_13 fontFam_poppins `}
                  >
                    {" "}
                    About Us
                  </a>
                </Link>
              </div>
              <div className={`${styles.footer_link} mt-1 mt-lg-2`}>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_list_link} fs_16 fw_500 fs_sm_13 fontFam_poppins`}
                  >
                    {" "}
                    Contact Us
                  </a>
                </Link>
              </div>
              <div className={`${styles.footer_link} mt-1 mt-lg-2`}>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_list_link} fs_16 fw_500 fs_sm_13 fontFam_poppins`}
                  >
                    {" "}
                    Privacy Policy
                  </a>
                </Link>
              </div>
              <div className={`${styles.footer_link} mt-1 mt-lg-2`}>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_list_link} fs_16 fw_500 fs_sm_13 fontFam_poppins`}
                  >
                    {" "}
                    Terms & Condition
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div
                className={`${styles.quick_heading} fw_600 fs_20 mt-3 mt-lg-0 fs_sm_18 fontFam_poppins mb-2 mb-lg-3`}
              >
                Top Localities
              </div>
              <span className={`${styles.top_localities_box}`}>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_top_localities_list} fs_16 fw_500 fs_sm_13 fontFam_poppins pe-2`}
                  >
                    {" "}
                    Properties in New Delhi
                  </a>
                </Link>
              </span>
              <span>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_top_localities_list} fs_16 fw_500 fs_sm_13 fontFam_poppins pe-2 ps-2`}
                  >
                    {" "}
                    Property in Mumbai
                  </a>
                </Link>
              </span>
              <span>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_top_localities_list} fs_16 fw_500 fs_sm_13 fontFam_poppins pe-2 ps-2`}
                  >
                    {" "}
                    Property in Chennai
                  </a>
                </Link>
              </span>
              <span>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_top_localities_list} fs_16 fw_500 fs_sm_13 fontFam_poppins pe-2 ps-2`}
                  >
                    {" "}
                    Property in Bangalore
                  </a>
                </Link>
              </span>
              <span>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_top_localities_list} fs_16 fw_500 fs_sm_13 fontFam_poppins pe-2 ps-2`}
                  >
                    {" "}
                    Property in Ahmedabad
                  </a>
                </Link>
              </span>
              <span>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_top_localities_list} fs_16 fw_500 fs_sm_13 fontFam_poppins pe-2 ps-2`}
                  >
                    {" "}
                    Property in Gurgaon
                  </a>
                </Link>
              </span>
              <span>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_top_localities_list} fs_16 fw_500 fs_sm_13 fontFam_poppins pe-2 ps-2`}
                  >
                    {" "}
                    Property in Hyderabad
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
        </form>
        <hr className={`${styles.footer_line} mt-lg-5`} />
        <div>
          <div className="d-lg-flex justify-content-between text-lg-start text-center">
            <div
              className={`${styles.copy_right_text} col ps-lg-5 fontFam_poppins fs_20 fw_600 fs_sm_15`}
            >
              © 2021 All right reserved.
            </div>
            <div className="col text-lg-end text-center mt-1 mt-lg-0">
              <span>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_link_icon} fs_16 fw_500 fs_sm_15 fontFam_poppins pe-2 ps-2`}
                  >
                    {" "}
                    <Image
                      src={Facebook}
                      alt=""
                      className={`${styles.footer_icon}`}
                      width={isTabletOrMobile ? 20 : 30}
                      height={isTabletOrMobile ? 20 : 30}
                    />
                  </a>
                </Link>
              </span>
              <span>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_link_icon} fs_16 fw_500 fs_sm_15 fontFam_poppins pe-2 ps-2`}
                  >
                    {" "}
                    <Image
                      src={Insta}
                      alt=""
                      className={`${styles.footer_icon}`}
                      width={isTabletOrMobile ? 20 : 30}
                      height={isTabletOrMobile ? 20 : 30}
                    />
                  </a>
                </Link>
              </span>
              <span>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_link_icon} fs_16 fw_500 fs_sm_15 fontFam_poppins pe-2 ps-2`}
                  >
                    {" "}
                    <Image
                      src={Twitter}
                      alt=""
                      className={`${styles.footer_icon}`}
                      width={isTabletOrMobile ? 20 : 30}
                      height={isTabletOrMobile ? 20 : 30}
                    />
                  </a>
                </Link>
              </span>
              <span>
                <Link href="" className={`${styles.footer_link} `}>
                  <a
                    className={`${styles.footer_link_icon} fs_16 fw_500 fs_sm_15 fontFam_poppins pe-2 ps-2`}
                  >
                    {" "}
                    <Image
                      src={LinkedIn}
                      alt=""
                      className={`${styles.footer_icon}`}
                      width={isTabletOrMobile ? 20 : 30}
                      height={isTabletOrMobile ? 20 : 30}
                    />
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foter;
