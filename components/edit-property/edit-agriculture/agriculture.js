import React, { useEffect, useState } from "react";
import styles from "../../../styles/edit-property/apartment-flat.module.css";
import Image from "next/image";
import backIcon from "../../../assets/icons/back-icon.svg";
import Location from "../../../assets/icons/location-icon.svg";
import ApartmentUploadPhoto from "../../modals/residential-property/apartment/apartmentUploadPhoto";
import ApartmentDeletePhoto from "../../modals/residential-property/apartment/apartmentDeletePhoto";
import closeIcon from "../../../assets/icons/close.png";
import Delete from "../../../assets/icons/delete.svg";
import { Progress } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageUpload from "../../ImageUpload/Image-upload";
import { usePosition } from "../../../pages/post-property/property-details/usePosition";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { Modal } from "react-bootstrap";
import AgricultureFarmHouseFeatures from "../../modals/agriculture-property/agriculture-farmhouse/agricultureFarmHouseFeatures";
import AgricultureFarmHouseAreaPrice from "../../modals/agriculture-property/agriculture-farmhouse/agricultureFarmHouseAreaPrice";
import AgricultureFarmHouseDescription from "../../modals/agriculture-property/agriculture-farmhouse/agricultureFarmHouseDescription";
import AgricultureFarmHouseUploadPhoto from "../../modals/agriculture-property/agriculture-farmhouse/agricultureFarmHouseUploadPhoto";
import AgricultureFarmHouseDeletePhoto from "../../modals/agriculture-property/agriculture-farmhouse/agriculturefarmHouseDeletePhoto";
import AgricultureFarmHouseUpdateMap from "../../modals/agriculture-property/agriculture-farmhouse/agricultureFarmHouseUpdateMap";
import AgricultureLandFeatures from "../../modals/agriculture-property/agriculture-land/agricultureLandFeatures";
import AgricultureLandAreaPrice from "../../modals/agriculture-property/agriculture-land/agricultureLandAreaPrice";
import AgricultureLandDescription from "../../modals/agriculture-property/agriculture-land/agricultureLandDescription";
import AgricultureLandDeletePhoto from "../../modals/agriculture-property/agriculture-land/agricultureLandDeletePhoto";
import AgricultureLandUploadPhoto from "../../modals/agriculture-property/agriculture-land/agricultureLandUploadPhoto";
import AgricultureLandUpdateMap from "../../modals/agriculture-property/agriculture-land/agricultureLandUpdateMap";

