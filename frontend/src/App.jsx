import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Itinerary from "./pages/ItineraryPage";
import ItineraryList from "./pages/ItineraryList";
import NewItinerary from "./pages/NewItinerary";
import NavBar from "./components/Navbar";
import './styles/font.css'

// import 'bootstrap/dist/css/bootstrap.min.css';

// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'

// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter className="font">
      <NavBar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Intro />}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
        <Route path="/my-itineraries" element={<ItineraryList />} />
        <Route path="/my-itinerary/:id" element={<Itinerary />} />
        <Route path="/new-itinerary" element={<NewItinerary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;