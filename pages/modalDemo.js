import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import OfficeSpacePriceRent from "../components/modals/commercial-property/office-space/officespaceAreapriceRent";
// import OfficespaceAreaPrice from "../components/modals/commercial-property/office-space/officespaceAreaPrice";
// import OfficeSpaceAmenities from "../components/modals/commercial-property/office-space/officespaceEditAmenities";
// import OfficeSpaceProperty from "../components/modals/commercial-property/office-space/officeSpaceProperty";
// import OfficeSpaceDescription from "../components/modals/commercial-property/office-space/officeSpaceDescription";
// import CommercialShopUploadPhoto from "../components/modals/commercial-property/commercial-shop/commercialshopUploadPhoto";
// import CommercialShopDeletePhoto from "../components/modals/commercial-property/commercial-shop/commercialshopDeletePhoto";
// import ApartmentDeletePhoto from "../components/modals/residential-property/apartment/apartmentDeletePhoto";
// import ApartmentAreaPrice from "../components/modals/residential-property/apartment/apartmentAreaPrice";
// import ApartmentAreaPriceRent from "../components/modals/residential-property/apartment/apartmentAreaPriceRent";
// import ApartmentDescription from "../components/modals/residential-property/apartment/apartmentDescription";
// import ApartmentEditAmenities from "../components/modals/residential-property/apartment/apartmentEditAmenities";
// import ApartmentEditProperty from "../components/modals/residential-property/apartment/apartmentEditProperty";
// import ApartmentUpdateMap from "../components/modals/residential-property/apartment/apartmentUpdateMap";
// import ApartmentUploadPhoto from "../components/modals/residential-property/apartment/apartmentUploadPhoto";
// import VillaDeletePhoto from "../components/modals/residential-property/villa-property/villaDeletePhoto";
// import VillaUploadPhoto from "../components/modals/residential-property/villa-property/villaUploadPhoto";
// import OfficeSpaceUploadPhoto from "../components/modals/commercial-property/office-space/officespaceUploadPhoto";
// import OfficespaceDeletePhoto from "../components/modals/commercial-property/office-space/officespaceDeletePhoto";
// import OfficeSpaceUpdateMap from "../components/modals/commercial-property/office-space/officespaceUpdateMap";
// import CommercialShopUpdateMap from "../components/modals/commercial-property/commercial-shop/commercialshopUpdateMap";



