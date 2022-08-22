import React, {useState} from "react";
import { Button } from "react-bootstrap";
import RequestCallBack from "../../components/modals/property-details/request_call";

const Modals = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow =() => setShow(true)
  return (
    <div className="d-flex justify-content-between">
      <button onClick={handleShow} className="btn btn-primary" type="submit">
        Button
      </button>
      <RequestCallBack handleClose={handleClose} show={show}/>
    </div>
  );
};

export default Modals;
