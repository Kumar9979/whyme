import React, { useEffect, useState } from "react";
import styles from "../../../styles/edit-property/apartment-flat.module.css";
import Image from "next/image";
import backIcon from "../../../assets/icons/back-icon.svg";
import Location from "../../../assets/icons/location-icon.svg";

import Delete from "../../../assets/icons/delete.svg";
import { Progress } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageUpload from "../../ImageUpload/Image-upload";
import { usePosition } from "../../../pages/post-property/property-details/usePosition";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { Modal } from "react-bootstrap";
import ApartmentDescription from "../../modals/residential-property/apartment/apartmentDescription";
import ApartmentEditProperty from "../../modals/residential-property/apartment/apartmentEditProperty";
import ApartmentEditAmenities from "../../modals/residential-property/apartment/apartmentEditAmenities";
import ApartmentAreaPrice from "../../modals/residential-property/apartment/apartmentAreaPrice";
import ApartmentUploadPhoto from "../../modals/residential-property/apartment/apartmentUploadPhoto";
import ApartmentDeletePhoto from "../../modals/residential-property/apartment/apartmentDeletePhoto";
import ApartmentUpdateMap from "../../modals/residential-property/apartment/apartmentUpdateMap";
import VillaEditProperty from "../../modals/residential-property/villa-property/villaEditProperty";
import VillaEditAmenities from "../../modals/residential-property/villa-property/villaEditAmenities";
import VillaAreaPrice from "../../modals/residential-property/villa-property/villaAreaPrice";
import VillaDescription from "../../modals/residential-property/villa-property/villaDescription";
import VillaUploadPhoto from "../../modals/residential-property/villa-property/villaUploadPhoto";
import VillaDeletePhoto from "../../modals/residential-property/villa-property/villaDeletePhoto";
import VillaUpdateMap from "../../modals/residential-property/villa-property/villaUpdateMap";
import ResidentialHouseEditProperty from "../../modals/residential-property/residential-house/residentialHouseEditProperty";
import ResidentialHouseEditAmenities from "../../modals/residential-property/residential-house/residentialHouseEditAmenities";
import ResidentialHouseAreaPrice from "../../modals/residential-property/residential-house/residentialHouseAreaPrice";
import ResidentialHouseDescription from "../../modals/residential-property/residential-house/residentialHouseDescription";
import ResidentialHouseUpdateMap from "../../modals/residential-property/residential-house/residentialHouseUpdateMap";
import ResidentialHouseDeletePhoto from "../../modals/residential-property/residential-house/residentialHouseDeletePhoto";
import ResidentialHouseUploadPhoto from "../../modals/residential-property/residential-house/residentialHouseUploadPhoto";
import ResidentialLandEditProperty from "../../modals/residential-property/residential-land/residentialLandEditProperty";
import ResidentialLandEditAmenities from "../../modals/residential-property/residential-land/residentialLandEditAmenities";
import ResidentialLandAreaPrice from "../../modals/residential-property/residential-land/residentialLandAreaPrice";
import ResidentialLandDescription from "../../modals/residential-property/residential-land/residentialLandDescription";
import ResidentialLandUploadPhoto from "../../modals/residential-property/residential-land/residentialLandUploadPhoto";
import ResidentialLandDeletePhoto from "../../modals/residential-property/residential-land/residentialLandDeletePhoto";
import ResidentialLandUpdateMap from "../../modals/residential-property/residential-land/residentialLandUpdateMap";

