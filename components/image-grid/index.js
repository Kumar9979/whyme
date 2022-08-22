import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/propertydetails/imagegrid.module.css";
import proptertyimagegrid2 from "../../assets/images/proptertyimagegrid2.png";
import proptertyimagegrid1 from "../../assets/images/proptertyimagegrid1.png";
import proptertyimagegrid3 from "../../assets/images/proptertyimagegrid3.png";
import proptertyimagegrid4 from "../../assets/images/proptertyimagegrid4.png";
import proptertyimagegrid5 from "../../assets/images/proptertyimagegrid5.png";
import proptertyimagegrid6 from "../../assets/images/proptertyimagegrid6.png";
import { Modal, Button } from "react-bootstrap";
import arrowleft from "../../assets/images/carouselArrowL.svg";
import arrowright from "../../assets/images/carouselArrowR.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImageGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShow = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);
  const number = 20;
  return (
    <div>
      <div className={`row mt-5 mt-lg-2 d-flex justify-content-center`}>
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
              
                <div onClick={handleShow}
                  className={`${styles.seemore_button} position-absolute px-3 py-2`}
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
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={isVisible}
        onHide={handleClose}
      >
        <Modal.Body>
          {" "}
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
                <div>
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
    zIndex: 2
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
