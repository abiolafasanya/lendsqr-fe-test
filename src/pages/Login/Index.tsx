import React, { useState } from 'react';
import UseAuth from '../../hooks/useAuth';
import { mockCredentials } from '../../utils/MockData';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './login.module.scss';
import loginImage from '../../assets/login-image.svg';
import logo from '../../assets/logo.svg';

type Auth = {
  email?: string;
  isLoggedIn?: boolean;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSetAuth } = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/dashboard';
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
      const form: Auth = {
        email: target.email.value,
        isLoggedIn: true,
      };
      const auth = handleSetAuth(form);
      console.log(auth);
      auth.isLoggedIn && navigate(from, { replace: true });
    }
    return;
  }

  return (
    <div className={styles.Login}>
      <main className={styles.container}>

        <section className={styles.section1}>
          <div className={styles.header}>
            <img src={logo} alt="lendsqr logo" />
            <h2>lendsqr</h2>
          </div>
          <img src={loginImage} className={styles.loginImage} alt="login display image" />
        </section>

        <section className={styles.section2}>
          <div className={styles.info}>
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <div className={styles.password}>
                <input
                  type={passwordType}
                  name="password"
                  id="password"
                  placeholder="Password"
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
  );
};

export default Login;
