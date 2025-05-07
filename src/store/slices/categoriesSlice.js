import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
  // Список всех категорий
  items: [
    { id: 1, name: 'Электроника', description: 'Электронные устройства и гаджеты' },
    { id: 2, name: 'Одежда', description: 'Мужская и женская одежда' },
    { id: 3, name: 'Книги', description: 'Художественная и учебная литература' }
  ],
  // Состояние загрузки
  loading: false,
  // Сообщение об ошибке
  error: null
};

// Слайс для управления категориями
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // ===== Управление категориями =====
    
    // Добавление новой категории
    addCategory: (state, action) => {
      const { name, description } = action.payload;
      
      // Валидация
      if (!name) {
        state.error = 'Название категории обязательно';
        return;
      }
      
      // Проверка на дубликаты
      if (state.items.some(cat => cat.name.toLowerCase() === name.toLowerCase())) {
        state.error = 'Категория с таким названием уже существует';
        return;
      }
      
      // Генерируем новый ID
      const newId = Math.max(...state.items.map(c => c.id)) + 1;
      // Добавляем новую категорию
      state.items.push({ id: newId, name, description });
      state.error = null;
    },

    // Обновление существующей категории
    updateCategory: (state, action) => {
      const { id, name, description } = action.payload;
      
      // Валидация
      if (!name) {
        state.error = 'Название категории обязательно';
        return;
      }
      
      // Проверка на дубликаты (исключая текущую категорию)
      if (state.items.some(cat => 
        cat.id !== id && cat.name.toLowerCase() === name.toLowerCase()
      )) {
        state.error = 'Категория с таким названием уже существует';
        return;
      }
      
      // Находим и обновляем категорию
      const index = state.items.findIndex(c => c.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], name, description };
        state.error = null;
      }
    },

    // Удаление категории
    deleteCategory: (state, action) => {
      const categoryId = action.payload;
      state.items = state.items.filter(c => c.id !== categoryId);
      state.error = null;
    },

    // Очистка ошибки
    clearError: (state) => {
      state.error = null;
    }
  }
});

// Экспортируем действия
export const {
  addCategory,
  updateCategory,
  deleteCategory,
  clearError
} = categoriesSlice.actions;

// ===== Селекторы =====

// Получение всех категорий
export const selectAllCategories = (state) => state.categories.items;

// Получение категории по ID
export const selectCategoryById = (state, categoryId) => 
  state.categories.items.find(c => c.id === categoryId);

// Получение сообщения об ошибке
export const selectCategoriesError = (state) => state.categories.error;

// Экспортируем редьюсер
export default categoriesSlice.reducer; 