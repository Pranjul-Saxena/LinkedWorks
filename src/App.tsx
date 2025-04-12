import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import SubmitIdeaPage from './pages/SubmitIdeaPage';
import MarketplacePage from './pages/MarketplacePage';
import MentorsPage from './pages/MentorsPage';
import ContactPage from './pages/ContactPage';
import SecureSubmitPage from './pages/SecureSubmitPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="submit" element={<SubmitIdeaPage />} />
        <Route path="developers" element={<MarketplacePage />} />
        <Route path="mentors" element={<MentorsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="securesubmit" element={<SecureSubmitPage />} />
      </Route>
    </Routes>
  );
}

export default App;
