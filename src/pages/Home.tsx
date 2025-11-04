import React from 'react';
import Slider from '../components/Slider';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
  return (
    <div>
      <Slider />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;