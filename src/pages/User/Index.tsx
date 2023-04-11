import React, { useEffect, useState } from 'react';
import styles from './user.module.scss';
import { backArror } from '../../utils/images';
import { Link, useLocation } from 'react-router-dom';
import DetailHeader from '../../components/user/DetailHeader';
import DetailTab from '../../components/user/DetailTab';
import { IUser } from '../../utils/types';
import ContentLoader, { Facebook } from 'react-content-loader';

const Index = () => {
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];
  const [user, setUser] = useState({} as IUser);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const fetchedUser = await fetchUser();
        setUser(fetchedUser);
        setMessage('User successfully retrieved');
      } catch (error) {
        setError(true);
        setMessage('An error occurred');
      }
      setLoading(false);
    }

    fetchUserDetails();
  }, []);

  async function fetchUser(): Promise<IUser> {
    const singleUser = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`;
    const res = await fetch(singleUser, {
      method: 'GET',
    });
    const user = (await res.json()) as IUser;
    return user;
  }

  return (
    <div className={styles.container}>
      {loading ? (
        <Facebook />
      ) : (
        <>
          <div className={styles.back}>
            <Link to="/dashboard">
              <img src={backArror} alt="" />
            </Link>
            <span>Back to users</span>
          </div>
          <div className={styles.head}>
            <h2>User Detail</h2>

            <div className={styles.btnGroup}>
              <button className={styles.dangerBtn}>Blacklist user</button>
              <button className={styles.infoBtn}>Activate user</button>
            </div>
          </div>

          <DetailHeader user={user} />

          <DetailTab user={user} />
        </>
      )}
    </div>
  );
};

export default Index;
