import React from "react";
import styles from "../../../styles/propertydetails/profile/header.module.css";
import profile from "../../../assets/images/property-details/profile.png";
import Image from "next/image";

const HeaderSection = () => {
  return (
    <div className={`${styles.header} position-relative`}>
      <div className={`${styles.profile_image} position-absolute`}>
        <Image
          src={profile}
          alt="Picture of the author"
          width={230}
          height={230}
          className={`${styles.image}`}
        />
      </div>
    </div>
  );
};

export default HeaderSection;
