import React, { useState } from 'react';
import Modal from '../components/Modal';
import productsData from '../data/products.json';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container py-5">
      <h2 className="display-4 mb-4">Каталог товаров</h2>
      
      <div className="btn-group mb-4" role="group">
        {categories.map(category => (
          <button
            key={category}
            className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedProducts.length > 0 && (
        <div className="mb-4">
          <button 
            className="btn btn-danger"
            onClick={handleDeleteProducts}
          >
            Удалить выбранные ({selectedProducts.length})
          </button>
        </div>
      )}

      <div className="card mb-4">
        <div className="card-header">
          <h3 className="h5 mb-0">Добавить новый товар</h3>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Название"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Описание"
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                placeholder="Цена"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Категория"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="URL изображения"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              />
            </div>
            <div className="col-12">
              <button 
                className="btn btn-primary"
                onClick={handleAddProduct}
              >
                Добавить товар
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="col">
            <div 
              className={`card h-100 ${selectedProducts.includes(product.id) ? 'border-primary' : ''}`}
              onClick={() => handleProductClick(product)}
            >
              <div className="position-absolute top-0 end-0 p-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedProducts.includes(product.id)}
                  onChange={(e) => {
                    e.stopPropagation();
                    handleProductSelect(product.id);
                  }}
                />
              </div>
              <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-primary fw-bold">{product.price} руб.</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setIsEditMode(false);
        }}
        title={selectedProduct?.name}
      >
        {selectedProduct && (
          <div>
            {isEditMode ? (
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Название</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedProduct.name}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Описание</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedProduct.description}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Цена</label>
                  <input
                    type="number"
                    className="form-control"
                    value={selectedProduct.price}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Категория</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedProduct.category}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, category: e.target.value })}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">URL изображения</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedProduct.image}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, image: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleEditProduct(selectedProduct)}
                  >
                    Сохранить изменения
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="img-fluid rounded mb-3"
                />
                <p className="lead">{selectedProduct.description}</p>
                <p className="h4 text-primary mb-3">Цена: {selectedProduct.price} руб.</p>
                <p className="text-muted">Категория: {selectedProduct.category}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setIsEditMode(true)}
                >
                  Редактировать
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CatalogPage; 