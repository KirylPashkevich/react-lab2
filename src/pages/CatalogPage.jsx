import React, { useState } from 'react';
import Modal from '../components/Modal';
import productsData from '../data/products.json';
import '../styles/pages/CatalogPageStyles.css';

const CatalogPage = () => {
  const [products, setProducts] = useState(productsData.products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['all', ...new Set(productsData.products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="catalog-container">
      <h2>Каталог товаров</h2>
      
      <div className="filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">{product.price} руб.</p>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedProduct && (
          <div>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ maxWidth: '100%' }} />
            <p>{selectedProduct.description}</p>
            <p>Цена: {selectedProduct.price} руб.</p>
            <p>Категория: {selectedProduct.category}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CatalogPage; 