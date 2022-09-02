// import React from 'react'
// import styles from "../../styles/dropdown/dropdownPriceRange.module.css"

// const DropdownPriceRange = () => {
//   return (
//     <div>
//         <span>Select your budget moving Arrows</span>
//         <div className={`${styles.price_input} d-flex` }>
//         <div className={`${styles.field} `}>
//             <span>min</span>
//             <input type="number" className={`${styles.input_min}`} value="200000"/>

//         </div>
//         <div className={`${styles.field} `}>
//             <span>max</span>
//             <input type="number" className={`${styles.input_max}`} value="700000"/>

//         </div>
//         </div>
//         <div className={`${styles.slider} mt-3`}>
//             <div className={`${styles.progress}`}>

//             </div>
//             <div className={`${styles.range_input} mt-3`}>
//                 <input type="range" className={`${styles.range_min}`} min="0" max="1000000" value="200000"/>
//                 <input type="range" className={`${styles.range_max}`} min="0" max="1000000" value="700000"/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default DropdownPriceRange




import { Slider } from 'antd';
import React from 'react';

const DropdownPriceRange = () => (
  <Slider
    range={{
      draggableTrack: true,
    }}
    defaultValue={[20, 50]}
  />
);

export default DropdownPriceRange;