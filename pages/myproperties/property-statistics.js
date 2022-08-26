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
      
        <ApartmentCard />
        {/* <CardsViewsTotalCallback />
        <RequestCallback/> */}
     
    </ProfileLayout>
  );
};

export default PropertyStatics;
