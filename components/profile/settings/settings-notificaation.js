import { useState, React } from "react";
import styles from "../../../styles/profile/sidebar-pages/settings.module.css";
import { Component } from "react";
import Switch from "react-switch";
const Notification = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  const [selected, setSelected] = useState(false);
  const handleSelected = (nextSelected) => {
    setSelected(nextSelected);
  };
  const [clicked, setClicked] = useState(false);
  const handleClicked = (nextclicked) => {
    setClicked(nextclicked);
  };

  return (
    <div className={`${styles.settings_container}`}>
      <span className={`color_light_blue fw_500 fs_20 fontFam_poppins d-none d-md-block`}>
        Notification Settings
      </span>
      <div className="mt-0 pt-0 color_grey fs_11 fontFam_poppins fw_500">
        Please note that it might take up to a few days for your preferences to
        be updated in our system.
      </div>
      <div className="mt-4">
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <span className={`fs_15 fw_500 fontFam_poppins color_black`}>
              Zameen Square News
            </span>
            <Switch
              height={20}
              width={56}
              borderRadius = {30}
              uncheckedIcon={false}
              checkedIcon={false}
              offColor="#DBE9F2"
              onColor="#DBE9F2"
              offHandleColor="#BCC7CE"
              onHandleColor="#1D72DB"
              onChange={handleChange}
              checked={checked}
            />
          </div>
          <p className={`fs_11 fw_500 fontFam_poppins color_grey w-75`}>
            Exciting property news, surveys and offers from Zameen Square.
          </p>
        </div>
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <span className={`fs_15 fw_500 fontFam_poppins color_black`}>
              New Homes Offers{" "}
            </span>
            <Switch
              height={20}
              width={56}
              uncheckedIcon={false}
              checkedIcon={false}
              offColor="#DBE9F2"
              onColor="#DBE9F2"
              offHandleColor="#BCC7CE"
              onHandleColor="#1D72DB"
              onChange={handleSelected}
              checked={selected}
            />
          </div>
          <p className={`fs_11 fw_500 fontFam_poppins color_grey w-75`}>
            Updates on new build properties in your search area from new build
            developers.{" "}
          </p>
        </div>
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <span className={`fs_15 fw_500 fontFam_poppins color_black`}>
              Partner Offers{" "}
            </span>
            <Switch
              height={20}
              width={56}
              uncheckedIcon={false}
              checkedIcon={false}
              offColor="#DBE9F2"
              onColor="#DBE9F2"
              offHandleColor="#BCC7CE"
              onHandleColor="#1D72DB"
              onChange={handleClicked}
              checked={clicked}
            />
          </div>
          <p className={`fs_11 fw_500 fontFam_poppins color_grey w-75`}>
            Latest money-saving offers from Zameen Square's chosen property and
            financial partners.{" "}
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default Notification;
