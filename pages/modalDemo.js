import React, { useState } from "react";
import Button from "react-bootstrap/Button";
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

const Hello = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow =() => setShow(true)
  return (
    <>
     <div className="mt_4">
     <Button onClick={handleShow}>modal</Button>
     </div>
      
     <ApartmentDescription handleClose={handleClose} show={show} />
     {/* <ApartmentAreaPriceRent handleClose={handleClose} show={show} /> */}
     {/* <ApartmentAreaPrice handleClose={handleClose} show={show} /> */}
     <ApartmentEditAmenities handleClose={handleClose} show={show} />
     {/* <ApartmentEditProperty handleClose={handleClose} show={show} /> */}
     {/* <ApartmentUpdateMap handleClose={handleClose} show={show} /> */}
     {/* <ApartmentDeletePhoto handleClose={handleClose} show={show} /> */}
      <ApartmentUploadPhoto handleClose={handleClose} show={show} />


      {/* villa */}
 {/* <VillaUploadPhoto handleClose={handleClose} show={show} />  */}
 {/* <VillaDeletePhoto handleClose={handleClose} show={show} />  */}



    </>
  );
};

export default Hello;
