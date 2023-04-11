import React from 'react';
import styles from './styles/filter.module.scss';

const Filter = () => {
  return (
    <div className={styles.Filter}>
      <div className={styles.card}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="organization">Organization</label>
            <input type="text" id="organization" itemID="organization" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="organization">Username</label>
            <input type="text" id="username" itemID="username" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="Email">Email</label>
            <input type="text" id="email" itemID="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" itemID="date" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" itemID="phoneNumber" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="status">Status</label>
            <select name="status" id="status">
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
              <option value="Blacklisted">Active</option>
            </select>
          </div>
          <div className={styles.groupBtn}>
            <input type="reset" value="Reset" className='btn-light'/>
            <button className="btn-success">Filter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
