// Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Calculadora de Presupuesto</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
  title: {
    margin: 0,
  },
};

export default Header;
