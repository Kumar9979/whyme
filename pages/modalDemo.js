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
<ResidentialLandEditProperty handleClose={handleClose} show={show}/>
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

    </>
  );
};

export default Hello;
