import Page from "../components/Page";
import { address, emailAddress } from "../config/contactInfo";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  MarkerF,
  OverlayView,
  OverlayViewF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { memo, useCallback, useMemo, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const ContactPage: React.FC = () => {
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  // });

  const googleMap = useMemo(
    () => (
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: 55.97776,
            lng: 13.2069821,
          }}
          zoom={10}
          onLoad={() => console.log("onload maps")}
          onUnmount={() => console.log("unmount map")}
        >
          {/* <InfoWindow
            onLoad={() => console.log("window loaded")}
            position={{
              lat: 55.97776,
              lng: 13.2069821,
            }}
          >
            <div>
              <h1>Här finns vi!</h1>
              <p>Kongagården</p>
            </div>
          </InfoWindow> */}
          <MarkerF
            onLoad={() => console.log("marker loaded")}
            position={{
              lat: 55.97776,
              lng: 13.2069821,
            }}
            title="Kongagården"
            visible={true}
          />

          <></>
        </GoogleMap>
      </LoadScript>
    ),
    [containerStyle]
  );

  return (
    <Page attributes={{ title: "Kontakt", images: [] }}>
      <div className="markdown h-full w-full flex-col py-5">
        <p className="text-center font-semibold">Email:</p>
        <p className="text-center">
          <a
            className="font-normal hover:underline"
            href={"mailto: " + emailAddress}
          >
            {emailAddress}
          </a>
        </p>

        <p className="font text-center font-semibold">
          Adress:
          <p className="font-normal">{address.street}</p>
          <p className="font-normal">
            {address.zip} {address.city}
          </p>
        </p>
      </div>

      <div className="flex h-2/3 w-full">{googleMap}</div>
    </Page>
  );
};

export default ContactPage;
