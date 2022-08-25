import React from "react";
import Image from "next/image";
import seeall from "../../assets/images/seeall.svg";
import styles from "../../styles/propertydetails/similarProperties.module.css";

const SimilarProperties = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div
          className={`fs_24 fw_600 fontFam_poppins ${styles.similar_properties_heading}`}
        >
          Related Properties
        </div>
        <div>
          <button
            className={`${styles.seeall_button} d-flex align-items-center `}
          >
            <span>See All </span>
            <span className={`mt-1 ms-2 `}>
              {" "}
              <Image
                src={seeall}
                alt="Picture of the autho"
                width={15}
                height={15}
              />
            </span>
          </button>
        </div>
      </div>
      <div className={`${styles.similar_properties_card} p-4`}>

      </div>
    </div>
  );
};

export default SimilarProperties;
