import React, { useState } from "react";
import currentIcon from "../../assets/icons/checkgrey.png";
import visitedIcon from "../../assets/icons/check.png";
import Image from "next/image";

import styles from "../../styles/stepper/stepper.module.css";
import { StepLabel } from "@material-ui/core";

const StepperNew = ({ currentPage }) => {
  const propertyDetails = {
    iconImage: visitedIcon,
    iconOpacity: "visible",
    lineOpacity: styles.stepper_line_opacity,
  };
  const propertyFeatures = {
    iconImage: currentIcon,
    iconOpacity: styles.stepper_opacity,
    lineOpacity: styles.stepper_line_opacity,
  };
  const priceDetails = {
    iconImage: currentIcon,
    iconOpacity: styles.stepper_opacity,
    lineOpacity: styles.stepper_opacity,
  };
  const photoDesc = {
    iconImage: currentIcon,
    iconOpacity: styles.stepper_opacity,
  };

  function currentStepper(currentPage) {
    if (currentPage === "propertyFeatures") {
      propertyFeatures.iconImage = visitedIcon;
      propertyFeatures.iconOpacity = "visibile";
      propertyDetails.lineOpacity = "visibile";
    } else if (currentPage === "priceDetails") {
      propertyDetails.lineOpacity = "visibile";
      propertyFeatures.iconImage = visitedIcon;
      propertyFeatures.iconOpacity = "visibile";
      propertyFeatures.lineOpacity = "visibile";
      priceDetails.iconImage = visitedIcon;
      priceDetails.iconOpacity = "visibile";
    } else if (currentPage === "photoDesc") {
      propertyDetails.lineOpacity = "visibile";
      propertyFeatures.iconImage = visitedIcon;
      propertyFeatures.iconOpacity = "visibile";
      propertyFeatures.lineOpacity = "visibile";
      priceDetails.iconImage = visitedIcon;
      priceDetails.iconOpacity = "visibile";
      priceDetails.lineOpacity = "visibile";
      photoDesc.iconImage = visitedIcon;
      photoDesc.iconOpacity = "visibile";
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
            />
          </div>

          <span
            className={`text-white ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_20}  ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}
          >
            Property Details
          </span>
        </div>
        <div className={`${styles.stepper_line_cont}`}>
          <span className={`${propertyDetails.lineOpacity} ${styles.stepper_line}`}></span>
        </div>
      </div>

      <div className={`${styles.stepper_margin_start} `}>
        <div className={`${styles.stepper_item_flex_res}`}>
          <div>
            <Image
              src={propertyFeatures.iconImage}
              className={`${propertyFeatures.iconOpacity}`}
              alt="status icon"
            />
          </div>

          <span
            className={`text-white ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_20} ${propertyFeatures.iconOpacity} ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}
          >
            Property Features
          </span>
        </div>
        <div className={`${styles.stepper_line_cont}`}>
          <span className={`${propertyFeatures.lineOpacity} ${styles.stepper_line}`}></span>
        </div>
      </div>

      <div>
        <div className={`${styles.stepper_item_flex_res}`}>
          <div>
            <Image
              src={priceDetails.iconImage}
              className={priceDetails.iconOpacity}
              alt="status icon"
            />
          </div>
          <span
            className={`text-white ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_20} ${priceDetails.iconOpacity} ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}
          >
            Price Details
          </span>
        </div>
        <div className={`${styles.stepper_line_cont}`}>
          <span
            className={`${priceDetails.lineOpacity} ${styles.stepper_line}`}
          ></span>
        </div>
      </div>

      <div>
        <div className={`${styles.stepper_item_flex_res}`}>
          <div>
            <Image
              src={photoDesc.iconImage}
              alt="status icon"
              className={photoDesc.iconOpacity}
            />
          </div>
          <span
            className={`text-white ${styles.fontFam_poppins} ${styles.font_medium} ${styles.font_20}  ${photoDesc.iconOpacity} ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}
          >
            Photos & Description
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepperNew;
