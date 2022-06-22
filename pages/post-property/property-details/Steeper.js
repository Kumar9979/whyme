import { useState, useMemo, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
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
import { usePosition } from "../property-details/usePosition";

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAVDzgCl3C4LxYECq149eAYFA_sNyPmpGU",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  // const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState({ lat: 43.45, lng: -80.49 });
  const { latitude:lat, longitude:lng, error } = usePosition();
  useEffect(() => {
    console.log(lat,lng);
    setSelected({ lat, lng });
  },[lat,lng])

  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={16}
        center={selected}
        mapContainerClassName="map-container"
      >
     {/* <Marker position={selected} /> */}




     {selected && (
                              <Marker
                                draggable={true}
                                onDragEnd={(e) => {
                                  setSelected({
                                    lat: e.latLng.lat(),
                                    lng: e.latLng.lng(),
                                  });
                                }}
                                visible={true}
                                position={selected}
                              />
                            )}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });


    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
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


