import React, { useRef, useState, useEffect, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import PlacesAutocomplete from "../../../pages/post-property/property-details/placesAutocomplete";
import { usePosition } from "../../../pages/post-property/property-details/usePosition";
import Geocode from "react-geocode";
import styles from "../../../styles/postProperty/postpropertylayout.module.css";
const libraries = ["places"];
const LocationAndSearch = () => {
  const { latitude: lat, longitude: lng, error } = usePosition();
  const [markedAddress, setMarkedAddress] = useState("");
  const [selected, setSelected] = useState();
  const [map, setMap] = useState(null);
  const [markerStat, setmarkerStat] = useState(false);
  useEffect(() => {
    setSelected({ lat, lng });
    if (lat !== undefined) {
      const timer = setTimeout(() => {
        markerSetOn();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [lat, lng]);
  function markerSetOn() {
    setmarkerStat(true);
  }
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAVDzgCl3C4LxYECq149eAYFA_sNyPmpGU",
    libraries,
  });

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
  return (
    <>
      {isLoaded ? (
        <>
          <div>
            <PlacesAutocomplete
              markerSetOn={markerSetOn}
              markedAddress={markedAddress}
              setSelected={setSelected}
            />
          </div>
          <div className="mt-3">
            <GoogleMap
              zoom={16}
              center={selected}
              mapContainerClassName={`${styles.map_container}`}
              onLoad={(map) => {
                setMap(map);
                // formik.setFieldValue("Map", selected);
              }}
            >
              {markerStat && (
                <Marker
                  draggable={true}
                  onDragEnd={(e) => {
                    markerChange();
                    setSelected({
                      lat: e.latLng.lat(),
                      lng: e.latLng.lng(),
                    });
                    // formik.setFieldValue("Map", selected);
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
    </>
  );
};

export default LocationAndSearch;
