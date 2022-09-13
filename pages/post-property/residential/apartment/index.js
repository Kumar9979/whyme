import React from "react";
import PropertyDetailComp from "../../../../components/postproperty/components/propertyDetailsComp";
import PostPropertyLayout from "../../../../components/postproperty/layout/postPropertyLayout";
import styles from "../../../../styles/postProperty/propertydetails.module.css";
const ResidentialApartment = () => {
  return (
    <PostPropertyLayout>
      <PropertyDetailComp>
        <div className={`w-75 d-flex justify-content-end`}>
          {" "}
          <div className={`d-flex`}>
            <button
              type="button"
              onClick={() => router.push("/sellrent")}
              className={`bg-white border-0  `}
            >
              <span
                className={`${styles.container_icon_arrowLeftbtn} align-middle me-2`}
              >
                <i
                  className={`${styles.icon_arrowLeftbtn} h-100 p-1 ri-arrow-left-line  border mt-1 rounded `}
                ></i>
              </span>

              <span
                className={` color_light_blue fontFam_poppins ${styles.font_medium} ${styles.font_18} align-middle `}
              >
                Back
              </span>
            </button>

            <button
              type="submit"
              className={`${styles.bg_color_1D72DB}  ms-3 text-white d-flex justify-content-between align-items-center rounded-3 border-0  px-3 py-2`}
            >
              <span
                className={` fontFam_poppins ${styles.font_medium} ${styles.font_18} align-middle`}
              >
                Next
              </span>
              <div>
                <i
                  className={`${styles.modal_icon_arrowRightbtn} h-100 p-1 ri-arrow-right-line text-white border-light border mt-1 rounded ms-5 `}
                ></i>
              </div>
            </button>
          </div>
        </div>
      </PropertyDetailComp>
    </PostPropertyLayout>
  );
};

export default ResidentialApartment;
