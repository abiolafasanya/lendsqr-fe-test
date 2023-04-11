import React, { useState } from 'react';
import UseAuth from '../../hooks/useAuth';
import { mockCredentials } from '../../utils/MockData';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/login-image.svg';
import styles from './login.module.scss';
import logo from '../../assets/logo.svg';
import { Helmet } from 'react-helmet';

type Auth = {
  email?: string;
  isLoggedIn?: boolean;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSetAuth, auth } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const passwordType = showPassword ? 'text' : 'password';
  const passwordText = showPassword ? 'Hide' : 'Show';

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLInputElement & {
      email: { value: string };
      password: { value: string };
    };

    if (
      target.email.value === mockCredentials.email &&
      target.password.value === mockCredentials.password
    ) {
      const form: Auth = { isLoggedIn: true };
      const auth = handleSetAuth(form);
      auth.isLoggedIn && navigate('/dashboard', { replace: true });
    }
    return;
  }

  return (
    <>
      {auth === null || !auth.isLoggedIn ? (
        <div className={styles.Login}>
          <Helmet>
            <title>Login Page</title>
            <meta name="description" content="Lendsqr Login Page" />
          </Helmet>
          <main className={styles.container}>
            <section className={styles.section1}>
              <div className={styles.header}>
                <img src={logo} alt="lendsqr logo" />
                <h2>lendsqr</h2>
              </div>
              <img
                src={loginImage}
                className={styles.loginImage}
                alt="login display image"
              />
            </section>

            <section className={styles.section2}>
              <div className={styles.info}>
                <h2 data-testid="greeting">Welcome!</h2>
                <p data-testid="description">Enter details to login.</p>
              </div>
              <form onSubmit={handleLogin} data-testid="form-element">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    data-testid="email-input"
                  />
                </div>
                <div className="form-group">
                  <div className={styles.password}>
                    <input
                      type={passwordType}
                      name="password"
                      id="password"
                      placeholder="Password"
                      data-testid="password-input"
                    />
                    <span
                      onClick={() => setShowPassword((pwd) => !pwd)}
                      role="button"
                    >
                      {passwordText}
                    </span>
                  </div>
                </div>
                <div className="form-group">
                  <Link to="#forgot-password" className={styles.forgot}>
                    Forgot Password
                  </Link>
                  <button className="btn">LOG IN</button>
                </div>
              </form>
            </section>
          </main>
        </div>
      ) : (
        <Navigate to={'/dashboard'} state={{ from: location }} replace  />
      )}
    </>
  );
};

export default Login;
