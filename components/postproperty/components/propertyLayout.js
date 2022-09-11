import React from 'react'
import styles from "../../../styles/postProperty/propertyfeatures.module.css";
import StepperNew from '../../../pages/stepper/stepper';
const PostPropertyLayout = ({ children }) => {
    return (
        <div className={`${styles.whole_container} container mb-5 mb-lg-5`}>
            <div className={`row justify-content-center mx-0 mx-lg-2 mx-lg-0`}>
                <div
                    className={`col-lg-3 col-md-12  ${styles.property_boxShadow} ${styles.stepper_border_radius} ${styles.bg_color_1D72DB} `}
                >
                    {" "}
                    <StepperNew currentPage={"propertyFeatures"} />
                </div>
                {children}
            </div>  </div>
    )
}

export default PostPropertyLayout; 