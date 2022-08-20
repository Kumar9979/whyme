import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ApartmentDeletePhoto from "../components/modals/apartmentDeletePhoto";

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
      
     <ApartmentDeletePhoto handleClose={handleClose} show={show} />
      {/* <ApartmentUploadPhoto handleClose={handleClose} show={show} /> */}
    </>
  );
};

export default Hello;
