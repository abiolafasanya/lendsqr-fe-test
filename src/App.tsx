import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserPage, LandingPage, Login } from './Routes';
import './styles/main.scss';
import Protected from './components/Protected';
import React from 'react';

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      <Route element={<Protected />}>
        <Route path="/dashboard" element={<UserPage />} />
      </Route>

      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
