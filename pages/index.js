import { React, useState } from "react";
import homeImage from "../assets/homePage.png";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import AutoCityLoad from "../components/profile/profile-pages/auto-city";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Location from "../components/location";
import LocationIcon from "../assets/icons/locationIcon";

const Homescreen = () => {
  const libraries = ["places"];
  const [markerStat, setmarkerStat] = useState(false);
  const [map, setMap] = useState(null);

  function markerSetOn() {
    setmarkerStat(true);
  }
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

  const [markedAddress, setMarkedAddress] = useState("");

  const [selected, setSelected] = useState();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAVDzgCl3C4LxYECq149eAYFA_sNyPmpGU",
    libraries,
  });

  return (
    <div className={`${styles.body}`}>
      <div className={`mt-5 pt-4`}>
        <div className={`${styles.homepageContainer} col-12 position-relative`}>
          <Image src={homeImage} layout="fill" alt="Picture of the author" />
          <div
            className={`${styles.location_type_budget} position-absolute p-2`}
          >
            <div className={`${styles.location_field_width} form-group `}>
              
              <div>
                {isLoaded ? (
                  <>
                    <div>
                      <Location
                        result={selected}
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
                              formik.setFieldValue("Map", selected);
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
        </div>
        <div className="mt-5"></div>
      </div>
    </div>
  );
};

export default Homescreen;