const EditApartmentFlat = ({ data, propertyType }) => {
  let type;
  let Ament;
  switch (data) {
    case 0:
      type = apartmentFeatures;
      Ament = ApartmentAmenties;
      break;
    case 1:
      type = villaFeatures;
      Ament = villaAmenties;
      break;
    case 2:
      type = houseFeatures;
      Ament = houseAmenties;
      break;
    case 3:
      type = plotFeatures;
      Ament = plotAmenties;
      break;
  }
  const [properties, setProperties] = useState(type);
  const [Amenties, setAmenties] = useState(Ament);
  const [show, setShow] = useState(false);
  const [featureModalShow, setFeatureModalShow] = useState(false);
  const [areaModal, setAreaModal] = useState(false);
  const [amenitiesModal, setAmenitiesModal] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [imageNumber, setImageNumber] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const handleClose = () => setShow(false);
  const handleDeleteModalClose = () => setShowDeleteModal(false);
  const handleShow = () => setShow(true);
  const [image, setimage] = useState([]);
  const libraries = ["places"];
  const { latitude: lat, longitude: lng, error } = usePosition();
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
  console.log(selected);
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

  function handleImageUpload(images, handleClose) {
    images.map((item) => {
      setimage((prev) => [...prev, item]);
    });
    console.log(image);
    handleClose();
  }
  const onImageRemove = (imageNumber) => {
    setimage([
      ...image.slice(0, imageNumber),
      ...image.slice(imageNumber + 1, image.length),
    ]);
  };

  function handleImageDelete(index) {
    setImageNumber(index);
    setShowDeleteModal(true);
  }
  return (
    <div className={`d-flex justify-content-center container`}>
      <div className={`${styles.abcd}`}>
        <div
          className={`${styles.back_icon} d-flex justify-content-start ps-2`}
        >
          <span className="d-flex align-items-center">
            {" "}
            <Image src={backIcon} />
            <span
              className={`${styles.back_text} ms-2 fs_15 fw_500 fontFam_poppins`}
            >
              Back
            </span>{" "}
          </span>
        </div>

        {/* first container */}
        <div
          className={`${styles.card} mt-4 d-flex justify-content-center px-2 pt-3 `}
        >
          <div className={`card-body pt-2 pt-lg-3 pb-2`}>
            <div className=" ">
              <div className="d-lg-flex d-md-flex d-sm-block justify-content-between">
                <div className="col-lg-6 ">
                  <span
                    className={`${styles.flat_heading} fs_18 fw_500 ps-2 ps-lg-3 fontFam_poppins`}
                  >
                    {propertyType}
                  </span>
                  <div className={`d-flex`}>
                    <span
                      className={`${styles.location_icon} mt-0 ps-2 ps-lg-3`}
                    >
                      <Image src={Location} />
                    </span>
                    <span
                      className={`${styles.address_heading} ms-1 fontFam_poppins`}
                    >
                      2Nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd,
                      Mysuru, Karnataka 570017
                    </span>
                  </div>
                  <div
                    className={`${styles.id_text} fs-16 fw_500 ps-2 ps-lg-3 pt-1 fontFam_poppins`}
                  >
                    ID : 1235467890
                  </div>
                </div>

                <div className="col-lg-4 ps-2 ps-lg-0">
                  <div
                    className={`${styles.complete_status_text} fs_16 fw_500 fontFam_poppins pt-2 pt-lg-0`}
                  >
                    Complete Status
                  </div>
                  <div className="d-flex align-items-center justify-content-between pe-3 ">
                    <div className="">
                      <ul
                        className={`${styles.complete_list} fontFam_poppins fs_14 fw_400 pt-1`}
                      >
                        <li className="text-nowrap">Facing</li>
                        <li className="text-nowrap">Ownership Status</li>
                        <li className="text-nowrap">Property Images</li>
                      </ul>
                    </div>
                    <div>
                      <Progress
                        className={`${styles.ant_progress_text}`}
                        style={{ color: "#50BF97" }}
                        strokeColor={"#50BF97"}
                        width={60}
                        strokeWidth={12}
                        type="circle"
                        percent={80}
                        color={"red"}
                      />
                    </div>
                  </div>
                  <span
                    className={`${styles.response_text} fs_12 fw_500 p-1 fontFam_poppins`}
                  >
                    Get 5 times more response! just add the following
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.card}  px-2 mt-3 `}>
          <div className={` card-body pt-2 pt-lg-3 pb-2`}>
            <div className="d-flex  justify-content-between">
              <span
                className={`${styles.photo_text} color_cloudBurst fs_20 fw_500 ps-2 ps-lg-3`}
              >
                Photos
              </span>

              {image.length != 0 ? (
                <button
                  onClick={handleShow}
                  className={`${styles.add_photo_btn} me-3 px-2 px-lg-3 fs_13 fontFam_poppins`}
                >
                  Add Photos
                </button>
              ) : null}
            </div>
            <hr className={`${styles.hr}`} />
            <div className="row gx-2 mt-2 pt-2 p-2">
              {image.length === 0 ? (
                <div>
                  <ImageUpload handleImageUpload={handleImageUpload} />
                </div>
              ) : (
                image?.map((image, index) => (
                  <div className={`col-lg-2 col-md-3 col-4`} key={index}>
                    <div
                      className={`${styles.property_upload_preview_image_container}  position="relative"s`}
                    >
                      <Image
                        src={image.data_url}
                        name="uploaded-images"
                        width={130}
                        height={150}
                        className={`${styles.image_container}`}
                      />
                    </div>
                    <button
                      type="button"
                      className={`${styles.delete}`}
                      onClick={() => handleImageDelete(index)}
                    >
                      <Image
                        src={Delete}
                        alt="remove image icon"
                        width={20}
                        height={20}
                        className={`${styles.delete_icon} p-1 `}
                      />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className={`${styles.card} card mt-4`}>
          <div className={`card-body`}>
            <div
              className={`d-flex align-items-center justify-content-between`}
            >
              <div
                className={`${styles.photo_text} color_cloudBurst fs_20 fw_500 ps-2 ps-lg-3`}
              >
                Map
              </div>

              <button
                onClick={() => {
                  setEditLocation(true);
                }}
                className={`${styles.add_photo_btn} me-3 px-2 py-1 px-lg-3 fs_13 fontFam_poppins`}
              >
                Edit Location
              </button>
            </div>
            <hr className={`${styles.hr}`} />
            <div className="">
              {isLoaded ? (
                <>
                  <div className="mt-3">
                    {markedAddress !== "" && (
                      <div
                        className={`position-absolute card ${styles.location_popover}`}
                      >
                        <div className={`card-body`}>
                          <div className={`fs-13 ${styles.location_Text}`}>
                            {markedAddress}
                          </div>
                        </div>
                      </div>
                    )}
                    <GoogleMap
                      id="map"
                      onGoogleApiLoaded={({ map, maps }) =>
                        console.log(map, maps, "lsdnhfioubn")
                      }
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
        <div className={`${styles.card} card mt-4`}>
          <div className={`card-body`}>
            <div
              className={`d-flex align-items-center justify-content-between`}
            >
              <div
                className={`${styles.photo_text} color_cloudBurst fs_20 fw_500 ps-2 ps-lg-3`}
              >
                Features
              </div>
              <button
                onClick={() => setFeatureModalShow(true)}
                className={`${styles.add_photo_btn} me-3 px-2 py-1 px-lg-3 fs_13 fontFam_poppins`}
              >
                Edit Features
              </button>
            </div>
            <hr className={`${styles.hr}`} />
            <div className={`row mt-4 ps-0 ps-lg-3`}>
              {properties.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`col-md-4 col-6 col-sm-6 col-xl-3`}
                  >
                    <div
                      className={`${styles.features_Heading} fontFam_poppins`}
                    >
                      {item.heading}
                    </div>
                    <p className={`${styles.features_text} fontFam_poppins`}>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={`${styles.card} card mt-4`}>
          <div className={`card-body`}>
            <div
              className={`d-flex align-items-center justify-content-between`}
            >
              <div
                className={`${styles.photo_text} color_cloudBurst fs_20 fw_500 ps-2 ps-lg-3`}
              >
                Amenities
              </div>
              <button
                onClick={() => setAmenitiesModal(true)}
                className={`${styles.add_photo_btn} me-3 px-2 py-1 px-lg-3 fs_13 fontFam_poppins`}
              >
                Edit Amenities
              </button>
            </div>
            <hr className={`${styles.hr}`} />
            <div className={`row mt-4 ps-0 ps-lg-3`}>
              {Amenties.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`col-md-4 col-6 col-sm-6 col-xl-4`}
                  >
                    <p
                      className={`${styles.Amenities_text} d-flex align-items-center fontFam_poppins`}
                    >
                      <span className={`${styles.Amenities_dot}`}>
                        {"\u2022"}
                      </span>
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`${styles.card} card mt-4`}>
          <div className={`card-body`}>
            <div
              className={`d-flex align-items-center justify-content-between`}
            >
              <div
                className={`${styles.photo_text} color_cloudBurst fs_20 fs_sm_15 fw_500 ps-2 ps-lg-3`}
              >
                Area & Price
              </div>
              <button
                onClick={() => setAreaModal(true)}
                className={`${styles.add_photo_btn} me-3 px-2 py-1 px-lg-3 fs_13 fs_sm_12 fontFam_poppins`}
              >
                Edit Area & Price
              </button>
            </div>

            <hr className={`${styles.hr}`} />

            <div className={`row mt-4 ps-0 ps-lg-3`}>
              <div className="col-lg-6 col-md-6">
                <p className={`fontFam_poppins ${styles.priceHeading}`}>
                  Price Details
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div
                      className={`fontFam_poppins ${styles.price_subheading}`}
                    >
                      Deposit Price
                    </div>
                    <div className={`fontFam_poppins ${styles.price_text}`}>
                      ₹ 1,00,000
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div
                      className={`fontFam_poppins ${styles.price_subheading}`}
                    >
                      Rent Price
                    </div>
                    <div className={`fontFam_poppins ${styles.price_text}`}>
                      ₹ 10,000
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mt-5 mt-lg-0 mt-md-0">
                <p className={`fontFam_poppins ${styles.priceHeading}`}>
                  Area Details
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div
                      className={`fontFam_poppins ${styles.price_subheading}`}
                    >
                      Built-Up Area
                    </div>
                    <div className={`fontFam_poppins ${styles.price_text}`}>
                      1200Sqft
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div
                      className={`fontFam_poppins ${styles.price_subheading}`}
                    >
                      Carpet Area
                    </div>
                    <div className={`fontFam_poppins ${styles.price_text}`}>
                      1000Sqft
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.card} card mt-4 mb-5`}>
          <div className={`card-body`}>
            <div
              className={`d-flex align-items-center justify-content-between`}
            >
              <div
                className={`${styles.photo_text} color_cloudBurst fs_20 fw_500 ps-2 ps-lg-3`}
              >
                Description
              </div>
              <button
                onClick={() => setDescriptionModal(true)}
                className={`${styles.add_photo_btn} me-3 px-2 py-1 px-lg-3 fs_13 fontFam_poppins`}
              >
                Edit Description
              </button>
            </div>
            <hr className={`${styles.hr}`} />
            <p className={`fontFam_poppins ps-0 ps-lg-3 `}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
      </div>

      {data === 0 && (
        <>
          <ApartmentEditProperty
            show={featureModalShow}
            handleClose={() => setFeatureModalShow(false)}
          />
          <ApartmentEditAmenities
            show={amenitiesModal}
            handleClose={() => setAmenitiesModal(false)}
          />
          <ApartmentAreaPrice
            show={areaModal}
            handleClose={() => setAreaModal(false)}
          />
          <ApartmentDescription
            show={descriptionModal}
            handleClose={() => setDescriptionModal(false)}
          />
          <ApartmentUploadPhoto
            handleClose={handleClose}
            handleImageUpload={handleImageUpload}
            show={show}
          />
          <ApartmentDeletePhoto
            deleteFn={onImageRemove}
            index={imageNumber}
            handleClose={handleDeleteModalClose}
            show={showDeleteModal}
          />

          <ApartmentUpdateMap
            show={editLocation}
            handleClose={() => setEditLocation(false)}
          />
        </>
      )}
      {data === 1 && (
        <>
          <VillaEditProperty
            show={featureModalShow}
            handleClose={() => setFeatureModalShow(false)}
          />
          <VillaEditAmenities
            show={amenitiesModal}
            handleClose={() => setAmenitiesModal(false)}
          />
          <VillaAreaPrice
            show={areaModal}
            handleClose={() => setAreaModal(false)}
          />
          <VillaDescription
            show={descriptionModal}
            handleClose={() => setDescriptionModal(false)}
          />
          <VillaUploadPhoto
            handleClose={handleClose}
            handleImageUpload={handleImageUpload}
            show={show}
          />
          <VillaDeletePhoto
            deleteFn={onImageRemove}
            index={imageNumber}
            handleClose={handleDeleteModalClose}
            show={showDeleteModal}
          />

          <VillaUpdateMap
            show={editLocation}
            handleClose={() => setEditLocation(false)}
          />
        </>
      )}

      {data === 2 && (
        <>
          <>
            <ResidentialHouseEditProperty
              show={featureModalShow}
              handleClose={() => setFeatureModalShow(false)}
            />
            <ResidentialHouseEditAmenities
              show={amenitiesModal}
              handleClose={() => setAmenitiesModal(false)}
            />
            <ResidentialHouseAreaPrice
              show={areaModal}
              handleClose={() => setAreaModal(false)}
            />
            <ResidentialHouseDescription
              show={descriptionModal}
              handleClose={() => setDescriptionModal(false)}
            />
            <ResidentialHouseUploadPhoto
              handleClose={handleClose}
              handleImageUpload={handleImageUpload}
              show={show}
            />
            <ResidentialHouseDeletePhoto
              deleteFn={onImageRemove}
              index={imageNumber}
              handleClose={handleDeleteModalClose}
              show={showDeleteModal}
            />

            <ResidentialHouseUpdateMap
              show={editLocation}
              handleClose={() => setEditLocation(false)}
            />
          </>
        </>
      )}
      {data === 3 && (
        <>
          <ResidentialLandEditProperty
            show={featureModalShow}
            handleClose={() => setFeatureModalShow(false)}
          />
          <ResidentialLandEditAmenities
            show={amenitiesModal}
            handleClose={() => setAmenitiesModal(false)}
          />
          <ResidentialLandAreaPrice
            show={areaModal}
            handleClose={() => setAreaModal(false)}
          />
          <ResidentialLandDescription
            show={descriptionModal}
            handleClose={() => setDescriptionModal(false)}
          />
          <ResidentialLandUploadPhoto
            handleClose={handleClose}
            handleImageUpload={handleImageUpload}
            show={show}
          />
          <ResidentialLandDeletePhoto
            deleteFn={onImageRemove}
            index={imageNumber}
            handleClose={handleDeleteModalClose}
            show={showDeleteModal}
          />

          <ResidentialLandUpdateMap
            show={editLocation}
            handleClose={() => setEditLocation(false)}
          />
        </>
      )}
    </div>
  );
};

