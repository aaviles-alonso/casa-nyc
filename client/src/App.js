import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import other pages
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
// import resource pages
import Resources from "./pages/Resources/Resources";
import Healthcare from "./pages/Healthcare/Healthcare";
import Legal from "./pages/Legal/Legal";
import Education from "./pages/Education/Education";
// import Organizations page
import Organizations from "./pages/Organizations/Organizations";
// import Header and Footer
import Header from './components/Header/Header';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/healthcare" element={<Healthcare />} />
        <Route path="/resources/legal" element={<Legal />} />
        <Route path="/resources/education" element={<Education />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
