import React from 'react';
import { MapContainer } from 'react-leaflet';
import Map from './Map';

const MapComponent = () => {
    return (
        <MapContainer
            style={{ height: '100vh' }}
			center={[0,0]}
			zoom={17}
			minZoom={3}
			scrollWheelZoom={true}
		>
            <Map/>
        </MapContainer>
    );
};

export default MapComponent;