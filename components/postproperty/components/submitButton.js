import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "../../../styles/postProperty/propertyfeatures.module.css";


const PostPropertySubmitButton = ({ marginTop = "mt-5", marginEnd, paddingTop = false }) => {
    const router = useRouter();
    const [mobile, setMobile] = useState(true);


    useEffect(() => {
        if (window.innerWidth < 992) {
            setMobile(false);
        }
    }, []);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setMobile(false);
            } else {
                setMobile(true);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div
            style={{ paddingTop: paddingTop && mobile ? paddingTop : "1rem" }}
            className={`content-btn d-flex justify-content-end ${marginTop} `}
        >
            <div className={`d-flex ${marginEnd} `}>
                <button
                    type="button"
                    onClick={() =>
                        router.push(
                            "/post-property/property-details/propertyDetails"
                        )
                    }
                    className={`bg-white border-0 `}
                >
                    <span
                        className={`${styles.container_icon_arrowLeftbtn} align-middle me-2`}
                    >
                        <i
                            className={`${styles.icon_arrowLeftbtn} h-100 p-1 ri-arrow-left-line  border mt-1 rounded align-middle  `}
                        ></i>
                    </span>

                    <span
                        className={` color_light_blue fontFam_poppins ${styles.font_medium} ${styles.font_20} align-middle fw_500 fs_18 `}
                    >
                        Back
                    </span>
                </button>
                <button
                    type="submit"
                    className={`${styles.bg_color_1D72DB} text-white d-flex justify-content-between align-items-center rounded-3 border-0 ms-4  px-3  py-2`}
                >
                    <span
                        className={` fontFam_poppins ${styles.font_medium} ${styles.font_18} align-middle fs_18 `}
                    >
                        Next
                    </span>
                    <div>
                        <i
                            className={`${styles.modal_icon_arrowRightbtn} h-100 p-1 ri-arrow-right-line text-white border-light border  rounded align-middle mt-2 ms-5 `}
                        ></i>
                    </div>
                </button>
            </div>
        </div>
    )

}

export default PostPropertySubmitButton


