import React, { useEffect, useState } from "react";
import styles from "../../../styles/edit-property/apartment-flat.module.css";
import Image from "next/image";
import backIcon from "../../../assets/icons/back-icon.svg";
import Location from "../../../assets/icons/location-icon.svg";
import ApartmentUploadPhoto from "../../modals/residential-property/apartment/apartmentUploadPhoto";
import ApartmentDeletePhoto from "../../modals/residential-property/apartment/apartmentDeletePhoto";

import Delete from "../../../assets/icons/delete.svg";
import { Progress } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageUpload from "../../ImageUpload/Image-upload";
import { usePosition } from "../../../pages/post-property/property-details/usePosition";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { Modal } from "react-bootstrap";
import OfficespaceAreaPrice from "../../modals/commercial-property/office-space/officespaceAreaPrice";
import OfficeSpaceAmenities from "../../modals/commercial-property/office-space/officespaceEditAmenities";
import OfficeSpaceProperty from "../../modals/commercial-property/office-space/officeSpaceProperty";
import OfficeSpaceDescription from "../../modals/commercial-property/office-space/officespaceDescription";
import OfficeSpaceUploadPhoto from "../../modals/commercial-property/office-space/officespaceUploadPhoto";
import OfficespaceDeletePhoto from "../../modals/commercial-property/office-space/officespaceDeletePhoto";
import OfficeSpaceUpdateMap from "../../modals/commercial-property/office-space/officespaceUpdateMap";
import CommercialShopFeatures from "../../modals/commercial-property/commercial-shop/commercialshopFeatures";
import CommercialShopAmenities from "../../modals/commercial-property/commercial-shop/commercialshopAmenities";
import CommercialShopAreaPrice from "../../modals/commercial-property/commercial-shop/commercialshopAreaPrice";
import CommercialShopDescription from "../../modals/commercial-property/commercial-shop/commercialshopDescription";
import CommercialShopDeletePhoto from "../../modals/commercial-property/commercial-shop/commercialshopDeletePhoto";
import CommercialShopUpdateMap from "../../modals/commercial-property/commercial-shop/commercialshopUpdateMap";
import CommercialShopUploadPhoto from "../../modals/commercial-property/commercial-shop/commercialshopUploadPhoto";
import CommercialShowroomEditProperty from "../../modals/commercial-property/commercial-showroom/commercialshopFeatures";
import CommercialShowroomEditAmenities from "../../modals/commercial-property/commercial-showroom/commercialShowroomEditAmenities";
import CommercialShowroomAreaPrice from "../../modals/commercial-property/commercial-showroom/commercialShowroomAreaPrice";
import CommercialShowroomDescription from "../../modals/commercial-property/commercial-showroom/commercialShowroomDescription";
import CommercialShowroomUploadPhoto from "../../modals/commercial-property/commercial-showroom/commercialShowroomUploadLoadPhoto";
import CommercialShowroomDeletePhoto from "../../modals/commercial-property/commercial-showroom/commercialShowroomDeletePhoto";
import CommercialShowroomUpdateMap from "../../modals/commercial-property/commercial-showroom/commercialShowroomUpdateMap";
import WarehouseEditProperty from "../../modals/commercial-property/warehouse-property/warehouseEditProperty";
import WarehouseEditAmenities from "../../modals/commercial-property/warehouse-property/warehouseEditAmenities";
import WarehouseAreaPrice from "../../modals/commercial-property/warehouse-property/warehouseAreaPrice";
import WarehouseDescription from "../../modals/commercial-property/warehouse-property/warehouseDescription";
import WarehouseUploadPhoto from "../../modals/commercial-property/warehouse-property/warehouseUploadPhoto";
import WarehouseDeletePhoto from "../../modals/commercial-property/warehouse-property/warehouseDeletePhoto";
import WarehouseUpdateMap from "../../modals/commercial-property/warehouse-property/warehouseUpdateMap";
import IndustryBuildingFeatures from "../../modals/commercial-property/industrial-building/industrybuildingEditFeatures";
import IndustryBuildingAmenities from "../../modals/commercial-property/industrial-building/industrybuildingEditAmenities";
import IndustryBuildingAreaPrice from "../../modals/commercial-property/industrial-building/industrybuildingAreaPrice";
import IndustryBuildingDescription from "../../modals/commercial-property/industrial-building/industrybuildingDescription";
import IndustryBuildingUploadPhoto from "../../modals/commercial-property/industrial-building/industrybuildingUploadPhoto";
import IndustryBuildingDeletePhoto from "../../modals/commercial-property/industrial-building/industrybuildingDeletePhoto";
import IndustryBuildingUpdateMap from "../../modals/commercial-property/industrial-building/industrybuildingUpdateMap";
import IndustrialShedEditProperty from "../../modals/commercial-property/industrial-shed/industrialShedEditProperty";
import IndustrialShedEditAmenities from "../../modals/commercial-property/industrial-shed/industrialShedEditAmenities";
import IndustrialShedAreaPrice from "../../modals/commercial-property/industrial-shed/industrialShedAreaPrice";
import IndustrialShedDescription from "../../modals/commercial-property/industrial-shed/industrialShedDescription";
import IndustrialShedUploadPhoto from "../../modals/commercial-property/industrial-shed/industrialShedUploadPhoto";
import IndustrialShedDeletePhoto from "../../modals/commercial-property/industrial-shed/industrialShedDeletePhoto";
import IndustrialShedUpdateMap from "../../modals/commercial-property/industrial-shed/industrialShedUpdateMap";
import CommercialPlotFeatures from "../../modals/commercial-property/commercial-plot/commercialplotFeatures";
import CommercialPlotAmenities from "../../modals/commercial-property/commercial-plot/commercialplotAmenities";
import CommercialPlotAreaPrice from "../../modals/commercial-property/commercial-plot/commercialPlotAreaPrice";
import CommercialPlotDescription from "../../modals/commercial-property/commercial-plot/commercialplotDescription";
import CommercialPlotUploadPhoto from "../../modals/commercial-property/commercial-plot/commercialplotUploadPhoto";
import CommercialPlotDeletePhoto from "../../modals/commercial-property/commercial-plot/commercialplotDeletePhoto";
import CommercialPlotUpdateMap from "../../modals/commercial-property/commercial-plot/commercialplotUpdateMap";
import IndustryPlotFeatures from "../../modals/commercial-property/industrial-plot/industryPlotEditFeatures";
import IndustryPlotAmenities from "../../modals/commercial-property/industrial-plot/industryplotAmenities";
import IndustryPlotAreaPrice from "../../modals/commercial-property/industrial-plot/industryPlotAreaPrice";
import IndustryPlotDescription from "../../modals/commercial-property/industrial-plot/industryPlotDescription";
import IndustryPlotUploadPhoto from "../../modals/commercial-property/industrial-plot/industryPlotUploadPhoto";
import IndustryPlotDeletePhoto from "../../modals/commercial-property/industrial-plot/industryPlotDeletePhoto";
import IndustryPlotUpdateMap from "../../modals/commercial-property/industrial-plot/industryPlotUpdateMap";

