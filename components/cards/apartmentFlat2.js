import React from "react";
import Image from "next/image";
import sunimage from "../../assets/sun.jpg";
import styles from "../../styles/cards/propertycard.module.css";

const ApartmentFlat2 = () => {
  return (
    <div className={`container`}>
      <div className={`${styles.property_card_container} d-flex  p-2 pt-3`}>
        <div className={`image  `}>
          <Image
            width={270}
            height={320}
            src={sunimage}
            name="image"
            alt="image of camera"
            className={styles.property_card_image}
          />
        </div>

        <div className={`desc ms-3`}>
          <div>
            <div className={`d-flex justify-content-between`}>
              <div className={`d-flex align-items-center`}>
                <span
                  className={`${styles.fontFam_poppins} ${styles.font_20} ${styles.font_regular} me-2`}
                >
                  2BHK flat in Vijayanagar, Mysuru
                </span>{" "}
                <div className={` `}>
                  <span className={`${styles.property_card_ready_move}`}>
                    Ready to move
                  </span>
                </div>
              </div>

              <div>
                <span>₹ 30 Lac</span>
              </div>
            </div>
            <div>
              <span
                className={`${styles.property_card_color_gray} ${styles.font_14} ${styles.fontFam_poppins} ${styles.font_regular} text-uppercase`}
              >
                <i className={`ri-map-pin-line`}></i> 2Nd Floor, Dejgow
                Building, Kannada Sahithya Parishath Rd,
                <br /> Mysuru, Karnataka 570017
              </span>
            </div>
          </div>

          <div className={``}>
            <div className={`mt-4 `}>
              <div className={`d-flex  mb-2`}>
                <div className={`d-flex align-items-center`}>
                  <i
                    className={`ri-function-line ${styles.property_card_icons}`}
                  ></i>
                  <div
                    className={`d-flex flex-column align-items-center justify-content-start`}
                  >
                    <span
                      className={`${styles.property_card_color_gray} ${styles.font_12} ${styles.fontFam_poppins} ${styles.font_regular} `}
                    >
                      SuperArea
                    </span>
                    <span
                      className={`w-100 ${styles.property_card_color_blue} ${styles.font_12} ${styles.font_medium}`}
                    >
                      2400Sqft
                    </span>
                  </div>
                </div>
                <div className={`d-flex align-items-center`}>
                  <i
                    className={`ri-honour-line ${styles.property_card_icons}`}
                  ></i>

                  <div className={`d-flex flex-column align-items-center`}>
                    <span
                      className={`${styles.property_card_color_gray} ${styles.font_12} ${styles.fontFam_poppins} ${styles.font_regular}`}
                    >
                      Bathrooms
                    </span>

                    <span
                      className={`w-100 ${styles.property_card_color_blue} ${styles.font_12} ${styles.font_medium}`}
                    >
                      2
                    </span>
                  </div>
                </div>
                <div className={`d-flex align-items-center`}>
                  <i
                    className={`ri-honour-line ${styles.property_card_icons}`}
                  ></i>

                  <div className={`d-flex flex-column align-items-center`}>
                    <span
                      className={`${styles.property_card_color_gray} ${styles.font_12} ${styles.fontFam_poppins} ${styles.font_regular}`}
                    >
                      Furnishing Status
                    </span>

                    <span
                      className={`w-100 ${styles.property_card_color_blue} ${styles.font_12} ${styles.font_medium}`}
                    >
                      Furnished
                    </span>
                  </div>
                </div>
              </div>
              <div className={`d-flex `}>
                <div className={`d-flex align-items-center`}>
                  <i
                    className={`ri-line-chart-line ${styles.property_card_icons}`}
                  ></i>

                  <div className={`d-flex flex-column align-items-center`}>
                    <span
                      className={`${styles.property_card_color_gray} ${styles.font_12} ${styles.fontFam_poppins} ${styles.font_regular}`}
                    >
                      Floors
                    </span>

                    <span
                      className={`w-100 ${styles.property_card_color_blue} ${styles.font_12} ${styles.font_medium}`}
                    >
                      3 out of 15
                    </span>
                  </div>
                </div>
                <div className={`d-flex align-items-center`}>
                  <i
                    className={`ri-timer-flash-line ${styles.property_card_icons}`}
                  ></i>

                  <div className={`d-flex flex-column align-items-center`}>
                    <span
                      className={`${styles.property_card_color_gray} ${styles.font_12} ${styles.fontFam_poppins} ${styles.font_regular}`}
                    >
                      Facing
                    </span>

                    <span
                      className={`w-100 ${styles.property_card_color_blue} ${styles.font_12} ${styles.font_medium}`}
                    >
                      North
                    </span>
                  </div>
                </div>
                <div className={`d-flex align-items-center`}>
                  <i
                    className={`ri-coupon-line ${styles.property_card_icons}`}
                  ></i>

                  <div className={`d-flex flex-column align-items-center`}>
                    <span
                      className={`${styles.property_card_color_gray} ${styles.font_12} ${styles.fontFam_poppins} ${styles.font_regular}`}
                    >
                      Trasactions
                    </span>

                    <span
                      className={`w-100 ${styles.property_card_color_blue} ${styles.font_12} ${styles.font_medium}`}
                    >
                      New
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`text-end`}>
                Posted On 20 June 2020 <br /> By Amal Sabu
              </div>
              <div className={`d-flex align-items-center justify-content-end`}>
                <Image
                  width={27}
                  height={32}
                  src={sunimage}
                  name="image"
                  alt="image of camera"
                />
                <span>Contact</span>
              </div>
            </div>
          </div>

          <div></div>
        </div>

        <div className={`price`}></div>
      </div>
    </div>
  );
};

export default ApartmentFlat2;
