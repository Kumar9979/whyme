import React from "react";
import EditAgiculture from "../../../components/edit-property/edit-agriculture/agriculture";
import EditCommercial from "../../../components/edit-property/edit-commercial/commercial";
import EditApartmentFlat from "../../../components/edit-property/edit-resedential/apartment-flat";

const ApartmentFlatPage = () => {
  return (
    <>
      <EditAgiculture data={1} propertyType="Agricultural Land in Vijayanagar, Mysuru"/>
    </>
  );
};

export default ApartmentFlatPage;
