import React from "react";
import styles from "../../../styles/propertydetails/propertyprofile.module.css";
import Image from "next/image";
import star from "../../../assets/images/star.svg";
import rate from "../../../assets/images/property-details/rate_star.svg";
import profile from "../../../assets/images/property-details/profile.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";

const PropertyReview = () => {
  return (
    <div className="mt-5">
      <div className={`${styles.review_container} mt-5`}>
        <div className="  d-flex align-items-center ">
          <span className={`${styles.reviewtext} fw_500 me-lg-3 `}>
            Review & Rating
          </span>
          <Image src={star} alt="Picture of the author" className={` `} />
          <span className={`${styles.hiderating_number}  fs_24 fw_400 ms-2 `}>
            4.7
            <span
              className={`${styles.hiderating_number} ms-1 fontFam_poppins fs_22 fw_400`}
            >
              Ratings
              <span
                className={`${styles.hidecount} fs_22 ms-lg-1 color_cloudBurst`}
              >
                (236)
              </span>
            </span>
          </span>
        </div>
        <div className={`mt-lg-4 d-flex align-items-center `}>
          <div className={`ms-lg-1 `}>
            <button>
              <Image src={rate} alt="Picture of the author" className={` `} />
            </button>
          </div>
          <div className={`ms-lg-4 `}>
            <Image src={rate} alt="Picture of the author" className={` `} />
          </div>
          <div className={`ms-lg-4 `}>
            <Image src={rate} alt="Picture of the author" className={` `} />
          </div>
          <div className={`ms-lg-4 `}>
            <Image src={rate} alt="Picture of the author" className={` `} />
          </div>
          <div className={`ms-lg-4 `}>
            <Image src={rate} alt="Picture of the author" className={` `} />
          </div>
        </div>
        <div className={`mt-lg-4`}>
          <label className=" fs_20 fw_500 fontFam_poppins ">Review</label>
          <br />
          <textarea
            className={`${styles.reviewtextarea} fs_18 `}
            placeholder="Write your review here"
          ></textarea>
          <br />
          <button className={`${styles.review_submit} btn my-3`}>Send</button>
        </div>
        <div>
          <div>
            <div className={`${styles.review_card} my-lg-3 py-lg-3 `}>
              <div
                className={`${styles.review_cardhead} d-flex justify-content-between ms-lg-3 `}
              >
                <div className="  ">
                  <div className="d-flex justify-content-start ">
                    <div className={`${styles.review_profile}`}>
                     
                      <Image
                        src={profile}
                        alt="Picture of the author"
                        width={65}
                        height={55}
                        className={` `}
                      />
                    </div>
                    <div className="ms-lg-2  ">
                      <span className=" fs_24 fw_500 fontFam_poppins">Rohit</span>
                      <br />
                      <div className="d-flex align-items-center">
                        <Image
                          src={star}
                          alt="Picture of the author"
                          className={` `}
                        />
                        <span
                          className={`${styles.hiderating_number}  fs_16 fw_400 ms-2 `}
                        >
                          4.7
                          <span
                            className={`${styles.hiderating_number} ms-1 fontFam_poppins fs_14 fw_400`}
                          >
                            Ratings
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                    <span className= {`${styles.reviewdate} mx-lg-3 my-lg-2 align-content-end`} >3 days ago</span>
                </div>
              </div>
              <div className="mx-lg-3 my-lg-2">
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos.
                </span>
              </div>
              <div></div>
            </div>
            <div className={`${styles.review_card} py-lg-3 `}>
              <div
                className={`${styles.review_cardhead} d-flex justify-content-between ms-lg-3 `}
              >
                <div className="  ">
                  <div className="d-flex justify-content-start ">
                    <div className={`${styles.review_profile}`}>
                     
                      <Image
                        src={profile}
                        alt="Picture of the author"
                        width={65}
                        height={55}
                        className={` `}
                      />
                    </div>
                    <div className="ms-lg-2  ">
                      <span className=" fs_24 fw_500 fontFam_poppins">Rohit</span>
                      <br />
                      <div className="d-flex align-items-center">
                        <Image
                          src={star}
                          alt="Picture of the author"
                          className={` `}
                        />
                        <span
                          className={`${styles.hiderating_number}  fs_16 fw_400 ms-2 `}
                        >
                          4.7
                          <span
                            className={`${styles.hiderating_number} ms-1 fontFam_poppins fs_14 fw_400`}
                          >
                            Ratings
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                    <span className= {`${styles.reviewdate} mx-lg-3 my-lg-2 align-content-end`}>3 days ago</span>
                </div>
              </div>
              <div className="mx-lg-3 my-lg-2">
                <span >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos.
                </span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyReview;
