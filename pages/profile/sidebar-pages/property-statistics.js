import { React, useState, useEffect, useRef } from "react";
import ProfileLayout from "../../../components/sidebarLayout/Sidebar";
import styles from "../../../styles/profile/sidebar-pages/property-statistics.module.css";
import arrow_left from "../../../assets/images/arrow_left.svg";
import Image from "next/image";
import tick from "../../../assets/icons/profile-icons/tick.svg";
import report from "../../../assets/images/about-property-images/report_icon.svg";
import request from "../../../assets/icons/profile-icons/request.svg";
import today from "../../../assets/icons/profile-icons/today_view.svg";
import total from "../../../assets/icons/profile-icons/total_view.svg";
import calling from "../../../assets/icons/calling.svg";
import whatsapp from "../../../assets/icons/profile-icons/whatsapp.svg";

const PropertyStatistics = () => {
  const ref = useRef();
  const onScroll = (scroll) => {
    ref.current.scrollLeft += scroll;
  };
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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
  return (
    <ProfileLayout>
      <div className={`${styles.recent_activities} mt-5 pt-5`}>
        <div
          className={`${styles.recent_activities_card} p-lg-4 mt-3 mt-lg-3 p-0   position-sm-fixed`}
        >
          <div className="d-flex px-lg-0 px-4">
            <button
              className={`${styles.arrow_left_button} d-flex align-items-center ustify-content-center p-0`}
            >
              <div
                className={`${styles.imagesize} d-flex align-items-center justify-content-center`}
              >
                <Image
                  src={arrow_left}
                  alt="Picture of the author"
                  width={20}
                />
              </div>
            </button>
            <span
              className={`${styles.edit_profile_heading} fs_20 fs_md_14 fw_500 ms-2 w-100 `}
            >
              Property Statistics - 2BHK flat in Vijayanagar, Mysuru
              <span
                className={`${styles.verified_button} fs_12 py-1 fw_400 fontFam_poppins color_white px-2 text-nowrap ms-2`}
              >
                {" "}
                <Image src={tick} alt="Picture of the author" width={13} />{" "}
                Verified
              </span>
            </span>
          </div>
          <hr className={`${styles.edit_horizontal_line}`}></hr>
          <div className="p-md-3">
            <span
              className={`fs_20 fw_500 fontFam_poppins color_cloudBurst px-2`}
            >
              Property Analytics
            </span>
            <div className={`col-lg-9  col-md-12 ${styles.tableSize}`}>
              {mobile ? (
                <div className={`row mt-3  d-flex justify-content-center px-2`}>
                  {statistics.map((item, index) => {
                    return (
                      <div className="col-4">
                        <div
                          className={`d-flex  flex-column justify-content-center ${styles.container}`}
                        >
                          <span
                            className={`fs_24 fw_500 ps-2 fontFam_poppins color_cloudBurst text-wrap pb-2`}
                          >
                            {item.view}
                          </span>

                          <div className="d-flex  align-items-center ps-2">
                            <Image
                              src={item.image}
                              alt="Picture of the author"
                              width={25}
                              height={25}
                            />

                            <p
                              className={`fs_9 ps-2 fw_400 fontFam_poppins color_grey text-wrap`}
                            >
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className={`row mt-3  d-flex justify-content-center `}>
                  {statistics.map((item, index) => {
                    return (
                      <div className="col-4">
                        <div
                          className={`  d-flex align-items-center  ${styles.container} ps-2 py-3 mb-3 `}
                        >
                          <Image
                            src={item.image}
                            alt="Picture of the author"
                            width={50}
                          />
                          <div className="d-flex flex-column ms-3">
                            <span
                              className={`fs_20 fw_500 fontFam_poppins color_cloudBurst text-wrap`}
                            >
                              {item.view}
                            </span>
                            <span
                              className={`fs_15 fw_400 fontFam_poppins color_grey text-wrap`}
                            >
                              {item.text}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {mobile ? (
                <div>
                  <h1
                    className={`fs_14 py-2 w-100 fontFam_poppins mt-3 ps-4 color_light_green fw_600  ${styles.dates}`}
                  >
                    Yesterday
                  </h1>
                  {contact.map((item, index) => {
                    return (
                      <div
                        className={`${styles.contacted_container} mx-4 py-2 px-2 mt-4`}
                      >
                        <div className="row">
                          <div className="col-5">
                            <h1 className="fs_12 fontFam_poppins color_grey1 fw_500 text-nowrap">
                              Contact Info
                            </h1>
                            <h2 className="fs_12 fontFam_poppins color_black fw_500">
                              {item.name}
                            </h2>
                            <h2 className="fs_12 fontFam_poppins color_black fw_500 text-nowrap">
                              {item.phone}
                            </h2>
                          </div>
                          <div className="col-7">
                            <div
                              className={`d-flex align-items-center justify-content-end  pb-2 ${styles.button_position}`}
                            >
                              <button className={`${styles.calling_button}`}>
                                <div className="d-flex align-items-center">
                                  <div
                                    className={`${styles.calling_icon_size}`}
                                  >
                                    <Image
                                      src={calling}
                                      alt="Picture of the author"
                                      width={15}
                                      height={15}
                                    />
                                  </div>
                                  <span className="color_dark_blue fs_12 fw_500 fontFaam_poppins ms-1">
                                    Call
                                  </span>
                                </div>
                              </button>
                              <button
                                className={`${styles.calling_button} ms-2`}
                              >
                                <div className="d-flex align-items-center">
                                  <div
                                    className={`${styles.whatsapp_icon_size} d-flex align-items-center`}
                                  >
                                    {" "}
                                    <Image
                                      src={whatsapp}
                                      alt="Picture of the author"
                                      width={15}
                                    />
                                  </div>

                                  <span className="color_light_green fs_12  fw_500 fontFaam_poppins ms-1">
                                    Whatsapp
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <h1
                    className={`fs_14 py-2 w-100 fontFam_poppins mt-3 ps-4 color_light_green fw_600  ${styles.dates}`}
                  >
                    26 Aug 2022
                  </h1>
                  {contact.map((item, index) => {
                    return (
                      <div
                        className={`${styles.contacted_container} mx-4 py-2 px-2 mt-4`}
                      >
                        <div className="row">
                          <div className="col-5">
                            <h1 className="fs_12 fontFam_poppins color_grey1 fw_500 text-nowrap">
                              Contact Info
                            </h1>
                            <h2 className="fs_12 fontFam_poppins color_black fw_500">
                              {item.name}
                            </h2>
                            <h2 className="fs_12 fontFam_poppins color_black fw_500 text-nowrap">
                              {item.phone}
                            </h2>
                          </div>
                          <div className="col-7">
                            <div
                              className={`d-flex align-items-center justify-content-end  pb-2 ${styles.button_position}`}
                            >
                              <button className={`${styles.calling_button}`}>
                                <div className="d-flex align-items-center">
                                  <div
                                    className={`${styles.calling_icon_size}`}
                                  >
                                    <Image
                                      src={calling}
                                      alt="Picture of the author"
                                      width={15}
                                      height={15}
                                    />
                                  </div>
                                  <span className="color_dark_blue fs_12 fw_500 fontFaam_poppins ms-1">
                                    Call
                                  </span>
                                </div>
                              </button>
                              <button
                                className={`${styles.calling_button} ms-2`}
                              >
                                <div className="d-flex align-items-center">
                                  <div
                                    className={`${styles.whatsapp_icon_size} d-flex align-items-center`}
                                  >
                                    {" "}
                                    <Image
                                      src={whatsapp}
                                      alt="Picture of the author"
                                      width={15}
                                    />
                                  </div>

                                  <span className="color_light_green fs_12  fw_500 fontFaam_poppins ms-1">
                                    Whatsapp
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <h1
                    className={`fs_24 mt-4 fw_500 fontFam_poppins color_cloudBurst mb-3`}
                  >
                    Request Callbacks
                  </h1>

                  <div className={`position-relative`}>
                    <div className={`${styles.scroll_table}`}>
                      <table className={`${styles.table} w-100`}>
                        <tbody>
                          <tr
                            className={`${styles.table_head} color_white fs_15 fw_400 fontFam_poppins w-100`}
                          >
                            <th scope="col-1" className="ps-3">
                              #
                            </th>
                            <th scope="col-2">Date</th>
                            <th scope="col-2">Name</th>
                            <th scope="col-3">Phone Number</th>
                            <th scope="col-4"></th>
                          </tr>

                          {statisticsTable.map((item, index) => {
                            return (
                              <tr className={`${styles.table_container} `}>
                                <td className="pt-2 fs_12 pb-1 ps-3 color_cloudBurst fw_400 fontFam_poppins">
                                  {item.slno}
                                </td>
                                <td className="pt-2 fs_12 pb-1 color_cloudBurst fw_400 fontFam_poppins">
                                  {item.date}
                                </td>
                                <td className="pt-2 fs_12 pb-1 color_cloudBurst fw_400 fontFam_poppins">
                                  {item.name}
                                </td>
                                <td className="pt-2 fs_12 pb-1 color_cloudBurst fw_400 fontFam_poppins">
                                  {item.phone}
                                </td>
                                <td className="pt-2  pb-1 d-flex align-items-center ">
                                  <span
                                    className={`${styles.call_button} px-2 py-1 d-flex align-items-center`}
                                  >
                                    <Image
                                      src={item.phoneicon}
                                      alt="Picture of the author"
                                      width={15}
                                    />
                                    <span className="ms-2 color_dark_blue">
                                      {" "}
                                      Call
                                    </span>
                                  </span>
                                  <span
                                    className={`${styles.call_button} px-2 py-1 color_light_green ms-4 d-flex align-items-center`}
                                  >
                                    <Image
                                      src={item.whatsappicon}
                                      alt="Picture of the author"
                                      width={15}
                                    />
                                    <span className="ms-2"> Whatsapp</span>
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default PropertyStatistics;

const statistics = [
  {
    image: today,
    view: "22",
    text: "Today  Views",
  },
  {
    image: total,
    view: "23",
    text: "Total views",
  },
  {
    image: request,
    view: "28",
    text: "Requested Callbacks",
  },
];

const statisticsTable = [
  {
    slno: "01",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "02",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "03",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "04",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "05",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "06",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "07",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "08",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "09",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "10",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "11",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "12",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "14",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "15",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "16",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "17",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "18",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "19",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "20",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "21",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "22",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "23",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "24",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "25",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
  {
    slno: "26",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
];

const contact = [
  {
    name: "Amal",
    phone: "+91 6360749419",
  },
  {
    name: "Amal",
    phone: "+91 6360749419",
  },
  {
    name: "Amal",
    phone: "+91 6360749419",
  },
];