const EditCommercial = ({ data, propertyType }) => {
  let features;
  let ament;
  switch (data) {
    case 0:
      features = officeSpaceFeatures;
      ament = OfficeSpaceAmenties;
      break;
    case 1:
      features = CoomercialShopFeatures;
      ament = CommercialShopAmenties;
      break;
    case 2:
      features = ComercialShowRoomFeatures;
      ament = CommercialShowRoomAmenties;
      break;
    case 3:
      features = GodownFeatures;
      ament = GodownAmenties;
      break;
    case 4:
      features = IndustrialBuildingFeatures;
      ament = IndustrialBuildingAmenties;
      break;
    case 5:
      features = IndustrialShedFeatures;
      ament = IndustrialShedAmenties;
      break;
    case 6:
      features = commercialPlotFeatures;
      ament = CommercialPlotAmenties;
      break;
    case 7:
      features = industrialPlotFeatures;
      ament = IndustrialPlotAmenties;
      break;
  }
  const [featureModalShow, setFeatureModalShow] = useState(false);
  const [properties, setProperties] = useState(features);
  const [amenties, setAmenties] = useState(ament);
  const [areaModal, setAreaModal] = useState(false);
  const [amenitiesModal, setAmenitiesModal] = useState(false);
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
    <>
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
                        2Nd Floor, Dejgow Building, Kannada Sahithya Parishath
                        Rd, Mysuru, Karnataka 570017
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
              <div className="d-flex  justify-content-between mt-2">
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
                {amenties.map((item, index) => {
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
                  className={`${styles.add_photo_btn} me-3 px-2 py-1 px-lg-3 fs_13  fontFam_poppins`}
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
                      <div className="mb-3">
                        <div
                          className={`fontFam_poppins ${styles.price_subheading}`}
                        >
                          Deposit Price
                        </div>
                        <div className={`fontFam_poppins ${styles.price_text}`}>
                          ₹ 1,00,000
                        </div>
                      </div>
                      <div
                        className={`fontFam_poppins ${styles.price_subheading}`}
                      >
                        Maintenance Fees
                      </div>
                      <div className={`fontFam_poppins ${styles.price_text}`}>
                        ₹ 2,000
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
              <p className={`fontFam_poppins ps-0 ps-lg-3`}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      

        {data === 0 && (
          <>
            <OfficeSpaceProperty
              show={featureModalShow}
              handleClose={() => setFeatureModalShow(false)}
            />
            <OfficeSpaceAmenities
              show={amenitiesModal}
              handleClose={() => setAmenitiesModal(false)}
            />
            <OfficespaceAreaPrice
              show={areaModal}
              handleClose={() => setAreaModal(false)}
            />
            <OfficeSpaceDescription
              show={descriptionModal}
              handleClose={() => setDescriptionModal(false)}
            />
            <OfficeSpaceUploadPhoto
              handleClose={handleClose}
              handleImageUpload={handleImageUpload}
              show={show}
            />
            <OfficespaceDeletePhoto
              deleteFn={onImageRemove}
              index={imageNumber}
              handleClose={handleDeleteModalClose}
              show={showDeleteModal}
            />

            <OfficeSpaceUpdateMap
              show={editLocation}
              handleClose={() => setEditLocation(false)}
            />
          </>
        )}

        {data === 1 && (
          <>
            <CommercialShopFeatures
              show={featureModalShow}
              handleClose={() => setFeatureModalShow(false)}
            />
            <CommercialShopAmenities
              show={amenitiesModal}
              handleClose={() => setAmenitiesModal(false)}
            />
            <CommercialShopAreaPrice
              show={areaModal}
              handleClose={() => setAreaModal(false)}
            />
            <CommercialShopDescription
              show={descriptionModal}
              handleClose={() => setDescriptionModal(false)}
            />
            <CommercialShopUploadPhoto
              handleClose={handleClose}
              handleImageUpload={handleImageUpload}
              show={show}
            />
            <CommercialShopDeletePhoto
              deleteFn={onImageRemove}
              index={imageNumber}
              handleClose={handleDeleteModalClose}
              show={showDeleteModal}
            />

            <CommercialShopUpdateMap
              show={editLocation}
              handleClose={() => setEditLocation(false)}
            />
          </>
        )}
        {data === 2 && (
          <>
            <CommercialShowroomEditProperty
              show={featureModalShow}
              handleClose={() => setFeatureModalShow(false)}
            />
            <CommercialShowroomEditAmenities
              show={amenitiesModal}
              handleClose={() => setAmenitiesModal(false)}
            />
            <CommercialShowroomAreaPrice
              show={areaModal}
              handleClose={() => setAreaModal(false)}
            />
            <CommercialShowroomDescription
              show={descriptionModal}
              handleClose={() => setDescriptionModal(false)}
            />
            <CommercialShowroomUploadPhoto
              handleClose={handleClose}
              handleImageUpload={handleImageUpload}
              show={show}
            />
            <CommercialShowroomDeletePhoto
              deleteFn={onImageRemove}
              index={imageNumber}
              handleClose={handleDeleteModalClose}
              show={showDeleteModal}
            />

            <CommercialShowroomUpdateMap
              show={editLocation}
              handleClose={() => setEditLocation(false)}
            />
          </>
        )}
        {data === 3 && (
          <>
            <WarehouseEditProperty
              show={featureModalShow}
              handleClose={() => setFeatureModalShow(false)}
            />
            <WarehouseEditAmenities
              show={amenitiesModal}
              handleClose={() => setAmenitiesModal(false)}
            />
            <WarehouseAreaPrice
              show={areaModal}
              handleClose={() => setAreaModal(false)}
            />
            <WarehouseDescription
              show={descriptionModal}
              handleClose={() => setDescriptionModal(false)}
            />
            <WarehouseUploadPhoto
              handleClose={handleClose}
              handleImageUpload={handleImageUpload}
              show={show}
            />
            <WarehouseDeletePhoto
              deleteFn={onImageRemove}
              index={imageNumber}
              handleClose={handleDeleteModalClose}
              show={showDeleteModal}
            />

            <WarehouseUpdateMap
              show={editLocation}
              handleClose={() => setEditLocation(false)}
            />
          </>
        )}
        {data === 4 && (
          <>
            <IndustryBuildingFeatures
              show={featureModalShow}
              handleClose={() => setFeatureModalShow(false)}
            />
            <IndustryBuildingAmenities
              show={amenitiesModal}
              handleClose={() => setAmenitiesModal(false)}
            />
            <IndustryBuildingAreaPrice
              show={areaModal}
              handleClose={() => setAreaModal(false)}
            />
            <IndustryBuildingDescription
              show={descriptionModal}
              handleClose={() => setDescriptionModal(false)}
            />
            <IndustryBuildingUploadPhoto
              handleClose={handleClose}
              handleImageUpload={handleImageUpload}
              show={show}
            />
            <IndustryBuildingDeletePhoto
              deleteFn={onImageRemove}
              index={imageNumber}
              handleClose={handleDeleteModalClose}
              show={showDeleteModal}
            />

            <IndustryBuildingUpdateMap
              show={editLocation}
              handleClose={() => setEditLocation(false)}
            />
          </>
        )}
        {data === 5 && (
          <>
            <IndustrialShedEditProperty
              show={featureModalShow}
              handleClose={() => setFeatureModalShow(false)}
            />
            <IndustrialShedEditAmenities
              show={amenitiesModal}
              handleClose={() => setAmenitiesModal(false)}
            />
            <IndustrialShedAreaPrice
              show={areaModal}
              handleClose={() => setAreaModal(false)}
            />
            <IndustrialShedDescription
              show={descriptionModal}
              handleClose={() => setDescriptionModal(false)}
            />
            <IndustrialShedUploadPhoto
              handleClose={handleClose}
              handleImageUpload={handleImageUpload}
              show={show}
            />
            <IndustrialShedDeletePhoto
              deleteFn={onImageRemove}
              index={imageNumber}
              handleClose={handleDeleteModalClose}
              show={showDeleteModal}
            />

            <IndustrialShedUpdateMap
              show={editLocation}
              handleClose={() => setEditLocation(false)}
            />
          </>
        )}
        {data === 6 && (
          <>
            <CommercialPlotFeatures
              show={featureModalShow}
              handleClose={() => setFeatureModalShow(false)}
            />
            <CommercialPlotAmenities
              show={amenitiesModal}
              handleClose={() => setAmenitiesModal(false)}
            />
            <CommercialPlotAreaPrice
              show={areaModal}
              handleClose={() => setAreaModal(false)}
            />
            <CommercialPlotDescription
              show={descriptionModal}
              handleClose={() => setDescriptionModal(false)}
            />
            <CommercialPlotUploadPhoto
              handleClose={handleClose}
              handleImageUpload={handleImageUpload}
              show={show}
            />
            <CommercialPlotDeletePhoto
              deleteFn={onImageRemove}
              index={imageNumber}
              handleClose={handleDeleteModalClose}
              show={showDeleteModal}
            />

            <CommercialPlotUpdateMap
              show={editLocation}
              handleClose={() => setEditLocation(false)}
            />
          </>
        )}
        {data === 7 && (
          <>
            <IndustryPlotFeatures
              show={featureModalShow}
              handleClose={() => setFeatureModalShow(false)}
            />
            <IndustryPlotAmenities
              show={amenitiesModal}
              handleClose={() => setAmenitiesModal(false)}
            />
            <IndustryPlotAreaPrice
              show={areaModal}
              handleClose={() => setAreaModal(false)}
            />
            <IndustryPlotDescription
              show={descriptionModal}
              handleClose={() => setDescriptionModal(false)}
            />
            <IndustryPlotUploadPhoto
              handleClose={handleClose}
              handleImageUpload={handleImageUpload}
              show={show}
            />
            <IndustryPlotDeletePhoto
              deleteFn={onImageRemove}
              index={imageNumber}
              handleClose={handleDeleteModalClose}
              show={showDeleteModal}
            />

            <IndustryPlotUpdateMap
              show={editLocation}
              handleClose={() => setEditLocation(false)}
            />
          </>
        )}
      </div>
    </>
  );
};

export default EditCommercial;

const officeSpaceFeatures = [
  {
    heading: "Total Floors",
    text: "45",
  },
  {
    heading: "Floor Number",
    text: "3",
  },
  {
    heading: "Pantry/Cafeteria",
    text: "Yes",
  },
  {
    heading: "Washroom",
    text: "3",
  },
  {
    heading: "Personal Washroom",
    text: "2",
  },
  {
    heading: "Transaction",
    text: "Resale",
  },
  {
    heading: "Furnishing Status",
    text: "Furnished",
  },
  {
    heading: "Status",
    text: "Ready To Move",
  },
];

const OfficeSpaceAmenties = [
  "Private Parking Space",
  "Guest Parking Spaces",
  "Play Ground",
  "Sauna Steam Room",
  "Hardwood Floors",
  "Pet Room",
  "Play Ground",
  "Lounge Area",
  "Garden Area",
];
const CoomercialShopFeatures = [
  {
    heading: "Total Floors",
    text: "45",
  },
  {
    heading: "Floor Number",
    text: "3",
  },
  {
    heading: "Pantry/Cafeteria",
    text: "Yes",
  },
  {
    heading: "Washroom",
    text: "3",
  },
  {
    heading: "Personal Washroom",
    text: "2",
  },
  {
    heading: "Transaction",
    text: "Resale",
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
    heading: "Corner Shop",
    text: "No",
  },
];

const CommercialShopAmenties = [
  "Jewelry Mart",
  "Clothing And Fashion Stores",
  "Super Markets",
  "Department Store",
  "Grocery Shop",
  "Clinics And Polyclinics",
  "Chemist And Medical Store",
  "Nursing Home",
  "Optician",
];

const ComercialShowRoomFeatures = [
  {
    heading: "Total Floors",
    text: "45",
  },
  {
    heading: "Floor Number",
    text: "3",
  },
  {
    heading: "Pantry/Cafeteria",
    text: "Yes",
  },
  {
    heading: "Washroom",
    text: "3",
  },
  {
    heading: "Personal Washroom",
    text: "2",
  },
  {
    heading: "Transaction",
    text: "Resale",
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
    heading: "Corner Shop",
    text: "No",
  },
];

const CommercialShowRoomAmenties = [
  "Jewelry Mart",
  "Clothing And Fashion Stores",
  "Super Markets",
  "Department Store",
  "Grocery Shop",
  "Clinics And Polyclinics",
  "Chemist And Medical Store",
  "Nursing Home",
  "Optician",
];
const GodownFeatures = [
  {
    heading: "Total Floors",
    text: "45",
  },
  {
    heading: "Floor Number",
    text: "3",
  },
  {
    heading: "Floors Allowed For Construction",
    text: "4",
  },
  {
    heading: "Washroom",
    text: "3",
  },
  {
    heading: "Personal Washroom",
    text: "2",
  },
  {
    heading: "Transaction",
    text: "Resale",
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
    heading: "Width Of Road Facing The Plot",
    text: "12m",
  },
];

const GodownAmenties = [
  "Jewelry Mart",
  "Clothing And Fashion Stores",
  "Super Markets",
  "Department Store",
  "Grocery Shop",
  "Clinics And Polyclinics",
  "Chemist And Medical Store",
  "Nursing Home",
  "Optician",
];
const IndustrialBuildingFeatures = [
  {
    heading: "Total Floors",
    text: "45",
  },
  {
    heading: "Floor Number",
    text: "3",
  },
  {
    heading: "Floors Allowed For Construction",
    text: "4",
  },
  {
    heading: "Washroom",
    text: "3",
  },
  {
    heading: "Personal Washroom",
    text: "2",
  },
  {
    heading: "Transaction",
    text: "Resale",
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
    heading: "Width Of Road Facing The Plot",
    text: "12m",
  },
];

const IndustrialBuildingAmenties = [
  "For Production Of Power",
  "Manufacturing Industries",
  "Industries Of Wood And Paper Products",
  "Petroleum Products Industries",
  "Raw Materials Mining Industries",
  "Textile Industries",
];
const IndustrialShedFeatures = [
  {
    heading: "Total Floors",
    text: "45",
  },
  {
    heading: "Floor Number",
    text: "3",
  },
  {
    heading: "Floors Allowed For Construction",
    text: "4",
  },
  {
    heading: "Washroom",
    text: "3",
  },
  {
    heading: "Personal Washroom",
    text: "2",
  },
  {
    heading: "Transaction",
    text: "Resale",
  },
  {
    heading: "Furnishing Status",
    text: "Furnished",
  },
  {
    heading: "Status",
    text: "Ready To Move",
  },
];

const IndustrialShedAmenties = [
  "For Production Of Power",
  "Manufacturing Industries",
  "Industries Of Wood And Paper Products",
  "Petroleum Products Industries",
  "Raw Materials Mining Industries",
  "Textile Industries",
];

const commercialPlotFeatures = [
  {
    heading: "No. Of Open Sides",
    text: "2",
  },
  {
    heading: "Road Facing Plot Width",
    text: "6 m",
  },
  {
    heading: "Floors Allowed For Construction",
    text: "4",
  },
  {
    heading: "Boundary Wall",
    text: "Yes",
  },
  {
    heading: "RERA Registration Status",
    text: "Yes",
  },
];

const CommercialPlotAmenties = ["Any Construction", "Industrial Construction"];
const industrialPlotFeatures = [
  {
    heading: "No. Of Open Sides",
    text: "2",
  },
  {
    heading: "Any Construction Done",
    text: "Yes",
  },
  {
    heading: "Floors Allowed For Construction",
    text: "4",
  },
  {
    heading: "Boundary Wall",
    text: "Yes",
  },
  {
    heading: "RERA Registration Status",
    text: "Yes",
  },
  {
    heading: "Corner Site",
    text: "Yes",
  },
];

const IndustrialPlotAmenties = [
  "Commercial Constructions",
  "Highway Access",
  "Industrial Construction",
  "Main Road Access",
  "Electricity Line",
];