// import VillaUpdateMap from "../components/modals/residential-property/villa-property/villaUpdateMap";
// import VillaEditProperty from "../components/modals/residential-property/villa-property/villaEditProperty";
// import VillaEditAmenities from "../components/modals/residential-property/villa-property/villaEditAmenities";
// import VillaAreaPrice from "../components/modals/residential-property/villa-property/villaAreaPrice";
// import VillaAreaPriceRent from "../components/modals/residential-property/villa-property/villaAreaPriceRent";
// import VillaDescription from "../components/modals/residential-property/villa-property/villaDescription";
// import ResidentialLandUploadPhoto from "../components/modals/residential-property/residential-land/residentialLandUploadPhoto"; 
// import ResidentialLandDeletePhoto from "../components/modals/residential-property/residential-land/residentialLandDeletePhoto";
// import ResidentialLandUpdateMap from "../components/modals/residential-property/residential-land/residentialLandUpdateMap";
// import ResidentialLandEditProperty from "../components/modals/residential-property/residential-land/residentialLandEditProperty";
// import ResidentialLandEditAmenities from "../components/modals/residential-property/residential-land/residentialLandEditAmenities";
// import ResidentialLandAreaPrice from "../components/modals/residential-property/residential-land/residentialLandAreaPrice";
// import ResidentialLandDescription from "../components/modals/residential-property/residential-land/residentialLandDescription";
// import CommercialShopFeatures from "../components/modals/commercial-property/commercial-shop/commercialshopFeatures";
// import CommercialShowroomUploadPhoto from "../components/modals/commercial-property/commercial-showroom/commercialShowroomUploadLoadPhoto";
// import CommercialShowroomDeletePhoto from "../components/modals/commercial-property/commercial-showroom/commercialShowroomDeletePhoto";
// import CommercialShowroomEditAmenities from "../components/modals/commercial-property/commercial-showroom/commercialShowroomEditAmenities";
// import CommercialShowroomAreaPrice from "../components/modals/commercial-property/commercial-showroom/commercialShowroomAreaPrice";
// import CommercialShopAmenities from "../components/modals/commercial-property/commercial-shop/commercialshopAmenities";
// import CommercialShopAreaPrice from "../components/modals/commercial-property/commercial-shop/commercialshopAreaPrice";
// import CommercialShopRent from "../components/modals/commercial-property/commercial-shop/commercialshopRent";
// import CommercialShopDescription from "../components/modals/commercial-property/commercial-shop/commercialshopDescription";
// import IndustryBuildingRent from "../components/modals/commercial-property/industrial-building/industrybuildingRent";
// import CommercialShowroomAreaPriceRent from "../components/modals/commercial-property/commercial-showroom/commercialShowroomAreaPriceRent";
// import CommercialShowroomDescription from "../components/modals/commercial-property/commercial-showroom/commercialShowroomDescription";
// import CommercialShowroomEditProperty from "../components/modals/commercial-property/commercial-showroom/commercialshopFeatures";
// import WarehouseUploadPhoto from "../components/modals/commercial-property/warehouse-property/warehouseUploadPhoto";
// import WarehouseDeletePhoto from "../components/modals/commercial-property/warehouse-property/warehouseDeletePhoto";
// import WarehouseUpdateMap from "../components/modals/commercial-property/warehouse-property/warehouseUpdateMap";
// import WarehouseEditProperty from "../components/modals/commercial-property/warehouse-property/warehouseEditProperty";
// import WarehouseEditAmenities from "../components/modals/commercial-property/warehouse-property/warehouseEditAmenities";
// import WarehouseAreaPrice from "../components/modals/commercial-property/warehouse-property/warehouseAreaPrice";
// import WarehouseAreaRent from "../components/modals/commercial-property/warehouse-property/WarehouseAreaRent";
// import WarehouseDescription from "../components/modals/commercial-property/warehouse-property/warehouseDescription";
// import IndusrialShedUploadPhoto from "../components/modals/commercial-property/industrial-shed/industrialShedUploadPhoto";
// import IndustrialShedDeletePhoto from "../components/modals/commercial-property/industrial-shed/industrialShedDeletePhoto";

