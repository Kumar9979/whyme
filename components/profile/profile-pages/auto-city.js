import { useState, useMemo, useEffect } from "react";
import styles from "../../../styles/profile/profile-pages/autoCity.module.css";
import dropdown from "../../../assets/icons/cityDropdown.svg";
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

const AutoCityLoad = ({ setSelected, markerSetOn, markedAddress }) => {
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
          className={`${styles.city_input_tag} w-100 py-1 mt-1 d-flex justify-content-between`}
        >
          <ComboboxInput
            onChange={(e) => {
              setValue(e.target.value);
            }}
            disabled={!ready}
            className={`${styles.comboboxInput} w-75 ps-2  fs_15 fw_600 fontFam_poppins`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your city"
            name="city"
            // value={formik.values.city}
          />
          <span className="d-flex align-items-center pe-2">
            <Image
              src={dropdown}
              alt="Picture of the author"
              width={13}
              height={13}
            />
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

export default AutoCityLoad;
