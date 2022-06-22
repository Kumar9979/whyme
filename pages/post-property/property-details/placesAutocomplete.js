import { useState, useMemo } from "react";
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


const PlacesAutocomplete = ({ setSelected,handlePlacesChanged }) => {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete();
  
    
    const handleSelect = async (address) => {
      
      setValue(address, false);
      console.log(address);
      clearSuggestions();
  
      const results = await getGeocode({ address });
  
      const { lat, lng } = getLatLng(results[0]);
      setSelected({ lat, lng });
      // handlePlacesChanged();
    };
   
  
    return (
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={(e) =>{ setValue(e.target.value)}}
          // disabled={!ready}
          className="combobox-input"
          placeholder="Enter your property location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    );
  };
 
  export default PlacesAutocomplete;