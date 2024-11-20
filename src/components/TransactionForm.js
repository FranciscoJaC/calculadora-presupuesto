// src/components/TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar que todos los campos estén completos
    if (!amount || !category || !description) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Validar que el monto sea un número válido
    if (isNaN(amount) || parseFloat(amount) <= 0) {
      setError('Por favor, ingresa un monto válido.');
      return;
    }

    // Si la validación es exitosa, agregar la transacción
    setError(''); // Limpiar el mensaje de error
    onAddTransaction({
      amount: parseFloat(amount),
      category,
      description,
    });

    // Limpiar los campos después de agregar la transacción
    setAmount('');
    setCategory('');
    setDescription('');
  };

  return (
    <div style={styles.formContainer}>
      <h2>Agregar Transacción</h2>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label>Monto</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Monto"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Categoría</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Categoría"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Descripción</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción"
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Añadir Transacción</button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    marginBottom: '30px',
    width: '100%',
    maxWidth: '600px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
  },
  inputGroup: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
};

export default TransactionForm;
