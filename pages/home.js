import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import ApartmentFlat2 from "../components/cards/apartmentFlat2";
import DownNavbar from "../components/downNavbar/dNavbar";
import Navbar from "../components/navbar/navbar";
import * as dummyApis from "../redux/actions/josnApisAction"
const Home = () => {
  const reducer = useSelector((store) => store);
  console.log(reducer);
  const dispatch = useDispatch();
  useEffect(() => {dispatch(dummyApis.jsonAction())}, []);
  return (
    <>
    
      {/* <ApartmentFlat/>
      <ApartmentFlat2 /> */}
    </>
  );
};


export default Home;
