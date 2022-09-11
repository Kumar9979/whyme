import React from 'react'
import styles from "../../../styles/postProperty/propertyfeatures.module.css";


export const AmnetiesGenerator = (list, startIndex, EndIndex, formik) => {
    const handleCheckbox = (e) => {
        const { checked, name } = e.target;
        if (e.target.checked) {
            formik.setFieldValue("Amenities", [
                ...formik.values.Amenities,
                e.target.name,
            ]);
        } else {
            formik.setFieldValue(
                "Amenities",
                formik.values.Amenities.filter((item) => item !== e.target.name)
            );
        }
    };
    return list?.map((item, i) => {
        if (i >= startIndex && i <= EndIndex) {
            return (
                <div
                    key={item}
                    className={`form-check me-4 ${styles.margin_bottom}`}
                >
                    <input
                        className="form-check-input rounded-0 mt-2 "
                        type="checkbox"
                        id={item}
                        name={item}
                        onChange={handleCheckbox}
                        checked={formik.values.Amenities.includes(
                            item
                        )}
                    />
                    <label
                        className={`form-check-label mt-1 text-nowrap ${styles.font_medium}  ${styles.fontFam_poppins} ${styles.amenities_list_title}`}
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