// import IndustryBuildingUploadPhoto from "../components/modals/commercial-property/industrial-building/industrybuildingUploadPhoto";
// import IndustryBuildingDeletePhoto from "../components/modals/commercial-property/industrial-building/industrybuildingDeletePhoto";
// import IndustryBuildingUpdateMap from "../components/modals/commercial-property/industrial-building/industrybuildingUpdateMap";
// import IndustryBuildingFeatures from "../components/modals/commercial-property/industrial-building/industrybuildingEditFeatures";
// import IndustryBuildingAmenities from "../components/modals/commercial-property/industrial-building/industrybuildingEditAmenities";
// import IndustryBuildingAreaPrice from "../components/modals/commercial-property/industrial-building/industrybuildingAreaPrice";
// import IndustryBuildingDescription from "../components/modals/commercial-property/industrial-building/industrybuildingDescription";
// import CommercialPlotUploadPhoto from "../components/modals/commercial-property/commercial-plot/commercialplotUploadPhoto";
// import CommercialPlotDeletePhoto from "../components/modals/commercial-property/commercial-plot/commercialplotDeletePhoto";
// import CommercialPlotUpdateMap from "../components/modals/commercial-property/commercial-plot/commercialplotUpdateMap";
// import IndustrialShedUpdateMap from "../components/modals/commercial-property/industrial-shed/industrialShedUpdateMap";
// import IndustrialShedEditProperty from "../components/modals/commercial-property/industrial-shed/industrialShedEditProperty";
// import IndustrialShedEditAmenities from "../components/modals/commercial-property/industrial-shed/industrialShedEditAmenities";
// import IndustrialShedAreaPrice from "../components/modals/commercial-property/industrial-shed/industrialShedAreaPrice";
// import IndustrialShedPriceRent from "../components/modals/commercial-property/industrial-shed/industrialShedAreapriceRent";
// import IndustrialShedDescription from "../components/modals/commercial-property/industrial-shed/industrialShedDescription";
// import CommercialPlotFeatures from "../components/modals/commercial-property/commercial-plot/commercialplotFeatures";
// import CommercialPlotAreaPrice from "../components/modals/commercial-property/commercial-plot/commercialPlotAreaPrice";
// import CommercialPlotRent from "../components/modals/commercial-property/commercial-plot/commercialPlotRent";
// import CommercialPlotAmenities from "../components/modals/commercial-property/commercial-plot/commercialplotAmenities";
// import CommercialPlotDescription from "../components/modals/commercial-property/commercial-plot/commercialplotDescription";
// import AgricultureFarmHouseUploadPhoto from "../components/modals/agriculture-property/agriculture-farmhouse/agricultureFarmHouseUploadPhoto";
// import AgricultureFarmHouseDeletePhoto from "../components/modals/agriculture-property/agriculture-farmhouse/agriculturefarmHouseDeletePhoto";
// import AgricultureFarmHouseUpdateMap from "../components/modals/agriculture-property/agriculture-farmhouse/agricultureFarmHouseUpdateMap";
// import AgricultureFarmHouseFeatures from "../components/modals/agriculture-property/agriculture-farmhouse/agricultureFarmHouseFeatures";
// import IndustryPlotUploadPhoto from "../components/modals/commercial-property/industrial-plot/industryPlotUploadPhoto";
// import IndustryPlotUpdateMap from "../components/modals/commercial-property/industrial-plot/industryPlotUpdateMap";
// import IndustryPlotFeatures from "../components/modals/commercial-property/industrial-plot/industryPlotEditFeatures";
// import AgricultureFarmHouseAreaPrice from "../components/modals/agriculture-property/agriculture-farmhouse/agricultureFarmHouseAreaPrice";
// import AgricultureFarmHouseRent from "../components/modals/agriculture-property/agriculture-farmhouse/agricultureFarmHouseRent";
// import AgricultureFarmHouseDescription from "../components/modals/agriculture-property/agriculture-farmhouse/agricultureFarmHouseDescription";
// import AgricultureLandFeatures from "../components/modals/agriculture-property/agriculture-land/agricultureLandFeatures";
// import AgricultureLandUploadPhoto from "../components/modals/agriculture-property/agriculture-land/agricultureLandUploadPhoto";
// import AgricultureLandDeletePhoto from "../components/modals/agriculture-property/agriculture-land/agricultureLandDeletePhoto";
// import AgricultureLandUpdateMap from "../components/modals/agriculture-property/agriculture-land/agricultureLandUpdateMap";
// import AgricultureLandDescription from "../components/modals/agriculture-property/agriculture-land/agricultureLandDescription";
// import AgricultureLandAreaPrice from "../components/modals/agriculture-property/agriculture-land/agricultureLandAreaPrice";
// import AgricultureLandRent from "../components/modals/agriculture-property/agriculture-land/agricultureLandRent";
// import ResidentialHouseAreaPrice from "../components/modals/residential-property/residential-house/residentialHouseAreaPrice";
// import ResidentialHouseDeletePhoto from "../components/modals/residential-property/residential-house/residentialHouseDeletePhoto";
// import ResidentialHouseUpdateMap from "../components/modals/residential-property/residential-house/residentialHouseUpdateMap";
// import ResidentialHouseAreaPriceRent from "../components/modals/residential-property/residential-house/residentialHouseAreaPriceRent";
// import ResidentialHouseEditAmenities from "../components/modals/residential-property/residential-house/residentialHouseEditAmenities";
// import ResidentialHouseDescription from "../components/modals/residential-property/residential-house/residentialHouseDescription";
// import ResidentialHouseEditProperty from "../components/modals/residential-property/residential-house/residentialHouseEditProperty";

