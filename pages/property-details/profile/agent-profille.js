import React from "react";
import HeaderSection from "../../../components/property-details/property-details-profile/header";
import styles from "../../../styles/propertydetails/profile/agent-profile.module.css";
import star from "../../../../../assets/images/star.svg";
import caution from "../../../../../assets/images/property-details/caution.svg";
import share from "../../../../../assets/images/property-details/share.svg";

const AgentProfile = () => {
  return (
    <div className="col-12">
      <div className="d-flex justify-content-center mt-5 pt-5">
        <div className="col-11">
          <div className="d-flex justify-content-center">
            <div className={`${styles.profile_container} w-100`}>
              <div className="p-3">
                <HeaderSection />
                <div className={`${styles.agent_detail_height}`}>
                  <div className="row">
                    <div className={`${styles.white_space}`}></div>
                    <div className={`${styles.details_width}`}>
                      <div>
                        <div className="d-flex align-items-center mt-3">
                          <span className="fs_25 fw_600 fontFam_poppins color_cloudBurst">
                            Amal Sabu
                          </span>
                          <span
                            className={`${styles.number_properties} color_white py-1 fs_10 fw_400 px-1 ms-2 d-flex align-items-center`}
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
                          <span className="fs_15 fw_400 fontFam_poppins color_light_blue ms-1">
                            4.7 Ratings
                          </span>
                          <span className="fs_13 fw_400 fontFam_poppins color_cloudBurst ms-1">
                            {" "}
                            {"(236)"}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div>
                          <Image
                            src={caution}
                            alt="Picture of the author"
                            width={43}
                            height={43}
                          />
                        </div>
                        <div>
                          <Image src={share} alt="Picture of the author" />
                        </div>

                        <button>Contact</button>
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
