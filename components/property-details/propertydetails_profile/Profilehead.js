import React from "react";
import styles from "../../../styles/propertydetails/propertyprofile.module.css";
import Image from "next/image";
import profile from "../../../assets/images/property-details/profile.jpg";
import star from "../../../assets/images/star.svg";
import caution from "../../../assets/images/property-details/caution.svg";
import share from "../../../assets/images/property-details/share.svg";


const Profilehead = () => {
  return (
    <div> <div
    className={`${styles.profile_headsec} mt-lg-1 mx-lg-0 mt-md-1 mx-md-0 mt-sm-1 mx-sm-0  row `}
  >
    <div className="col-4">
      <div className={`${styles.profile_image} position-absolute`}>
        <Image
          src={profile}
          alt="Picture of the author"
          width={230}
          height={230}
          className={` `}
        />
      </div>
    </div>
    <div className="col-8 ms-lg-2">
      <div className={`${styles.profiledetails_container}  `}>
        <div className="d-lg-flex justify-content-between">
          <div className={`${styles.containerhide_second}`}>
            <div className=" d-flex justify-content-start mt-lg-3">
              <span
                className={`${styles.profile_name} fontFam_poppins  fw_500`}
              >
                Amal Sabu
              </span>
              <div className={`mt-lg-3 `}>
                <span
                  className={`${styles.property_label} fontFam_poppins ms-lg-2 px-lg-2  py-lg-1 fw_500`}
                >
                  2 Properties
                </span>
              </div>
            </div>

            <div className="  d-flex align-items-center ">
            <span className={` ${styles.activestatus} ms-lg-1 fontFam_poppins fs_22 fw_400 `}>Active Since Aug 2022</span>
             <div className="ms-lg-1  d-flex align-items-center">
              <Image
                src={star}
                width={20}
                height={20}
                alt="Picture of the author"
                className={` `}
              />
              </div>
              <span className={`${styles.hiderating_number}  fs_19 fw_400 ms-lg-2 `} >
                4.7
                <span
                  className={`${styles.hiderating_number} ms-lg-1 fontFam_poppins fs_17 fw_400`}
                >
                  Ratings
                  <span
                    className={`${styles.hidecount} ms-lg-1 fs_17 color_cloudBurst`}
                  >
                    (236)
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div
            className={`${styles.button_sec} mt-lg-4 pt-lg-3  mt-sm- mt-4 ms-md-5 mt-md-1 ms-sm-5  mt-sm-3 d-flex align-items-center`}
          >
            <div className="">
              <Image
                src={caution}
                alt="Picture of the author"
                width={43}
                height={43}
                className={`${styles.cautionimg}`}
              />
            </div>
            <div className="ms-lg-4 ms-2">
              <Image
                src={share}
                alt="Picture of the author"
                className={` ${styles.shareimg}`}
              />
            </div>

            <button
              className={`${styles.contact_btn}  ms-2 me-lg-5 ms-lg-4 fw_400 py-lg-2 fontFam_poppins btn btn-primary`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className={`${styles.containerhide}`}>
      <div className=" d-flex justify-content-start">
        <span
          className={`${styles.hideprofile_name} fontFam_poppins  fw_500`}
        >
          Amal Sabu
        </span>
      </div>

      <div className="  d-flex align-items-center ">
       
        <Image
          src={star}
          alt="Picture of the author"
          className={` `}
        />
        <span
          className={`${styles.hiderating_number}  fs_20 fw_400 ms-2 `}
        >
          4.7
          <span
            className={`${styles.hiderating_number} ms-1 fontFam_poppins fs_18 fw_400`}
          >
            Ratings
            <span
              className={`${styles.hidecount} fs_18 color_cloudBurst`}
            >
              (236)
            </span>
          </span>
        </span>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Profilehead