const Hello = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="mt_4">
        <Button onClick={handleShow}>modal</Button>
      </div>

      {/* <ApartmentDescription handleClose={handleClose} show={show} /> */}
      {/* <ApartmentAreaPriceRent handleClose={handleClose} show={show} /> */}
      {/* <ApartmentAreaPrice handleClose={handleClose} show={show} /> */}
      {/* <ApartmentEditAmenities handleClose={handleClose} show={show} /> */}
      {/* <ApartmentEditProperty handleClose={handleClose} show={show} /> */}
      {/* <ApartmentUpdateMap handleClose={handleClose} show={show} /> */}
      {/* <ApartmentDeletePhoto handleClose={handleClose} show={show} /> */}
      {/* <ApartmentUploadPhoto handleClose={handleClose} show={show} /> */}

      {/* residential House*/}
      {/* <ResidentialHouseAreaPrice handleClose={handleClose} show={show}/>
      <ResidentialHouseDeletePhoto handleClose={handleClose} show={show}/>
      <ResidentialHouseUpdateMap handleClose={handleClose} show={show}/>
      <ResidentialHouseAreaPriceRent handleClose={handleClose} show={show}/>
      <ResidentialHouseEditAmenities handleClose={handleClose} show={show} />
      <ResidentialHouseEditProperty handleClose={handleClose} show={show} />
      <ResidentialHouseDescription handleClose={handleClose} show={show} />
      <ResidentialHouseEditAmenities handleClose={handleClose} show={show} /> */}

      {/* Residentail Land */}
      {/* <ResidentialLandUploadPhoto handleClose={handleClose} show={show}/> */}
      {/* <ResidentialLandDeletePhoto handleClose={handleClose} show={show}/> */}
      {/* <ResidentialLandUpdateMap handleClose={handleClose} show={show}/> */}
      {/* <ResidentialLandEditProperty handleClose={handleClose} show={show}/> */}
      {/* <ResidentialLandEditAmenities handleClose={handleClose} show={show} /> */}
      {/* <ResidentialLandAreaPrice handleClose={handleClose} show={show} /> */}
      {/* <ResidentialLandDescription handleClose={handleClose} show={show} />  */}

      {/* villa */}
      {/* <VillaUploadPhoto handleClose={handleClose} show={show} />  */}
      {/* <VillaDeletePhoto handleClose={handleClose} show={show} />  */}
      {/* <VillaUpdateMap handleClose={handleClose} show={show}/> */}
      {/* <VillaEditProperty handleClose={handleClose} show={show}/> */}
      {/* <VillaEditAmenities handleClose={handleClose} show={show} /> */}
      {/* <VillaAreaPrice handleClose={handleClose} show={show} /> */}
      {/* <VillaAreaPriceRent handleClose={handleClose} show={show} /> */}
      {/* <VillaDescription handleClose={handleClose} show={show} /> */}

      {/* officespace */}

      {/* <OfficeSpaceUploadPhoto handleClose={handleClose} show={show}/> */}
      {/* <OfficespaceDeletePhoto handleClose={handleClose} show={show}/> */}
      {/* <OfficeSpaceUpdateMap handleClose={handleClose} show={show}/> */}
      {/* <OfficeSpaceProperty handleClose={handleClose} show={show}/> */}
      {/* <OfficeSpaceAmenities handleClose={handleClose} show={show}/> */}
      {/* <OfficespaceAreaPrice handleClose={handleClose} show={show}/> */}
      {/* <OfficeSpacePriceRent handleClose={handleClose} show={show}/> */}
      {/* <OfficeSpaceDescription handleClose={handleClose} show={show}/> */}

      {/* commercial shop */}

      {/* <CommercialShopUploadPhoto handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopDeletePhoto handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopUpdateMap handleClose={handleClose} show={show}/>  */}
      {/* <CommercialShopFeatures handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopAmenities handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopAreaPrice handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopRent handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopDescription handleClose={handleClose} show={show}/> */}

      {/* commercial Showroom */}
      {/* <CommercialShowroomUploadPhoto handleClose={handleClose} show={show} /> */}
      {/* <CommercialShowroomDeletePhoto handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopUpdateMap handleClose={handleClose} show={show}/> */}
      {/* <CommercialShowroomEditAmenities handleClose={handleClose} show={show} /> */}
      {/* <CommercialShowroomAreaPrice handleClose={handleClose} show={show} /> */}
      {/* <CommercialShowroomAreaPriceRent handleClose={handleClose} show={show} /> */}
      {/* <CommercialShowroomDescription handleClose={handleClose} show={show}/> */}
      {/* <CommercialShowroomEditProperty handleClose={handleClose} show={show}/> */}

      {/* industrial building */}

      {/* <IndustryBuildingRent handleClose={handleClose} show={show} />  */}

      {/* warehouse  */}
      {/* <WarehouseUploadPhoto handleClose={handleClose} show={show} /> */}
      {/* <WarehouseDeletePhoto handleClose={handleClose} show={show}/> */}
      {/* <WarehouseUpdateMap handleClose={handleClose} show={show}/> */}
      {/* <WarehouseEditProperty handleClose={handleClose} show={show} /> */}
      {/* <WarehouseEditAmenities handleClose={handleClose} show={show} /> */}
      {/* <WarehouseAreaPrice handleClose={handleClose} show={show} /> */}
      {/* <WarehouseAreaRent handleClose={handleClose} show={show} />  */}
      {/* <WarehouseDescription handleClose={handleClose} show={show} />  */}



