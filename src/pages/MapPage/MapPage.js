import { Avatar, Button, IconButton, InputBase, Paper, SvgIcon, Tooltip, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import React, { useContext, useState } from 'react';
import { MapContainer } from 'react-leaflet';
import Map from './Map';
import './styles.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { MapContext } from '../../contexts/MapContext';
import { BankIcon, BycicleIcon, CafeIcon, CarsIcon, CultureIcon, EntertainIcon, FoodIcon, FuelIcon, HistoryIcon, IndustryIcon, NatureIcon, plus18Icon, ReligionIcon, ShopIcon, SportsIcon, SteepPlaceIcon, UnknownIcon, ViewPointIcon } from "./MarkerIcons";

const fishtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
export const categories = [
    { name: "Nature", amenities:['beach','camp_site'], icon: NatureIcon},
    { name: "Culture", amenities:['college','university','arts_centre','community_centre','conference_centre','exhibition_centre','fountain','library','music_venue','public_bookcase','social_centre','stage','studio','theatre'], icon: CultureIcon},
    { name: "History", amenities:['monument','archaeological_site','townhall'], icon: HistoryIcon},
    { name: "Religion", amenities:['place_of_worship'], icon: ReligionIcon},
    { name: "Architecture", amenities:['building'], icon: UnknownIcon},
    { name: "Industry", amenities:['industrial'], icon: IndustryIcon},
    { name: "View point", amenities:['viewpoint'], icon: ViewPointIcon},
    { name: "Entertainments", amenities:['cinema','gambling','nightclub','planetarium'], icon: EntertainIcon},
    { name: "Sport", amenities:['sports_centre','stadium'], icon: SportsIcon},
    { name: "18+", amenities:['brothel','stripclub','swingerclub','love_hotel'], icon: plus18Icon},
    { name: "Cars", amenities:['car_rental','car_sharing','car_wash','vehicle_inspection','taxi'], icon: CarsIcon},
    { name: "Fuel", amenities:['fuel','charging_station'], icon: FuelIcon},
    { name: "Bycicles", amenities:['bicycle_parking','bicycle_repair_station','bicycle_rental'], icon: BycicleIcon},
    { name: "Shop", amenities:['shop'], icon: ShopIcon},
    { name: "Food", amenities:['fast_food','food_court','ice_cream','restaurant'], icon: FoodIcon},
    { name: "Coffie", amenities:['cafe'], icon: CafeIcon},
    { name: "Banks", amenities:['bank','atm','payment_terminal','payment_centre'], icon: BankIcon},
    { name: "Place to sleep", amenities:['hotel','hostel'], icon: SteepPlaceIcon}
]

export function getCategoryIcon(amenity){
    return categories.find((cat)=>cat.amenities.includes(amenity)).icon;
}

const LogoIcon = ({ ...props }) => (
    <SvgIcon {...props} width="32" height="24" viewBox="0 0 32 24" fill="none">
    <path d="M26.6753 10.4867C26.6753 12.8908 25.8475 15.1092 24.4538 16.88L22.2509 13.0483C22.5869 12.2592 22.773 11.3942 22.773 10.4867C22.773 7.1225 20.2189 4.33333 16.9145 3.895C16.6147 3.85333 16.309 3.83333 15.9991 3.83333C15.69 3.83333 15.3852 3.85333 15.0871 3.89333C11.7827 4.3325 9.22605 7.1225 9.22605 10.4867C9.22605 11.3942 9.41131 12.26 9.74899 13.0492L7.5452 16.8817C6.1532 15.1108 5.32373 12.8925 5.32373 10.4867C5.32373 4.70417 10.1128 0 15.9991 0C21.8863 0 26.6753 4.70417 26.6753 10.4867Z" fill="#C75E5E"/>
    <path d="M20.3082 9.67079C18.4152 6.37829 13.5865 6.37829 11.6918 9.67079L0 30H9.83747C11.2143 30 12.528 29.4366 13.4644 28.445L16.0008 25.7608L16.3663 26.1491L20.0042 30H32L20.3082 9.67079ZM16.7848 11.3741L19.6076 16.2808L16.0008 20.1L12.3924 16.2808L15.2135 11.375C15.5596 10.7741 16.4404 10.7741 16.7865 11.375L16.7848 11.3741ZM10.2863 26.1491H6.71747L10.3688 19.8L13.3263 22.9308L10.2863 26.1491ZM21.7137 26.1491L18.6737 22.9308L21.6312 19.8L25.2834 26.1491H21.7137Z" fill="#5E7BC7"/>
    </SvgIcon>
);

export default function MapPage() {
    const { user, bookmarks, saveBookmark, deleteBookmark } = useContext(AuthContext)
    const { openedTab,setTab, loadPlacesWithinRadius,setPlaces,
        selectedPlace, setSelectedPlace, center, radius,setRadius,
        selectedCategories,setSelectedCategories,distance,time,setProfiling } = useContext(MapContext)
    const [search, setSearch] =  useState("")
    const [bookmarkSearch, setBookmarkSearch] =  useState("")

    function handleSearch(value){
        setSearch(value);
    }

    return (
        <div>
            <div className='overlay'>
                <Paper elevation={3} className="app-bar">
                    <div className='columned-container'>
                        <LogoIcon/>
                        <Button className='fixed-button' variant={openedTab !=1 ? 'outlined' : "contained"} color="primary" onClick={()=>setTab(1)}>
                            <SearchIcon/>
                        </Button>
                        <Button className='fixed-button' variant={openedTab !=2 ? 'outlined' : "contained"} color="secondary" onClick={()=>setTab(2)}>
                            <BookmarkIcon/>
                        </Button>
                    </div>
                    {user ?
                    <Tooltip title={user.displayName}>
                        <Avatar sx={{bgcolor: "primary.main"}}>
                            {user?.displayName?.charAt(0).toUpperCase()}
                        </Avatar>
                    </Tooltip> :
                    <Link to = "/login">
                        <IconButton>
                            <LoginIcon/>
                        </IconButton>
                    </Link>}
                </Paper>
                {openedTab == 1 && 
                <Paper elevation={3} className="tab">
                    <div className='flex-container outlined'>
                        <SearchIcon/>
                        <InputBase
                        value={search}
                        onChange={(e)=>handleSearch(e.target.value)}
                        placeholder="category…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Typography variant="h6">
                        Search:
                    </Typography>
                    <div className='categories outlined scroll-list'>
                        {categories.filter((c)=>c.name.includes(search)).map((category)=>
                            <div key={category.name} className='flex-container' onClick={()=>setSelectedCategories(
                                selectedCategories.some((cat)=>cat.name == category.name) ?
                                selectedCategories.filter((cat)=>cat.name != category.name) :
                                [...selectedCategories, category]
                            )}>
                                <div 
                                    style={{ transform: "scale(0.75)" }}
                                    dangerouslySetInnerHTML={{ __html: category.icon.options.html }}
                                />
                                <Typography 
                                    style={{color: !selectedCategories.some((cat)=>cat.name == category.name) && "lightgrey"}}
                                >
                                    {category.name}
                                </Typography>
                            </div>
                        )}
                    </div>
                    <Typography variant="h6">
                        Radius
                    </Typography>
                    <div className='flex-container' style={{gap: '5px', width:"50%"}}>
                        <InputBase className="outlined"
                        value={radius}
                        type="number"
                        onChange={(e)=>setRadius(e.target.value)}
                        inputProps={{ 'aria-label': 'radius' }}
                        />
                        km
                    </div>
                    <Button style={{alignSelf: 'flex-end', marginTop: "auto"}} variant="contained" fullWidth
                    onClick={()=>loadPlacesWithinRadius(center, radius).then((data) => setPlaces(data))}
                    >
                        <SearchIcon/>
                    </Button>
                </Paper>
                }
                {openedTab == 2 && 
                <Paper elevation={3} className="tab">
                    <div className='flex-container outlined'>
                        <SearchIcon/>
                        <InputBase
                        value={bookmarkSearch}
                        onChange={(e)=>setBookmarkSearch(e.target.value)}
                        placeholder="place,adress…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className='places-list scroll-list'>
                        {bookmarks?.filter(b=> bookmarkSearch == "" ||
                        b.tags.brand?.includes(bookmarkSearch) || 
                        b.tags.name?.includes(bookmarkSearch)).map((place)=>
                            <div key={place.id} className='columned-container bookmark-element outlined'>
                                <div className='flex-container'>
                                    <div className='dummy-thumbnail outlined'>
                                    <div 
                                        className='dummy-category'
                                        dangerouslySetInnerHTML={{ __html: getCategoryIcon(place.tags.amenity).options.html }}
                                    />
                                    </div>
                                    <div className='bookmark-name'>
                                    <Typography variant="h8">{place.tags.name || place.tags.brand || "No name"}</Typography>
                                    </div>
                                </div>
                                <Typography variant="caption" className='minidesc'>{fishtext}</Typography>
                                <div className='flex-container' style={{justifyContent:"space-between"}}>
                                    <BookmarkIcon color='secondary'/>
                                    <IconButton onClick={()=> {
                                        setSelectedPlace(place)
                                        setTab(3);
                                    }}>
                                        <ArrowRightIcon/>
                                    </IconButton>
                                </div>
                            </div>
                        )}
                    </div>
                </Paper>
                }
                {openedTab == 3 && 
                <Paper elevation={3} className="tab">
                    <div className='flex-container' style={{gap:"5px"}}>
                        <div className='flex-container outlined' style={{padding:'5px',height: "80%"}}>
                            <Typography variant="h8">Distance: {distance}m</Typography>
                        </div>
                        <div className='flex-container outlined' style={{padding:'5px', height: "80%"}}>
                            <Typography variant="h8">Time: {time}</Typography>
                        </div>
                    </div>
                    <div className="profiling">
                        <IconButton onClick={()=>setProfiling("wheelchair")}><AccessibleForwardIcon/></IconButton>
                        <IconButton onClick={()=>setProfiling("foot-walking")}><DirectionsWalkIcon/></IconButton>
                        <IconButton onClick={()=>setProfiling("cycling-regular")}><PedalBikeIcon/></IconButton>
                        <IconButton onClick={()=>setProfiling("driving-car")}><DirectionsCarIcon/></IconButton>
                    </div>
                    <div className='columned-container bookmark-element outlined'>
                        <div className='dummy-thumbnail-big outlined'>
                            No Data from OSM
                        </div>
                        <div className='columned-container' style={{width: '100%', alignItems:'flex-start'}}>
                            <div 
                                style={{ transform: "scale(0.5)" }}
                                dangerouslySetInnerHTML={{ __html: getCategoryIcon(selectedPlace.tags.amenity).options.html }}
                            />
                            <Typography variant="h8">{selectedPlace.tags.name || selectedPlace.tags.brand || "No name"}</Typography>
                            <div className="columned-container bigdesc scroll-list">
                                <Typography variant="caption">{fishtext}</Typography>
                                <br/>
                                {selectedPlace.tags.phone && <Typography variant="h8">Phone: {selectedPlace.tags.phone}</Typography>}
                                {selectedPlace.tags.opening_hours && <Typography variant="h8">Opening hours: {selectedPlace.tags.opening_hours}</Typography>}
                                {selectedPlace.tags.website && <Typography variant="h8">Website: {selectedPlace.tags.website}</Typography>}
                                {selectedPlace.tags["addr:street"] && <Typography variant="h8">
                                    Adress: {selectedPlace.tags["addr:street"] + (selectedPlace.tags["addr:housenumber"]
                                    ? (", " + selectedPlace.tags["addr:housenumber"]) : "")}
                                </Typography>}
                            </div>
                            <Button variant="outlined" color={
                                bookmarks.some(b=>b.id == selectedPlace.id) ? 
                                "secondary" : 
                                "primary"
                            } startIcon={<BookmarkIcon/>}
                            onClick={()=>bookmarks.some(b=>b.id == selectedPlace.id)
                                ? deleteBookmark(user?.uid, selectedPlace.id)
                                : saveBookmark(user?.uid, selectedPlace)}
                            >{bookmarks.some(b=>b.id == selectedPlace.id)
                            ? "Saved" : "Save bookmark"}</Button>
                        </div>
                    </div>
                </Paper>
                }
                {openedTab != 0 && <Paper elevation={3} className="close-button">
                    <IconButton onClick={()=>setTab(0)}>
                        <CloseIcon/>
                    </IconButton>
                </Paper>}
            </div>
            <div className='map-container'>
                <MapContainer
                    style={{ height: '100vh' }}
                    center={[0,0]}
                    zoom={17}
                    minZoom={3}
                    zoomControl={false}
                    scrollWheelZoom={true}
                >
                    <Map/>
                </MapContainer>
            </div>
        </div>
    );
};
