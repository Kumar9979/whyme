import React, {useState} from "react";
import { Button } from "react-bootstrap";
import RequestCallBack from "../../components/modals/property-details/request-call";
import ScheduleVisit from "../../components/modals/property-details/schedule-visit";

const Modals = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow =() => setShow(true)
  return (
    <div className="d-flex">
      <button onClick={handleShow} className="btn btn-primary" type="submit">
        Button
      </button>
      {/* <RequestCallBack handleClose={handleClose} show={show}/> */}
      {/* <ScheduleVisit handleClose={handleClose} show={show}/> */}
      

    </div>
  );
};

export default Modals;
