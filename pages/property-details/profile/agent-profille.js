import React, { useState, useEffect } from "react";
import HeaderSection from "../../../components/property-details/property-details-profile/header";
import styles from "../../../styles/propertydetails/profile/agent-profile.module.css";
// import star from "../../../../../assets/images/star.svg";
import caution from "../../../assets/images/property-details/caution.svg";
import share from "../../../assets/images/property-details/share.svg";
import Image from "next/image";

const AgentProfile = () => {
  const [mobile, setMobile] = useState(false);
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
  return (
    <div className={`${styles.body}`}>
      <div className="col-12">
        <div className="d-flex justify-content-center mt-5 pt-5">
          <div className="col-12 col-md-11 col-lg-11">
            <div className="d-flex justify-content-center">
              <div className={`${styles.profile_container} w-100`}>
                <div className="p-sm-0 p-md-3 p-lg-3">
                  <HeaderSection />
                  <div className={`${styles.agent_detail_height}`}>
                    <div className="row">
                      <div className={`${styles.white_space}`}></div>
                      <div
                        className={`${styles.details_width} d-flex justify-content-between`}
                      >
                        <div className="mt-auto d-none d-md-block">
                          <div className="d-flex align-items-center mt-3">
                            <span className="fs_25 fs_md_16 fw_600 fontFam_poppins color_cloudBurst">
                              Amal Sabu
                            </span>
                            <span
                              className={`${styles.number_properties} color_white py-1 fs_10 fs_md_8 fw_400 px-1 ms-2 d-flex align-items-center`}
                            >
                              2 Properties
                            </span>
                          </div>
                          <div className="mt-2 d-flex align-items-center">
                            <span className="color_grey fs_8 fw_400 fontFam_poppins">
                              Active Since
                            </span>
                            <span className="fs_12 fw_500 fontFam_poppins color_cloudBurst ms-1">
                              Aug 2022
                            </span>
                            <span></span>
                            <span className="fs_15 fs_md_12 fw_400 fontFam_poppins color_light_blue ms-1">
                              4.7 Ratings
                            </span>
                            <span className="fs_13 fw_400 fontFam_poppins color_cloudBurst ms-1">
                              {" "}
                              {"(236)"}
                            </span>
                          </div>
                        </div>
                        {mobile ? (
                          <div className="d-flex mt-5  align-items-center ms-auto">
                            <div>
                              <Image
                                src={caution}
                                alt="Picture of the author"
                                width={25}
                                height={25}
                              />
                            </div>

                            <div className="ms-3">
                              <Image
                                src={share}
                                width={25}
                                height={25}
                                alt="Picture of the author"
                              />
                            </div>

                            <button
                              className={`${styles.contact_button} px-lg-4 me-1 ms-3 color_white py-2 py-md-1 px-md-2 px-3 border-none`}
                            >
                              Contact
                            </button>
                          </div>
                        ) : (
                          <div className="d-flex mt-5  align-items-center ms-auto">
                            <div>
                              <Image
                                src={caution}
                                alt="Picture of the author"
                                width={35}
                                height={35}
                              />
                            </div>
                            <div className="ms-3">
                              <Image
                                src={share}
                                width={35}
                                height={35}
                                alt="Picture of the author"
                              />
                            </div>

                            <button
                              className={`${styles.contact_button} px-lg-4 me-1 ms-3 color_white py-2 py-md-1 px-md-2 px-3 fs_15 fs_sm_10 border-none`}
                            >
                              Contact
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
