import Page from "../components/Page";
import { address, emailAddress, phoneNumber } from "../config/contactInfo";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useRef } from "react";
import sheepIcon from "./sheep-icon-512-23819.png";

const ContactPage: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "maps-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = (map: google.maps.Map): void => {
    mapRef.current = map;
  };

  const onUnMount = (): void => {
    mapRef.current = null;
  };

  const position = {
    lat: 55.97776,
    lng: 13.2069821,
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  return (
    <Page attributes={{ title: "Kontakt", images: [] }}>
      <div className="markdown h-full w-full flex-row py-5">
        <p className="text-center font-semibold">Email:</p>
        <p className="text-center">
          <a
            className="font-normal hover:underline"
            href={"mailto: " + emailAddress}
          >
            {emailAddress}
          </a>
        </p>

        <p className="text-center font-semibold">Telefon:</p>

        <p className="font-normal text-center text-black">
          {phoneNumber.marie}
        </p>

        <p className="font text-center font-semibold">
          Adress:
          <p className="font-normal">{address.street}</p>
          <p className="font-normal">
            {address.zip} {address.city}
          </p>
        </p>
      </div>

      {!isLoaded ? (
        <p>Loading Google Maps..</p>
      ) : (
        <div className="flex h-2/3 w-full p-5">
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "50vh",
            }}
            options={options as google.maps.MapOptions}
            center={position}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnMount}
          >
            <MarkerF
              position={position}
              // Icon for fun
              // icon={{
              //   url: sheepIcon,
              //   origin: new window.google.maps.Point(0, 0),
              //   anchor: new window.google.maps.Point(15, 15),
              //   scaledSize: new window.google.maps.Size(30, 30),
              // }}
            />
          </GoogleMap>
        </div>
      )}
    </Page>
  );
};

export default ContactPage;
