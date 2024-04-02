import { createContext, useState } from "react";
import { categories } from "../pages/MapPage/MapPage";
import axios from "axios";

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [openedTab,setTab] = useState(0)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [selectedCategories,setSelectedCategories] = useState(categories)
  const [radius,setRadius] = useState(100)
  const [center,setCenter] = useState([0,0]) 
  const [distance,setDistance] = useState(null)
  const [time,setTime] = useState(null)
  const [profiling, setProfiling] = useState("foot-walking");
  const [places,setPlaces] = useState([])

  const loadPlacesWithinRadius = (center, radius) => {
    const url = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:${radius},${center[0]},${center[1]})["amenity"];out;`;
  
    return axios.get(url)
      .then(res=> res.data)
      .then(data => data.elements
        ?.filter(el=> selectedCategories.some((cat)=>cat.amenities.includes(el.tags.amenity)))
        ?.map(el=> ({...el, position:[el.lat,el.lon]})))
      .catch(error => console.error(error));
  }

  return (
    <MapContext.Provider value={{
      openedTab,setTab,
      selectedPlace, setSelectedPlace, 
      selectedCategories,setSelectedCategories,
      radius,setRadius,
      places,setPlaces,
      center,setCenter,
      distance,setDistance,
      time,setTime,
      profiling, setProfiling,
      loadPlacesWithinRadius
      }} >
      {children}
    </MapContext.Provider>
  );
};
