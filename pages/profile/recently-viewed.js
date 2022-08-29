import React from 'react'
import ProfileLayout from '../../components/sidebarLayout/Sidebar'
import queryString from "query-string"
const RecentlyViewed = () => {
  const value = queryString.parse(window.location.search)
  console.log(value.variable)
  return (
    <ProfileLayout>
      <div>{value.first_name}</div>
      <div>{value.first_name}</div>
      <div>{value.first_name}</div>
      <div>{value.first_name}</div>
      <div>{value.first_name}</div>
    <div>{value.last_name}</div>      
    </ProfileLayout>
  
  )
}

export default RecentlyViewed