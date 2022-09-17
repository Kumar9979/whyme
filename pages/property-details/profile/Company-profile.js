import React from "react";
import styles from "../../../styles/propertydetails/profile/propertyprofile.module.css";
import CompanyCard from "../../../components/cards/profile/companyCard"
import PropertyReview from "../../../components/property-details/propertydetails_profile/Agent-profile/ProfileReview";
import Profilehead from "../../../components/property-details/propertydetails_profile/Agent-profile/profile-header/ProfileheadContainer";


const Companyprofile = () => {
  return (
    <div><div className={`${styles.container} pb-lg-3 `}>
    <div className={` mt-lg-5 pt-5   mx-lg-4 px-lg-4 mx-md-4 px-md-2 `}>
      <div>
        <div className={`${styles.profile_container} pb-lg-2  mt-lg-5 mx-lg-5 px-lg-4 pt-lg-4  mx-md-2 px-md-2 mx-sm-0 px-sm-0 mx-xs-0 px-xs-0   `}>
          <Profilehead/>
         

            <div className={`${styles.property_content} mt-5 pt-2`}>
            <div className="mt-5 pt-5 mx-md-4">
            <div className="pt-3 mt-5 mx-4 mx-sm-4 mx-md-4"> <CompanyCard /></div>
            
             </div>  
             <div className="mt-5">
            <div className="ms-xxl-5 ms-xl-5 ms-lg-5 ms-md-5 ms-sm-4 ms-4"> <PropertyReview/></div>
            
             </div> 
             </div>
         </div>
      </div>
    </div>
  </div></div>
  )
}

export default Companyprofile