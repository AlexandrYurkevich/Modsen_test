import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const MapComponent = () => {
    const [markers,setMarkers] = useState([])
    const [center,setCenter] = useState({ lat: 0, lng: 0 })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
        ({coords: { latitude: lat, longitude: lng }}) => setCenter({ lat, lng })
        );
    }, []);

    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY || "";
    console.log(googleMapsApiKey)
    const { isLoaded } = useJsApiLoader({ googleMapsApiKey });
    if (!isLoaded) { return null; }
    
    return (
        <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        zoom={13}
        center={center}
        >
            <Marker position={center} title="Your Location" />
            {markers.map((marker) => <Marker position={marker.position} title={marker.name} />)}
        </GoogleMap>
    );
};

export default MapComponent;