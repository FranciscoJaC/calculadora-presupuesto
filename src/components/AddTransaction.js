import React, { useState } from "react";

const AddTransaction = ({ onAddTransaction }) => {
  const [description, setDescription] = useState(""); // Descripción de la transacción
  const [amount, setAmount] = useState(""); // Monto de la transacción
  const [type, setType] = useState("positive"); // Tipo: positivo o negativo

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const parsedAmount = parseFloat(amount);
    const finalAmount = type === "negative" ? -parsedAmount : parsedAmount;

    onAddTransaction({
      description,
      amount: finalAmount,
      id: Date.now(),
      date: new Date().toLocaleString(),
    });

    // Reseteamos los campos
    setDescription("");
    setAmount("");
    setType("positive");
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div>
      <h3>Añadir nueva transacción</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Descripción:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={inputStyle}
            />
          </label>
        </div>
        <div>
          <label>
            Monto:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={inputStyle}
            />
          </label>
        </div>
        <div>
          <p>Tipo de transacción:</p>
          <label>
            <input
              type="radio"
              value="positive"
              checked={type === "positive"}
              onChange={(e) => setType(e.target.value)}
            />
            Ingreso
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              value="negative"
              checked={type === "negative"}
              onChange={(e) => setType(e.target.value)}
            />
            Gasto
          </label>
        </div>
        <button type="submit" style={buttonStyle}>
          Añadir Transacción
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
