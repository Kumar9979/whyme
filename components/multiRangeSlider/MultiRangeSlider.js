import React, { useCallback, useEffect, useState, useRef } from "react";
// import PropTypes from "prop-types";
import styles from "../../styles/multiRangeSlider/MultiRangeSlider.module.css";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className={`${styles.container} pb-3`}>
      <input
        type="range"
        step={5}
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`${styles.thumb} ${styles.thum_left} ${styles.left_ranger}`}
        // style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        step={5}
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={`${styles.thumb} ${styles.thum_right} ${styles.right_ranger}`}
      />

      <div className={`${styles.slider}`}>
        <div className={`${styles.slider_track}`} />
        <div ref={range} className={`${styles.slider_range}`} />
        <div
          className={`${styles.slider_left_value} ${styles.min_box} px-2 py-1 gap-2 `}
        >
          {" "}
          <span className={`pe-2 color_cloudBurst fs_14 fw_500`}>Min</span> <span className={`${styles.lac_text} fs_14 fw_500`}>{minVal}</span>
          <span className={`${styles.lac_text} fs_14 fw_500`}>Lac</span>
        </div>
        <div
          className={`${styles.slider_right_value} ${styles.min_box} px-2 py-1 gap-2`}
        >
          <span className={`pe-2 color_cloudBurst fs_14 fw_500`}>Max</span> <span className={`${styles.lac_text} fs_14 fw_500`}>{maxVal}</span>
          <span className={`${styles.lac_text} fs_14 fw_500`}>Lac</span>
        </div>
        
      </div>
    </div>
  );
};

// MultiRangeSlider.propTypes = {
//   min: PropTypes.number.isRequired,
//   max: PropTypes.number.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default MultiRangeSlider;
