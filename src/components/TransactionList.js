// TransactionList.js
import React from 'react';

// Componente que muestra la lista de transacciones del usuario.
const TransactionList = () => {
  // Transacciones de ejemplo. En el futuro se conectará con un estado o base de datos.
  const transactions = [
    { id: 1, text: 'Sueldo', amount: 500 },
    { id: 2, text: 'Alquiler', amount: -200 },
    { id: 3, text: 'Comida', amount: -50 },
  ];

  return (
    <div style={styles.container}>
      <h2>Transacciones</h2>
      {/* Renderiza cada transacción como un elemento de lista */}
      <ul style={styles.list}>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            style={{
              ...styles.item,
              borderColor: transaction.amount > 0 ? 'green' : 'red', // Cambia el borde según positivo o negativo.
            }}
          >
            <span>{transaction.text}</span>
            <span
              style={{
                color: transaction.amount > 0 ? 'green' : 'red', // Cambia el color del monto.
              }}
            >
              {transaction.amount > 0 ? `+$${transaction.amount}` : `-$${Math.abs(transaction.amount)}`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Estilos del componente.
const styles = {
  container: {
    margin: '20px 0',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
  },
};

export default TransactionList;
