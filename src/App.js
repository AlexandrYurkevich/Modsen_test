import "./shared_styles.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import LoadingPage from "./pages/ServicePages/LoadingPage";
import { AuthContext } from "./contexts/AuthContext";
import { MapProvider } from "./contexts/MapContext";
const PageNotFound = React.lazy(() => import("./pages/ServicePages/PageNotFound"));
const MapPage = React.lazy(() => import("./pages/MapPage/MapPage"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));

const App = () => {
    const { user } = useContext(AuthContext);
    return (
        <ThemeProvider theme={createTheme({
            palette: {
              primary: { main: '#5E7BC7' },
              secondary: { main: '#C75E5E' },
            },
          })}>
            <React.Suspense fallback={<LoadingPage/>}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={ <MapProvider><MapPage/></MapProvider> } />
                    <Route path="/login" element={ user ? <Navigate to="/" /> : <Login/> } />
                    <Route path="/register" element={ user ? <Navigate to="/" /> : <Register/> } />
                    <Route path="*" element={ <PageNotFound/> } />
                </Routes>
            </BrowserRouter>
            </React.Suspense>
        </ThemeProvider>
    )
}
export default App;