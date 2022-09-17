// import React, { useState } from "react";
// import styles from "../../styles/filter-top-navbar/filterTopNavbar.module.css";
// import DropDownImage from "../../assets/icons/dropdown.svg";
// import Image from "next/image";
// import { Space } from "antd";
// import Dropdown from "../dropdown/dropdown";
// import AddIcon from "../../assets/icons/add-icon.svg";
// import TickIcon from "../../assets/icons/tick-icon.svg";

// const PropertyType = () => {
//   const [data, setData] = useState([]);

//   const handleClick = (text) => {
//     data.includes(text) ? null : setData([...data, text]);
//   };
//   console.log(data);

//   const onTagRemove = (index) => {
//     setData([...data.slice(0, index), ...data.slice(index + 1, data.length)]);
//   };

//   console.log(data);
//   return (
//     <div className={`${styles.filter_navbar} px-5`}>
//       <div className={`d-flex justify-content-start`}>
//         <div className="fontFam_poppins ms-2">
//           <Dropdown placeholder={data} onRemoveTag={onTagRemove}>
//             <span className={`${styles.property_heading_text} fs_12 fw_500 `}>
//               Residential
//             </span>

//             <div className={`d-flex mt-1`}>
//               {property.map((item, index) => {
//                 return (
//                   <button
//                     onClick={(e) => handleClick(item.propertyType)}
//                     className={
//                       data.includes(item.propertyType)
//                         ? `${styles.second_row_button_after} fontFam_poppins fs_12 fw_500 me-2`
//                         : `${styles.second_row_button} me-2`
//                     }
//                   >
//                     <span
//                       className={
//                         data.includes(item.propertyType)
//                           ? `${styles.property_types_text} fontFam_poppins fs_12 fw_500 `
//                           : `${styles.property_types_text_before} fs_12 fw_500 `
//                       }
//                     >
//                       <Image
//                         src={
//                           data.includes(item.propertyType) ? TickIcon : AddIcon
//                         }
//                         width={10}
//                         height={10}
//                       />
//                       <span className="ps-1 text-nowrap">
//                         {" "}
//                         {item.propertyType}
//                       </span>
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>

//             <div
//               className={`mt-2 ${styles.property_heading_text} fs_12 fw_500`}
//             >
//               Commercial
//             </div>
//             <div className={`d-flex mt-1`}>
//               {property2.map((item, index) => {
//                 return (
//                   <button
//                     onClick={(e) => handleClick(item.propertyType2)}
//                     className={
//                       data.includes(item.propertyType2)
//                         ? `${styles.second_row_button_after} fontFam_poppins fs_12 fw_500 me-2`
//                         : `${styles.second_row_button} me-2`
//                     }
//                   >
//                     <span
//                       className={
//                         data.includes(item.propertyType2)
//                           ? `${styles.property_types_text} fontFam_poppins fs_12 fw_500 `
//                           : `${styles.property_types_text_before} fs_12 fw_500 `
//                       }
//                     >
//                       <Image
//                         src={
//                           data.includes(item.propertyType2) ? TickIcon : AddIcon
//                         }
//                         width={10}
//                         height={10}
//                       />
//                       <span className="ps-1 text-nowrap">
//                         {" "}
//                         {item.propertyType2}
//                       </span>
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//             <div className={`d-flex mt-2`}>
//               {property3.map((item, index) => {
//                 return (
//                   <button
//                     onClick={(e) => handleClick(item.propertyType3)}
//                     className={
//                       data.includes(item.propertyType3)
//                         ? `${styles.second_row_button_after} fontFam_poppins fs_12 fw_500 me-2`
//                         : `${styles.second_row_button} me-2`
//                     }
//                   >
//                     <span
//                       className={
//                         data.includes(item.propertyType3)
//                           ? `${styles.property_types_text} fontFam_poppins fs_12 fw_500 `
//                           : `${styles.property_types_text_before} fs_12 fw_500 `
//                       }
//                     >
//                       <Image
//                         src={
//                           data.includes(item.propertyType3) ? TickIcon : AddIcon
//                         }
//                         width={10}
//                         height={10}
//                       />
//                       <span className="ps-1 text-nowrap">
//                         {" "}
//                         {item.propertyType3}
//                       </span>
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//             <div className={`d-flex mt-2`}>
//               {property4.map((item, index) => {
//                 return (
//                   <button
//                     onClick={(e) => handleClick(item.propertyType4)}
//                     className={
//                       data.includes(item.propertyType4)
//                         ? `${styles.second_row_button_after} fontFam_poppins fs_12 fw_500 me-2`
//                         : `${styles.second_row_button} me-2`
//                     }
//                   >
//                     <span
//                       className={
//                         data.includes(item.propertyType4)
//                           ? `${styles.property_types_text} fontFam_poppins fs_12 fw_500 `
//                           : `${styles.property_types_text_before} fs_12 fw_500 `
//                       }
//                     >
//                       <Image
//                         src={
//                           data.includes(item.propertyType4) ? TickIcon : AddIcon
//                         }
//                         width={10}
//                         height={10}
//                       />
//                       <span className="ps-1 text-nowrap">
//                         {" "}
//                         {item.propertyType4}
//                       </span>
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//             <div
//               className={`mt-2 ${styles.property_heading_text} fs_12 fw_500`}
//             >
//               Agriculture
//             </div>
//             <div className={`d-flex mt-1`}>
//               {property5.map((item, index) => {
//                 return (
//                   <button
//                     onClick={(e) => handleClick(item.propertyType5)}
//                     className={
//                       data.includes(item.propertyType5)
//                         ? `${styles.second_row_button_after} fontFam_poppins fs_12 fw_500 me-2`
//                         : `${styles.second_row_button} me-2`
//                     }
//                   >
//                     <span
//                       className={
//                         data.includes(item.propertyType5)
//                           ? `${styles.property_types_text} fontFam_poppins fs_12 fw_500 `
//                           : `${styles.property_types_text_before} fs_12 fw_500 `
//                       }
//                     >
//                       <Image
//                         src={
//                           data.includes(item.propertyType5) ? TickIcon : AddIcon
//                         }
//                         width={10}
//                         height={10}
//                       />
//                       <span className="ps-1 text-nowrap">
//                         {" "}
//                         {item.propertyType5}
//                       </span>
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </Dropdown>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyType;

// const property = [
//   {
//     propertyType: "Flat",
//   },
//   {
//     propertyType: " House/Villa",
//   },
//   {
//     propertyType: "Plot/Land",
//   },
// ];

// const property2 = [
//   {
//     propertyType2: "Office Space",
//   },
//   {
//     propertyType2: "Shop/Showroom",
//   },
// ];
// const property3 = [
//   {
//     propertyType3: "Warehouse/Godown",
//   },
//   {
//     propertyType3: "Industrial Shed",
//   },
// ];
// const property4 = [
//   {
//     propertyType4: "Industrial Building",
//   },
//   {
//     propertyType4: "Commercial Land",
//   },
// ];
// const property5 = [
//   {
//     propertyType5: "Agriculture Land",
//   },
//   {
//     propertyType5: "Farm House",
//   },
// ];
