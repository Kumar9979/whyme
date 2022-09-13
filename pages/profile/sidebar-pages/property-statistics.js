import { React } from "react";
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
  return (
    <ProfileLayout>
      <div className={`${styles.recent_activities} mt-5 pt-5`}>
        <div
          className={`${styles.recent_activities_card} p-lg-4 mt-3 mt-lg-3 p-0   position-sm-fixed`}
        >
          <div className="d-flex align-items-center px-lg-0 px-4">
            <button
              className={`${styles.arrow_left_button} d-flex align-items-center p-0`}
            >
              <div className={`${styles.imagesize}`}>
                <Image
                  src={arrow_left}
                  alt="Picture of the author"
                  width={20}
                />
              </div>
            </button>
            <span
              className={`${styles.edit_profile_heading} fs_20 fs_md_14 fw_500 ms-2 w-100 justify-content-center`}
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
          <div className="p-4">
            <span className={`fs_20 fw_500 fontFam_poppins color_cloudBurst`}>
              Property Analytics
            </span>
            <div className={`col-lg-12  col-md-12 ${styles.tableSize}`}>
              <div className={`row mt-3  d-flex justify-content-center `}>
                {statistics.map((item, index) => {
                  return (
                    <div className="col-12 col-lg-4">
                      <div
                        className={`d-flex align-items-center ${styles.container} ps-2 py-3 mb-3 `}
                      >
                        <Image
                          src={item.image}
                          alt="Picture of the author"
                          width={50}
                        />
                        <div className="d-flex flex-column ms-3">
                          <span
                            className={`fs_20 fw_500 fontFam_poppins color_cloudBurst text-nowrap`}
                          >
                            {item.view}
                          </span>
                          <span
                            className={`fs_15 fw_400 fontFam_poppins color_grey text-nowrap`}
                          >
                            {item.text}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h1
                className={`fs_24 mt-4 fw_500 fontFam_poppins color_cloudBurst`}
              >
                Request Callbacks
              </h1>
              <div
                className={`d-flex justify-content-center justify-content-lg-start ${styles.table_container}`}
              >
                {" "}
                <table className={`${styles.table} p-5`}>
                  <thead
                    className={`${styles.table_heading}  w-100 border-none `}
                  >
                    <tr className={`fs_18 color_white fontFam_poppins fw_400 `}>
                      <th scope="col-1 ps-2">
                        <span className="ps-2">#</span>
                      </th>
                      <th scope="col-2">Date</th>
                      <th scope="col-3">Name</th>
                      <th scope="col-3">Phone Number</th>
                      <th scope="col-3"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {statisticsTable.map((item, index) => {
                      return (
                        <tr className={`${styles.statistics_card_width}`}>
                          <td scope="row" className={`py-2`}>
                            <span className="color_cloudBurst fs_15 fw_500 fontFam_poppins ps-2 pb-5">
                              {item.slno}
                            </span>
                          </td>
                          <td >
                            <span className="color_cloudBurst fs_15 fontFam_poppins fw_500">
                              {item.date}
                            </span>
                          </td>
                          <td>
                            <span className="color_cloudBurst fs_15 fontFam_poppins fw_500">
                              {item.name}
                            </span>
                          </td>
                          <td>
                            <span className="color_cloudBurst fs_15 fontFam_poppins fw_500">
                              {item.phone}
                            </span>
                          </td>
                          <td>
                            <button
                              className={`${styles.call_button} color_dark_blue`}
                            >
                              <Image
                                src={item.phoneicon}
                                alt="Picture of the author"
                                width={15}
                              />
                              <span className="ms-2">Call</span>
                            </button>
                            <button
                              className={`${styles.whatsapp_button} color_dark_blue ms-5`}
                            >
                              <Image
                                src={item.whatsappicon}
                                alt="Picture of the author"
                                width={15}
                              />
                              <span className="ms-2">Whatsapp</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
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
    text: "Today Views",
  },
  {
    image: total,
    view: "23",
    text: "Total views",
  },
  {
    image: request,
    view: "28",
    text: "Total views",
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
    slno: "05",
    date: "29 Aug 2022",
    name: "Amal Sabu",
    phone: "+91 7894561230",
    phoneicon: calling,
    whatsappicon: whatsapp,
    call: "call",
    whatsapp: "whatsapp",
  },
];