{/* commercial Showroom */}
{/* <CommercialShowroomUploadPhoto handleClose={handleClose} show={show} /> */}
{/* <CommercialShowroomDeletePhoto handleClose={handleClose} show={show}/> */}
{/* <CommercialShopUpdateMap handleClose={handleClose} show={show}/> */}
{/* <CommercialShowroomEditAmenities handleClose={handleClose} show={show} /> */}
{/* <CommercialShowroomAreaPrice handleClose={handleClose} show={show} /> */}
{/* <CommercialShowroomAreaPriceRent handleClose={handleClose} show={show} /> */}
{/* <CommercialShowroomDescription handleClose={handleClose} show={show}/> */}
{/* <CommercialShowroomEditProperty handleClose={handleClose} show={show}/> */}

{/* industrial building */}

{/* <IndustryBuildingRent handleClose={handleClose} show={show} />  */}



{/* warehouse  */}
{/* <WarehouseUploadPhoto handleClose={handleClose} show={show} /> */}
{/* <WarehouseDeletePhoto handleClose={handleClose} show={show}/> */}
{/* <WarehouseUpdateMap handleClose={handleClose} show={show}/> */}
{/* <WarehouseEditProperty handleClose={handleClose} show={show} /> */}
{/* <WarehouseEditAmenities handleClose={handleClose} show={show} /> */}
{/* <WarehouseAreaPrice handleClose={handleClose} show={show} /> */}
{/* <WarehouseAreaRent handleClose={handleClose} show={show} />  */}
{/* <WarehouseDescription handleClose={handleClose} show={show} />  */}

