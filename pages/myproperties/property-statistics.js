import React from "react";
import ApartmentCard from "../../components/myproperties/apartment-card";
import CardsViewsTotalCallback from "../../components/myproperties/cards-views-total-callback";
import ProfileLayout from "../../components/sidebarLayout/Sidebar";
import styles from "../../styles/myproperties/propertyStatistics.module.css";
import backIcon from "../../assets/icons/back-icon.svg";
import Image from "next/image";
import RequestCallback from "../../components/myproperties/request-callback";

const PropertyStatics = () => {
  return (
    <ProfileLayout>
      <div className={`${styles.background_card}`}>
        <div className={`${styles.back_icon} ps-2 ps-lg-0`}>
          <span>
            {" "}
            <Image src={backIcon} />
            <span className={`${styles.back_text} ms-2`}>Back</span>{" "}
          </span>
        </div>
        <div className={`${styles.property_heading} ps-2 ps-lg-0`}>
          Property Statistics
        </div>
        <hr className={`ms-lg-5`} />
        <ApartmentCard />
        <CardsViewsTotalCallback />
        <RequestCallback/>
      </div>
    </ProfileLayout>
  );
};

export default PropertyStatics;
