import React, { useEffect, useState } from "react";
import styles from "../../../styles/propertydetails/profile/header.module.css";
import profile from "../../../assets/images/property-details/profile.png";
import Image from "next/image";

const HeaderSection = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`${styles.header} position-relative`}>
      <div className={`${styles.profile_image} position-absolute`}>
        {mobile ? (
          <Image
            src={profile}
            alt="Picture of the author"
            width={130}
            height={130}
            className={`${styles.image}`}
          />
        ) : (
          <Image
            src={profile}
            alt="Picture of the author"
            width={180}
            height={180}
            className={`${styles.image}`}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderSection;
