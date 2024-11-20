// src/App.js
import React, { useState } from 'react';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';

const App = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [message, setMessage] = useState('');

  // Función para agregar transacción
  const handleAddTransaction = (newTransaction) => {
    const newTransactionWithDate = {
      ...newTransaction,
      date: new Date().toLocaleString(),
    };
    setTransactions([...transactions, newTransactionWithDate]);
    setBalance(balance + newTransaction.amount);
    setMessage('Transacción añadida con éxito.');
  };

  // Función para eliminar una transacción
  const handleDeleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);

    const newBalance = updatedTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    setBalance(newBalance);
    setMessage('Transacción eliminada.');
  };

  return (
    <div style={styles.appContainer}>
      <Balance balance={balance} />
      <TransactionForm onAddTransaction={handleAddTransaction} />

      {/* Mensaje de confirmación */}
      {message && <div style={styles.message}>{message}</div>}

      <div style={styles.transactionsList}>
        <h3>Transacciones</h3>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index} style={styles.transactionItem}>
              <div style={styles.transactionDetails}>
                <span><strong>{transaction.description || 'Sin descripción'}</strong></span>
                <span>{transaction.category ? `| ${transaction.category}` : ''}</span>
                <span>{transaction.date}</span>
              </div>
              <div
                style={{
                  ...styles.transactionAmount,
                  color: transaction.amount >= 0 ? 'green' : 'red',
                }}
              >
                ${transaction.amount.toFixed(2)}
              </div>
              <button
                style={styles.deleteButton}
                onClick={() => handleDeleteTransaction(index)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f9',
  },
  transactionsList: {
    marginTop: '30px',
    width: '100%',
    maxWidth: '600px',
  },
  transactionItem: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
  },
  transactionDetails: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  transactionAmount: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  deleteButton: {
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#e63946',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    padding: '10px',
    marginBottom: '20px',
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
    borderRadius: '5px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

export default App;
