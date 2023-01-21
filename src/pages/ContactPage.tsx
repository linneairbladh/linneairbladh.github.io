import Page from "../components/Page";
import { address, emailAddress } from "../config/contactInfo";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { memo, useCallback, useMemo, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const ContactPage: React.FC = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);

  //   const onLoad = useCallback((map: any) => {
  //     const bounds = new window.google.maps.LatLngBounds();
  //     map.fitBounds(bounds);
  //     setMap(map);
  //   }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const googleMap = useMemo(
    () =>
      isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: 55.97776,
            lng: 13.2069821,
          }}
          zoom={14}
          //   onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker
            onLoad={() => console.log("marker loaded")}
            position={{
              lat: 55.97776,
              lng: 13.2069821,
            }}
            visible={true}
          />
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      ) : (
        <></>
      ),
    [map, isLoaded, containerStyle]
  );

  return (
    <Page attributes={{ title: "Kontakt", images: [] }}>
      <div className="py-5">
        <p className="text-center font-semibold">Email:</p>
        <p className="text-center">
          <a
            className="hover:underline font-normal"
            href={"mailto: " + emailAddress}
          >
            {emailAddress}
          </a>
        </p>

        <p className="text-center font font-semibold">
          Adress:
          <p className="font-normal">{address.street}</p>
          <p className="font-normal">
            {address.zip} {address.city}
          </p>
        </p>
      </div>

      {googleMap}
    </Page>
  );
};

export default ContactPage;
