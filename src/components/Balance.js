// src/components/Balance.js
import React from 'react';

// Componente que muestra el balance actual.
const Balance = ({ balance }) => {
  return (
    <div style={styles.container}>
      <h2>Balance Actual</h2>
      <h3 style={{ ...styles.balance, color: balance >= 0 ? 'green' : 'red' }}>
        ${balance.toFixed(2)}
      </h3>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px 0',
  },
  balance: {
    fontSize: '2rem',
  },
};

export default Balance;
