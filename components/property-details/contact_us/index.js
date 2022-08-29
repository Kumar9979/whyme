import React from "react";
import styles from "../../../styles/propertydetails/contactus.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
  const phoneregex = /^([+]\d{2})?\d{10}$/;
  const nameregex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
  const emailregex =
    /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(nameregex, "Invalid First Name")
        .required("Required"),
      phone: Yup.string()
        .matches(phoneregex, "Invalid Phone Number")
        .required("Required"),
      email: Yup.string().email().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      localStorage.setItem("User", JSON.stringify(values));
      alert(values);
      resetForm();
    },
  });
  return (
    <div className={`${styles.contactus} p-3 mt-4`}>
      <div className={`${styles.contactus_heading}`}>Contact Us</div>
      <hr className={`${styles.horizontal_line}`}></hr>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-80">
          <div className="form-group">
            <label
              className={`${styles.contact_us_label}`}
              for="exampleInputEmail1"
            >
              Name
            </label>
            <input
              type="text"
              className={` ${styles.form_input} w-100 ps-3`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
              name="name"
              value={formik.name}
              onChange={formik.handleChange}
            />
            <div className={`${styles.nmm}`}>
              {formik.errors.name && formik.touched.name && (
                <span className={`text-danger fs_14 mb-0 `}>
                  {formik.errors.name}
                </span>
              )}
            </div>
          </div>

          <div className="form-group ">
            <label
              className={`${styles.contact_us_label}`}
              for="exampleInputEmail1"
            >
              Email Address
            </label>
            <input
              type="email"
              className={` ${styles.form_input} w-100 ps-3`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email address"
              name="email"
              value={formik.email}
              onChange={formik.handleChange}
            />
            <div className={`${styles.nmm}`}>
              {formik.errors.email && formik.touched.email && (
                <p className={`text-danger fs_14`}>{formik.errors.email}</p>
              )}
            </div>
          </div>

          <div className="form-group ">
            <label
              className={`${styles.contact_us_label}`}
              for="exampleInputPassword1"
            >
              Contact Number
            </label>
            <input
              type="text"
              className={` ${styles.form_input} w-100 ps-3`}
              id="exampleInputPassword1"
              placeholder="Enter your contact number"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            <div className={`${styles.nmm}`}>
              {formik.errors.phone && formik.touched.phone && (
                <p className="text-danger fs_14">{formik.errors.phone}</p>
              )}
            </div>
          </div>
        
            <button className={`${styles.form_submit} mt-2 w-100 py-2`}>
              Submit
            </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
