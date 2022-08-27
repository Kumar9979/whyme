// import React from "react";
// import { Dropdown } from "react-bootstrap";
// import styles from "../../styles/filter-top-navbar/filterTopNavbar.module.css";
// import DropDown from "../../assets/icons/dropdown.svg"
// import Image from "next/image";

// const FilterTopNavbar = () => {
//   return (
//     <div className={`${styles.filter_navbar} px-5`}>
//       <div className={`d-flex`}>
//         <div>
//           <div className="dropdown ">
//             <button
//               className={`${styles.buy_btn} btn  my-2  `}
//               type="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//              <span className={`${styles.buy_text} fs_15 fw_500`}> Buy </span>
//               <div className={`${styles.dropdown} ms-4`}>
//               <Image
//               src={DropDown}

//               />
//               </div>

//             </button>
//             <ul className="dropdown-menu">
//               <li>
//                 <a className="dropdown-item" href="#">
//                   Action
//                 </a>
//               </li>
//               <li>
//                 <a className="dropdown-item" href="#">
//                   Another action
//                 </a>
//               </li>
//               <li>
//                 <a className="dropdown-item" href="#">
//                   Something else here
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterTopNavbar;

import { Button, Dropdown, Menu } from "antd";
import React from "react";
import styles from "../../styles/filter-top-navbar/filterTopNavbar.module.css";
import DropDown from "../../assets/icons/dropdown.svg";
import Image from "next/image";
import Rupee from "../../assets/icons/rupee-icon.svg";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Sell
          </a>
        ),
      },
    ]}
  />
);

const menu2 = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const App = () => (
  <>
    <div className={`${styles.filter_navbar} px-5`}>
      <div className={`d-flex`}>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <button className={`${styles.buy_btn} my-2 `}>
            <span className={`${styles.buy_text} fs_14 fw_500 ps-1 py-1`}>
              {" "}
              Buy
            </span>
            <span
              className={`${styles.dropdown} ms-3 d-flex align-items-center`}
            >
              <Image src={DropDown} />
            </span>
          </button>
        </Dropdown>
        <Dropdown overlay={menu2} placement="bottomLeft" arrow>
          <button className={`${styles.buy_btn} my-2 ms-2`}>
            <span className={`${styles.buy_text} fs_14 fw_500 ps-1`}> Buy</span>
            <span
              className={`${styles.dropdown} ms-4 d-flex align-items-center`}
            >
              <Image src={DropDown} />
            </span>
          </button>
        </Dropdown>
        <Dropdown overlay={menu2} placement="bottomLeft" arrow>
          <button className={`${styles.buy_btn} my-2 ms-2`}>
            <span
              className={`${styles.buy_text} ps-1 d-flex align-items-center`}
            >
              <Image src={Rupee} />
            </span>
            <span className=""  placeholder="Property types">kjkjkjk</span>
            <span
              className={`${styles.dropdown} ms-4 d-flex align-items-center`}
            >
              <Image src={DropDown} />
            </span>
          </button>
        </Dropdown>
      </div>
    </div>
  </>
);

export default App;
