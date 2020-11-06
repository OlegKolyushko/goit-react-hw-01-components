import React from 'react';
import user from '../../user.json';
import Proffile from '../Proffile/Proffile';
import statisticalData from '../../statistical-data.json';
import Statistics from '../Statistics/Statistics';
import friends from '../../friends.json';
import FriendList from '../FriendList/FriendList';
import transactions from '../../transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory'

export default function App() {
  return (
    <>
      <h2>Task 1</h2>
      <Proffile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <br></br>
      <h2>Task 2</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <br></br>
      <h2>Task 3</h2>
        <FriendList friends={friends}/>
        <br></br>
      <h2>Task 4</h2>
      <TransactionHistory items={transactions}/>
    </>
  );
}
