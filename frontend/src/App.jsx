import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Itinerary from "./pages/TripPage";
import ItineraryList from "./pages/TripList";
import NewItinerary from "./pages/NewTrip";
import NavBar from "./components/Navbar";
import './styles/font.css'
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";

// import 'bootstrap/dist/css/bootstrap.min.css';

// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'

// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter className="font">
      <AuthProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Intro />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>

          <Route path="/trips" element={<ItineraryList />}/>
          <Route path="/trips/:id" element={<Itinerary />}/>
          <Route path="/trips/new" element={<NewItinerary />}/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
};

export default App;