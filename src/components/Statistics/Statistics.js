import React from 'react';
import PropTypes from 'prop-types';
import randomColor from "randomcolor";
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(stat => (
          <li className={styles.item} key={stat.id} style={{
            width: 300 / stats.length,
            backgroundColor: randomColor(),
          }}>
            <span className={styles.label}>{stat.label}</span>
            <br></br>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
  

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired
}

export default Statistics;
