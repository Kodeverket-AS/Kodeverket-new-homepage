"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const center = {
    lat: 60.3936269,
    lng: 5.3277533,
};

//updated to use the new Google Maps API
const MapComponent = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (loadError)
        return (
            <div>Kartet er midlertidig utilgjengelig. Beklager ulempene. </div>
        );
    if (!isLoaded) return <div>Vennligst vent, kartet lastes...</div>;

    return (
        <div className=' w-full md:w-1/2 '>
            <GoogleMap
                mapContainerClassName='w-full h-[300px] md:h-full  rounded-[12px]'
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
