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


const Hello = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow =() => setShow(true)
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


      {/* villa */}
 {/* <VillaUploadPhoto handleClose={handleClose} show={show} />  */}
 {/* <VillaDeletePhoto handleClose={handleClose} show={show} />  */}

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



    </>
  );
};

export default Hello;
