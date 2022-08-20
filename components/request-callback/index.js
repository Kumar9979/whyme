import React from "react";
import styles from "../../styles/propertydetails/requestcall.module.css";
import menu from "../../assets/images/menu.svg";
import Image from "next/dist/client/image";
import image from "../../assets/images/imagereview/people.png";
import star from "../../assets/images/star.svg";

const RequestCall = () => {
  return (
    <div className={`${styles.request_call} p-4 mt-4`}>
      <div className={`d-flex justify-content-between`}>
        <div className={`${styles.posted_by}`}>Posted By</div>
        <button className={`${styles.request_menu} p-0`}>
          <Image src={menu} alt="Picture of the author" width={4} />
        </button>
      </div>
      <div className="d-flex">
        <div className={`pt-2`}>
          <Image
            src={image}
            alt="Picture of the author"
            width={80}
            height={80}
            className={`${styles.agent_image} `}
          />
        </div>

        <div className={`d-flex flex-column ps-4 `}>
          <div className={`${styles.agent_name}`}>Amal Sabu</div>
          <div className="d-flex align-items-center">
            <Image
              src={star}
              alt="Picture of the author"
              width={20}
              height={20}
              className={`${styles.agent_image} `}
            />{" "}
            <span className={`ps-2 ${styles.agent_rating}`}>4.7 Ratings</span> <span className={`${styles.rating_number} pt-1`}>{`(236) `}</span>
          </div>
          <div className={`${styles.more_properties} `}>2 More properties by this agent</div>
          <div className={`${styles.agent_number} `}>Call : 9876543210</div>
        </div>
      </div>
      <button className={`${styles.request_button} w-100 py-1 mt-2`}>Request Callback</button>
    </div>
  );
};

export default RequestCall;
