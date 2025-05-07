import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  selectFilteredProducts,
  selectSelectedCategory,
  selectSelectedProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  deleteSelectedProducts,
  setSelectedCategory,
  toggleProductSelection
} from '../store/slices/productsSlice';
import { selectAllCategories } from '../store/slices/categoriesSlice';
import { useTranslation } from 'react-i18next';

const CatalogPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const selectedCategory = useSelector(selectSelectedCategory);
  const selectedProducts = useSelector(selectSelectedProducts);
  const categories = useSelector(selectAllCategories);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleProductSelect = (productId) => {
    dispatch(toggleProductSelection(productId));
  };

  const handleDeleteProducts = () => {
    dispatch(deleteSelectedProducts());
  };

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
    setNewProduct({
      name: '',
      description: '',
      price: '',
      category: '',
      image: ''
    });
  };

  const handleEditProduct = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
    setIsEditMode(false);
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container py-5">
      <h2 className="display-4 mb-4">{t('products.title')}</h2>
      
      <div className="row mb-4">
        <div className="col-md-8">
          <div className="btn-group" role="group">
            <button
              className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => dispatch(setSelectedCategory('all'))}
            >
              {t('common.all')}
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className={`btn ${selectedCategory === category.name ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => dispatch(setSelectedCategory(category.name))}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-4 text-end">
          {selectedProducts.length > 0 && (
            <button 
              className="btn btn-danger"
              onClick={handleDeleteProducts}
            >
              {t('common.delete')} ({selectedProducts.length})
            </button>
          )}
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h3 className="h5 mb-0">{t('products.addProduct')}</h3>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder={t('common.name')}
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder={t('common.description')}
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                placeholder={t('common.price')}
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              >
                <option value="">{t('common.selectCategory')}</option>
                {categories.map(category => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder={t('common.imageUrl')}
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              />
            </div>
            <div className="col-12">
              <button 
                className="btn btn-primary"
                onClick={handleAddProduct}
              >
                {t('products.addProduct')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product => (
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
                <p className="card-text text-primary fw-bold">{product.price} {t('common.currency')}</p>
                <p className="card-text text-muted">{product.category}</p>
                <div className="d-flex align-items-center mb-2">
                  <span className="badge bg-success me-2">{t('products.rating', { rating: '4.5' })}</span>
                  <small className="text-muted">{t('products.reviews', { count: 128 })}</small>
                </div>
                <div className="progress mb-3" style={{ height: '5px' }}>
                  <div 
                    className="progress-bar bg-success" 
                    role="progressbar" 
                    style={{ width: '75%' }} 
                    aria-valuenow="75" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
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
          setSelectedProduct(null);
        }}
        title={selectedProduct?.name}
      >
        {selectedProduct && (
          <div>
            {isEditMode ? (
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">{t('common.name')}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedProduct.name}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">{t('common.description')}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedProduct.description}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">{t('common.price')}</label>
                  <input
                    type="number"
                    className="form-control"
                    value={selectedProduct.price}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">{t('common.category')}</label>
                  <select
                    className="form-select"
                    value={selectedProduct.category}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, category: e.target.value })}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">{t('common.imageUrl')}</label>
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
                    {t('common.save')}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="mb-3">{selectedProduct.description}</p>
                <p className="text-primary fw-bold mb-3">{selectedProduct.price} {t('common.currency')}</p>
                <p className="text-muted mb-3">{t('common.category')}: {selectedProduct.category}</p>
                <button 
                  className="btn btn-primary me-2"
                  onClick={() => setIsEditMode(true)}
                >
                  {t('common.edit')}
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(deleteProduct(selectedProduct.id));
                    setIsModalOpen(false);
                    setSelectedProduct(null);
                  }}
                >
                  {t('common.delete')}
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