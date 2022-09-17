import React from "react";
import styles from "../../../../../styles/propertydetails/profile/Profilehead.module.css";
import Image from "next/image";
import profile from "../../../../../assets/images/property-details/profile.png";
import star from "../../../../../assets/images/star.svg";
import caution from "../../../../../assets/images/property-details/caution.svg";
import share from "../../../../../assets/images/property-details/share.svg";

const Headdetails = () => {
  return (
    <div className={`container ms-3 mt-`}>
      <div className={` row`}>
        <div
          className={` col-xl-3 col-xxl-3 col-lg-3 col-md-4 col-sm-4 col-4 mt-5 pt-3 mt-md-5 pt-md-4 mt-lg-5 pt-lg-3 pt-xl-3 mt-sm-5 pt-sm-4  d-lg-flex justify-content-center`} >
          <div className={`col- mt-4 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-0  `} >
            <Image src={profile} alt="Picture of the author" width={230} height={230} className={`${styles.profile_image} position-absolute `}
            />
            
            <div className={` d-lg-none`}>
              <span
                className={`fs_md_32 fs_sm_17 text-nowrap fontFam_poppins  fw_500`}  >
                Amal Sabu
              </span>
            </div>
          </div>
        </div>
        <div
          className={`col-xxl-9 col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8 mt-xl-5 pt-xl-5 mt-lg-5 pt-lg-3 mt-md-5 pt-md-4 mt-sm-5 pt-sm-4 mt-5 pt-3  `}
        >
          <div className={`${styles.details} mt-5 pt-5  `}>
            <div className="d-flex  justify-content-between  ">
              <div className={`${styles.containerhide_second}`}>
                <div className=" d-flex justify-content-start mt-lg-3">
                  <span
                    className={`${styles.profile_name} col- text-nowrap fontFam_poppins  fw_500`}
                  >
                    Amal Sabu
                  </span>
                  <div className={`mt-lg-3 `}>
                    <span
                      className={`${styles.property_label} text-nowrap fontFam_poppins ms-lg-2 px-lg-2  py-lg-1 fw_500`}
                    >
                      2 Properties
                    </span>
                  </div>
                </div>

                <div className="  d-flex align-items-center ">
                  <div className=" d-xl-flex justify-content-center rows">
                    <div className={` ms-lg-1 fontFam_poppins  fw_400 col- `}>
                      <span className={`${styles.active}`}>Active Since</span>
                    </div>
                    <div className="col- ms-1">
                      <span className={``}>Aug 2022</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center ms-2">
                    <Image
                      src={star}
                      width={20}
                      height={20}
                      alt="Picture of the author"
                      className={` `}
                    />

                    <span className={`${styles.hiderating_number} fw_400 `}>
                      4.7
                    </span>
                    <span
                      className={`${styles.hiderating_number} ms-1 fontFam_poppins fw_400`}
                    >
                      Ratings
                    </span>
                    <span
                      className={`${styles.hidecount} ms-1  color_cloudBurst`}
                    >
                      (236)
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`col- mt-lg-4 pt-lg-3 mt-md-1  mt-sm-3  mt-0 ms-md-5 mt-md-1 ms-sm-5 ms-1 me-2  d-flex align-items-center`}
              >
                <div className={`${styles.cautionimg} `}>
                  <Image
                    src={caution}
                    alt="Picture of the author"
                    width={43}
                    height={43}
                  />
                </div>
                <div className="ms-lg-4 ms-md-3 ms-sm-4 ms-1  ">
                  <Image
                    src={share}
                    alt="Picture of the author"
                    className={` ${styles.shareimg}`}
                  />
                </div>

                <button
                  className={`${styles.contact_btn}   ms-2 me-lg-5 ms-lg-4 py-xl-2 py-xxl-2 py-lg-2  ms-md-3 ms-sm-4  fw_400 py-lg-2 fontFam_poppins btn btn-primary`}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={` d-lg-none d-flex align-items-center`}>
      
        <Image
          src={star}
          width={20}
          height={20}
          alt="Picture of the author"
          className={` `}
        />
        <span className={` fs_md_20 fs_sm_12   fw_400  ms-1  `}>4.7</span>
        <span className={` ms-1 fs_md_20 fs_sm_12 fontFam_poppins fw_400`}>
          Ratings
        </span>
        <span className={` ms-1  fs_md_20 fs_sm_12 color_cloudBurst`}>
          (236)
        </span>
      
      </div>
    </div>
  );
};

export default Headdetails;
