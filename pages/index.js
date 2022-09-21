import { React, useState, useRef } from "react";
import homeImage from "../assets/homePage.png";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Location from "../components/location";
import AgentProperties from "../components/property-details/agent-properties";
import PopularApartmentCard from "../components/cards/homePage_card/popular_apartment";
import arrowleft from "../assets/images/arrow_left.svg";
import arrowright from "../assets/images/arrow_right.svg";

const Homescreen = () => {
  let n = 10;
  const ref = useRef();
  const onScroll = (scroll) => {
    ref.current.scrollLeft += scroll;
  };
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
  const [select, setselect] = useState(false);
  const [selectsqft, setselectsqft] = useState(false);

  return (
    <div className={`${styles.body}`}>
      <div className={`mt-5 pt-4`}>
        <div className={`${styles.homepageContainer} col-12 position-relative`}>
          <Image src={homeImage} layout="fill" alt="Picture of the author" />
          <div
            className={`${styles.location_type_budget} position-absolute p-2 py-auto`}
          >
            <div className="row">
              <div className="col-5">
                <div className={`${styles.location_field_width} form-group`}>
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
              <div className="col-4">
                sadjubauk
                {/* <PropertyType/> */}
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
        <div className={` d-flex justify-content-center pt-5 mt-5`}>
          <div className={`${styles.properties} `}>
            <div className="row">
              <div className={`${styles.container}`}>
                <div className="row">
                  <div className="col-12 col-lg-8 col-md-8">
                    <h1 className="color_cloudBurst fw_500 fs_36 fs_sm_20 ">
                      Popular Apartments in Mysuru
                    </h1>
                  </div>
                  <div className=" col-12 col-lg-4 col-md-4">
                    <div className="d-flex">
                      <button
                        onClick={() => setselect(false)}
                        className={` ${
                          select
                            ? styles.UnSelectionButton
                            : styles.homeSelectionButton
                        } px-4 px-md-2 py-md-1 py-2 fs_20 fs_sm_15 fw_400 fontFam_poppins ms-0 ms-lg-4 text-nowrap`}
                      >
                        2 BHK
                      </button>
                      <button
                        onClick={() => setselect(true)}
                        className={` ${
                          select
                            ? styles.homeSelectionButton
                            : styles.UnSelectionButton
                        } px-4 px-md-2 py-md-1 py-2 fs_20 fs_sm_15 fw_400 ms-4 fontFam_poppins text-nowrap`}
                      >
                        3 BHK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p
              className={`color_grey fs_15 fs_sm_12 fw_500 fontFam_poppins col-lg-6 col-12 mt-2 mt-lg-0`}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero.
            </p>
          </div>
        </div>
        <div className={`${styles.width_popular_apartments} mx-auto `}>
          <div>
            <AgentProperties
              propertyType={
                select
                  ? "3BHK flat in Vijayanagar, Mysuru"
                  : "2BHK flat in Vijayanagar, Mysuru"
              }
              data={1}
              hide={1}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className={`${styles.popular_apartments_container} mt-5`}>
            <h1 className="text-center color_cloudBurst fw_500 fs_36 fs_sm_20">
              Popular Apartments in Mysuru
            </h1>
            <div className="d-flex justify-content-center">
              <p className="color_grey fs_15 fs_sm_12 col-lg-7 col-12 fw_500 fontFam_poppins  d-flex justify-content-center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero.
              </p>
            </div>
            <div className={`row position-relative`}>
              <div className={`${styles.scrollmenu} `}>
                <div ref={ref} className={`${styles.row} row`}>
                  {[...Array(n)].map((item, index) => {
                    return <PopularApartmentCard />;
                  })}
                </div>
              </div>
              <button
            onClick={() => onScroll(-800)}
            className={`${styles.arrow_left_button} p-0 position-absolute d-lg-block d-none`}
          >
            <Image
              width={100}
              height={100}
              src={arrowleft}
              alt="Picture of the author"
            />
          </button>
          <button
            onClick={() => onScroll(+800)}
            className={`${styles.arrow_right_button} p-0 position-absolute d-lg-block d-none`}
          >
            <Image
              width={100}
              height={100}
              src={arrowright}
              alt="Picture of the author"
            />
          </button>
            </div>
          </div>
        </div>
        <div className={` d-flex justify-content-center mt-5`}>
          <div className={`${styles.properties} `}>
            <div className="row">
              <div className={`${styles.container}`}>
                <div className="row">
                  <div className="col-12 col-lg-8 col-md-8">
                    <h1 className="color_cloudBurst fw_500 fs_36 fs_sm_20 ">
                      Plots in Prime Locations
                    </h1>
                  </div>
                  <div className=" col-12 col-lg-4 col-md-4">
                    <div className="d-flex">
                      <button
                        onClick={() => setselectsqft(false)}
                        className={` ${
                          selectsqft
                            ? styles.UnSelectionButton
                            : styles.homeSelectionButton
                        } px-4 px-md-2 py-md-1 py-2 fs_20 fs_sm_15 fw_400 fontFam_poppins ms-0 ms-lg-4 text-nowrap`}
                      >
                        1200Sqft
                      </button>
                      <button
                        onClick={() => setselectsqft(true)}
                        className={` ${
                          selectsqft
                            ? styles.homeSelectionButton
                            : styles.UnSelectionButton
                        } px-4 px-md-2 py-md-1 py-2 fs_20 fs_sm_15 fw_400 ms-4 fontFam_poppins text-nowrap`}
                      >
                        2400Sqft
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p
              className={`color_grey fs_15 fs_sm_12 fw_500 fontFam_poppins col-lg-6 col-12 mt-2 mt-lg-0`}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero.
            </p>
          </div>
        </div>
        <div className={`${styles.width_popular_apartments} mx-auto mt-0`}>
          <div>
            <AgentProperties
              sqftType={selectsqft ? "1200Sqft" : "2400Sqft"}
              data={1}
              hide={1}
            />
          </div>
        </div>
        <div className={` d-flex justify-content-center mt-5`}>
          <div className={`${styles.properties} `}>
            <h1 className="color_cloudBurst fw_500 fs_36 fs_sm_20 ">
              Residential Houses & Villas in Prime Locations
            </h1>

            <p
              className={`color_grey fs_15 fs_sm_12 fw_500 fontFam_poppins col-lg-6 col-12 mt-2 mt-lg-0`}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero.
            </p>
          </div>
        </div>
        <div className={`${styles.width_residental_houses} ms-0 ms-lg-5  mt-0`}>
          <div>
            <AgentProperties
              sqftType={selectsqft ? "1200Sqft" : "2400Sqft"}
              data={1}
              hide={1}
            />
          </div>
        </div>
        <div className={`${styles.width_residental_houses} ms-0 ms-lg-5 mt-0`}>
          <div>
            <AgentProperties
              sqftType={selectsqft ? "1200Sqft" : "2400Sqft"}
              data={1}
              hide={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
