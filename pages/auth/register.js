import React from "react";
import Head from 'next/head'
import styles from "../../styles/authstyles/property.module.css";

const Register = () => {
  return (
    <> 
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
    </Head>
    <div className={`${styles.body} d-flex justify-content-center`}>
        <div className={`${styles.section} card mb-3  mt-5 `}>
          <div className="">
            <div className="row g-0">
              <div className={` col-md-8 col-lg-4 ${styles.background}`}>
                <div>
                  <div class="row">
                    <div class=" col-lg-12 mt-4 ms-5 d-flex">
                      <h1 className={styles.description}>Property Details</h1>
                    </div>
                    <div class="col-lg-12 mt-4 ms-5 d-flex">
                      <h1 className={styles.description}>Property Features</h1>
                    </div>
                    <div class="col-lg-12 mt-4 ms-5 d-flex">
                      <h1 className={styles.description}>Price Details</h1>
                    </div>
                    <div class="col-lg-12 mt-4 ms-5 d-flex">
                      <h1 className={styles.description}>
                        Photos & Description
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-lg-8">
                <div className="card-body ">
                  <div className={`ms-5 ${styles.sectionbody}`}>
                    <h5 className={styles.title}>Price details</h5>
                  </div>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 ">
                      <label
                        for="inputEmail4"
                        class={`ms-5 mt-3  ${styles.text}`}
                      >
                        Super Area
                      </label>
                      <div class="input-group  ms-5">
                        <input
                          type="text"
                          className={styles.formcontrol}
                          placeholder="Enter super area"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <span className={styles.inputtext} id="basic-addon2">
                          sqrt
                        </span>
                      </div>
                    </div>

                    <div class="col-lg-6 mt-3">
                      <label for="inputEmail4" class={styles.text}>
                        Carpet Area
                      </label>
                      <div class="input-group">
                        <input
                          type="text"
                          className={styles.formcontrol}
                          placeholder="Enter carpet area"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <span className={styles.inputtext} id="basic-addon2">
                          sqrt
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mt-3">
                      <p class={`ms-5 ${styles.text}`}>Expected Price</p>
                      <div class="ms-5 mt-1">
                        <span class={styles.inputtext1} id="basic-addon1">
                          ₹{" "}
                        </span>
                        <input
                          type="text"
                          class={styles.formcontrol2}
                          placeholder="Enter property price"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col mt-3">
                      <p class={`ms-5 ${styles.text}`}>Maintainence Fees</p>
                      <div class="ms-5 mt-1">
                        <span class={styles.inputtext1} id="basic-addon1">
                          ₹{" "}
                        </span>
                        <input
                          type="text"
                          class={styles.formcontrol2}
                          placeholder="Enter maintainence price"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`d-flex me-5 float-end align-items-end ${styles.formcheck}`}
                  >
                    <div className="d-flex mt-5 ms-5 ">
                      <div className="ms-5"></div>
                      <label class="form-label" for="inlineFormCheck">
                        Back
                      </label>
                    </div>
                    <div className="mt-5 ms-5 ">
                      <button type="submit" class={styles.button}>
                        Next
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

export default Register;
