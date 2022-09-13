import React from "react";
import EditAgiculture from "../../../components/edit-property/edit-agriculture/agriculture";
import EditCommercial from "../../../components/edit-property/edit-commercial/commercial";
import EditApartmentFlat from "../../../components/edit-property/edit-resedential/apartment-flat";

const ApartmentFlatPage = () => {
  return (
    <>
      <EditCommercial data={5} propertyType="2BHK Industrial Shed in Vijaynagar Mys..."/>
      {/* <EditAgiculture/> */}
    </>
  );
};

export default ApartmentFlatPage;