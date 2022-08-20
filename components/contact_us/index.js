import React from "react";
import styles from "../../styles/propertydetails/contactus.module.css";

const ContactUs = () => {
  return (
    <div className={`${styles.contactus} p-4 mt-4`}>
      <div className={`${styles.contactus_heading}`}>Contact Us</div>
      <hr className={`${styles.horizontal_line}`}></hr>
      <div>
        <form>
          <div className="form-group">
            <label
              className={`${styles.contact_us_label}`}
              for="exampleInputEmail1"
            >
              Name
            </label>
            <input
              type="text"
              className={`form-control ${styles.form_input}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group mt-4">
            <label
              className={`${styles.contact_us_label}`}
              for="exampleInputEmail1"
            >
              Email Address
            </label>
            <input
              type="email"
              className={`form-control ${styles.form_input}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter yournemail address"
            />
          </div>

          <div className="form-group mt-4">
            <label
              className={`${styles.contact_us_label}`}
              for="exampleInputPassword1"
            >
              Contact Number
            </label>
            <input
              type="number"
              className={`form-control ${styles.form_input}`}
              id="exampleInputPassword1"
              placeholder="Enter your contact number"
            />
          </div>

          <button
            type="submit"
            className={`${styles.form_submit} mt-4 w-100 py-2`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
