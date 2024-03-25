import "./shared_styles.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import LoadingPage from "./pages/ServicePages/LoadingPage";
const PageNotFound = React.lazy(() => import("./pages/ServicePages/PageNotFound"));
const MapPage = React.lazy(() => import("./pages/MapPage/MapPage"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));

const App = () => {
    const user = false;//temp
    return (
        <ThemeProvider theme={createTheme({
            palette: {
              primary: { main: '#7CFFC4' },
              secondary: { main: '#7AC7FF' },
            },
          })}>
            <React.Suspense fallback={<LoadingPage/>}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={ <MapPage/> } />
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