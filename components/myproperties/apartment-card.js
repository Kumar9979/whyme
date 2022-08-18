import React, { useState } from "react";
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
import Delete from "../../assets/icons/delete.svg"
import Edit from "../../assets/icons/edit-icon.svg"

const ApartmentCard = () => {
  const [ReadLess, setReadLess] = useState(false);

  const text = ` Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Diam. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Diam. `;
  const allText = ReadLess === true ? text : text.slice(0, 122);

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
      <hr className={`ms-lg-5`} />
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
                  className={`${styles.posted_on} d-flex flex-column ps-3 pb-lg-3`}
                >
                  <span>Posted On </span>
                  <span>20 June 2020</span>
                </div>
              </div>
            </div>
            <div className=" col-lg-9 col-md-9">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-9 col-md-9">
                    <div className={`d-flex `}>
                      <div
                        className={`${styles.flat_heading} pt-3 ps-3 ps-lg-0`}
                      >
                        2BHK flat in Vijayanagar, Mysuru
                      </div>
                      {/* <div
                        className={`${styles.under_construction_heading} ps-2 pe-2 pt-1 pb-1 ms-2 text-nowrap`}
                      >
                        Under Construction
                      </div> */}
                    </div>
                    <div className={`d-flex mb-3`}>
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
                      <div className={`container-fluid text-left`}>
                        <div className="row">
                          {ameneties.map((item, index) => {
                            return (
                              <div className={`col-md-4 d-flex mb-3`}>
                                <div className={`${styles.imageContainer}`}>
                                  <Image
                                    className={`${styles.cards_images}`}
                                    src={item.image}
                                    alt=""
                                    layout="fixed"
                                  />
                                </div>

                                <div className="d-flex flex-column">
                                  <span
                                    className={`${styles.super_area} d-inline-block text-truncate ms-2 `}
                                  >
                                    {item.heading}
                                  </span>
                                  <span
                                    className={`${styles.super_area_sub} ms-2`}
                                  >
                                    {item.amenity}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10 ps-3 ps-lg-0">
                      <p className={`${styles.lorem_text}`}>
                        {allText}
                        <button
                          className={`${styles.readmore_btn}`}
                          onClick={() => setReadLess(!ReadLess)}
                        >
                          {ReadLess === true ? "Read less" : "...Read more"}
                        </button>
                      </p>
                    </div>
                    
                  </div>

                  <div className="container-fluid col-lg-3 col-md-3 position-relative">
                    <div className="text-end me-4">
                      <button
                        className={`${styles.verfied_btn} btn btn-online ps-3 pe-3 mt-3 mb-2 pt-0 pb-0`}
                      >
                        Verified
                      </button>
                    </div>
                    <div className="text-end me-4">
                      <div className={`${styles.rupee_text} `}><span>₹ 30 Lac</span></div>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="row d-flex float-end">
              <div className={`${styles.edit_delete} d-flex`}>
                    <div className={`${styles.icon} d-flex`}>
                        <button className={`${styles.delete_icon } `}><span className={`${styles.delete_icon} `}><Image
                              src={Edit}
                              alt=""
                              
                            /></span> <span className="">Delete</span></button>
                    </div>
                        <div className={`${styles.delete} d-flex`}>
                        <button className={`${styles.delete_icon } `}><span className={`${styles.delete_icon} `}><Image
                              src={Delete}
                              alt=""
                              
                            /></span> <span className="">Delete</span></button>
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

const ameneties = [
  {
    image: square,
    heading: "Super Area",
    amenity: "2400sqft",
  },
  {
    image: bathroom,
    heading: "Bathrooms",
    amenity: "3",
  },
  {
    image: furniture,
    heading: "Furnishing Status",
    amenity: "Furnished",
  },
  {
    image: floor,
    heading: "Floor",
    amenity: "3 out of 15",
  },
  {
    image: facing,
    heading: "Facing",
    amenity: "3",
  },
  {
    image: transaction,
    heading: "Transactions",
    amenity: "Resale",
  },
];
