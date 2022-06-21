


import React from 'react'
import visitedIcon from "../../assets/icons/checkgrey.png";
import currentIcon from "../../assets/icons/check.png";
import Image from "next/image";

import styles from "../../styles/stepper/stepper.module.css"
import { StepLabel } from '@material-ui/core';



const StepperNew = ({currentPage}) => {
    

  return (




    
<div className={`container ${`${styles.stepper_cont_flex_res}`} justify-content-around p-4 ${styles.stepper_bg_color}`}>

<div >
<div className={`${styles.stepper_item_flex_res}`}>
   
    <div className={``}>
<Image src={currentPage==="propertyDetails"?currentIcon:visitedIcon} alt="status icon" width={20} height={20} />

    </div>

  <span  className={`text-white ${styles.stepper_text_center_res} ${styles.stepper_margin_left}` }>Property Details</span>

</div>
<div className={`${styles.stepper_line_cont}`}>
  <span className={`${styles.stepper_line}`}></span>
</div>
</div>



<div className={`${styles.stepper_margin_start}`}>
<div className={`${styles.stepper_item_flex_res}`}>
    <div>

<Image src={currentPage==="propertyFeatures"?currentIcon:visitedIcon} alt="status icon" width={20} height={20} />

    </div>

  <span className={`text-white ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}>Property Features</span>
</div>
<div className={`${styles.stepper_line_cont}`}>
  <span className={`${styles.stepper_line}`}></span>
</div>
</div>

<div >
<div className={`${styles.stepper_item_flex_res}`}>
    <div>
    <Image src={currentPage==="priceDetails"?currentIcon:visitedIcon} alt="status icon" width={20} height={20} />

    </div>

  <span className={`text-white ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}>Price Details</span>
</div>
<div className={`${styles.stepper_line_cont}`}>
  <span className={`${styles.stepper_line}`}></span>
</div>
</div>

<div>
<div className={`${styles.stepper_item_flex_res}`}>
    <div>

<Image src={currentPage==="photoDesc"?currentIcon:visitedIcon} alt="status icon" width={20} height={20} />

    </div>

  <span className={`text-white ${styles.stepper_text_center_res} ${styles.stepper_margin_left}`}>Photos & Description</span>
</div>

</div>



</div>











  )
}

export default StepperNew