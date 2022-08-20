import React from "react";
import styles from "../../styles/myproperties/requestCallBack.module.css";
import MoreIcon from "../../assets/icons/more-icon.svg";
import Image from "next/image";

const RequestCallback = () => {
  return (
    <div>
      <div className={`${styles.request_callback_heading} ps-4 mt-4 pe-2`}>
        <span>Requested Callbacks</span>
        <div
          className={`${styles.request_callback_table_container} d-flex justifiy-content-between`}
        >
          <table className={`${styles.request_callback_table} w-100 mt-4`}>
            <tbody>
              <tr className={`${styles.table_heading}`}>
                <th
                  className={`${styles.table_heading_name} pe-4 py-2 py-lg-3 text-nowrap fs_18 ps-3 fs_sm_15 fw_500`}
                >
                  Name
                </th>
                <th
                  className={`${styles.table_heading_name} pe-4 py-2 py-lg-3 text-nowrap fs_18 ps-3 fs_sm_15 fw_500`}
                >
                  Phone Number
                </th>
                <th
                  className={`${styles.table_heading_name} pe-4 py-2 py-lg-3 tex-nowrap fs_18 ps-3 fs_sm_15 fw_500`}
                >
                  Date
                </th>
                <th
                  className={`${styles.table_heading_name}  py-2 py-lg-3 tex-nowrap fs_18 ps-3 fs_sm_15 fw_500`}
                ></th>
              </tr>
              {initState.map((item, index) => {
                return (
                  <tr
                    style={
                      index % 2 === 0
                        ? { backgroundColor: "#fff" }
                        : { backgroundColor: "#E8EEF2" }
                    }
                    className={`${styles.table_data}`}
                  >
                    <td
                      className={`${styles.table_data_name} text-nowrap fs_18 ps-3 fs_sm_15 fw_400 py-2 py-lg-3`}
                    >
                      {item.name}{" "}
                    </td>
                    <td
                      className={`${styles.table_data_name} text-nowrap fs_18 ps-3 fs_sm_15 fw_400 py-2 py-lg-3`}
                    >
                      {item.phoneNumber}
                    </td>
                    <td
                      className={`${styles.table_data_name} text-nowrap fs_18 ps-3 fs_sm_15 fw_400 py-2 py-lg-3 pe-4`}
                    >
                      {item.Date}
                    </td>
                    <td className={` text-nowrap `}>
                      <div class="dropdown">
                        <button
                          class=" dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <Image src={MoreIcon} />
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          
                      
                        </ul>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestCallback;

const initState = [
  { name: "Harish", phoneNumber: "+91 9876543210", Date: "27 Aug 2021" },
  { name: "Harish", phoneNumber: "+91 9876543210", Date: "27 Aug 2021" },
  { name: "Harish", phoneNumber: "+91 9876543210", Date: "27 Aug 2021" },
];
