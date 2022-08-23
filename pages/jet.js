import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ApartmentDeletePhoto from "../components/modals/apartmentDeletePhoto";
import ApartmentEditProperty from "../components/modals/apartmentEditProperty";
import ApartmentEditAmenities from "../components/modals/apartmentModals/apartmentEditAmenities";
import ApartmentUpdateMap from "../components/modals/apartmentUpdateMap";

// import ApartmentUploadPhoto from "../components/modals/apartmentUploadPhoto";

const Hello = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow =() => setShow(true)
  return (
    <>
     <div className="mt_md_4">
     <Button onClick={handleShow}>modal</Button>
     </div>
      
     <ApartmentEditAmenities handleClose={handleClose} show={show} />
     {/* <ApartmentEditProperty handleClose={handleClose} show={show} /> */}
     {/* <ApartmentUpdateMap handleClose={handleClose} show={show} /> */}
     {/* <ApartmentDeletePhoto handleClose={handleClose} show={show} /> */}
      {/* <ApartmentUploadPhoto handleClose={handleClose} show={show} /> */}
    </>
  );
};

export default Hello;
