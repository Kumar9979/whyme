import React, { useState } from "react";
import currentIcon from "../../assets/icons/checkgrey.png";
import visitedIcon from "../../assets/icons/check.png";
import Image from "next/image";

import styles from "../../styles/stepper/stepper.module.css";
import { StepLabel } from "@material-ui/core";

const StepperNew = ({ currentPage }) => {
  // const [form1, setForm1] = useState(visitedIcon)
  // const [form2, setForm2] = useState(currentIcon)
  // const [form3, setForm3] = useState(currentIcon)
  // const [form4, setForm4] = useState(currentIcon)

  let form1 = visitedIcon;

  let form2 = currentIcon;
  let form3 = currentIcon;
  let form4 = currentIcon;

  let line1_Opactiy="none";
  let line2_Opactiy=styles.stepper_line_opacity;
  let line3_Opactiy=styles.stepper_line_opacity;

 


  let opcaityForm1  ="none"
  let opcaityForm2 = styles.stepper_opacity;
  let opcaityForm3  =styles.stepper_opacity;
  let opcaityForm4=styles.stepper_opacity;

  function status(currentPage) {
    if (currentPage === "propertyDetails") {
      form1 = visitedIcon;
      form2 = currentIcon;
      form3 = currentIcon;
      form4 = currentIcon;
      opcaityForm1  ="none"
      opcaityForm2 = styles.stepper_opacity;
      opcaityForm3  =styles.stepper_opacity;
      opcaityForm4=styles.stepper_opacity;
       line1_Opactiy="none";
       line2_Opactiy=styles.stepper_line_opacity;
       line3_Opactiy=styles.stepper_line_opacity;
       console.log(line2_Opactiy);
    } else if (currentPage == "propertyFeatures") {
      form1 = visitedIcon;

      form2 = visitedIcon;
      form3 = currentIcon;
      form4 = currentIcon;
      opcaityForm1  ="none"
      opcaityForm2 = "none"
      opcaityForm3  =styles.stepper_opacity;
      opcaityForm4=styles.stepper_opacity;
    line1_Opactiy="none";
    line2_Opactiy="none";
    line3_Opactiy=styles.stepper_line_opacity;
    } else if (currentPage == "priceDetails") {
      form1 = visitedIcon;

      form2 = visitedIcon;
      form3 = visitedIcon;
      form4 = currentIcon;
      opcaityForm1  ="none"
      opcaityForm2 = "none"
      opcaityForm3  ="none"
      opcaityForm4=styles.stepper_opacity;
     line1_Opactiy="none";
     line2_Opactiy="none";
     line3_Opactiy="none";
    } else if (currentPage == "photoDesc") {
      form1 = visitedIcon;
      form2 = visitedIcon;
      form3 = visitedIcon;
      form4 = visitedIcon;
      opcaityForm1  ="none"
      opcaityForm2 = "none"
      opcaityForm3  ="none"
      opcaityForm4="none";
     line1_Opactiy="none";
     line2_Opactiy="none";
     line3_Opactiy="none";
    }
  }

  status(currentPage);

  return (
    <div
      className={`container ${`${styles.stepper_cont_flex_res}`} justify-content-around p-4 ${
        styles.stepper_bg_color
      }`}
    >
      <div>
        <div className={`${styles.stepper_item_flex_res}`}>
          <div className={``}>
            <Image src={form1} alt="status icon" width={20} height={20} />
          </div>

          <span
            className={`text-white ${opcaityForm1} ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}
          >
            Property Details
          </span>
        </div>
        <div className={`${styles.stepper_line_cont}`}>
          <span className={`${line1_Opactiy} ${styles.stepper_line}`}></span>
        </div>
      </div>

      <div className={`${styles.stepper_margin_start}`}>
        <div className={`${styles.stepper_item_flex_res}`}>
          <div>
            <Image src={form2} alt="status icon" width={20} height={20} />
          </div>

          <span
            className={`text-white ${opcaityForm2} ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}
          >
            Property Features
          </span>
        </div>
        <div className={`${styles.stepper_line_cont}`}>
          <span className={`${line2_Opactiy} ${styles.stepper_line}`}></span>
        </div>
      </div>

      <div>
        <div className={`${styles.stepper_item_flex_res}`}>
          <div>
            <Image src={form3} alt="status icon" width={20} height={20} />
          </div>
          <span
            className={`text-white ${opcaityForm3} ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}
          >
            Price Details
          </span>
        </div>
        <div className={`${styles.stepper_line_cont}`}>
          <span className={`${line3_Opactiy} ${styles.stepper_line}`}></span>
        </div>
      </div>

      <div>
        <div className={`${styles.stepper_item_flex_res}`}>
          <div>
            <Image src={form4} alt="status icon" width={20} height={20} />
          </div>

          <span
            className={`text-white  ${opcaityForm4} ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}
          >
            Photos & Description
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepperNew;
