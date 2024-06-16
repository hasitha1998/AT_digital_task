import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages


// Import other components if necessary
// import Header from "../components/Header";
// import Footer from "../components/Footer";

import HomeScreen from '../components/HomeScreen';
import NameForm from '../components/NameForm';
import EmailForm from '../components/EmailForm';
import CountryForm from '../components/CountryForm';
import PhoneForm from '../components/PhoneForm';
import ScrollingComponent from '../components/ScrollingComponent';

import{

    Home,
    PageOne,
    PageTwo

}from "../pages"

// Main App component
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeScreen/>} />
        <Route path="/name" element={<NameForm />} />
          <Route path="/email" element={<EmailForm />} />
          <Route path="/country" element={<CountryForm />} />
          <Route path="/phone" element={<PhoneForm />} />
          <Route path="/scroll" element={<ScrollingComponent />} />

        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
