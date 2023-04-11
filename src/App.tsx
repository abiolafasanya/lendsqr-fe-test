import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserPage, User, LandingPage, Login } from './Routes';
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
        <Route path="/users" element={<UserPage />} />
        <Route path="/user/:id" element={<User />} />
      </Route>

      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
