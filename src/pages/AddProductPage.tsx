import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateProductActionTypes } from "../store/types/createProductType";
import { RootState } from "../store/store";
import "./AddProductPage.css";

const AddProductPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [sku, setSku] = useState("");
  const [brand, setBrand] = useState("");
  const dispatch = useDispatch();
  const { loading, error, createdProducts } = useSelector(
    (state: RootState) => state.createdProducts
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: CreateProductActionTypes.CREATE_PRODUCT_REQUEST,
      payload: { title, price, description, category, stock, sku, brand },
    });
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
      <div className="form-container">
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

      <div className="products-container">
        <h2>Created Products</h2>
        <div className="products-list">
          {createdProducts && createdProducts.length > 0 ? (
            createdProducts.map((product, index) => {
              return (
                <div key={index} className="product-card">
                  <h3>{product.title}</h3>
                  <p>Price: ${product.price}</p>
                  <p>Description: {product.description}</p>
                  <p>Category: {product.category}</p>
                  <p>Stock: {product.stock}</p>
                  <p>SKU: {product.sku}</p>
                  <p>Brand: {product.brand}</p>
                </div>
              );
            })
          ) : (
            <p>No products added yet.</p>
          )}
          <h1> {createdProducts[0]?.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
