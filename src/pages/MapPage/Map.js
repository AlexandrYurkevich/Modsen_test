import { TileLayer, Marker, Popup, useMapEvents, Circle, ZoomControl, Polyline } from "react-leaflet";
import { useContext, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import 'leaflet-routing-machine';
import Openrouteservice from 'openrouteservice-js';
import { LocationIcon } from "./MarkerIcons";
import { MapContext } from "../../contexts/MapContext";
import { categories } from "./MapPage";

const TILELAYER_URL = process.env.REACT_APP_TILELAYER_URL;
const OPENROUTE_KEY = process.env.REACT_APP_OPENROUTE_KEY;

function getCategoryIcon(amenity){
  return categories.find((cat)=>cat.amenities.includes(amenity)).icon;
}

export default function Map() {
  const {places,setPlaces,radius,selectedPlace, setSelectedPlace, setTab,
    center,setCenter, setDistance, setTime, loadPlacesWithinRadius} = useContext(MapContext)
  const [route,setRoute] = useState(null)

  const map = useMapEvents({
    dblclick: () => {
      map.locate()
    },
    locationfound: (location) => {
      const userLoaction = [location.latitude, location.longitude];
      setCenter(userLoaction);
      map.flyTo(userLoaction,17, {animate: false})
      loadPlacesWithinRadius(userLoaction, radius)
    }
  })

  useEffect(() => {
    map.locate();
  },[map])

  useEffect(()=>{
    if(!selectedPlace) return;
    
    const orsDirections = new Openrouteservice.Directions({
      api_key: OPENROUTE_KEY
    })

    orsDirections.calculate({
      coordinates: [[center[1],center[0]],[selectedPlace?.position[1],selectedPlace?.position[0]]],
      profile: "driving-car",
      extra_info: ["waytype", "steepness"],
      format: "geojson",
      api_version: 'v2'
    })
    
    .then(function(response) {
      if (response && response.features && response.features[0]) {
        const feature = response.features[0];
        if (feature.geometry && Array.isArray(feature.geometry.coordinates)) {
          console.log("route is changed")
          setDistance(feature.properties.summary.distance)
          setTime(feature.properties.summary.duration)
          setRoute(feature.geometry.coordinates.map(coords=> [coords[1],coords[0]]));
        }
      }
    })
  },[selectedPlace,center])

	return (
		<>
			<TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url={TILELAYER_URL}
      />
      <ZoomControl position="bottomright" />
			<Marker position={center} icon={LocationIcon}>
				<Popup>You're here.</Popup>
        <Circle
          center={center}
          pathOptions={{ color: '#8E9DC5', fillColor: '#BFC5D4', fillOpacity: 0.3, weight: 3, dashArray: '5, 10' }}
          radius={radius}
        />
        <Circle
          center={center}
          pathOptions={{ color: '#8A9BC5', fillColor: '#8A9BC5', opacity: 0.5, fillOpacity: 0.6, weight: 3 }}
          radius={15}
        />
			</Marker>
      {places.map((place) => <Marker
        key={place.id}
        position={place.position}
        icon={getCategoryIcon(place.tags.amenity)}
        eventHandlers={{ click: ()=> {
          setSelectedPlace(place);
          setTab(3);
          console.log(place)
        }}}
      />)}
      {route && <Polyline positions={route}/>}
		</>
	);
};