const EditAgiculture = ({ data, propertyType }) => {
  let features;
  switch (data) {
    case 0:
      features = AgriculturalFarmHouseFeatures;
      break;
    case 1:
      features = AgriculturalLandFeatures;
      break;
  }

  const [featureModalShow, setFeatureModalShow] = useState(false);
  const [properties, setProperties] = useState(features);
  const [areaModal, setAreaModal] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [show, setShow] = useState(false);
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
    <div className={`d-flex justify-content-center`}>
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
                    <div className="">
                      <Progress
                        className={`${styles.progress_bar}`}
                        strokeColor={"#50BF97"}
                        width={60}
                        strokeWidth={12}
                        type="circle"
                        percent={75}
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
        <div className={`${styles.card}  px-2  mt-3 `}>
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
            <div className="row gx-2 mt-2 pt-2 p-4">
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
                Area & Price
              </div>
              <button
                onClick={() => setAreaModal(true)}
                className={`${styles.add_photo_btn} me-3 px-2 py-1 px-lg-3 fs_13 fontFam_poppins`}
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
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div
                      className={`fontFam_poppins ${styles.price_subheading}`}
                    >
                      Deposit Price
                    </div>
                    <div className={`fontFam_poppins ${styles.price_text}`}>
                      ₹ 1,00,000
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
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
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="mb-3">
                      <div
                        className={`fontFam_poppins ${styles.price_subheading}`}
                      >
                        Built-Up Area
                      </div>
                      <div className={`fontFam_poppins ${styles.price_text}`}>
                        1200Sqft
                      </div>
                    </div>

                    <div className="mb-3">
                      <div
                        className={`fontFam_poppins ${styles.price_subheading}`}
                      >
                        Plot Length
                      </div>
                      <div className={`fontFam_poppins ${styles.price_text}`}>
                        1200 ft
                      </div>
                    </div>

                    <div
                      className={`fontFam_poppins ${styles.price_subheading}`}
                    >
                      Plot Area
                    </div>
                    <div className={`fontFam_poppins ${styles.price_text}`}>
                      1200Sqft
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="mb-3">
                      <div
                        className={`fontFam_poppins ${styles.price_subheading}`}
                      >
                        Carpet Area
                      </div>
                      <div className={`fontFam_poppins ${styles.price_text}`}>
                        1000Sqft
                      </div>
                    </div>

                    <div
                      className={`fontFam_poppins ${styles.price_subheading}`}
                    >
                      Plot Width
                    </div>
                    <div className={`fontFam_poppins ${styles.price_text}`}>
                      1000Sqft
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className={`row mt-4 ps-0 ps-lg-3`}>
              <div className={`col-md-5 col-12 col-sm-6 col-xl-5 mb-4`}>
                <p className={`fontFam_poppins ${styles.priceHeading}`}>
                  Price Details
                </p>
                <div className="d-flex align-item-center justify-content-between">
                  <div>
                    <div
                      className={`fontFam_poppins ${styles.price_subheading}`}
                    >
                      Deposit Price
                    </div>
                    <div className={`fontFam_poppins ${styles.price_text}`}>
                      ₹ 1,00,000
                    </div>
                  </div>
                  <div>
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
              <div className="col-1 col-md-1 col-sm-1 col-xl-1"></div>
              <div className={`col-md-5 col-12 col-sm-6 col-xl-5 mb-4`}>
                <p className={`fontFam_poppins ${styles.priceHeading}`}>
                  Area Details
                </p>
                <div className="row">
                  <div className={`col-6 mb-3`}>
                    <div
                      className={`fontFam_poppins ${styles.price_subheading}`}
                    >
                      Built-Up Area
                    </div>
                    <div className={`fontFam_poppins ${styles.price_text}`}>
                      1200Sqft
                    </div>
                  </div>
                  <div className={`col-6 mb-3`}>
                    <div
                      className={`fontFam_poppins ${styles.price_subheading}`}
                    >
                      Carpet Area
                    </div>
                    <div className={`fontFam_poppins ${styles.price_text}`}>
                      1000Sqft
                    </div>
                  </div>
                  <div className={`col-6 mb-3`}>
                    <div
                      className={`fontFam_poppins ${styles.price_subheading}`}
                    >
                      Plot Length
                    </div>
                    <div className={`fontFam_poppins ${styles.price_text}`}>
                      1200 ft
                    </div>
                  </div>
                  <div className={`col-6 mb-3`}>
                    <div
                      className={`fontFam_poppins ${styles.price_subheading}`}
                    >
                      Plot Width
                    </div>
                    <div className={`fontFam_poppins ${styles.price_text}`}>
                      1000Sqft
                    </div>
                  </div>
                  <div className={`col-6 mb-3`}>
                    <div
                      className={`fontFam_poppins ${styles.price_subheading}`}
                    >
                      Plot Area
                    </div>
                    <div className={`fontFam_poppins ${styles.price_text}`}>
                      1200Sqft
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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
            <p className={`fontFam_poppins ps-0 ps-lg-3`}>
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
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={locationModal}
        onHide={() => setLocationModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoaded && (
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
                  draggable={true}
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
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      {data === 0 && (
        <>
          <AgricultureFarmHouseFeatures
            show={featureModalShow}
            handleClose={() => setFeatureModalShow(false)}
          />

          <AgricultureFarmHouseAreaPrice
            show={areaModal}
            handleClose={() => setAreaModal(false)}
          />
          <AgricultureFarmHouseDescription
            show={descriptionModal}
            handleClose={() => setDescriptionModal(false)}
          />
          <AgricultureFarmHouseUploadPhoto
            handleClose={handleClose}
            handleImageUpload={handleImageUpload}
            show={show}
          />
          <AgricultureFarmHouseDeletePhoto
            deleteFn={onImageRemove}
            index={imageNumber}
            handleClose={handleDeleteModalClose}
            show={showDeleteModal}
          />

          <AgricultureFarmHouseUpdateMap
            show={editLocation}
            handleClose={() => setEditLocation(false)}
          />
        </>
      )}

      {data === 1 && (
        <>
          <AgricultureLandFeatures
            show={featureModalShow}
            handleClose={() => setFeatureModalShow(false)}
          />

          <AgricultureLandAreaPrice
            show={areaModal}
            handleClose={() => setAreaModal(false)}
          />
          <AgricultureLandDescription
            show={descriptionModal}
            handleClose={() => setDescriptionModal(false)}
          />
          <AgricultureLandUploadPhoto
            handleClose={handleClose}
            handleImageUpload={handleImageUpload}
            show={show}
          />
          <AgricultureLandDeletePhoto
            deleteFn={onImageRemove}
            index={imageNumber}
            handleClose={handleDeleteModalClose}
            show={showDeleteModal}
          />

          <AgricultureLandUpdateMap
            show={editLocation}
            handleClose={() => setEditLocation(false)}
          />
        </>
      )}
    </div>
  );
};

export default EditAgiculture;

const AgriculturalFarmHouseFeatures = [
  {
    heading: "Total Floors",
    text: "45",
  },
  {
    heading: "No. Of Open Sides",
    text: "3",
  },
  {
    heading: "Road Facing Plot Width",
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
    heading: "Furnishing Status",
    text: "Furnished",
  },
];

const AgriculturalLandFeatures = [
  {
    heading: "Boundary Wall",
    text: "Yes",
  },
  {
    heading: "No. Of Open Sides",
    text: "3",
  },
  {
    heading: "Road Facing Plot Width",
    text: "7",
  },
];