{/* Indusrial Shed  */}
{/* <IndusrialShedUploadPhoto handleClose={handleClose} show={show} /> */}
{/* <IndustrialShedDeletePhoto handleClose={handleClose} show={show}/> */}
{/* <IndustrialShedUpdateMap handleClose={handleClose} show={show}/> */}
{/* <IndustrialShedEditProperty handleClose={handleClose} show={show}/> */}
{/* <IndustrialShedEditAmenities handleClose={handleClose} show={show} /> */}
{/* <IndustrialShedAreaPrice handleClose={handleClose} show={show} /> */}
{/* <IndustrialShedPriceRent handleClose={handleClose} show={show}/> */}
{/* <IndustrialShedDescription handleClose={handleClose} show={show}/> */}

      {/* Indusrial Shed  */}
      {/* <IndusrialShedUploadPhoto handleClose={handleClose} show={show} /> */}
      {/* <IndustrialShedDeletePhoto handleClose={handleClose} show={show}/> */}
      {/* <VillaUploadPhoto handleClose={handleClose} show={show} />  */}
      {/* <VillaDeletePhoto handleClose={handleClose} show={show} />  */}
      {/* <VillaUpdateMap handleClose={handleClose} show={show}/> */}
      {/* <VillaEditProperty handleClose={handleClose} show={show}/> */}
      {/* <VillaEditAmenities handleClose={handleClose} show={show} /> */}
      {/* <VillaAreaPrice handleClose={handleClose} show={show} /> */}
      {/* <VillaAreaPriceRent handleClose={handleClose} show={show} /> */}
      {/* <VillaDescription handleClose={handleClose} show={show} /> */}

      {/* officespace */}

      {/* <OfficeSpaceUploadPhoto handleClose={handleClose} show={show}/> */}
      {/* <OfficespaceDeletePhoto handleClose={handleClose} show={show}/> */}
      {/* <OfficeSpaceUpdateMap handleClose={handleClose} show={show}/> */}
      {/* <OfficeSpaceProperty handleClose={handleClose} show={show}/> */}
      {/* <OfficeSpaceAmenities handleClose={handleClose} show={show}/> */}
      {/* <OfficespaceAreaPrice handleClose={handleClose} show={show}/> */}
      {/* <OfficeSpacePriceRent handleClose={handleClose} show={show}/> */}
      {/* <OfficeSpaceDescription handleClose={handleClose} show={show}/> */}

      {/* commercial shop */}

      {/* <CommercialShopUploadPhoto handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopDeletePhoto handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopUpdateMap handleClose={handleClose} show={show}/>  */}
      {/* <CommercialShopFeatures handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopAmenities handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopAreaPrice handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopRent handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopDescription handleClose={handleClose} show={show}/> */}

      {/* commercial Showroom */}
      {/* <CommercialShowroomUploadPhoto handleClose={handleClose} show={show} /> */}
      {/* <CommercialShowroomDeletePhoto handleClose={handleClose} show={show}/> */}
      {/* <CommercialShopUpdateMap handleClose={handleClose} show={show}/> */}
      {/* <CommercialShowroomEditAmenities handleClose={handleClose} show={show} /> */}
      {/* <CommercialShowroomAreaPrice handleClose={handleClose} show={show} /> */}
      {/* <CommercialShowroomAreaPriceRent handleClose={handleClose} show={show} /> */}
      {/* <CommercialShowroomDescription handleClose={handleClose} show={show}/> */}
      {/* <CommercialShowroomEditProperty handleClose={handleClose} show={show}/> */}

   

      {/* industrial building */}

      {/* <IndustryBuildingRent handleClose={handleClose} show={show} />  */}
      {/* <IndustryBuildingUploadPhoto handleClose={handleClose} show={show} /> */}
      {/* <IndustryBuildingDeletePhoto handleClose={handleClose} show={show} /> */}
      {/* <IndustryBuildingUpdateMap handleClose={handleClose} show={show} /> */}
      {/* <IndustryBuildingFeatures handleClose={handleClose} show={show} />  */}
      {/* <IndustryBuildingAmenities handleClose={handleClose} show={show} /> */}
      {/* <IndustryBuildingAreaPrice handleClose={handleClose} show={show} />  */}
      {/* <IndustryBuildingDescription handleClose={handleClose} show={show} /> */}

     {/* Industrial Plot  */}
     {/* <IndustryPlotUploadPhoto handleClose={handleClose} show={show} />  */}
     {/* <IndustryBuildingDeletePhoto handleClose={handleClose} show={show} /> */}
     {/* <IndustryPlotUpdateMap handleClose={handleClose} show={show} /> */}
     {/* <IndustryPlotFeatures handleClose={handleClose} show={show} /> */}

      {/* commercial plot */}

      {/* <CommercialPlotUploadPhoto handleClose={handleClose} show={show} /> */}
      {/* <CommercialPlotDeletePhoto handleClose={handleClose} show={show} /> */}
      {/* <CommercialPlotUpdateMap handleClose={handleClose} show={show} /> */}
      {/* <CommercialPlotFeatures handleClose={handleClose} show={show} /> */}
      {/* <CommercialPlotAreaPrice handleClose={handleClose} show={show} /> */}
      {/* <CommercialPlotRent handleClose={handleClose} show={show} /> */}
      {/* <CommercialPlotAmenities  handleClose={handleClose} show={show} /> */}
      {/* <CommercialPlotDescription handleClose={handleClose} show={show} /> */}

      {/* AgricultureFarmHouse */}

      {/* <AgricultureFarmHouseUploadPhoto handleClose={handleClose} show={show} />  */}
      {/* <AgricultureFarmHouseDeletePhoto  handleClose={handleClose} show={show} /> */}
      {/* <AgricultureFarmHouseUpdateMap handleClose={handleClose} show={show} /> */}
      {/* <AgricultureFarmHouseFeatures  handleClose={handleClose} show={show} /> */}
{/* <AgricultureFarmHouseAreaPrice  handleClose={handleClose} show={show} /> */}
{/* <AgricultureFarmHouseRent  handleClose={handleClose} show={show} /> */}
{/* <AgricultureFarmHouseDescription handleClose={handleClose} show={show} /> */}

{/* AgricultureLand */}
{/* <AgricultureLandFeatures handleClose={handleClose} show={show} /> */}
{/* <AgricultureLandUploadPhoto handleClose={handleClose} show={show} /> */}
{/* <AgricultureLandDeletePhoto handleClose={handleClose} show={show} /> */}
{/* <AgricultureLandUpdateMap handleClose={handleClose} show={show} /> */}
{/* <AgricultureLandDescription handleClose={handleClose} show={show} /> */}
{/* <AgricultureLandAreaPrice handleClose={handleClose} show={show} /> */}
{/* <AgricultureLandRent handleClose={handleClose} show={show} /> */}

      {/* <ResidentialEditProperty handleClose={handleClose} show={show}/> */}
    </>
  );
};

export default Hello;
