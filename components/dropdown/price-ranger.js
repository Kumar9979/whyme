// import React from 'react'
// import styles from "../../styles/dropdown/priceRanger.module.css"

// const PriceRanger = () => {
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default PriceRanger


import MultiRangeSlider from "../../components/multiRangeSlider/MultiRangeSlider";
import styles from "../../styles/dropdown/priceRanger.module.css"

const PriceRanger = () => {
  return (
    <MultiRangeSlider
      min={0}
      max={1000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
   
  );
};

export default PriceRanger;

