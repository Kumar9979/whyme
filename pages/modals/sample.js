import React, {useState} from "react";
import Shareproperty from "../../components/modals/property-details/share-property";
// import Sample from "../../components/modals/edit-profile-modals/sample";
// import SaveChanges from "../../components/modals/edit-profile-modals/save-changes";
// import Activities from "../../components/modals/property-details/activities";
// import ReportProperty from "../../components/modals/property-details/report-property";
// import RequestCallBack from "../../components/modals/property-details/request-call";
// import ScheduleVisit from "../../components/modals/property-details/schedule-visit";

const Modals = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow =() => setShow(true)
  return (
    <div className="d-flex mt-5 pt-5">
      <button onClick={handleShow} className="btn btn-primary" type="submit">
        Button
      </button>
      {/* <RequestCallBack handleClose={handleClose} show={show}/> */}
      {/* <ScheduleVisit handleClose={handleClose} show={show}/> */}
      {/* <ReportProperty handleClose={handleClose} show={show}/> */}
      {/* <Activities handleClose={handleClose} show={show}/> */}
      {/* <Sample handleClose={handleClose} show={show}/> */}
      <Shareproperty ies handleClose={handleClose} show={show}/> 
     


    </div>
  );
};

export default Modals;
