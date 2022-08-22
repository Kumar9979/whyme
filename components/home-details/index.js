import React from "react";
import styles from "../../styles/homedetails.module.css";

const HomeDetails = () => {
  return (
    <div className={`${styles.HomeDetails} mt-lg-2 pt-2 pb-1`}>
      <div className="row d-flex justify-content-center">
        <div className="col-5">
          <p className={`${styles.HomeDetails_apartment} mb-0`}>
            3BHK Apartment{" "}
              in Vijayanagar, Mysuru
            
          </p>
          <span className={`${styles.details_move} p-1`}>Ready to move</span>
        </div>
        <div className="col-5 ">
          <p className={`${styles.HomeDetails_rupees} mb-0 d-flex justify-content-end`}>
          ₹ 70Lac
          </p>
          <span className={`${styles.details_sqft} d-flex justify-content-end`}>₹ 2920 per Sqft</span>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
