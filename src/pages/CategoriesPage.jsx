import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  selectAllCategories, 
  selectCategoriesError,
  addCategory, 
  updateCategory, 
  deleteCategory,
  clearError 
} from '../store/slices/categoriesSlice';
import { setSelectedCategory } from '../store/slices/productsSlice';
import Modal from '../components/Modal';

const CategoriesPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const error = useSelector(selectCategoriesError);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const handleOpenModal = (category = null) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name,
        description: category.description
      });
    } else {
      setEditingCategory(null);
      setFormData({
        name: '',
        description: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
    setFormData({
      name: '',
      description: ''
    });
    dispatch(clearError());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCategory) {
      dispatch(updateCategory({
        id: editingCategory.id,
        ...formData
      }));
    } else {
      dispatch(addCategory(formData));
    }
    if (!error) {
      handleCloseModal();
    }
  };

  const handleDelete = (categoryId) => {
    if (window.confirm(t('common.confirmDelete'))) {
      dispatch(deleteCategory(categoryId));
    }
  };

  const handleViewProducts = (categoryName) => {
    dispatch(setSelectedCategory(categoryName));
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="display-4">{t('categories.title')}</h1>
        <button 
          className="btn btn-primary"
          onClick={() => handleOpenModal()}
        >
          {t('categories.addCategory')}
        </button>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {categories.map(category => (
          <div key={category.id} className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <p className="card-text">{category.description}</p>
                <div className="btn-group">
                  <Link
                    to="/catalog"
                    className="btn btn-outline-primary"
                    onClick={() => handleViewProducts(category.name)}
                  >
                    {t('categories.viewProducts')}
                  </Link>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleOpenModal(category)}
                  >
                    {t('common.edit')}
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(category.id)}
                  >
                    {t('common.delete')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingCategory ? t('categories.editCategory') : t('categories.addCategory')}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">{t('common.name')}</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">{t('common.description')}</label>
            <textarea
              className="form-control"
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="3"
            />
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-primary"
            >
              {editingCategory ? t('common.save') : t('common.add')}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CategoriesPage; 