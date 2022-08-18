
import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import * as dummyApis from "../redux/actions/josnApisAction"
import ImageGrid from "../components/image-grid";
import HomeDetails from "../components/home-details";
import Navbar from "../components/navbar/navbar";
import styles from "../styles/homepage/homepage.module.css"
import Review from "../components/image-grid-review";

const Home = () => {
  const reducer = useSelector((store) => store);
  console.log(reducer);
  const dispatch = useDispatch();
  useEffect(() => {dispatch(dummyApis.jsonAction())}, []);
  return (
    <div className={`${styles.body_background}`}>
      <Navbar/>
    <HomeDetails/>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 col-11">
          <ImageGrid />
          <Review/>
        </div>
        <div className="col-lg-4">
          
        </div>
        
      </div>
    </div>
  );
};

export default Home;
