import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css'

function FriendListItem({ avatar, name, isOnline, id }) {
  const statusVlasses = [
    styles.status, 
    isOnline ? styles.online : styles.offline
  ];
  return (
    <li className={styles.item} key={id}>
      {/* <span className={isOnline ? styles.online : styles.offline}></span> */}
      <span className={statusVlasses.join(' ')}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
