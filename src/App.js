import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AiAgent from './Components/AiAgent';
import AISection2 from './Components/Aiagent2';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AiAgent />} />
        <Route path="/Aisection2" element={<AISection2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   
  );
}

export default App;
