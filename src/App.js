import React from 'react';
import logo from './logo.svg';
// import './App.css';

// components
import Navbar from './components/Navbar';
import AboutMoose from './components/AboutMoose';
import Team from './components/Team';
import Resources from './components/Resources';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMoose />
      <Team />
      <Resources />
      <ContactUs />
    </div>
  );
}

export default App;
