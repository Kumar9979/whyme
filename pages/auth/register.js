import React from "react";

import Styles from "../../styles/authstyles/property2.module.css";
import Head from "next/head";
import Image1 from "../../assets/icons/arrow.png";
import Image from "next/image";
import Image2 from "../../assets/icons/1.png";
import "../../pages/auth/navbar";
import Navbar from "../../pages/auth/navbar";
import Image3 from "../../assets/icons/2.png";
import {useFormik} from "formik"
import * as Yup from "yup"
import {useRouter} from "next/router"
const Register = () => {
  const router=useRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email().required("!required"),
      password: Yup.string().required("!required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      router.replace("/auth/property2")
    },
  });
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Navbar />
      <form onSubmit={formik.handleSubmit}>
      <div className={`d-flex justify-content-center ${Styles.body}`}>
        <div className={`${Styles.container} w-50`}>
          <div class="row">
            <div className={`col-md-4  ${Styles.propertycolumn}`}>
              <div className={`${Styles.propertycontainer}`}>
                <div className="row ms-4">
                  <div
                    className={`col-lg-12 col-md-12 mb-5  mt-5 ${Styles.propertyheading}`}
                  >
                    <span className="me-2 ">
                      {" "}
                      <Image
                        src={Image3}
                        alt="Picture of the author"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span className={`  ${Styles.propertyborder}`}>
                      {" "}
                      Property Details{" "}
                    </span>
                  </div>
                  <div
                    className={`col-lg-12  col-md-12 mb-5   ${Styles.propertyheading}`}
                  >
                    <span className="me-2">
                      {" "}
                      <Image
                        src={Image3}
                        alt="Picture of the author"
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
                      <Image
                        src={Image3}
                        alt="Picture of the author"
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
                      <Image
                        src={Image3}
                        alt="Picture of the author"
                        width={20}
                        height={20}
                      />
                    </span>
                    Photos & Description
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8 ">
              <div className={`${Styles.carbody} `}>
                <div className="card-body ms-5 mt-4">
                  <div className={`ms-4 ${Styles.sectionbody}`}>
                    <h5 className={Styles.title}>Price details</h5>
                  </div>

                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6 ">
                        <label
                          for="inputEmail4"
                          class={` mt-3  ${Styles.text}`}
                        >
                          Super Area
                        </label>
                        <div class="input-group  ">
                          <input
                            type="email"
                            className={Styles.formcontrol}
                            placeholder="Enter super area"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                           name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                          />
                          <span
                            className={` ${Styles.inputtext}`}
                            id="basic-addon2"
                          >
                            sqft
                          </span>
                        </div>
                        <p className="text-danger">{formik.errors.email}</p>
                      </div>

                      <div class="col-lg-6 mt-3 ">
                        <label for="inputEmail4" class={Styles.text}>
                          Carpet Area
                        </label>
                        <div class="input-group">
                          <input
                            type="password"
                            className={Styles.formcontrol}
                            placeholder="Enter carpet area"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                          />
                          <span className={Styles.inputtext} id="basic-addon2">
                            sqft
                          </span>
                        </div>
                        <p className="text-danger">{formik.errors.password}</p>
                      </div>
                    </div>
                    <div class="row ">
                      <div class="col mt-3">
                        <p class={` ${Styles.text}`}>Expected Price</p>
                        <div class=" ">
                          <span class={Styles.inputtext1} id="basic-addon1">
                            ₹{" "}
                          </span>
                          <input
                            type="email"
                            class={Styles.formcontrol2}
                            placeholder="Enter property price"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                          />
                        </div>
                        <p className="text-danger">{formik.errors.email}</p>
                      </div>
                    </div>

                    <div class="row mb-5">
                      <div class="col mt-3">
                        <p class={` ${Styles.text}`}>Maintainence Fees</p>
                        <div class=" ">
                          <span class={Styles.inputtext1} id="basic-addon1">
                            ₹{" "}
                          </span>
                          <input
                            type="email"
                            class={Styles.formcontrol2}
                            placeholder="Enter maintainence price"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                          />
                        </div>
                        <p className="text-danger">{formik.errors.email}</p>
                      </div>
                    </div>

                    <div className="d-flex me-2 mb-5 mt-5 float-end align-items-end ">
                      <div
                        className={`d-flex mt-5 ms-5 ${Styles.formchecklabel}`}
                      >
                        <div className="ms-5 me-3">
                          <Image
                            src={Image1}
                            alt="Picture of the author"
                            className={` ${Styles.buttonicon}`}
                            width={15}
                            height={15}
                          />
                        </div>
                        <label class="form-check-label" for="inlineFormCheck" onClick={()=>  router.replace("/property/property")}>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};

export default Register;