export default EditApartmentFlat;

const apartmentFeatures = [
  {
    heading: "Total Floors",
    text: "45",
  },
  {
    heading: "Floor Number",
    text: "3",
  },
  {
    heading: "Car Parking Count",
    text: "2",
  },
  {
    heading: "Bedroom",
    text: "3",
  },

  {
    heading: "Bathroom",
    text: "2",
  },
  {
    heading: "Facing",
    text: "North",
  },
  {
    heading: "Furnishing Status",
    text: "Furnished",
  },
  {
    heading: "Status",
    text: "Ready To Move",
  },
  {
    heading: "Transaction",
    text: "Resale",
  },
];
const villaFeatures = [
  {
    heading: "Total Floors",
    text: "45",
  },
  {
    heading: "No. Of Open Sides",
    text: "3",
  },
  {
    heading: "Balconies",
    text: "7",
  },
  {
    heading: "Bedroom",
    text: "3",
  },
  {
    heading: "Bathroom",
    text: "2",
  },
  {
    heading: "Facing",
    text: "North",
  },
  {
    heading: "Furnishing Status",
    text: "Furnished",
  },
  {
    heading: "Status",
    text: "Ready To Move",
  },
  {
    heading: "Transaction",
    text: "Resale",
  },
  {
    heading: "Age Of Construction",
    text: "7",
  },
];

