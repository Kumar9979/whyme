import React from 'react';
import styles from "../../../styles/propertydetails/amenties.module.css"

const Amenties = () => {
  return (
    <div className={`${styles.amenties} p-4 mt-4`}>
      <p className={`${styles.amenties_text}`}>Amenities</p>
      <hr className={`${styles.amenties_horizontal}`}></hr>
      <div className='row'>
        {
          amenties.map((item, index) => {
            return (
              <div className='col-lg-4 col-12 '>
                <ul className={`${styles.amenties_bullet} d-flex align-items-center`}>
                  <li className={`${styles.amenties_list}  ps-2 `}>{item.list}</li>
                </ul>
              </div>
            );
          })
        }

      </div>

    </div>
  )
}

export default Amenties;

const amenties = [
  {
   list: "Elevators/Lifts"    
  },
  
  {
   list: "Swimming Pool"    
  },
  
  {
   list: "Yoga Meditation Area"    
  },
  
  {
   list: " Guest Parking Spaces"    
  },
  
  {
   list: "Gym"    
  },
  
  {
   list: "Pet Room"    
  },
  
  {
   list: "CCTV Surveillance"    
  },
  
  {
   list: "Play Ground"    
  }
  
]


const plotAmenties = [
  {
   list: "Basic Amenities"    
  },
  
  {
   list: "Underground Drainage System"    
  },
  
  {
   list: "Highway Access"    
  },
  
  {
   list: "Main Road Access"    
  },
  
  {
   list: "Electricity Line"    
  },
  
  {
   list: "Pet Room"    
  },  
]
