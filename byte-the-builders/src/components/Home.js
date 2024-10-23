// src/components/Home.js
import React from 'react';
import SearchBar from './SearchBar';
import ProjectSlider from './ProjectSlider';
import Footer from './Footer';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to ConstructionCo!</h1>
      <p>This is your homepage after successfully logging in or registering.</p>
      
      {/* Search bar */}
      <SearchBar />
      
      {/* Separator line */}
      <hr className="separator" />
      
      {/* Company Portfolio */}
      <div className="portfolio-section">
        <h2>Company Portfolio</h2>
        <p>Explore our completed and ongoing projects, our team, materials, clients, and equipment.</p>
      </div>
      
      {/* Another separator line */}
      <hr className="separator" />
      
      {/* Project Slider */}
      <ProjectSlider />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
