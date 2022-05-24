import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Header from '../src/component/part/header/header.js';
import Footer from '../src/component/part/footer/footer.js';

import Index from './component/main/index';
import About from './component/main/about/about';
import Contact from './component/main/contact/contact';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
