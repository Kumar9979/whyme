import React from 'react'
import ApartmentCard from '../../components/myproperties/apartment-card'
import CardsViewsTotalCallback from '../../components/myproperties/cards-views-total-callback'
import ProfileLayout from '../../components/sidebarLayout/Sidebar'
import styles from "../../styles/myproperties/propertyStatistics.module.css"

const PropertyStatics = () => {
  return (
    <ProfileLayout>
        <div className={`${styles.fd}`}>
        <ApartmentCard/>
        <CardsViewsTotalCallback/>
    </div>
    </ProfileLayout>
  
  )
}

export default PropertyStatics