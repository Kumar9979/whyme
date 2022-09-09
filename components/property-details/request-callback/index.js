import React from "react";
import styles from "../../../styles/propertydetails/requestcall.module.css";
import menu from "../../../assets/images/menu.svg";
import Image from "next/dist/client/image";
import image from "../../../assets/images/imagereview/people.png";
import star from "../../../assets/images/star.svg";

const RequestCall = () => {
  return (
    <div className={`${styles.request_call} p-4 mt-4 `}>
      <div className={`d-flex justify-content-between text-left text-lg-center text-md-center ms-auto`}>
        <div className={`${styles.posted_by} w-100 `}>Posted By</div>
        <button className={`${styles.request_menu} `}>
          <Image src={menu} alt="Picture of the author" width={4} />
        </button>
      </div>
      <div className="row d-flex justify-content-center">
        <div className={`pt-2 col-4 col-md-12 col-lg-12 d-flex  justify-content-center`}>
          <Image
            src={image}
            alt="Picture of the author"
            width={80}
            height={80}
            className={`${styles.agent_image} `}
          />
        </div>

        <div className="d-flex col-8 col-md-12  col-lg-12  justify-content-start justify-content-lg-center justify-content-md-center">
          <div className={`d-flex flex-column mt-1`}>
            <div
              className={`${styles.agent_name} d-flex justify-content-start justify-content-md-center justify-content-lg-center pt-1`}
            >
              Amal Sabu
            </div>
            <div className="d-flex align-items-center justify-content-start justify-content-md-center justify-content-lg-center pt-1">
              <Image
                src={star}
                alt="Picture of the author"
                width={20}
                height={20}
                className={`${styles.agent_image} `}
              />{" "}
              <span className={`ps-2 ${styles.agent_rating}`}>4.7 Ratings</span>{" "}
              <span className={`${styles.rating_number} pt-1`}>{`(236) `}</span>
            </div>
            <div
              className={`${styles.more_properties} d-flex justify-content-center pt-1`}
            >
              2 More properties by this agent
            </div>
            <div
              className={`${styles.agent_number} d-flex justify-content-start justify-content-md-center justify-content-lg-center pt-2`}
            >
              Call : 9876XXXXXX
            </div>
          </div>
        </div>
      </div>
      <button className={`${styles.request_button} w-100 py-2 mt-3 mt-1`}>
        Request Callback
      </button>
      <button className={`${styles.agent_profile} w-100 py-2 mt-3`}>
        View Profile
      </button>
    </div>
  );
};

export default RequestCall;
