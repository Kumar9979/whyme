import React from 'react'
import ApartmentCard from '../../components/myproperties/apartment-card'
import styles from "../../styles/myproperties/propertyStatistics.module.css"

const PropertyStatics = () => {
  return (
    <div className={`${styles.fd}`}>
        <ApartmentCard/>
    </div>
  )
}

export default PropertyStatics