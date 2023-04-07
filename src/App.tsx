import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, LandingPage, Login, Register } from './Routes';
import './styles/main.scss';
import Layout from './components/Layout';
import Protected from './components/Protected';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      {/* Private Pages */}
      <Route element={<Protected />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

        {/* Unknown Pages */}
        <Route path="*" element={<LandingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
