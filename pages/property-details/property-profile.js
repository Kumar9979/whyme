import React from "react";
import styles from "../../styles/propertydetails/propertyprofile.module.css";
// import Image from "next/image";
// 
// import star from "../../assets/images/star.svg";
// import caution from "../../assets/images/property-details/caution.svg";
// import share from "../../assets/images/property-details/share.svg";
import Profilehead from "../../components/property-details/propertydetails_profile/Profilehead";
import PropertyReview from "../../components/property-details/propertydetails_profile/PropertyReview";

const Propertyprofile = () => {
  return (
    <div className={`${styles.container} mb-5 `}>
      <div className={` mt-lg-5 pt-5  mx-lg-4 px-lg-4 mx-md-4 px-md-2 `}>
        <div>
          <div
            className={`${styles.profile_container} mt-lg-5 mx-lg-5 px-lg-4 pt-lg-4  mx-md-2 px-md-2 mx-sm-0 px-sm-0 mx-xs-0 px-xs-0   `}>
            <Profilehead/>
           

              <div className={`${styles.property_content}`}>
              <div className="mt-5 pt-5">
              <div className="pt-5"> cards</div>
              
               </div>  
               <div className="mt-5 pt-5">
              <div className="pt-5"> <PropertyReview/></div>
              
               </div> 
               </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Propertyprofile;
