import React, { useEffect, useState } from "react";
import MapPicker from "react-google-map-picker";




const DefaultLocation = { lat: 9, lng: 107 };
const DefaultZoom = 15;

const Map = ({ latlng, onChange,isEdit, value }) => {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  useEffect(() => {
    console.log("latlng", latlng);
    if(isEdit){
      setDefaultLocation(value);
      setLocation(value);
    }else{
      const lant= {
        lat: latlng?.geometry?.location?.lat() ?? 11,
        lng: latlng?.geometry?.location?.lng() ?? 11,
      }
      setDefaultLocation(lant);
      setLocation(lant);
    }
  }, [latlng]);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);
  const [show, setShow] = useState(false);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
    // onChange({ lat: lat, lng: lng });
  }
  useEffect(() => {
    let timer = setTimeout(() => setShow(true), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }

  return (
    <div className="map mt-5">
      <div className="row">
        <div className="col-lg-3">
          <div className={`poppins_semibold`}>Map</div>
        </div>
        <div className={` col-lg-9`}>
          <>
            {show ? (

              <MapPicker
                 className="create-map"
                defaultLocation={location}
                zoom={zoom}
                mapTypeId="roadmap"
                onChangeLocation={handleChangeLocation}
                onChangeZoom={handleChangeZoom}
                apiKey="AIzaSyAVDzgCl3C4LxYECq149eAYFA_sNyPmpGU"
                style={{height:"300px"}}
              />
            ) : null}
          </>
        </div>
      </div>
    </div>
  );
};

export default Map;