import React from 'react';
import { Link } from 'react-router-dom';
import styles from './landingpage.module.scss';
import { FaGithub } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2>Abiola Fasanya</h2>
        <h3>LendSQr Assessment Submission</h3>
      </div>
      <div>
        <div className={styles.item}>
          <h3>
            <FaGithub />
          </h3>
          <Link to="https://github.com/dev-harbiola/lendsqr-fe-test">
            lendsqr-fe-test
          </Link>
        </div>
        <div className={styles.item}>
          <Link to={'/dasboard'} className={styles.submissionLink}>
            View Submission
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
