import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Services from './pages/Services';
import Aromates from './pages/Aromates';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aromates" element={<Aromates />} />
      </Routes>
    </div>
  );
}
