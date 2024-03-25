import { TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const TILELAYER_URL = process.env.REACT_APP_TILELAYER_URL;

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
  shadowAnchor: [12, 41],
  iconSize: [24, 41],
  shadowSize: [24, 41],
});

const Map = () => {
	const [markers,setMarkers] = useState([])
  const [center,setCenter] = useState([0,0])
  const map = useMapEvents({
    dblclick: () => {
      map.locate()
    },
    locationfound: (location) => {
      console.log('location found:', location)
      const userLoaction = [location.latitude, location.longitude];
      setCenter(userLoaction);
      map.flyTo(userLoaction,17, {animate: false})
    }
  })

  useEffect(() => {
    map.locate();
  },[map])

	return (
		<>
			<TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url={TILELAYER_URL}
      />
			<Marker position={center} icon={DefaultIcon}>
				<Popup>You're here.</Popup>
			</Marker>
      {markers.map((marker) => <Marker position={marker.position}/>)}
		</>
	);
};

export default Map;