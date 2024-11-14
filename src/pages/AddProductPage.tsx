import React, { useState } from "react";
import "./AddProductPage.css";

const AddProductPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [sku, setSku] = useState("");
  const [brand, setBrand] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to add the product (e.g., dispatching an action or sending data to an API)
    console.log({ title, price, description, category, stock, sku, brand });
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setStock("");
    setSku("");
    setBrand("");
  };

  return (
    <div className="add-product-page">
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <label className="form-label">
          Product Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="form-textarea"
          />
        </label>
        <label className="form-label">
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Stock Quantity:
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          SKU:
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Brand:
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
