import React from "react";
import styles from "../../../../../styles/propertydetails/profile/profilehead.module.css";
import Headdetails from "./profile-headContainerdetails";
import Image from "next/image";
import star from "../../../../../assets/images/star.svg";

const Profilehead = () => {
  return (
    <div>
      <div
        className={`${styles.profile_headsec } col-12 mt-lg-1 mx-lg-0 mt-md-1 mx-md-0 mt-sm-1 mx-sm-0  row `}>
        <div className="mt-5 me-0 "> <Headdetails/></div>
        <div className="  ">
          </div>
      </div>
      
    </div>
  );
};

export default Profilehead;
