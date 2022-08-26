import React, { useEffect, useState } from "react";
import { usePosition } from "../../pages/post-property/property-details/usePosition";
import styles from "../../styles/propertydetails/propertylocation.module.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import PlacesAutocomplete from "../../pages/post-property/property-details/placesAutocomplete";
import Geocode from "react-geocode";

const PropertyLocation = () => {
  const libraries = ["places"];
  const { latitude: lat, longitude: lng, error } = usePosition();
  const [currentPage, setCurrentPage] = useState("property-details");
const windowDoc = typeof window!=="undefined" && window
  const [zoom, setZoom] = useState(10);
  const [markedAddress, setMarkedAddress] = useState("");

  const [selected, setSelected] = useState();
  const [map, setMap] = useState(null);
  const [markerStat, setmarkerStat] = useState(false);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAVDzgCl3C4LxYECq149eAYFA_sNyPmpGU",
    libraries,
  });
  function markerSetOn() {
    setmarkerStat(true);
  }
console.log(selected)
  Geocode.setApiKey("AIzaSyAVDzgCl3C4LxYECq149eAYFA_sNyPmpGU");

  function markerChange() {
    Geocode.fromLatLng(selected.lat, selected.lng).then(
      (response) => {
        setMarkedAddress(response.results[0].formatted_address);
        console.log(markedAddress);
      },

      (error) => {
        console.error(error);
      }
    );
  }

  useEffect(() => {
    setSelected({ lat, lng });
    if (lat !== undefined) {
      const timer = setTimeout(() => {
        markerSetOn();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [lat, lng]);

  return (
    <div className={`mt-3 ${styles.property_location} p-4`}>
      <div className={`${styles.location_text}`}>Location</div>
      <hr className={`${styles.horizontal_line}`}></hr>
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className={`${styles.location_heading}`}>Location</div>
          <div className={`${styles.location_address}`}>
            2nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd, Mysuru,
            Karnataka 570017
          </div>
          <div>
            <i className={`${styles.location_icon} ri-map-pin-2-fill mt-1`}></i>
            <span>
              <button className={`${styles.view_map}`}>View on map</button>
            </span>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          {isLoaded ? (
            <>
              <div className="mt-3">
                <GoogleMap
                id="map" 
                 onGoogleApiLoaded={({map, maps}) => console.log(map, maps,"lsdnhfioubn")}
                  zoom={16}
                  center={selected}
                  mapContainerClassName={`${styles.map_container}`}
                  onLoad={(map) => {
                    setMap(map);
                  }}
                >
                  {markerStat && (
                    <Marker
                      draggable={false}
                      onDragEnd={(e) => {
                        markerChange();
                        setSelected({
                          lat: e.latLng.lat(),
                          lng: e.latLng.lng(),
                        });
                      }}
                      position={selected}
                    />
                  )}
                </GoogleMap>
              </div>
            </>
          ) : (
            <p>Map Loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyLocation;
