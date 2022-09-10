import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OfficeSpacePriceRent from "../components/modals/commercial-property/office-space/officespaceAreapriceRent";
import OfficespaceAreaPrice from "../components/modals/commercial-property/office-space/officespaceAreaPrice";
import OfficeSpaceAmenities from "../components/modals/commercial-property/office-space/officespaceEditAmenities";
import OfficeSpaceProperty from "../components/modals/commercial-property/office-space/officeSpaceProperty";
import OfficeSpaceDescription from "../components/modals/commercial-property/office-space/officeSpaceDescription";
import CommercialShopUploadPhoto from "../components/modals/commercial-property/commercial-shop/commercialshopUploadPhoto";
import CommercialShopDeletePhoto from "../components/modals/commercial-property/commercial-shop/commercialshopDeletePhoto";
import ApartmentDeletePhoto from "../components/modals/apartmentModals/apartmentDeletePhoto";

import ApartmentAreaPrice from "../components/modals/apartmentModals/apartmentAreaPrice";
import ApartmentAreaPriceRent from "../components/modals/apartmentModals/apartmentAreaPriceRent";
import ApartmentDescription from "../components/modals/apartmentModals/apartmentDescription";
import ApartmentEditAmenities from "../components/modals/apartmentModals/apartmentEditAmenities";
import ApartmentEditProperty from "../components/modals/apartmentModals/apartmentEditProperty";
import ApartmentUpdateMap from "../components/modals/apartmentModals/apartmentUpdateMap";

import ApartmentUploadPhoto from "../components/modals/apartmentModals/apartmentUploadPhoto";
import VillaDeletePhoto from "../components/modals/villa-property/villaDeletePhoto";
import VillaUploadPhoto from "../components/modals/villa-property/villaUploadPhoto";
import OfficeSpaceUploadPhoto from "../components/modals/commercial-property/office-space/officespaceUploadPhoto";

import OfficespaceDeletePhoto from "../components/modals/commercial-property/office-space/officespaceDeletePhoto";
import OfficeSpaceUpdateMap from "../components/modals/commercial-property/office-space/officespaceUpdateMap";
import CommercialShopUpdateMap from "../components/modals/commercial-property/commercial-shop/commercialshopUpdateMap";

