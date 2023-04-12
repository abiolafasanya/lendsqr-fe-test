import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/login-image.svg';
import styles from './login.module.scss';
import logo from '../../assets/logo.svg';
import { Helmet } from 'react-helmet';
import { AlertMsg } from '../../components/Alert';

type Auth = {
  email?: string;
  isLoggedIn?: boolean;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSetAuth, auth } = UseAuth();
  const navigate = useNavigate();
  const passwordType = showPassword ? 'text' : 'password';
  const passwordText = showPassword ? 'Hide' : 'Show';
  const [success, setSuccess] = useState(false);
  const [error, setEror] = useState(false);

  useEffect(() => {
    if (auth?.isLoggedIn) {
      navigate('/dashboard', { replace: true });
    }
    () => {
      return;
    };
  }, []);

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLInputElement & {
      email: { value: string };
      password: { value: string };
    };
    const cleanup = () => {
      setTimeout(() => {
        setEror(false);
        setSuccess(false);
      }, 1000);
    };
    if (target.email.value !== '' && target.password.value !== '') {
      const form: Auth = { isLoggedIn: true };
      const auth = handleSetAuth(form);
      setEror(false);
      setSuccess(true);
      cleanup();
      auth.isLoggedIn && navigate('/dashboard', { replace: true });
      return;
    }
    setEror(true);
    setSuccess(false);
    cleanup();
    return;
  }

  return (
    <div className={styles.Login} data-testid={'login'}>
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
            <h2 data-testid={'greeting'}>Welcome!</h2>
            <p data-testid="description">Enter details to login.</p>
          </div>
          {success && <AlertMsg message={"login successful"} type={'success-alert'} />}
          {error && <AlertMsg message={"login in failed"} type="error-alert" />}
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
              <button className="btn" data-testid='login-btn'>LOG IN</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
