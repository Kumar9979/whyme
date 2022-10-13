import { useEffect } from "react";
import styles from "../../../styles/modals/apartmentUpdateMap.module.css";
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
import Image from "next/image";
import closeIcon from "../../../assets/icons/close-new-icon.svg";

const PlacesAutocomplete = ({
  setSelected,
  markerSetOn,
  markedAddress,
  formik,
  selected,
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
    formik.setFieldValue("map", { lat, lng });
  };

  return (
    <>
      <Combobox onSelect={handleSelect} style={{ position: "relative" }}>
        {value && (
          <button
            style={{ background: "transparent", right: "10px", top: ".9rem" }}
            onClick={() => {
              setValue("");
            }}
            className={`border-0 position-absolute`}
          >
            <Image src={closeIcon} />
          </button>
        )}

        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          className={`${styles.comboboxInput} ps-2 mt-2 fs_12 py-2`}
          placeholder="Enter your property location"
        />
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

export default PlacesAutocomplete;
