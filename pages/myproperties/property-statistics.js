import React from 'react'
import ApartmentCard from '../../components/myproperties/apartment-card'
import CardsViewsTotalCallback from '../../components/myproperties/cards-views-total-callback'
import styles from "../../styles/myproperties/propertyStatistics.module.css"

const PropertyStatics = () => {
  return (
    <div className={`${styles.fd}`}>
        <ApartmentCard/>
        <CardsViewsTotalCallback/>
    </div>
  )
}

export default PropertyStatics