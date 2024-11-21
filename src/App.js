import React, { useState } from "react";
import AddTransaction from './components/AddTransaction';

const App = () => {
  const [balance, setBalance] = useState(0); // Balance total
  const [transactions, setTransactions] = useState([]); // Lista de transacciones
  const [message, setMessage] = useState(""); // Mensaje de estado

  // Función para agregar una nueva transacción
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setBalance(balance + newTransaction.amount);
    setMessage("Transacción añadida con éxito.");
    setTimeout(() => setMessage(""), 3000); // Limpia el mensaje después de 3 segundos
  };

  // Función para eliminar una transacción por índice
  const handleDeleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);

    const newBalance = updatedTransactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    setBalance(newBalance);
    setMessage("Transacción eliminada.");
    setTimeout(() => setMessage(""), 3000);
  };

  const styles = {
    appContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      backgroundColor: "#f4f4f9",
    },
    transactionsList: {
      marginTop: "30px",
      width: "100%",
      maxWidth: "600px",
    },
    transactionItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "#ffffff",
    },
    transactionAmount: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    deleteButton: {
      padding: "5px 10px",
      backgroundColor: "#e63946",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    message: {
      padding: "10px",
      marginBottom: "20px",
      backgroundColor: "#d4edda",
      color: "#155724",
      border: "1px solid #c3e6cb",
      borderRadius: "5px",
      textAlign: "center",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.appContainer}>
      <h1>Gestor de Finanzas</h1>
      <h2>Balance actual: ${balance.toFixed(2)}</h2>
      <AddTransaction onAddTransaction={handleAddTransaction} />

      {/* Mensaje de confirmación */}
      {message && <div style={styles.message}>{message}</div>}

      <div style={styles.transactionsList}>
        <h3>Transacciones</h3>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={transaction.id} style={styles.transactionItem}>
              <div>
                <strong>{transaction.description}</strong>
                <br />
                <span>{transaction.date}</span>
              </div>
              <div
                style={{
                  ...styles.transactionAmount,
                  color: transaction.amount >= 0 ? "green" : "red",
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

export default App;
