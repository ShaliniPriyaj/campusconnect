import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignPage";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Chatbot";
import Navbar from "./pages/Navbar";
import ChatIcon from "./pages/ChatIcon";
import Carousel from "./pages/Carousel";
import Department from "./pages/Department";
import Events from "./pages/Events";
import "./styles/styles.css";

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

// Separate Component to Conditionally Render Navbar & Chat Icon
const MainContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/login" || location.pathname === "/sign-up"; 
  const hideChatIcon = location.pathname === "/" || location.pathname === "/chatbot"; 

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* First Page (Only Navbar + Carousel) */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />

        {/* Main Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/events" element={<Events />} />
        
        {/* Chatbot */}
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>

      {!hideChatIcon && <ChatIcon />}
    </>
  );
};

// First Page Component (Navbar + Carousel Only)
const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
    </div>
  );
};

export default App;