import React from "react";
import Styles from "../../styles/authstyles/property.module.css";
import Head from 'next/head'
import Image1 from "../../assets/icons/arrow.png";
import Image from "next/image";
import Image2 from "../../assets/icons/1.png";
import "../../pages/auth/navbar"
import Navbar from "../../pages/auth/navbar";
const Property = () => {

  return (
    <>
    <Head>
    <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
    </Head>


    <Navbar/>
    <div className={`d-flex justify-content-center ${Styles.body}`}>
      <div className={`${Styles.container} w-50`}>
        <div class="row">
          <div className={`col-md-4  ${Styles.propertycolumn}`}>
            <div className={`${Styles.propertycontainer}`}>
              <div class="row ">
                <div class="col-lg-12 mt-5 ms-5">Property details</div>
                <div class="col-lg-12 mt-5 ms-5">Property Features</div>
                <div class="col-lg-12 mt-5 ms-5">Price Details</div>
                <div class="col-lg-12 mt-5 ms-5">Photos & Descriptions</div>
              </div>
            </div>
          </div>
          <div class="col-md-8 ">
            <div className={`${Styles.carbody} `}>
              <div className="card-body ms-5 mt-4">
                <h5 className={Styles.propertydetails}>Property Details</h5>
                <p class={`${Styles.cardtext} mt-5`}>
                  Select your Property in map
                </p>
                <img
                  src="data:image/jpeg;base64,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"
                  className={`${Styles.mapimage} pe-5 w-100 `}
                />
                <form>
                  <div className={`${Styles.formgroup} mt-3`}>
                    <label for="exampleInputEmail1">Address</label>
                    <br />
                    <input
                      type="email"
                      className={Styles.formcontrol}
                      id="exampleInputEmail1"
                      placeholder="Enter Your Property Location"
                    />
                  </div>
                  <div className={`${Styles.formgroup} mt-3`}>
                    <label for="exampleInputPassword1">Building Name</label>
                    <br />
                    <input
                      type="password"
                      className={Styles.formcontrol}
                      id="exampleInputPassword1"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                </form>
                <div className="d-flex me-2 mb-5 float-end align-items-end ">
                  <div className= {`d-flex mt-5 ms-5 ${Styles.formchecklabel}`}>
                    <div className="ms-5 me-3">
                    <Image
                            src={Image1}
                            alt="Picture of the author"
                            className={` ${Styles.buttonicon}`}
                            width={15}
                            height={15}
                          />
                    </div>
                    <label class="form-check-label" for="inlineFormCheck">
                      Back
                    </label>
                  </div>
                
                  <div className="mt-5 ms-3">
                        <button
                          type="submit"
                          className={`me-5   ${Styles.button}`}
                        >
                        Next
                          <span className="ms-5 ">
                            <Image src={Image2} alt="Picture of the author" className={Styles.widthimg}
                             width={15}
                             height={15}
                            />
                          </span>
                        </button>
                      </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Property;
