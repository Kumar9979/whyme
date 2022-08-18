
import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import * as dummyApis from "../redux/actions/josnApisAction"
import ImageGrid from "../components/image-grid";
import HomeDetails from "../components/home-details";
import Navbar from "../components/navbar/navbar";
import styles from "../styles/homepage/homepage.module.css"

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
        <div className="col-md-6 col-11">
          <ImageGrid />
        </div>
        <div className="col-md-4">
          
        </div>
        
      </div>
    </div>
  );
};

export default Home;
