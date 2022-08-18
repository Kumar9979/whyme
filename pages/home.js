import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import ApartmentFlat from "../components/cards/apartmentFlat";
import ApartmentFlat2 from "../components/cards/apartmentFlat2";
import ImageGrid from "../components/image-grid";
import * as dummyApis from "../redux/actions/josnApisAction"
const Home = () => {
  const reducer = useSelector((store) => store);
  console.log(reducer);
  const dispatch = useDispatch();
  useEffect(() => {dispatch(dummyApis.jsonAction())}, []);
  return (
    <div className="container-fluid">
      {/* <ApartmentFlat/> */}
      <div className="row">
        <div className="col-md-7">
          <ImageGrid />
        </div>
        <div className="col-md-7"></div>
      </div>
    </div>
  );
};

export default Home;
