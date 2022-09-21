import { useState, useMemo, useEffect } from "react";
import styles from "../styles/profile/profile-pages/autoCity.module.css";
import dropdown from "../assets/icons/cityDropdown.js";
import Image from "next/image";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,                      
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import LocationIcon from "../assets/icons/locationIcon";
import Dropdown from "../assets/icons/cityDropdown.js";

const Location = ({
  setSelected,
  result,
  formikUpdate,
  markerSetOn,
  markedAddress,
}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  useEffect(() => {
    setValue(markedAddress, false);

    return () => {
      console.log("Address updated");
    };
  }, [markedAddress]);

  const handleSelect = async (address) => {
    markerSetOn();
    setValue(address, false);
    clearSuggestions();
    const results = await getGeocode({ address });
    const { lat, lng } = getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <>
      <Combobox onSelect={handleSelect} style={{ position: "relative" }}>
        <div
          className={`${styles.city_input_tag} w-100 py-1 mt-1  d-flex align-items-center`}
        >
          <span className="ms-2 d-flex align-items-center">
            <LocationIcon fill="#50BF97"  width={20} />
          </span>
          <ComboboxInput
            onChange={(e) => {
              setValue(e.target.value);
            }}
            defaultValue="mysore"
            disabled={!ready}
            className={`${styles.comboboxinput} w-100   d-flex align-items-center ps-2 py-2  fs_13 fw_600 fontFam_poppins`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter location"
          />
          <span className="d-flex align-items-center justify-content-end pe-1">
           <Dropdown fill="#323d5a" width={18} height={18}/>
          </span>
        </div>

        <ComboboxPopover style={{ zIndex: 9999 }}>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </>
  );
};

export default Location;
