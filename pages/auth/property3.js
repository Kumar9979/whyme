import React, { useState } from "react";
import Head from "next/head";
import Image1 from "../../assets/icons/arrow.png";
import rent from "../../assets/icons/rent.png";
import Image2 from "../../assets/icons/1.png";
import Image from "next/image";
import Styles from "../../styles/authstyles/property3.module.css";
import Navbar from "../../pages/auth/navbar";
import Image3 from "../../assets/icons/2.png";
import { useRouter } from "next/router";
import { Stepper, StepLabel, Step } from "@material-ui/core";
const Property3 = () => {
  const [value1, setValue1] = useState("5");
  const router = useRouter();
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
<<<<<<< HEAD
      </Head>
      <Navbar />
      <div className={`d-flex justify-content-center ${Styles.body}`}>
        <div className={`${Styles.container} `}>
          <div className="row">
            <div className={`col-md-4 ${Styles.propertycolumn}`}>
              <div className={`${Styles.propertycontainer}`}>
                <div className="row ">
                  <div className={`mt-5 ${Styles.media1}`}>
                    <Stepper
                      style={{ width: "18%" }}
                      activeStep={value1}
                      orientation="vertical"
                    >
                      <Step>
                        <StepLabel className={Styles.steplabel}>
                          Property Details
                        </StepLabel>
                      </Step>
                      <Step>
                        <StepLabel className={Styles.steplabel}>
                          Property Features
                        </StepLabel>
                      </Step>
                      <Step>
                        <StepLabel className={Styles.steplabel}>
                          Price Details
                        </StepLabel>
                      </Step>
                      <Step>
                        <StepLabel className={Styles.steplabel}>
                          Price Details
                        </StepLabel>
                      </Step>
                      <Step>
                        <StepLabel className={Styles.steplabel}>
                          Photos & Description
                        </StepLabel>
                      </Step>
                    </Stepper>
                  </div>
                  <div className={`${Styles.media}`}>
                    <Stepper
                      style={{ width: "18%" }}
                      activeStep={value1}
                      orientation="horizontal"
                    >
                      <Step>
                        <StepLabel></StepLabel>
                      </Step>
                      <Step>
                        <StepLabel></StepLabel>
                      </Step>
                      <Step>
                        <StepLabel></StepLabel>
                      </Step>
                      <Step>
                        <StepLabel></StepLabel>
                      </Step>
                      <Step>
                        <StepLabel></StepLabel>
                      </Step>
                    </Stepper>
                  </div>
                  {/* <div
                    className={`col-lg-12 col-md-12 mb-5  mt-5 ${Styles.propertyheading}`}
                  >
                    <span className='me-2 '  >
                      {" "}
                      <Image src={Image3} alt="Picture of the author" 
                             width={20}
                             height={20}
                          
                            />
                    </span>
                  <span className={`  ${Styles.propertyborder}`}> Property Details </span>
                  </div>
                  <div
                    className={`col-lg-12  col-md-12 mb-5   ${Styles.propertyheading}`}
                  >
                    <span className="me-2">
                      {" "}
                      <Image src={Image3} alt="Picture of the author" 
                             width={20}
                             height={20}
                            />
                    </span>
                    Property Features
                  </div>
                  <div
                    className={`col-lg-12 col-md-12 mb-5   ${Styles.propertyheading}`}
                  >
                    <span className="me-2">
                      {" "}
                      <Image src={Image3} alt="Picture of the author" 
                             width={20}
                             height={20}
                            />
                    </span>
                    Price Details
                  </div>
                  <div
                    className={`col-lg-12 col-md-12 mb-5  ${Styles.propertyheading}`}
                  >
                    <span className="me-2">
                      {" "}
                      <Image src={Image3} alt="Picture of the author" 
                             width={20}
                             height={20}
                            
                            />
                    </span>
                    Photos & Description
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-8 pe-5 ">
              <div className={`${Styles.carbody} `}>
                <div className="card-body ms-5 mt-4">
                  <h5 className={Styles.propertydetails}>
                    Photos & Description
                  </h5>
                  <p className={`${Styles.cardtext} mt-5`}>Photos</p>
                  <div className="card">
                    <div className={Styles.descriptionbox}>
                      <i
                        className={`ri-upload-cloud-2-line ${Styles.cloud}`}
                      ></i>

                      <p className={Styles.draganddrop}>
                        Drag & drop the image of an property
                      </p>
                      <p className={`mb-3 ${Styles.jpgimg}`}>
                        JPG and PNG images - max 20MB each
                      </p>
                      <p className={Styles.jpgimg1}>OR</p>
                      <p className={Styles.browsephotos}>Browse Photos</p>
                    </div>
=======
    </Head>
    <Navbar/>
    <div className={`d-flex justify-content-center ${Styles.body}`}>
       <div className={`${Styles.container} `}>
        <div class="row">
          <div className={`col-md-4 ${Styles.propertycolumn}`}>
            <div className={`${Styles.propertycontainer}`}>
            <div className="row ">
            <div className={`mt-5 ${Styles.media1}`}>
                    <Stepper style={{width:'18%'}} activeStep={value1} orientation='vertical'>
            <Step>
                <StepLabel className={Styles.steplabel}>Property Details</StepLabel>
            </Step>
            <Step>
                <StepLabel className={Styles.steplabel}>Property Features</StepLabel>
            </Step>
            <Step>
                <StepLabel className={Styles.steplabel}>Price Details</StepLabel>
            </Step>
            <Step>
                <StepLabel className={Styles.steplabel}>Price Details</StepLabel>
            </Step>
            <Step>
                <StepLabel className={Styles.steplabel}>Photos & Description</StepLabel>
            </Step>
        </Stepper>
        </div>
<div className={`${Styles.media}`}>
        <Stepper style={{width:'18%'}} activeStep={value1} orientation='horizontal' >
            <Step>
                <StepLabel ></StepLabel>
            </Step>
            <Step>
                <StepLabel ></StepLabel>
            </Step>
            <Step>
                <StepLabel ></StepLabel>
            </Step>
            <Step>
                <StepLabel ></StepLabel>
            </Step>
            <Step>
                <StepLabel ></StepLabel>
            </Step>
        </Stepper>
        </div>
                 
                </div>
            </div>
          </div>
          <div class="col-md-8 pe-5 ">
            <div className={`${Styles.carbody} `}>
              <div className="card-body ms-5 mt-4">
                <h5 className={Styles.propertydetails}>Photos & Description</h5>
                <p class={`${Styles.cardtext} mt-5`}>
                  Photos
                </p>
                <div class="card">
  <div className={Styles.descriptionbox}>
   
    <i class={`ri-upload-cloud-2-line ${Styles.cloud}`}></i>
   
  <p className={Styles.draganddrop}>Drag & drop the image of an property</p>
  <p className={`mb-3 ${Styles.jpgimg}`}>JPG and PNG images - max 20MB each</p>
  <p className={Styles.jpgimg1}>OR</p>
  <p className={Styles.browsephotos}>Browse Photos</p>
 
    
  </div>
</div>

                <form>
                  <div className={`${Styles.formgroup} mt-3 mb-3`}>
                    <label htmlFor="exampleInputEmail1">Description</label>
                    <div class="card">
  <div className={Styles.descriptionbox2}>
  <p className={`mt-2 ms-2 ${Styles.browsephotos1}`}>Describe your Property</p>
  </div>
</div>
>>>>>>> 8df03fcaf11df7f42e57ce5990e5f94b834f1706
                  </div>

                  <form>
                    <div className={`${Styles.formgroup} mt-3 mb-3`}>
                      <label for="exampleInputEmail1">Description</label>
                      <div className="card">
                        <div className={Styles.descriptionbox2}>
                          <p className={`mt-2 ms-2 ${Styles.browsephotos1}`}>
                            Describe your Property
                          </p>
                        </div>
                      </div>
                    </div>
                    <small>Terms and Condition text goes here</small>
                  </form>

                  <div className="d-flex  float-end align-items-end mb-4 me-0">
                    <div className={`d-flex mt-5  ${Styles.formchecklabel}`}>
                      <div className="ms-5 me-3">
                        <Image
                          src={Image1}
                          alt="Picture of the author"
                          className={` ${Styles.buttonicon}`}
                          width={15}
                          height={15}
                        />
                      </div>
                      <label
                        className="form-check-label"
                        for="inlineFormCheck"
                        onClick={() => router.replace("/auth/property2")}
                      >
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
                          <Image
                            src={Image2}
                            alt="Picture of the author"
                            className={Styles.widthimg}
                            width={15}
                            height={15}
                          />
                        </span>
                      </button>
                    </div>
<<<<<<< HEAD
=======
                    <label class="form-check-label" htmlFor="inlineFormCheck" onClick={()=>  router.replace("/auth/property2")}>
                      Back
                    </label>
>>>>>>> 8df03fcaf11df7f42e57ce5990e5f94b834f1706
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        {/* <div className={`${Styles.container} w-50`}>
        <div className="row">
          <div className={`col-md-4 ${Styles.propertycolumn}`}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mt-5 ms-5">Property details</div>
                <div className="col-lg-12 mt-5 ms-5">Property Features</div>
                <div className="col-lg-12 mt-5 ms-5">Price Details</div>
                <div className="col-lg-12 mt-5 ms-5">Photos & Descriptions</div>
=======
      </div>
      {/* <div className={`${Styles.container} w-50`}>
        <div class="row">
          <div className={`col-md-4 ${Styles.propertycolumn}`}>
            <div class="container">
              <div class="row">
                <div class="col-lg-12 mt-5 ms-5">Property details</div>
                <div class="col-lg-12 mt-5 ms-5">Property Features</div>
                <div class="col-lg-12 mt-5 ms-5">Price Details</div>
                <div class="col-lg-12 mt-5 ms-5">Photos & Descriptions</div>
>>>>>>> 8df03fcaf11df7f42e57ce5990e5f94b834f1706
              </div>
            </div>
          </div>
                </div>
<<<<<<< HEAD
                <div className="col-md-8">
=======
                <div class="col-md-8">
>>>>>>> 8df03fcaf11df7f42e57ce5990e5f94b834f1706
                  <div className={`{Styles.carbody} `}>
                    <div className="card-body">
                      <h5 className={Styles.propertydetails}>
                        Photos & Description
                      </h5>
<<<<<<< HEAD
                      <p className={`{Styles.cardtext} mt-5`}>
                       photos
                      </p>
                      <div className="card">
=======
                      <p class={`{Styles.cardtext} mt-5`}>
                       photos
                      </p>
                      <div class="card">
>>>>>>> 8df03fcaf11df7f42e57ce5990e5f94b834f1706
  <div className={Styles.descriptionbox}>
  <p className={Styles.draganddrop}>Drag & drop the image of an property</p>
  <small className="card-text">JPG and PNG images - max 20MB each</small>
  <small>or</small>
    <br/>
    <a href="#" className={Styles.browsephotos}>Brows Photos</a>
  </div>
</div>
                    

<<<<<<< HEAD
<p className={`{Styles.cardtext} mt-5`}>
                     Description
                      </p>
<div className="card">
=======
<p class={`{Styles.cardtext} mt-5`}>
                     Description
                      </p>
<div class="card">
>>>>>>> 8df03fcaf11df7f42e57ce5990e5f94b834f1706
  <div className={Styles.descriptionbox2}>
  <small>Describe ypur property</small>
  </div>
</div>
<small>Terms and Condition text goes here</small>
                     
                      <div className="d-flex  float-end ">
                        <div className="ps-5 mt-3">
                          <label
                            className = "Styles.formchecklabel"
                            htmlFor="exampleCheck1"
                          >
                            Back
                          </label>
                        </div>
                        
<<<<<<< HEAD
                          <button type="submit" className="btn btn-primary ms-4 mt-3 mb-3">
=======
                          <button type="submit" class="btn btn-primary ms-4 mt-3 mb-3">
>>>>>>> 8df03fcaf11df7f42e57ce5990e5f94b834f1706
                            Next
                          </button>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
      </div>
    </>
  );
};

export default Property3;