const houseFeatures = [
  {
    heading: "Total Floors",
    text: "45",
  },
  {
    heading: "No. Of Open Sides",
    text: "3",
  },
  {
    heading: "Balconies",
    text: "7",
  },
  {
    heading: "Bedroom",
    text: "3",
  },
  {
    heading: "Bathroom",
    text: "2",
  },
  {
    heading: "Facing",
    text: "North",
  },
  {
    heading: "Furnishing Status",
    text: "Furnished",
  },
  {
    heading: "Status",
    text: "Ready To Move",
  },
  {
    heading: "Transaction",
    text: "Resale",
  },
  {
    heading: "Age Of Construction",
    text: "7",
  },
];
const plotFeatures = [
  {
    heading: "Floors Allowed For Construction",
    text: "12",
  },
  {
    heading: "Any Construction Done",
    text: "No",
  },
  {
    heading: "No. Of Open Sides",
    text: "2",
  },
  {
    heading: "Boundary Wall Made",
    text: "No",
  },
  {
    heading: "Gated Colony",
    text: "Yes",
  },
  {
    heading: "Corner Site",
    text: "No",
  },
];

const ApartmentAmenties = [
  "Elevators/Lifts",
  "Guest Parking Spaces",
  "Gym",
  "Sauna Steam Room",
  "Swimming Pool",
  "Yoga Meditation Area",
  "Kids Play Area",
  "Play Ground",
  "BBQ Lounge Area",
];
export const villaAmenties = [
  "Private Parking Space",
  "Private Parking Space",
  "Gym",
  "Sauna Steam Room",
  "Sauna Steam Room",
  "Yoga Meditation Area",
  "Kids Play Area",
  "Play Ground",
  "BBQ Lounge Area",
  "Hardwood Floors",
  "Pet Room",
  "Lounge Area",
];
const houseAmenties = [
  "Private Parking Space",
  "Guest Parking Spaces",
  "Play Ground",
  "Sauna Steam Room",
  "Hardwood Floors",
  "Pet Room",
  "Lounge Area",
  "Garden Area",
];
const plotAmenties = [
  "Basic Amenities",
  "Underground Drainage System",
  "Highway Access",
  "Main Road Access",
  "Electricity Line",
];
