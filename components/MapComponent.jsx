

"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius:12,
};

const center = {
  lat: 60.3936269,
  lng: 5.3277533,
};

const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBNKtD94nXUh503qJProTU54d28_hEcQjY", 
  });

  if (loadError) return <div>Kartet er midlertidig utilgjengelig. Beklager ulempene. </div>;
  if (!isLoaded) return <div>Vennligst vent, kartet lastes...</div>;

  return (
    <div className="w-1/2 ">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={{
          gestureHandling: "greedy",
          disableDefaultUI: false,
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
