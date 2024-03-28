import { TileLayer, Marker, Popup, useMapEvents, Circle, ZoomControl, Polyline } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from 'leaflet';
import 'leaflet-routing-machine';
import Openrouteservice from 'openrouteservice-js';
import { BankIcon, BycicleIcon, CafeIcon, CarsIcon, CultureIcon, DefaultIcon, EntertainIcon, FoodIcon, FuelIcon, HistoryIcon, IndustryIcon, NatureIcon, plus18Icon, ReligionIcon, ShopIcon, SportsIcon, SteepPlaceIcon, UnknownIcon, ViewPointIcon } from "./MarkerIcons";

const TILELAYER_URL = process.env.REACT_APP_TILELAYER_URL;
const OPENROUTE_KEY = process.env.REACT_APP_OPENROUTE_KEY;

function getCategoryIcon(amenity){
  if(['beach','camp_site'].includes(amenity))
      return NatureIcon;
  if(['arts_centre','community_centre','conference_centre','exhibition_centre','fountain','library','music_venue','planetarium','public_bookcase','social_centre','stage','studio','theatre'].includes(amenity))
      return CultureIcon;
  if(['monument','archaeological_site'].includes(amenity))
      return HistoryIcon;
  if(['place_of_worship'].includes(amenity))
      return ReligionIcon;
  if(['building'].includes(amenity))
      return UnknownIcon;
  if(['industrial'].includes(amenity))
      return IndustryIcon;
  if(['viewpoint'].includes(amenity))
      return ViewPointIcon;
  if(['cinema','gambling','nightclub'].includes(amenity))
      return EntertainIcon;
  if(['sports_centre','stadium'].includes(amenity))
      return SportsIcon
  if(['brothel','stripclub','swingerclub','love_hotel'].includes(amenity))
      return plus18Icon
  if(['car_rental','car_sharing','car_wash','vehicle_inspection'].includes(amenity))
      return CarsIcon
  if(['fuel','charging_station'].includes(amenity))
      return FuelIcon
  if(['bicycle_parking','bicycle_repair_station','bicycle_rental'].includes(amenity))
      return BycicleIcon
  if(['shop'].includes(amenity))
      return ShopIcon
  if(['fast_food','food_court','ice_cream','restaurant'].includes(amenity))
      return FoodIcon;
  if(['cafe'].includes(amenity))
      return CafeIcon
  if(['bank','atm'].includes(amenity))
      return BankIcon
  if(['hotel','hostel'].includes(amenity))
      return SteepPlaceIcon
  return DefaultIcon;
}

export default function Map({places,setPlaces,radius,selectedPlace, setSelectedPlace}) {
  const [center,setCenter] = useState([0,0]) 
  const [distance,setDistance] = useState(null)
  const [time,setTime] = useState(null)
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
        })
    }
  })

  useEffect(() => {
    map.locate();
  },[map])

  useEffect(()=>{
    if(!selectedPlace) return;
    
    const orsDirections = new Openrouteservice.Directions({
      api_key: {OPENROUTE_KEY}
    })

    orsDirections.calculate({
      coordinates: [[center[1],center[0]],[selectedPlace?.position[1],selectedPlace?.position[0]]],
      profile: "driving-car",
      extra_info: ["waytype", "steepness"],
      format: "geojson",
      api_version: 'v2',
    })
    
    .then(function(response) {
      console.log(response);
      
      if (response && response.features && response.features[0]) {
        const feature = response.features[0];
        if (feature.geometry && Array.isArray(feature.geometry.coordinates)) {
          console.log("route is changed")
          setRoute(feature.geometry.coordinates.map(coords=> [coords[1],coords[0]]));
        }
      }
    })
  },[selectedPlace])

  const Routing = ({start,end})=> {

    useEffect(() => {
      if (!map || !end) return;
  
      const routingControl = L.Routing.control({
        waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: "blue", opacity: 0.6, weight: 4 }],
        }
      }).on("routesfound", (e) => {
        const { routes } = e;
        if (routes.length > 0) {
          const { distance, time } = routes[0].summary;
          console.log(routes[0].summary)
          setDistance(distance);
          setTime(time);
        }
      }).addTo(map);
  
      return () => map.removeControl(routingControl);
    }, [end,start]);
  
    return null;
  }

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
        eventHandlers={{ click: ()=> setSelectedPlace(place) }}
      />)}
      {/* <Routing start={center} end={selectedPlace?.position}/> */}
      {route && <Polyline positions={route}/>}
		</>
	);
};
