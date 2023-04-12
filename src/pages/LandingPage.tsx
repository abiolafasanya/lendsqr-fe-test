import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h2>Abiola Fasanya</h2>
      <h3>LendSQr Assessment Submission</h3>
      <div>
        <Link to={'/dasboard'}>View Submission</Link>
      </div>
    </div>
  );
}

export default LandingPage