import ResidentialEditProperty from "../components/modals/residential-house-property/residentialEditProperty";
import ResidentialEditAmenities from "../components/modals/residential-house-property/residentialEditAmenities";
import ResidentialAreaPrice from "../components/modals/residential-house-property/residentialAreaPrice";
import ResidentialAreaPriceRent from "../components/modals/residential-house-property/residentialAreaPriceRent";
import ResidentialDescription from "../components/modals/residential-house-property/residentialDescription";
import VillaUpdateMap from "../components/modals/villa-property/villaUpdateMap";
import VillaEditProperty from "../components/modals/villa-property/villaEditProperty";
import VillaEditAmenities from "../components/modals/villa-property/villaEditAmenities";
import VillaAreaPrice from "../components/modals/villa-property/villaAreaPrice";
import VillaAreaPriceRent from "../components/modals/villa-property/villaAreaPriceRent";
import VillaDescription from "../components/modals/villa-property/villaDescription";
import ResidentialLandUploadPhoto from "../components/modals/residential-land-property/residentialLandUploadPhoto";
import ResidentialLandDeletePhoto from "../components/modals/residential-land-property/residentialLandDeletePhoto";
import ResidentialLandUpdateMap from "../components/modals/residential-land-property/residentialLandUpdateMap";
import ResidentialLandEditProperty from "../components/modals/residential-land-property/residentialLandEditProperty";
import ResidentialLandEditAmenities from "../components/modals/residential-land-property/residentialLandEditAmenities";
import ResidentialLandAreaPrice from "../components/modals/residential-land-property/residentialLandAreaPrice";
import ResidentialLandDescription from "../components/modals/residential-land-property/residentialLandDescription";
import CommercialShopFeatures from "../components/modals/commercial-property/commercial-shop/commercialshopFeatures";
import CommercialShowroomUploadPhoto from "../components/modals/commercial-property/commercial-showroom/commercialShowroomUploadLoadPhoto";
import CommercialShowroomDeletePhoto from "../components/modals/commercial-property/commercial-showroom/commercialShowroomDeletePhoto";
import CommercialShowroomEditAmenities from "../components/modals/commercial-property/commercial-showroom/commercialShowroomEditAmenities";
import CommercialShowroomAreaPrice from "../components/modals/commercial-property/commercial-showroom/commercialShowroomAreaPrice";
import CommercialShopAmenities from "../components/modals/commercial-property/commercial-shop/commercialshopAmenities";
import CommercialShopAreaPrice from "../components/modals/commercial-property/commercial-shop/commercialshopAreaPrice";
import CommercialShopRent from "../components/modals/commercial-property/commercial-shop/commercialshopRent";
import CommercialShopDescription from "../components/modals/commercial-property/commercial-shop/commercialshopDescription";
import IndustryBuildingRent from "../components/modals/commercial-property/industrial-building/industrybuildingRent";
import CommercialShowroomAreaPriceRent from "../components/modals/commercial-property/commercial-showroom/commercialShowroomAreaPriceRent";
import CommercialShowroomDescription from "../components/modals/commercial-property/commercial-showroom/commercialShowroomDescription";
import CommercialShowroomEditProperty from "../components/modals/commercial-property/commercial-showroom/commercialshopFeatures";
import WarehouseUploadPhoto from "../components/modals/warehouse-property/warehouseUploadPhoto";
import WarehouseDeletePhoto from "../components/modals/warehouse-property/warehouseDeletePhoto";
import WarehouseUpdateMap from "../components/modals/warehouse-property/warehouseUpdateMap";
import WarehouseEditProperty from "../components/modals/warehouse-property/warehouseEditProperty";
import IndustryBuildingUploadPhoto from "../components/modals/commercial-property/industrial-building/industrybuildingUploadPhoto";
import IndustryBuildingDeletePhoto from "../components/modals/commercial-property/industrial-building/industrybuildingDeletePhoto";
import IndustryBuildingUpdateMap from "../components/modals/commercial-property/industrial-building/industrybuildingUpdateMap";
import IndustryBuildingFeatures from "../components/modals/commercial-property/industrial-building/industrybuildingEditFeatures";
import IndustryBuildingAmenities from "../components/modals/commercial-property/industrial-building/industrybuildingEditAmenities";
import IndustryBuildingAreaPrice from "../components/modals/commercial-property/industrial-building/industrybuildingAreaPrice";
import IndustryBuildingDescription from "../components/modals/commercial-property/industrial-building/industrybuildingDescription";

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
      {/* <ResidentialUploadPhoto handleClose={handleClose} show={show}/> */}
      {/* <ResidentialDeletePhoto handleClose={handleClose} show={show}/> */}
      {/* <ResidentialUpdateMap handleClose={handleClose} show={show}/> */}
      {/* <ResidentialEditProperty handleClose={handleClose} show={show}/> */}
      {/* <ResidentialEditAmenities handleClose={handleClose} show={show} /> */}
      {/* <ResidentialAreaPrice handleClose={handleClose} show={show} /> */}
      {/* <ResidentialAreaPriceRent handleClose={handleClose} show={show} /> */}
      {/* <ResidentialDescription handleClose={handleClose} show={show} /> */}

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

      {/* warehouse  */}
      {/* <WarehouseUploadPhoto handleClose={handleClose} show={show} /> */}
      {/* <WarehouseDeletePhoto handleClose={handleClose} show={show}/> */}
      {/* <WarehouseUpdateMap handleClose={handleClose} show={show}/> */}
      {/* <WarehouseEditProperty handleClose={handleClose} show={show} /> */}

      {/* industrial building */}

      {/* <IndustryBuildingRent handleClose={handleClose} show={show} />  */}
      {/* <IndustryBuildingUploadPhoto handleClose={handleClose} show={show} /> */}
      {/* <IndustryBuildingDeletePhoto handleClose={handleClose} show={show} /> */}
      {/* <IndustryBuildingUpdateMap handleClose={handleClose} show={show} /> */}
      {/* <IndustryBuildingFeatures handleClose={handleClose} show={show} />  */}
      {/* <IndustryBuildingAmenities handleClose={handleClose} show={show} /> */}
      {/* <IndustryBuildingAreaPrice handleClose={handleClose} show={show} />  */}
      <IndustryBuildingDescription handleClose={handleClose} show={show} />
    </>
  );
};

export default Hello;
