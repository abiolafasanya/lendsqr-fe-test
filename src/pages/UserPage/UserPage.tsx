import React, { useEffect, useState } from 'react';
import styles from './UserPage.module.scss';
import { Helmet } from 'react-helmet';
import { IUser } from '../../utils/types';
import { InfoCard } from '../../utils/MockData';
import Card from '../../components/Card';
import DataView from '../../components/DataView';
import { Facebook } from 'react-content-loader';

const Dashboard = () => {
  const [users, setUsers] = useState([{}] as IUser[]);
  const [loading, setLoading] = useState(true);
  const tableHeader = [
    'organization',
    'username',
    'email',
    'phone',
    'date',
    'status',
  ];

  useEffect(() => {
    fetchUsers()
      .then((users) => setUsers(users))
      .finally(() => setLoading(false));
  }, []);

  async function fetchUsers() {
    const EndPoint =
      'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';
    const res = await fetch(EndPoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data as IUser[];
  }

  return (
    <div className={styles.container} data-testid='userpage'>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Lendsqr Dashboard Page" />
      </Helmet>
      {loading ? (
        <Facebook />
      ) : (
        <>
          <h2 className={styles.title}>Users</h2>
          <section className={styles.flexCard}>
            {InfoCard.map((data, id) => (
              <Card data={data} key={id} />
            ))}
          </section>
          <section>
            <DataView tableData={users} tableHeader={tableHeader} />
          </section>
        </>
      )}
    </div>
  );
};

export default Dashboard;
