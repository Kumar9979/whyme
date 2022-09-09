import React, {useState} from "react";
// import Logout from "../../components/modals/edit-profile-modals/Logout";
// import SuccessSave from "../../components/modals/edit-profile-modals/success-saved";
// import ReportAdvertiser from "../../components/modals/property-details/report-advertiser";
// import Shareproperty from "../../components/modals/property-details/share-property";
// import Delete from "../../components/modals/edit-profile-modals/delete-property";
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

      {/* <ScheduleVisit handleClose={handleClose} show={show}/> */}      
      {/* <Activities handleClose={handleClose} show={show}/> */}

      {/* <Delete handleClose={handleClose} show={show}/> */}
      {/* <Shareproperty ies handleClose={handleClose} show={show}/>  */}
      {/* <ReportProperty handleClose={handleClose} show={show}/> */}
      {/* <RequestCallBack handleClose={handleClose} show={show}/> */}
      {/* <ReportAdvertiser handleClose={handleClose} show={show}/> */}
      {/* <SuccessSave handleClose={handleClose} show={show}/> */}
         
          {/* <Logout handleClose={handleClose} show={show} /> */}

    </div>
  );
};

export default Modals;
