import React, { useState } from "react";
import "./styles.css";

function ToDoList() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState([]);
  const [emptyFields, setEmptyFields] = useState(false);
  const [invalidQuantity, setInvalidQuantity] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (productName.trim() !== "" && /^\d+$/.test(quantity) && parseInt(quantity) > 0) {
      setProducts((prevProducts) => [
        ...prevProducts,
        { name: productName, quantity: parseInt(quantity) }
      ]);
      setProductName("");
      setQuantity("");
      setEmptyFields(false);
      setInvalidQuantity(false);
      //alert("Produto adicionado com sucesso!");
    } else {
      setEmptyFields(productName.trim() === "" || quantity.trim() === "");
      setInvalidQuantity(!/^\d+$/.test(quantity) || parseInt(quantity) <= 0);
    }
  };

  const handleDeleteProduct = (index) => {
    setProducts((prevProducts) =>
      prevProducts.filter((_, i) => i !== index)
    );
  };

  const handleQuantityChange = (index, change) => {
    const newQuantity = products[index].quantity + change;
    if (newQuantity > 0) {
      setProducts((prevProducts) =>
        prevProducts.map((product, i) =>
          i === index ? { ...product, quantity: newQuantity } : product
        )
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(0, parseInt(e.target.value)))}
          required
          min="0"
        />
        <button type="submit">Adicionar</button>
      </form>
      {emptyFields && <p>Preencha todos os campos!</p>}
      {invalidQuantity && <p>Insira uma quantidade válida!</p>}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - Quantidade: {product.quantity}
            <div className="buttons">
              <button className="Del" onClick={() => handleQuantityChange(index, 1)}>+</button>
              <button className="Add" onClick={() => handleQuantityChange(index, -1)}>-</button>
              <button className="Excluir" onClick={() => handleDeleteProduct(index)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
