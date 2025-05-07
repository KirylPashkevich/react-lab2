import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Переводы для русского языка
const ruTranslations = {
  common: {
    store: 'Магазин',
    home: 'Главная',
    catalog: 'Каталог',
    categories: 'Категории',
    about: 'О нас',
    profile: 'Профиль',
    settings: 'Настройки',
    logout: 'Выйти',
    cancel: 'Отмена',
    save: 'Сохранить',
    add: 'Добавить',
    edit: 'Редактировать',
    delete: 'Удалить',
    close: 'Закрыть',
    name: 'Название',
    description: 'Описание',
    price: 'Цена',
    category: 'Категория',
    all: 'Все',
    confirmDelete: 'Вы уверены, что хотите удалить этот элемент?',
    required: 'Обязательное поле',
    minLength: 'Минимум {{count}} символов',
    positiveNumber: 'Должно быть положительным числом',
    duplicateName: 'Элемент с таким названием уже существует',
    selectCategory: 'Выберите категорию',
    imageUrl: 'URL изображения',
    currency: 'руб.'
  },
  products: {
    title: 'Каталог товаров',
    addProduct: 'Добавить товар',
    editProduct: 'Редактировать товар',
    deleteProduct: 'Удалить товар',
    noProducts: 'Товары не найдены',
    filterByCategory: 'Фильтр по категории'
  },
  categories: {
    title: 'Управление категориями',
    addCategory: 'Добавить категорию',
    editCategory: 'Редактировать категорию',
    deleteCategory: 'Удалить категорию',
    noCategories: 'Категории не найдены',
    viewProducts: 'Смотреть товары'
  },
  errors: {
    required: 'Это поле обязательно для заполнения',
    minLength: 'Минимальная длина: {{count}} символов',
    positiveNumber: 'Значение должно быть положительным числом',
    duplicateName: 'Элемент с таким названием уже существует'
  }
};

// Переводы для английского языка
const enTranslations = {
  common: {
    store: 'Store',
    home: 'Home',
    catalog: 'Catalog',
    categories: 'Categories',
    about: 'About',
    profile: 'Profile',
    settings: 'Settings',
    logout: 'Logout',
    cancel: 'Cancel',
    save: 'Save',
    add: 'Add',
    edit: 'Edit',
    delete: 'Delete',
    close: 'Close',
    name: 'Name',
    description: 'Description',
    price: 'Price',
    category: 'Category',
    all: 'All',
    confirmDelete: 'Are you sure you want to delete this item?',
    required: 'Required field',
    minLength: 'Minimum {{count}} characters',
    positiveNumber: 'Must be a positive number',
    duplicateName: 'Item with this name already exists',
    selectCategory: 'Select category',
    imageUrl: 'Image URL',
    currency: 'RUB'
  },
  products: {
    title: 'Product Catalog',
    addProduct: 'Add Product',
    editProduct: 'Edit Product',
    deleteProduct: 'Delete Product',
    noProducts: 'No products found',
    filterByCategory: 'Filter by category'
  },
  categories: {
    title: 'Category Management',
    addCategory: 'Add Category',
    editCategory: 'Edit Category',
    deleteCategory: 'Delete Category',
    noCategories: 'No categories found',
    viewProducts: 'View Products'
  },
  errors: {
    required: 'This field is required',
    minLength: 'Minimum length: {{count}} characters',
    positiveNumber: 'Value must be a positive number',
    duplicateName: 'Item with this name already exists'
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: ruTranslations
      },
      en: {
        translation: enTranslations
      }
    },
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 