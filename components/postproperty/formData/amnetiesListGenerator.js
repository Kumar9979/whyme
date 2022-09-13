import React from 'react'
import styles from "../../../styles/postProperty/propertyfeatures.module.css";


export const AmnetiesGenerator = ({ list, startIndex = 0, endIndex = 10, formik, inputClassName = "", labelClassName = "" }) => {
    const handleCheckbox = (e) => {
        const { checked, name } = e?.target;
        if (e.target.checked) {
            formik?.setFieldValue("Amenities", [
                ...formik?.values?.Amenities,
                e.target.name,
            ]);
        } else {
            formik.setFieldValue(
                "Amenities",
                formik?.values?.Amenities?.filter((item) => item !== e.target.name)
            );
        }
    };
    return list?.map((item, i) => {
        if (i >= startIndex && i <= endIndex) {
            return (
                <div
                    key={item}
                    className={`form-check me-4 ${styles.margin_bottom} ${inputClassName}`}
                >
                    <input
                        className="form-check-input cursor_pointer rounded-0 mt-2 "
                        type="checkbox"
                        id={item}
                        name={item}
                        onChange={handleCheckbox}
                        checked={formik?.values?.Amenities?.includes(
                            item
                        )}
                    />
                    <label
                        className={`${labelClassName} form-check-label mt-1 text-nowrap ms-2 fontFam_poppins fw_500 `}
                        htmlFor={item}
                    >
                        {item}
                    </label>
                </div>
            )
        }
    })

}





export const IndustrialPlotSuitableList = [
    "Commercial Constructions", "Industrial Construction", "Highway Access", "Main Road Access", "Electricity Line"
]
export const CommercialPlotSuitableList = [
    "Any Constructions", "Industrial Construction",
]
export const CommercialIndustrialShed = [
    "Industries For The Production Of Power", "Manufacturing Industries", "Raw Materials Mining Industries", "Textile Industries", "Petroleum Products Industries", "Industries Of Wood And Paper Products"
]
