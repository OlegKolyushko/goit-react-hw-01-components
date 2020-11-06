import React from 'react';
import PropTypes from 'prop-types';
import styles from './Proffile.module.css';

function Proffile({ avatar, name, tag, location, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <div className={styles.itemCont}>
            <span className={styles.label}>Followers</span>
            <br></br>
            <span className={styles.quantity}>{stats.followers}</span>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.itemCont}>
            <span className={styles.label}>Views</span>
            <br></br>
            <span className={styles.quantity}>{stats.views}</span>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.itemCont}>
            <span className={styles.label}>Likes</span>
            <br></br>
            <span className={styles.quantity}>{stats.likes}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

Proffile.defaultProps = {
  avatar:
    'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9',
  name: 'User name',
  tag: 'User name',
  location: 'Atlantida',
  stats: {
    followers: '1000',
    views: '1000',
    likes: '1000',
  },
};
Proffile.propTypes = {
  name: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  location: PropTypes.string,
};

export default Proffile;
