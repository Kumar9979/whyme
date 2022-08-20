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
import Delete from "../../assets/icons/delete.svg";
import Edit from "../../assets/icons/edit-icon.svg";
import Location from "../../assets/icons/location-icon.svg";
import Tick from "../../assets/icons/tick-icon.svg";

const ApartmentCard = () => {
  const [ReadLess, setReadLess] = useState(false);

  const text = ` Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Diam. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Diam. `;
  const allText = ReadLess === true ? text : text.slice(0, 122);
 
  return (
    <div className={`ms-4 ms-lg-0`}>
        <div className="d-flex justify-content-start">
          <div className={`${styles.card_container} card `}>
            <div className={`${styles.card_body} card-body p-lg-2`}>
              <div className="d-flex">
                <div className={`${styles.luxuries_image}`}>
                  <Image
                    src={Luxuries}
                    className={`${styles.luxuries_img}`}
                    alt="luxuries-image"
                    layout="responsive"
                    objectFit="cover"
                  />
                  <div className={`${styles.verified_mobile}  px-2`}>
                    <div className="d-flex justify-content-center">
                      <div className={`${styles.tick_icon}`}>
                        <span>
                          {" "}
                          <Image src={Tick} />
                        </span>
                      </div>
                      <div>
                        <span className={`${styles.verified_text} ms-1`}>
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.posted_on} d-flex flex-column pt-2`}
                  >
                    <span>Posted On </span>
                    <span>20 June 2020</span>
                  </div>
                </div>
                <div className={`${styles.address_details} `}>
                  <div className={`d-flex `}>
                    <div className={`${styles.flat_heading} ps-2 ps-lg-3`}>
                      2BHK flat in Vijayanagar, Mysuru
                    </div>
                  </div>
                  <div className={`d-flex mb-3 ms-2 ms-lg-3`}>
                    <span className={`${styles.location_icon}`}>
                      <Image src={Location} />
                    </span>
                    <span className={`${styles.address_heading} ms-1`}>
                      2Nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd,
                      Mysuru, Karnataka 570017
                    </span>
                  </div>
                  <div
                    className={`${styles.posted_on_mobile} d-flex flex-column ps-2 pt-3`}
                  >
                    <span>
                      Posted On <br />
                      20 June 2020
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className={`${styles.rupee_text_mobile} ps-2 pt-1`}>
                      ₹ 30 Lac
                    </div>
                    <div className="d-flex">
                      <div
                        className={`${styles.edit_delete_mobile} d-flex ms-5`}
                      >
                        <div className={`${styles.icon} d-flex`}>
                          <button className={`${styles.edit_btn}  ps-2 pe-2`}>
                            <span className={`${styles.edit_icon} `}>
                              <Image src={Edit} alt="" />
                            </span>
                          </button>
                          <div className={`${styles.delete} ms-1 `}>
                            <button
                              className={`${styles.delete_btn} ps-2 pe-2 `}
                            >
                              <span className={`${styles.delete_icon} `}>
                                <Image src={Delete} alt="" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.flat_details}`}>
                    <div className={`${styles.ameneties} d-flex`}>
                      {ameneties.map((item, index) => {
                        return (
                          <div className={` ms-lg-3 d-flex mb-3`}>
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
                              <span className={`${styles.super_area_sub} ms-2`}>
                                {item.amenity}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className={`${styles.ameneties2} d-flex`}>
                      {ameneties2.map((item, index) => {
                        return (
                          <div className={` ms-lg-3 d-flex mb-3`}>
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
                              <span className={`${styles.super_area_sub} ms-2`}>
                                {item.amenity}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className={`${styles.lorem_text_container} ps-2 ps-lg-3`}
                  >
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
                <div
                  className={`${styles.edit_delete_container} positive-relative`}
                >
                  <div className={`${styles.verified} d-flex px-2 pb-1`}>
                    <div className={`${styles.tick_icon}`}>
                      <Image src={Tick} />
                    </div>
                    <div>
                      <span className={`${styles.verified_text} ms-1`}>
                        Verified
                      </span>
                    </div>
                  </div>

                  <div className={`${styles.rupee_text} text-end  `}>
                    ₹ 30 Lac
                  </div>
                  <div className={`${styles.edit_delete} d-flex`}>
                    <div className={`${styles.icon} d-flex`}>
                      <button className={`${styles.edit_btn} px-3 `}>
                        <span className={`${styles.edit_icon} `}>
                          <Image src={Edit} alt="" />
                        </span>{" "}
                        <span className="">Edit</span>
                      </button>
                    </div>
                    <div className={`${styles.delete} d-flex ms-3  `}>
                      <button
                        className={`${styles.delete_btn} ps-3 pe-3 pt-1 pb-1`}
                      >
                        <span className={`${styles.delete_icon} `}>
                          <Image src={Delete} alt="" />
                        </span>{" "}
                        <span className="">Delete</span>
                      </button>
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
];

const ameneties2 = [
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
