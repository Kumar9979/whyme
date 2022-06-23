import React, { useState } from "react";
import Image from "next/image";

import styles from "../../styles/stepper/stepper.module.css";
import stepperCompleletedIcon from "../../assets/icons/stepperCompleletedIcon.svg";
import stepperCurrentIcon from "../../assets/icons/stepperCurrentIcon.svg";
import stepperUnvisitedIcon from "../../assets/icons/stepperUnvisitedIcon.svg";

const StepperNew = ({ currentPage }) => {
  const propertyDetails = {
    iconImage: stepperCurrentIcon,
    lineOpacity: styles.stepper_line_opacity,
  };
  const propertyFeatures = {
    iconImage: stepperUnvisitedIcon,
    textOpacity: styles.stepper_text_opacity,
    lineOpacity: styles.stepper_line_opacity,
  };
  const priceDetails = {
    iconImage: stepperUnvisitedIcon,
    textOpacity: styles.stepper_text_opacity,
    lineOpacity: styles.stepper_line_opacity,
  };
  const photoDesc = {
    iconImage: stepperUnvisitedIcon,
    textOpacity: styles.stepper_text_opacity,
  };

  function currentStepper(currentPage) {
    if (currentPage === "propertyFeatures") {
      propertyDetails.iconImage = stepperCompleletedIcon;
      propertyFeatures.iconImage = stepperCurrentIcon;
      propertyFeatures.textOpacity = "visibile";
      propertyDetails.lineOpacity = "visibile";
    } else if (currentPage === "priceDetails") {
      propertyDetails.iconImage = stepperCompleletedIcon;
      propertyDetails.lineOpacity = "visibile";
      propertyFeatures.iconImage = stepperCompleletedIcon;
      propertyFeatures.textOpacity = "visibile";
      propertyFeatures.lineOpacity = "visibile";
      priceDetails.iconImage = stepperCurrentIcon;
      priceDetails.textOpacity = "visibile";
    } else if (currentPage === "photoDesc") {
      propertyDetails.iconImage = stepperCompleletedIcon;
      propertyDetails.lineOpacity = "visibile";
      propertyFeatures.iconImage = stepperCompleletedIcon;
      propertyFeatures.textOpacity = "visibile";
      propertyFeatures.lineOpacity = "visibile";
      priceDetails.iconImage = stepperCompleletedIcon;
      priceDetails.textOpacity = "visibile";
      priceDetails.lineOpacity = "visibile";
      photoDesc.iconImage = stepperCurrentIcon;
      photoDesc.textOpacity = "visibile";
    }
  }
  currentStepper(currentPage);

  return (
    <div
      className={`container ${`${styles.stepper_cont_flex_res}`}  justify-content-around  ${
        styles.stepper_bg_color
      }`}
    >
      <div className={`${styles.stepper_item_container}`}>
        <div className={`${styles.stepper_item_flex_res}`}>
          <div className={``}>
            <Image
              src={propertyDetails.iconImage}
              alt="status icon"
              layout="fixed"
              // className={styles.stepper_status_image}
              width={20}
              height={20}
            />
          </div>

          <span
            className={`text-white ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_20}  ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}
          >
            Property{" "}
            <span className={`${styles.stepper_components_title}`}>
              Details
            </span>
          </span>
        </div>
        <div className={`${styles.icon_gap}`}>
          <div className={`${styles.stepper_line_cont}`}>
            <span
              className={`${propertyDetails.lineOpacity} ${styles.stepper_line}`}
            ></span>
          </div>
        </div>
      </div>

      <div className={`${styles.stepper_margin_start} `}>
        <div className={`${styles.stepper_item_flex_res}`}>
          <div>
            <Image
              src={propertyFeatures.iconImage}
              alt="status icon"
              width={20}
              height={20}
            />
          </div>

          <span
            className={`text-white ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_20} ${propertyFeatures.textOpacity} ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}
          >
            Property Features
          </span>
        </div>
        <div className={`${styles.icon_gap}`}>
          <div className={`${styles.stepper_line_cont}`}>
            <span
              className={`${propertyFeatures.lineOpacity} ${styles.stepper_line} ${styles.stepper_line_features}`}
            ></span>
          </div>
        </div>
      </div>

      <div>
        <div className={`${styles.stepper_item_flex_res}`}>
          <div>
            <Image
              src={priceDetails.iconImage}
              alt="status icon"
              width={20}
              height={20}
            />
          </div>
          <span
            className={`text-white ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_20} ${priceDetails.textOpacity} ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}
          >
            Price Details
          </span>
        </div>
        <div className={`${styles.icon_gap_3}`}>
          <div className={`${styles.stepper_line_cont}`}>
            <span
              className={`${priceDetails.lineOpacity} ${styles.stepper_line} ${styles.stepper_line_price}`}
            ></span>
          </div>
        </div>
      </div>

      <div>
        <div className={`${styles.stepper_item_flex_res}`}>
          <div>
            <Image
              src={photoDesc.iconImage}
              alt="status icon"
              width={20}
              height={20}
            />
          </div>
          <span
            className={`text-white ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_20}  ${photoDesc.textOpacity} ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}
          >
            Photos & Description
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepperNew;
