import { TileLayer, Marker, Popup, useMapEvents, Polyline, Circle, ZoomControl } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import 'leaflet-routing-machine';
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

export default function Map({places,setPlaces,radius}) {
  const [center,setCenter] = useState([0,0])
  const [route,setRoute] = useState(null)

  function fetchPlacesWithinRadius(center, radius) {
    const url = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:${radius},${center[0]},${center[1]})["amenity"];out;`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => data.elements.map(el=> ({...el, position:[el.lat,el.lon]})))//({id:el.id, tags: el.tags, position:[el.lat,el.lon]})))
      .catch(error => console.error(error));
  }

  const map = useMapEvents({
    dblclick: () => {
      map.locate()
    },
    locationfound: (location) => {
      console.log('location found:', location)
      const userLoaction = [location.latitude, location.longitude];
      setCenter(userLoaction);
      map.flyTo(userLoaction,17, {animate: false})
      fetchPlacesWithinRadius(userLoaction, radius)
        .then((data) => { 
          setPlaces(data);
          console.log(data);
          const router = L.Routing.control({
            waypoints: [
              L.latLng(location.latitude, location.longitude),
              L.latLng(data[7].latitude, data[7].longitude),
            ],
          }).addTo(map);

          router.on('routesfound', (event) => {
            console.log("router - " + event.routes[0].coordinates)
            setRoute(event.routes[0].coordinates);
          });
        })
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
      <ZoomControl position="bottomright" />
			<Marker position={center} icon={DefaultIcon}>
				<Popup>You're here.</Popup>
        <Circle
          center={center}
          pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.2, weight: 3, dashArray: '5, 10' }}
          radius={radius}
        />
			</Marker>
      {places.map((marker) => <Marker key={marker.id} position={marker.position} icon={DefaultIcon}/>)}
      {route && <Polyline pathOptions={{ color: 'blue' }} positions={route} />}
		</>
	);
};
