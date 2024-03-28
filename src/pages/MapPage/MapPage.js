import { Button, Card, IconButton, InputBase, Paper, SvgIcon, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { MapContainer } from 'react-leaflet';
import Map from './Map';
import './styles.css'
import { Link } from 'react-router-dom';

const LogoIcon = ({ primaryColor, secondaryColor, ...props }) => (
    <SvgIcon {...props}>
      <path
        d="M167.49 83.44C167.49 102.57 161.02 120.22 150.13 134.31L132.91 103.82C135.54 97.54 136.99 90.66 136.99 83.44C136.99 56.67 117.03 34.48 91.2003 30.99C88.8604 30.66 86.4704 30.5 84.0504 30.5C81.6304 30.5 79.2504 30.66 76.9203 30.98C51.0903 34.47 31.1104 56.67 31.1104 83.44C31.1104 90.66 32.5603 97.55 35.2003 103.83L17.9704 134.32C7.09035 120.23 0.610352 102.58 0.610352 83.44C0.610352 37.43 38.0404 0 84.0504 0C130.06 0 167.49 37.43 167.49 83.44Z"
        fill={primaryColor}
      />
      <path
        d="M232.8 151.06L158.73 19.9501C143.93 -6.24995 106.19 -6.24995 91.38 19.9501L17.31 151.06L0 181.7H76.89C87.65 181.7 97.92 177.22 105.24 169.33L122.19 151.06L125.06 147.97L127.92 151.06L156.35 181.7H250.11L232.8 151.06ZM131.19 33.5001L153.25 72.54L125.06 102.93L96.86 72.54L118.91 33.5101C121.61 28.7301 128.5 28.7301 131.2 33.5101L131.19 33.5001ZM80.4 151.06H52.5L81.04 100.54L104.16 125.45L80.4 151.06ZM169.71 151.06L145.95 125.45L169.07 100.54L197.61 151.06H169.71Z"
        fill={secondaryColor}
      />
    </SvgIcon>
);

export default function MapPage() {
    const [places,setPlaces] = useState([])
    const [bookmarks,setBookmarks] = useState([])
    const [selectedPlace, setSelectedPlace] = useState(null)
    const [radius,setRadius] = useState(100)
    const [search, setSearch] =  useState("")
    const [openedTab,setTab] = useState(0)

    function handleSearch(value){
        setSearch(value);
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
                    <Link to = "/login">
                        <IconButton>
                            <LoginIcon/>
                        </IconButton>
                    </Link>
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
                        {["sfsfsfs","ssgdfsd","eterte"].map((category)=>
                            <Typography>
                                {category}
                            </Typography>
                        )}
                    </div>
                    <div className='categories outlined scroll-list'>
                        {Object.values(selectedPlace?.tags || {})?.map((tag)=>
                            <Typography>
                                {tag}
                            </Typography>
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
                    <Map places={places} setPlaces={setPlaces} radius={radius} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}/>
                </MapContainer>
            </div>
        </div>
    );
};
