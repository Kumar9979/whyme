import React from "react";
import EditAgiculture from "../../../components/edit-property/edit-agriculture/agriculture";
import EditCommercial from "../../../components/edit-property/edit-commercial/commercial";
import EditApartmentFlat from "../../../components/edit-property/edit-resedential/apartment-flat";

const ApartmentFlatPage = () => {
  return (
    <>
      <EditApartmentFlat data={1} propertyType="Villa in Vijayanagar, Mysuru"/>
      {/* <EditCommercial /> */}
      {/* <EditAgiculture/> */}
    </>
  );
};

export default ApartmentFlatPage;
