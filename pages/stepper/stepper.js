


import React from 'react'
import CheckGreyImages from "../../assets/icons/check.png";
import CheckImages from "../../assets/icons/check.png";
import Image from "next/image";

import styles from "../../styles/stepper/stepper.module.css"
import { StepLabel } from '@material-ui/core';



const stepper = ({currentPage}) => {
    

  return (




    
<div className={`col-lg-4 ${styles.stepper_bg_color}`}>

<div className={``}>
<div className={`${styles.stepper_item_flex_res}`}>
    <div>
<Image src={currentPage==="Property Details"?CheckImages:CheckGreyImages} alt="status icon" width={10} height={10} />

    </div>

  <p className={`text-white`}>Property Details</p>
</div>
</div>



<div >
<div className={`${styles.stepper_item_flex_res}`}>
    <div>

<Image src={CheckImages} alt="status icon" width={12} height={12} />

    </div>

  <p className={`text-white`}>Property Features</p>
</div>
</div>

<div >
<div className={`${styles.stepper_item_flex_res}`}>
    <div>
    <Image src={CheckImages} alt="status icon" width={12} height={12} />

    </div>

  <p className={`text-white`}>Price Details</p>
</div>
</div>

<div>
<div className={`${styles.stepper_item_flex_res}`}>
    <div>

<Image src={CheckImages} alt="status icon" width={12} height={12} />

    </div>

  <p className={`text-white`}>Photos & Description</p>
</div>
</div>



</div>











  )
}

export default stepper