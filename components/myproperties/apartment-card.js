import React from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import Image from "next/image";
import styles from "../../styles/myproperties/propertyStatistics.module.css";
import Luxuries from "../../assets/images/luxuries-image.png";
import square from "../../assets/icons/square-area.svg";
import bathroom from "../../assets/icons/bathroom.svg";
import furniture from "../../assets/icons/furniture.svg";
import floor from "../../assets/icons/floor.svg";
import facing from "../../assets/icons/facing.svg";
import transaction from "../../assets/icons/transaction.svg";

const ApartmentCard = () => {
  return (
    <div className={`container-fluid`}>
      <div className={`${styles.back_iocn} ps-lg-5 pt-lg-3`}>
        <span>
          {" "}
          <Image src={backIcon} />
          <span className={`${styles.back_text} ms-2 `}>Back</span>{" "}
        </span>
      </div>
      <div className={`${styles.property_heading} ps-lg-5 pt-lg-2`}>
        Property Statistics
      </div>
      <hr className={`ms-5`} />
      <div className="d-flex justify-content-center">
        <div className={`${styles.card_body} card mb-3  `}>
          <div className="row g-0 ">
            <div className="col-lg-3 col-md-3">
              <div className={`position-relative`}>
                <Image
                  src={Luxuries}
                  className={`${styles.image_style} img-fluid rounded-start p-3`}
                  alt="..."
                  layout="responsive"
                  objectFit="cover"
                />
                <div className={`${styles.luxuries} ps-3 pe-3`}>Luxuries</div>
                <div
                  className={`${styles.posted_on} d-flex flex-column ps-lg-3 pb-lg-3`}
                >
                  <span>Posted On </span>
                  <span>20 June 2020</span>
                </div>
              </div>
            </div>
            <div className=" col-lg-9 col-md-9">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9  ">
                    <div className={`d-flex `}>
                      <div className={`${styles.flat_heading} p-3`}>
                        2BHK flat in Vijayanagar, Mysuru
                      </div>
                      {/* <div
                        className={`${styles.under_construction_heading} ps-2 pe-2 pt-1 pb-1 ms-2 text-nowrap`}
                      >
                        Under Construction
                      </div> */}
                    </div>
                    <div className={`d-flex mb-4`}>
                      <span className="">
                        <i
                          className={`${styles.address_icon} ri-map-pin-line`}
                        ></i>
                      </span>
                      <span className={`${styles.address_heading} ms-1`}>
                        2Nd Floor, Dejgow Building, Kannada Sahithya Parishath
                        Rd, Mysuru, Karnataka 570017
                      </span>
                    </div>

                    <div>
                      <div className={`container text-left`}>
                        <div className="row">
                          <div
                            className={`${styles.card_images} col-lg-4 d-flex`}
                          >
                            <Image
                              src={square}
                              alt=""
                              className={`${styles.cards_images}`}
                            />
                            <div className="d-flex flex-column">
                              <span className={`${styles.super_area} ms-2`}>
                                Super Area
                              </span>
                              <span className={`${styles.super_area_sub} ms-2`}>
                                2400Sqft
                              </span>
                            </div>
                          </div>
                          <div
                            className={`${styles.card_images} col-lg-4 d-flex`}
                          >
                            <Image
                              src={bathroom}
                              alt=""
                              className={`${styles.cards_images}`}
                            />
                            <div className="d-flex flex-column">
                              <span className={`${styles.super_area} ms-2`}>
                                Bathrooms
                              </span>
                              <span className={`${styles.super_area_sub} ms-2`}>
                                3
                              </span>
                            </div>
                          </div>
                          <div
                            className={`${styles.card_images} col-lg-4 d-flex`}
                          >
                            <Image
                              src={furniture}
                              alt=""
                              className={`${styles.cards_images}`}
                            />
                            <div className="d-flex flex-column">
                              <span className={`${styles.super_area} ms-2`}>
                                Furnishing Status
                              </span>
                              <span className={`${styles.super_area_sub} ms-2`}>
                                Furnished
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className={`container text-left mt-lg-3`}>
                        <div className="row ">
                          <div
                            className={`${styles.card_images} col-lg-4 d-flex`}
                          >
                            <Image
                              src={floor}
                              alt=""
                              className={`${styles.cards_images}`}
                            />
                            <div className="d-flex flex-column">
                              <span className={`${styles.super_area} ms-2`}>
                                Floor
                              </span>
                              <span className={`${styles.super_area_sub} ms-2`}>
                                3 out of 15
                              </span>
                            </div>
                          </div>
                          <div
                            className={`${styles.card_images} col-lg-4 d-flex`}
                          >
                            <Image
                              src={facing}
                              alt=""
                              className={`${styles.cards_images}`}
                            />
                            <div className="d-flex flex-column">
                              <span className={`${styles.super_area} ms-2`}>
                                Facing
                              </span>
                              <span className={`${styles.super_area_sub} ms-2`}>
                                3
                              </span>
                            </div>
                          </div>
                          <div
                            className={`${styles.card_images} col-lg-4 d-flex`}
                          >
                            <Image
                              src={transaction}
                              alt=""
                              className={`${styles.cards_images}`}
                            />
                            <div className="d-flex flex-column">
                              <span className={`${styles.super_area} ms-2`}>
                                Trasactions
                              </span>
                              <span className={`${styles.super_area_sub} ms-2`}>
                                Resale
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
