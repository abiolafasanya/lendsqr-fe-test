import React from 'react';
import styles from './styles/filter.module.scss';

const Filter = () => {
  return (
    <div className={styles.Filter}>
      <div className={styles.card}>
        <form>
          <div>
            <label htmlFor="organization">Organization</label>
            <input type="text" id="organization" itemID="organization" />
          </div>
          <div>
            <label htmlFor="organization">Username</label>
            <input type="text" id="username" itemID="username" />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input type="text" id="email" itemID="email" />
          </div>
          <div>
            <input type="datetime-local" id="date" itemID="date" />
            <label htmlFor="date">Date</label>
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" itemID="phoneNumber" />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select name="status" id="status">
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
              <option value="Blacklisted">Active</option>
            </select>
          </div>
          <div className={styles.groupBtn}>
            <button className="btn-light">Reset</button>
            <button className="btn-success">Filter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
