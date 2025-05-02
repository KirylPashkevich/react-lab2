import React, { useState } from 'react';
import Modal from '../components/Modal';
import productsData from '../data/products.json';
import '../styles/pages/CatalogPageStyles.css';

const CatalogPage = () => {
  const [products, setProducts] = useState(productsData.products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });

  const categories = ['all', ...new Set(productsData.products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleProductSelect = (productId) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const handleDeleteProducts = () => {
    setProducts(prev => prev.filter(product => !selectedProducts.includes(product.id)));
    setSelectedProducts([]);
  };

  const handleAddProduct = () => {
    const newId = Math.max(...products.map(p => p.id)) + 1;
    setProducts(prev => [...prev, { ...newProduct, id: newId }]);
    setNewProduct({
      name: '',
      description: '',
      price: '',
      category: '',
      image: ''
    });
  };

  const handleEditProduct = (updatedProduct) => {
    setProducts(prev => prev.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    ));
    setIsEditMode(false);
    setSelectedProduct(null);
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

      {selectedProducts.length > 0 && (
        <div className="selected-actions">
          <button onClick={handleDeleteProducts}>Удалить выбранные</button>
        </div>
      )}

      <div className="add-product-form">
        <h3>Добавить новый товар</h3>
        <input
          type="text"
          placeholder="Название"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Описание"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Цена"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Категория"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL изображения"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <button onClick={handleAddProduct}>Добавить</button>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className={`product-card ${selectedProducts.includes(product.id) ? 'selected' : ''}`}
            onClick={() => handleProductClick(product)}
          >
            <input
              type="checkbox"
              checked={selectedProducts.includes(product.id)}
              onChange={(e) => {
                e.stopPropagation();
                handleProductSelect(product.id);
              }}
            />
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">{product.price} руб.</p>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => {
        setIsModalOpen(false);
        setIsEditMode(false);
      }}>
        {selectedProduct && (
          <div>
            {isEditMode ? (
              <div>
                <input
                  type="text"
                  value={selectedProduct.name}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
                />
                <input
                  type="text"
                  value={selectedProduct.description}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
                />
                <input
                  type="number"
                  value={selectedProduct.price}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
                />
                <input
                  type="text"
                  value={selectedProduct.category}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, category: e.target.value })}
                />
                <input
                  type="text"
                  value={selectedProduct.image}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, image: e.target.value })}
                />
                <button onClick={() => handleEditProduct(selectedProduct)}>Сохранить</button>
              </div>
            ) : (
              <div>
                <h2>{selectedProduct.name}</h2>
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ maxWidth: '100%' }} />
                <p>{selectedProduct.description}</p>
                <p>Цена: {selectedProduct.price} руб.</p>
                <p>Категория: {selectedProduct.category}</p>
                <button onClick={() => setIsEditMode(true)}>Редактировать</button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CatalogPage; 