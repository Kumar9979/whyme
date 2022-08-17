import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../components/navbar/navbar'

const Home = () => {
  const router = useRouter()
  return (
    <>
    <Navbar/>
    {/* <button onClick={()=>router.push("/post-property/price-details/priceDetailsSell")}>Navigate</button> */}
 
  </>
  )
}

export default Home