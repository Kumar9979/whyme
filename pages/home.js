import React from "react";

import ApartmentFlat from "../components/cards/apartmentFlat";
import ApartmentFlat2 from "../components/cards/apartmentFlat2";
import ImageGrid from "../components/image-grid";

const Home = () => {
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
