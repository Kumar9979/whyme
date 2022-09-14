import React from "react";
import styles from "../../../styles/propertydetails/profile/propertyprofile.module.css";
import Profilehead from "../../../components/property-details/propertydetails_profile/Agent-profile/Profilehead";
import PropertyReview from "../../../components/property-details/propertydetails_profile/Agent-profile/ProfileReview";

const Agentprofile = () => {
  return (
    <div className={`${styles.container} pb-lg-3 `}>
      <div className={` mt-lg-5 pt-5   mx-lg-4 px-lg-4 mx-md-4 px-md-2 `}>
        <div>
          <div
            className={`${styles.profile_container} pb-lg-2 mt-lg-5 mx-lg-5 px-lg-4 pt-lg-4  mx-md-2 px-md-2 mx-sm-0 px-sm-0 mx-xs-0 px-xs-0   `}>
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

export default Agentprofile;
