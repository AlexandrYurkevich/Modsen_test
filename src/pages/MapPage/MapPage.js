import { Avatar, Button, Card, CardContent, CardMedia, IconButton, InputBase, Paper, SvgIcon, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext, useState } from 'react';
import { MapContainer } from 'react-leaflet';
import Map from './Map';
import './styles.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { MapContext } from '../../contexts/MapContext';
import { BankIcon, BycicleIcon, CafeIcon, CarsIcon, CultureIcon, EntertainIcon, FoodIcon, FuelIcon, HistoryIcon, IndustryIcon, NatureIcon, plus18Icon, ReligionIcon, ShopIcon, SportsIcon, SteepPlaceIcon, UnknownIcon, ViewPointIcon } from "./MarkerIcons";

export const categories = [
    { name: "Nature", amenities:['beach','camp_site'], icon: NatureIcon},
    { name: "Culture", amenities:['arts_centre','community_centre','conference_centre','exhibition_centre','fountain','library','music_venue','planetarium','public_bookcase','social_centre','stage','studio','theatre'], icon: CultureIcon},
    { name: "Architecture", amenities:['monument','archaeological_site'], icon: HistoryIcon},
    { name: "Religion", amenities:['place_of_worship'], icon: ReligionIcon},
    { name: "Ukknown", amenities:['building'], icon: UnknownIcon},
    { name: "Industry", amenities:['industrial'], icon: IndustryIcon},
    { name: "View point", amenities:['viewpoint'], icon: ViewPointIcon},
    { name: "Entertainments", amenities:['cinema','gambling','nightclub'], icon: EntertainIcon},
    { name: "Sport", amenities:['sports_centre','stadium'], icon: SportsIcon},
    { name: "18+", amenities:['brothel','stripclub','swingerclub','love_hotel'], icon: plus18Icon},
    { name: "Cars", amenities:['car_rental','car_sharing','car_wash','vehicle_inspection'], icon: CarsIcon},
    { name: "Fuel", amenities:['fuel','charging_station'], icon: FuelIcon},
    { name: "Bycicles", amenities:['bicycle_parking','bicycle_repair_station','bicycle_rental'], icon: BycicleIcon},
    { name: "Shop", amenities:['shop'], icon: ShopIcon},
    { name: "Food", amenities:['fast_food','food_court','ice_cream','restaurant'], icon: FoodIcon},
    { name: "Coffie", amenities:['cafe'], icon: CafeIcon},
    { name: "Banks", amenities:['bank','atm'], icon: BankIcon},
    { name: "Place to sleep", amenities:['hotel','hostel'], icon: SteepPlaceIcon}
]

const LogoIcon = ({ ...props }) => (
    <SvgIcon {...props} width="32" height="24" viewBox="0 0 32 24" fill="none">
    <path d="M26.6753 10.4867C26.6753 12.8908 25.8475 15.1092 24.4538 16.88L22.2509 13.0483C22.5869 12.2592 22.773 11.3942 22.773 10.4867C22.773 7.1225 20.2189 4.33333 16.9145 3.895C16.6147 3.85333 16.309 3.83333 15.9991 3.83333C15.69 3.83333 15.3852 3.85333 15.0871 3.89333C11.7827 4.3325 9.22605 7.1225 9.22605 10.4867C9.22605 11.3942 9.41131 12.26 9.74899 13.0492L7.5452 16.8817C6.1532 15.1108 5.32373 12.8925 5.32373 10.4867C5.32373 4.70417 10.1128 0 15.9991 0C21.8863 0 26.6753 4.70417 26.6753 10.4867Z" fill="#C75E5E"/>
    <path d="M20.3082 9.67079C18.4152 6.37829 13.5865 6.37829 11.6918 9.67079L0 30H9.83747C11.2143 30 12.528 29.4366 13.4644 28.445L16.0008 25.7608L16.3663 26.1491L20.0042 30H32L20.3082 9.67079ZM16.7848 11.3741L19.6076 16.2808L16.0008 20.1L12.3924 16.2808L15.2135 11.375C15.5596 10.7741 16.4404 10.7741 16.7865 11.375L16.7848 11.3741ZM10.2863 26.1491H6.71747L10.3688 19.8L13.3263 22.9308L10.2863 26.1491ZM21.7137 26.1491L18.6737 22.9308L21.6312 19.8L25.2834 26.1491H21.7137Z" fill="#5E7BC7"/>
    </SvgIcon>
);

export default function MapPage() {
    const { user } = useContext(AuthContext)
    const { openedTab,setTab, loadPlacesWithinRadius,
        selectedPlace, center, radius,setRadius,bookmarks,setBookmarks,
        selectedCategories,setSelectedCategories,distance,time } = useContext(MapContext)
    const [search, setSearch] =  useState("")

    function handleSearch(value){
        setSearch(value);
        loadPlacesWithinRadius(center, radius)
    }

    return (
        <div>
            <div className='overlay'>
                <Paper elevation={3} className="app-bar">
                    <div className='columned-container'>
                        <LogoIcon primaryColor="primary" secondaryColor="secondary" />
                        <Button className='fixed-button' variant={openedTab !=1 ? 'outlined' : "contained"} color="primary" onClick={()=>setTab(1)}>
                            <SearchIcon/>
                        </Button>
                        <Button className='fixed-button' variant={openedTab !=2 ? 'outlined' : "contained"} color="secondary" onClick={()=>setTab(2)}>
                            <BookmarkIcon/>
                        </Button>
                    </div>
                    {user ? <Avatar></Avatar> :<Link to = "/login">
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
                        placeholder="place,adress…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Typography variant="h6">
                        Search:
                    </Typography>
                    <div className='categories outlined scroll-list'>
                        {categories.map((category)=>
                            <div className='flex-container' onClick={()=>setSelectedCategories(
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
                    <Button style={{alignSelf: 'flex-end', marginTop: "auto"}} variant="contained" fullWidth>
                        <SearchIcon/>
                    </Button>
                </Paper>
                }
                {openedTab == 2 && 
                <Paper elevation={3} className="tab">
                    <div className='flex-container outlined'>
                        <SearchIcon/>
                        <InputBase
                        value={search}
                        onChange={(e)=>handleSearch(e.target.value)}
                        placeholder="place,adress…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className='places-list scroll-list'>
                        {bookmarks.map((place)=>
                            <Card>
                                
                            </Card>
                        )}
                    </div>
                </Paper>
                }
                {openedTab == 3 && 
                <Paper elevation={3} className="tab">
                    <div className='flex-container'>
                        <div className='flex-container outlined'>
                            Distance: {distance}
                        </div>
                        <div className='flex-container outlined'>
                            Time: {time}
                        </div>
                    </div>
                    <Card>
                        <CardMedia>No Image</CardMedia>
                        <CardContent>
                            <Typography variant='h6'>{selectedPlace?.name}</Typography>
                        </CardContent>            
                    </Card>
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
