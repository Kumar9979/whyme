import React from "react";
import Image from "next/image";
import sunimage from "../../assets/sun.jpg";
import styles from "../../styles/cards/propertycard.module.css";

const ApartmentFlat = () => {
  return (
    <div className={`container`}>
      <div
        className={`${styles.property_card_container} ${styles.property_card_flex_res}  p-2 pt-3`}
      >
        <div className={`mb-md-2 ${styles.property_card_image_container}`}>
          <Image
            src={sunimage}
            name="image"
            alt="image of apartment/flat"
            layout="fill"
            objectFit="cover"
            className={`${styles.property_card_image}`}
          />
        </div>

        <div className={`${styles.property_card_desc_res}`}>
          <div>
            <div className={`d-flex justify-content-between`}>
              <div className={`d-flex align-items-center`}>
                <span
                  className={`fontFam_poppins ${styles.font_20} ${styles.font_regular} me-2`}
                >
                  2BHK flat in Vijayanagar, Mysuru
                </span>{" "}
                <div className={` `}>
                  <span
                    className={`${styles.property_card_ready_move} text-nowrap`}
                  >
                    Ready to move
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span
                className={`${styles.property_card_color_gray} ${styles.font_14} fontFam_poppins ${styles.font_regular} `}
              >
                <i className={`ri-map-pin-line`}></i> 2Nd Floor, Dejgow
                Building, Kannada Sahithya Parishath Rd,
                <br /> Mysuru, Karnataka 570017
              </span>
            </div>
          </div>

          <div className={`d-flex justify-content-around mt-3`}>
            <div>
              <div className={`d-flex align-items-center mb-1`}>
                <i
                  className={`ri-function-line ${styles.property_card_icons}`}
                ></i>
                <div
                  className={`d-flex flex-column align-items-center justify-content-start ms-2`}
                >
                  <span
                    className={`${styles.property_card_color_gray} ${styles.font_12} fontFam_poppins ${styles.font_regular} `}
                  >
                    SuperArea
                  </span>
                  <span
                    className={`w-100 ${styles.property_card_color_blue} ${styles.font_12} ${styles.property_card_opacity_87} ${styles.font_medium}`}
                  >
                    2400Sqft
                  </span>
                </div>
              </div>

              <div className={`d-flex align-items-center `}>
                <i
                  className={`ri-line-chart-line ${styles.property_card_icons}`}
                ></i>

                <div className={`d-flex flex-column align-items-center ms-2`}>
                  <span
                    className={`w-100 ${styles.property_card_color_gray} ${styles.font_12} fontFam_poppins ${styles.font_regular}`}
                  >
                    Floors
                  </span>

                  <span
                    className={`w-100 ${styles.property_card_color_blue} ${styles.property_card_opacity_87} ${styles.font_12} ${styles.font_medium}`}
                  >
                    3 out of 15
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className={`d-flex align-items-center mb-1`}>
                <i
                  className={`ri-honour-line ${styles.property_card_icons}`}
                ></i>

                <div className={`d-flex flex-column align-items-center ms-2`}>
                  <span
                    className={`${styles.property_card_color_gray} ${styles.font_12} fontFam_poppins ${styles.font_regular}`}
                  >
                    Bathrooms
                  </span>

                  <span
                    className={`w-100 ${styles.property_card_color_blue} ${styles.property_card_opacity_87} ${styles.font_12} ${styles.font_medium}`}
                  >
                    2
                  </span>
                </div>
              </div>
              <div className={`d-flex align-items-center`}>
                <i
                  className={`ri-timer-flash-line ${styles.property_card_icons}`}
                ></i>

                <div className={`d-flex flex-column align-items-center ms-2`}>
                  <span
                    className={`${styles.property_card_color_gray} ${styles.font_12} fontFam_poppins ${styles.font_regular}`}
                  >
                    Facing
                  </span>

                  <span
                    className={`w-100 ${styles.property_card_color_blue} ${styles.property_card_opacity_87} ${styles.font_12} ${styles.font_medium}`}
                  >
                    North
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className={`d-flex align-items-center mb-1`}>
                <i
                  className={`ri-honour-line ${styles.property_card_icons}`}
                ></i>

                <div className={`d-flex flex-column align-items-center ms-2`}>
                  <span
                    className={`${styles.property_card_color_gray} ${styles.font_12} fontFam_poppins ${styles.font_regular}`}
                  >
                    Furnishing Status
                  </span>

                  <span
                    className={`w-100 ${styles.property_card_color_blue} ${styles.property_card_opacity_87} ${styles.font_12} ${styles.font_medium}`}
                  >
                    Furnished
                  </span>
                </div>
              </div>
              <div className={`d-flex align-items-center`}>
                <i
                  className={`ri-coupon-line ${styles.property_card_icons}`}
                ></i>

                <div className={`d-flex flex-column align-items-center ms-2`}>
                  <span
                    className={`${styles.property_card_color_gray} ${styles.font_12} fontFam_poppins ${styles.font_regular}`}
                  >
                    Trasactions
                  </span>

                  <span
                    className={`w-100 ${styles.property_card_color_blue} ${styles.property_card_opacity_87} ${styles.font_12} ${styles.font_medium}`}
                  >
                    New
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={`d-flex mt-3`}>
            <ul
              className={`${styles.property_card_list_items} p-0 fontFam_poppins ${styles.font_14} ${styles.property_card_color_purple} ${styles.font_regular} `}
            >
              <li>Elevators/Lifts</li>
              <li>Guest Parking Spaces</li>
              <li>Parking</li>
              <li>Spaces</li>
              <li>Lifts</li>
            </ul>

            <ul
              className={`${styles.property_card_list_items} fontFam_poppins ${styles.font_14} ${styles.property_card_color_purple} ${styles.font_regular}`}
            >
              <li>Elevators/Lifts</li>
              <li>Guest Parking Spaces</li>
              <li>Parking</li>
              <li>Spaces</li>
              <li>Lifts</li>
            </ul>

          </div>
        </div>

        <div className={`price `}>
          <div className={`${styles.property_card_price_container}`}>
            <div className={`d-flex justify-content-end`}>
              <span className={`${styles.property_card_price} `}>₹ 30 Lac</span>
            </div>

            <div>
              <div
                className={`text-end ${styles.property_card_color_purple} ${styles.font_14} fontFam_poppins ${styles.font_regular} me-3`}
              >
                Posted On 20 June 2020 <br /> By Amal Sabu
              </div>
              <div className={`d-flex justify-content-end`}>

                <div
                  className={` ${styles.property_card_heart_icon_container}  p-2`}
                >
                  <i
                    className={`ri-heart-fill ${styles.property_card_heart_icon} `}
                  ></i>
                </div>

                <div
                  className={`d-flex align-items-center justify-content-start  ${styles.property_card_bgColor_blue} ${styles.property_card_btn_contact}`}
                >
                  <Image
                    width={40}
                    height={40}
                    src={sunimage}
                    name="image"
                    alt="image of camera"
                    className={`${styles.property_card_btn_contact_icon} `}
                  />
                  <span
                    className={`text-white align-self-center ms-4 fontFam_poppins ${styles.font_20} ${styles.font_medium}`}
                  >
                    Contact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default ApartmentFlat;
