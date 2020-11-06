import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  // const color = #fff;
  // const tdStyles = [
  //   styles.td,

  // ]
  return (
    <>
      <table className={styles.transactionHistory} >
        <thead>
          <tr>
            <th className={styles.tableHeadElement}>Type</th>
            <th className={styles.tableHeadElement}>Amount</th>
            <th className={styles.tableHeadElement}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
}

export default TransactionHistory;
