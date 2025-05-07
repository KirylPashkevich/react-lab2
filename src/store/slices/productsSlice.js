import { createSlice } from '@reduxjs/toolkit';
import productsData from '../../data/products.json';

// Начальное состояние
const initialState = {
  // Список всех продуктов
  items: [
    {
      id: 1,
      name: 'Продукт 1',
      description: 'Описание продукта 1',
      price: 100,
      category: 'Категория 1',
      image: 'url изображения',
      rating: 4.5,
      reviewsCount: 128
    },
    {
      id: 2,
      name: 'Продукт 2',
      description: 'Описание продукта 2',
      price: 200,
      category: 'Категория 2',
      image: 'url изображения',
      rating: 4.2,
      reviewsCount: 85
    },
    {
      id: 3,
      name: 'Продукт 3',
      description: 'Описание продукта 3',
      price: 300,
      category: 'Категория 1',
      image: 'url изображения',
      rating: 4.8,
      reviewsCount: 256
    }
  ],
  // Текущая выбранная категория для фильтрации
  selectedCategory: 'all',
  // Массив ID выбранных продуктов (для массовых операций)
  selectedProducts: [],
  // Сообщение об ошибке
  error: null
};

// Слайс для управления продуктами
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // ===== Управление продуктами =====
    
    // Добавление нового продукта
    addProduct: (state, action) => {
      const { name, price, category, description } = action.payload;
      
      // Валидация
      if (!name || !price || !category) {
        state.error = 'Все поля обязательны для заполнения';
        return;
      }
      
      if (price <= 0) {
        state.error = 'Цена должна быть положительным числом';
        return;
      }
      
      if (name.length < 3) {
        state.error = 'Название должно содержать минимум 3 символа';
        return;
      }
      
      // Генерируем новый ID
      const newId = Math.max(...state.items.map(p => p.id)) + 1;
      // Добавляем новый продукт
      state.items.push({ ...action.payload, id: newId });
      state.error = null;
    },

    // Обновление существующего продукта
    updateProduct: (state, action) => {
      const { id, name, price, category, description } = action.payload;
      
      // Валидация
      if (!name || !price || !category) {
        state.error = 'Все поля обязательны для заполнения';
        return;
      }
      
      if (price <= 0) {
        state.error = 'Цена должна быть положительным числом';
        return;
      }
      
      if (name.length < 3) {
        state.error = 'Название должно содержать минимум 3 символа';
        return;
      }
      
      // Находим и обновляем продукт
      const index = state.items.findIndex(p => p.id === id);
      if (index !== -1) {
        state.items[index] = action.payload;
        state.error = null;
      }
    },

    // Удаление одного продукта
    deleteProduct: (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload);
      state.error = null;
    },

    // ===== Управление выбранными продуктами =====

    // Удаление всех выбранных продуктов
    deleteSelectedProducts: (state) => {
      state.items = state.items.filter(p => !state.selectedProducts.includes(p.id));
      state.selectedProducts = [];
      state.error = null;
    },

    // Переключение выбора продукта
    toggleProductSelection: (state, action) => {
      const productId = action.payload;
      if (state.selectedProducts.includes(productId)) {
        state.selectedProducts = state.selectedProducts.filter(id => id !== productId);
      } else {
        state.selectedProducts.push(productId);
      }
    },

    // ===== Управление фильтрацией =====

    // Установка выбранной категории
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    
    // Очистка ошибки
    clearError: (state) => {
      state.error = null;
    }
  },
});

// Экспортируем действия
export const {
  addProduct,
  updateProduct,
  deleteProduct,
  deleteSelectedProducts,
  toggleProductSelection,
  setSelectedCategory,
  clearError
} = productsSlice.actions;

// ===== Селекторы =====

// Получение всех продуктов
export const selectAllProducts = (state) => state.products.items;

// Получение текущей выбранной категории
export const selectSelectedCategory = (state) => state.products.selectedCategory;

// Получение списка выбранных продуктов
export const selectSelectedProducts = (state) => state.products.selectedProducts;

// Получение сообщения об ошибке
export const selectProductsError = (state) => state.products.error;

// Получение отфильтрованных продуктов по категории
export const selectFilteredProducts = (state) => {
  const { items, selectedCategory } = state.products;
  if (selectedCategory === 'all') {
    return items;
  }
  return items.filter(product => product.category === selectedCategory);
};

// Экспортируем редьюсер
export default productsSlice.reducer; 