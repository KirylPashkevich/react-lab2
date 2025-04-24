import React, { useState } from 'react';
import Modal from '../components/Modal';
import productsData from '../data/products.json';
import {
  CatalogContainer,
  Filters,
  FilterButton,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice
} from '../styles/pages/CatalogPageStyles';

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
    <CatalogContainer>
      <h2>Каталог товаров</h2>
      
      <Filters>
        {categories.map(category => (
          <FilterButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </Filters>

      <ProductsGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} onClick={() => handleProductClick(product)}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>{product.price} руб.</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>

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
    </CatalogContainer>
  );
};

export default CatalogPage; 