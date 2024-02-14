import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work, Contact } from './container';
import { ParticlesContainer } from './components';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    
    {/* <ParticlesContainer /> */}
    <Header />
    <About />
    <Skills />
    <Work />
    {/* <Testimonial /> */}
    {/* <Footer /> */}
    <Contact />
  </div>
);

export default App;
