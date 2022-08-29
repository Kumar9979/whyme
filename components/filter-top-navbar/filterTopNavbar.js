// import React, { useState } from "react";
// import { Dropdown } from "react-bootstrap";
// import styles from "../../styles/filter-top-navbar/filterTopNavbar.module.css";
// import DropDown from "../../assets/icons/dropdown.svg";
// import Image from "next/image";
// import { Space } from "antd";
// import Home from "../../assets/icons/home-new.svg";

// const FilterTopNavbar = () => {
//   const [label, setLabel] = useState("");
//   const [data, setData] = useState([]);

//   const handleClick = (text) => {
//     return setData([...data, text]);
//   };

//   console.log(data);

//   return (
//     <div className={`${styles.filter_navbar} px-5`}>
//       <div className={`d-flex`}>
//         <div>
//           <div className="dropdown fontFam_poppins">
//             <button
//               className={`${styles.buy_btn} btn  my-2`}
//               type="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               <Space
//                 className={`${styles.buy_text} fs_14 fw_500 fontFam_poppins`}
//               >
//                 {" "}
//                 Buy{" "}
//               </Space>

//               <div
//                 className={`${styles.dropdown_icon} ms-4 d-flex align-items-center`}
//               >
//                 <Image src={DropDown} />
//               </div>
//             </button>
//             <div className="dropdown-menu p-2 fontFam_poppins">
//               <div className={`d-flex `}>
//                 <button className={`${styles.second_row_button}`}>
//                   <span>Sell</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div  className={`${styles.dropDown_property_type}`}>
//           <div className={`${styles.dropDown_property_type} ms-2 fontFam_poppins`}>
//             <button
//               className={`${styles.buy_btn} btn  my-2 `}
//               type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"
//             >
//               <div className={`${styles.home_icon} d-flex align-items-center`}>
//                 <Image src={Home} width={15} height={15} />
//               </div>
//               {data.length !== 0 ? (
//                 data.slice(0,2).map((item, index) => {
//                   return (
//                     <div key={index} className={`card`}>
//                       <div className="card-body">
//                         <div>{item}</div>
//                       </div>
//                     </div>
//                   );
//                 })
//               ) : (
//                 <Space
//                   className={`${styles.property_types_text} fs_12 fw_400 ms-2 fontFam_poppins`}
//                 >
//                   Property Type
//                 </Space>
//               )}

//               <div
//                 className={`${styles.dropdown_icon} ms-4 d-flex align-items-center`}
//               >
//                 <Image src={DropDown} />
//               </div>
//             </button>
//             <div className="dropdown-menu p-2 fontFam_poppins">
//               <span>Residential</span>
//               <div className={`d-flex `}>
//                 <button
//                   onClick={(e) => handleClick(e.target.textContent)}
//                   className={`${styles.first_row_button}`}
//                 >
//                   <span>Flat</span>
//                 </button>
//                 <button
//                   onClick={(event) => handleClick(event.target.textContent)}
//                   className={`${styles.first_row_button} ms-2`}
//                 >
//                   <span>House/Villa</span>
//                 </button>
//                 <button onClick={(e) => handleClick(e.target.textContent)}   className={`${styles.first_row_button} ms-2`}>
//                   <span>Plot/Land</span>
//                 </button>
//               </div>

//               <div className={`mt-2`}>Commercial</div>
//               <div className={`d-flex `}>
//                 <button onClick={(e) => handleClick(e.target.textContent)} className={`${styles.second_row_button}`}>
//                   <span className={`text-nowrap`}>Office Space</span>
//                 </button>
//                 <button className={`${styles.second_row_button} ms-2`}>
//                   <span className={`text-nowrap`}>Shop/Showroom</span>
//                 </button>
//               </div>
//               <div className={`d-flex mt-2`}>
//                 <button className={`${styles.second_row_button}`}>
//                   <span className={`text-nowrap`}>Warehouse/Godown</span>
//                 </button>
//                 <button className={`${styles.second_row_button} ms-2`}>
//                   <span className={`text-nowrap`}>Industrial Shed</span>
//                 </button>
//               </div>
//               <div className={`d-flex mt-2`}>
//                 <button className={`${styles.second_row_button}`}>
//                   <span className={`text-nowrap`}>Industrial Building</span>
//                 </button>
//                 <button className={`${styles.second_row_button} ms-2`}>
//                   <span className={`text-nowrap`}>Commercial Land</span>
//                 </button>
//               </div>
//               <div className={`mt-2`}>Agriculture</div>
//               <div className={`d-flex `}>
//                 <button className={`${styles.second_row_button}`}>
//                   <span>Agriculture Land</span>
//                 </button>
//                 <button className={`${styles.second_row_button} ms-2`}>
//                   <span>Farm House</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Dropdown className="d-inline mx-2" autoClose={false}>
//         <Dropdown.Toggle  >
//           Manual Close
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           <Dropdown.Item href="#">Menu Item</Dropdown.Item>
//           <Dropdown.Item href="#">Menu Item</Dropdown.Item>
//           <Dropdown.Item href="#">Menu Item</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//       </div>
//     </div>
//   );
// };

// export default FilterTopNavbar;




import { useState } from "react";
import styles from "../../styles/filter-top-navbar/filterTopNavbar.module.css";

const FilterTopNavbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");
  function handleBlur(e) {
    console.log(e);
  }
  return (
    <div className={`${styles.filter_navbar} px-5`}>
      <div className={`d-flex`}>
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className={`${styles.dropdown_btn} dropdown-btn`}
        >
          {selected}
          <span
            className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
          />
        </div>
        <div
          className={`${styles.dropdown_content} dropdown-content`}
          style={{ display: isActive ? "block" : "none" }}
        >
          
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
            }}
            className={`${styles.item} item`}
          >
            One
          </div>
          <div
            className={`${styles.item} item`}
            onClick={(e) => {
              setIsSelected(e.target.textContent);
            }}
          >
            Two
          </div>
          <div
           className={`${styles.item} item`}
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Three
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterTopNavbar;