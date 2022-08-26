import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/propertydetails/imagegrid.module.css";
import proptertyimagegrid2 from "../../assets/images/proptertyimagegrid2.png";
import proptertyimagegrid1 from "../../assets/images/proptertyimagegrid1.png";
import proptertyimagegrid3 from "../../assets/images/proptertyimagegrid3.png";
import proptertyimagegrid4 from "../../assets/images/proptertyimagegrid4.png";
import proptertyimagegrid5 from "../../assets/images/proptertyimagegrid5.png";
import proptertyimagegrid6 from "../../assets/images/proptertyimagegrid6.png";
import save from "../../assets/icons/save.svg";
import { Modal, Button } from "react-bootstrap";
import arrowleft from "../../assets/images/carouselArrowL.svg";
import arrowright from "../../assets/images/carouselArrowR.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import location from "../../assets/icons/location-icon.svg";
import menu from "../../assets/images/menu.svg";
import LocationIcon from "../../assets/icons/locationIcon";
import calling from "../../assets/icons/calling.svg";
import saved from "../../assets/icons/saved.svg";

const ImageGrid = () => {
  const [mobile, setMobile] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 992) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [isVisible, setIsVisible] = useState(false);

  const handleShow = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);
  const number = 10;
  return (
    <div className={`${styles.property_details} p-4 mt-lg-4`}>
      <div className="d-flex justify-content-between ">
        <div className="col-11">
          <div className="d-flex align-items-center">
            <p
              className={`${styles.property_area} m-0 fs_22 fw_600 fontFam_poppins me-lg-2 me-0 `}
            >
              3BHK Apartment in Vijayanagar, Mysuru
            </p>
            <div
              className={`${styles.construction_company} px-1 fs_12 me-2 fw_500 fontFam_poppins d-none d-lg-block`}
            >
              Project by Brigade
            </div>
            <div
              className={`${styles.ready_apartment} px-1 fs_12 fw_500 fontFam_poppins d-none d-lg-block`}
            >
              Ready to move
            </div>
          </div>
          <p
            className={`${styles.property_location} px-1 fs_12 fw_500 fontFam_poppins`}
          >
            <span className="pe-1">
              {" "}
              {/* <Image src={location} alt="Picture of the author"
              width={12}
              height={12} /> */}
              <LocationIcon fill="#1D72DB" />
            </span>
            2Nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd, Mysuru,
            Karnataka 570017
          </p>
        </div>

        <button
          className={`${styles.property_share_report} pe-3 d-flex justify-content-end  align-items-top  col-1`}
        >
          <Image
            src={menu}
            alt="Picture of the author"
            className={`${styles.menu} p-0`}
          />
        </button>
      </div>
      <div className="d-flex d-block d-lg-none pb-3">
        <div
          className={`${styles.construction_company} px-1  fs_12 me-2 fw_500 fontFam_poppins `}
        >
          Project by Brigade
        </div>
        <div
          className={`${styles.ready_apartment} px-1 fs_12   fw_500 fontFam_poppins`}
        >
          Ready to move
        </div>
      </div>
      {mobile ? (
        <div className="position-relative">
          <Image
            src={proptertyimagegrid2}
            alt="Picture of the author"
            width={1000}
            height={700}
          />
          <div
            onClick={handleShow}
            className={`${styles.mobile_seemore_button} position-absolute px-3 py-2 fw_600`}
          >
            See More
          </div>{" "}
        </div>
      ) : (
        <div className={`row  d-flex justify-content-center`}>
          <div className={`col-6 p-1`}>
            <div className="pb-1">
              <Image
                src={proptertyimagegrid2}
                alt="Picture of the author"
                width={500}
                height={350}
              />
            </div>

            <div className={`row`}>
              <div className={`col-6 pt-1 pe-1`}>
                <Image
                  src={proptertyimagegrid4}
                  alt="Picture of the author"
                  width={250}
                  height={300}
                />
              </div>
              <div className={`col-6 pt-1 ps-1`}>
                <Image
                  src={proptertyimagegrid5}
                  alt="Picture of the author"
                  width={250}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className={`col-6 p-1`}>
            <div className={`row`}>
              <div className={`col-6 pb-1 pe-1`}>
                <Image
                  src={proptertyimagegrid1}
                  alt="Picture of the author"
                  width={250}
                  height={300}
                />
              </div>
              <div className={`col-6 pb-1 ps-1 position-relative`}>
                <Image
                  src={proptertyimagegrid6}
                  alt="Picture of the author"
                  width={250}
                  height={300}
                />
                <div
                  onClick={handleShow}
                  className={`${styles.seemore_button} position-absolute px-3 py-2 fw_600`}
                >
                  See More
                </div>{" "}
              </div>
            </div>
            <div className="pt-1">
              <Image
                src={proptertyimagegrid3}
                alt="Picture of the author"
                width={500}
                height={350}
              />
            </div>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-between pt-2">
        <div
          className={` d-flex align-items-center fw_700 fs_28 fontFam_poppins ${styles.property_price} `}
        >
          ₹ 70Lac
          <span
            className={`${styles.property_price_per_sqft} pt-2 fs_15 fw_600 fontFam_poppins ps-2 d-none d-lg-block `}
          >
            ₹ 2920 per Sqft
          </span>
        </div>

        <div className="d-flex align-items-center ">
          <button
            onClick={() => setLiked(!liked)}
            className={
              liked
                ? `${styles.property_saved} fw_600 fs_14 fontFam_poppins  d-flex align-items-center px-0 px-lg-4 py-0 py-lg-2 justify-content-center`
                : `${styles.property_save} fw_600 fs_14 fontFam_poppins  d-flex align-items-center px-0 px-lg-4 py-0 py-lg-2 justify-content-center`
            }
          >
            <span className="d-flex align-items-center pe-0 pe-lg-2">
              {" "}
              <Image
                src={liked ? saved : save}
                alt="Picture of the author"
                width={20}
                height={20}
              />
            </span>
            <span className="d-none d-lg-block">
              {liked ? "saved" : "save"}
            </span>
          </button>

          {mobile ? (
            <div className="ps-3  ">
              <Image
                src={calling}
                alt="Picture of the author"
                width={30}
                height={30}
              />
            </div>
          ) : (
            <button
              className={`${styles.property_owner_contact} fs_14 fw_400 fontFam_poppins px-5 py-2 ms-2`}
            >
              Contact
            </button>
          )}
        </div>
      </div>

      <Modal

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={isVisible}
        onHide={handleClose}
      >
        <Modal.Body>
          <div className="d-flex align-items-center justify-content-between">
            <p
              className={`${styles.property_area_corousel} m-0 fs_22 fw_600 fontFam_poppins me-lg-2 me-0 `}
            >
              3BHK Apartment in Vijayanagar, Mysuru
            </p>
            <button
              onClick={handleClose}
              className={`${styles.closeBtn} btn float-end`}
            >
              <i class="ri-close-circle-fill"></i>
            </button>
          </div>

          <Carousel
            infiniteLoop={true}
            autoPlay
            useKeyboardArrows
            transitionTime={1000}
            renderArrowPrev={renderArrow("prev")}
            renderArrowNext={renderArrow("next")}
          >
            {[...Array(number)].map((item, index) => {
              return (
                <div key={index}>
                  <img
                    alt=""
                    src="https://images.pexels.com/photos/920384/pexels-photo-920384.jpeg"
                  />
                </div>
              );
            })}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ImageGrid;

const renderArrow = (direction) => (onClickHandler, shouldBeEnabled, label) => {
  if (!shouldBeEnabled) {
    return;
  }
  const styles = {
    position: "absolute",
    top: "50%",
    zIndex: 2,
  };

  if (direction === "prev") {
    styles.left = 10;
  } else {
    styles.right = 10;
  }

  return (
    <div style={styles} type="button" onClick={onClickHandler}>
      {direction === "prev" ? (
        <Image src={arrowleft} />
      ) : (
        <Image src={arrowright} />
      )}
    </div>
  );
};
