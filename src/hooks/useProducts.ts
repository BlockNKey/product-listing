import { useState, useMemo } from 'react';
import { Product, ProductFilter } from '@/types';

export const useProducts = (products: Product[]) => {
  const [filters, setFilters] = useState<ProductFilter>({
    search: '',
    minPrice: 0,
    maxPrice: Infinity,
    type: '',
    minCount: 0,
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());
      const matchesPrice = product.price >= filters.minPrice && 
        (filters.maxPrice === Infinity || product.price <= filters.maxPrice);
      const matchesType = !filters.type || product.type === filters.type;
      const matchesCount = product.count >= filters.minCount;

      return matchesSearch && matchesPrice && matchesType && matchesCount;
    });
  }, [products, filters]);

  const productTypes = useMemo(() => {
    return Array.from(new Set(products.map(product => product.type)));
  }, [products]);

  const updateFilters = (newFilters: Partial<ProductFilter>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return {
    filters,
    updateFilters,
    filteredProducts,
    productTypes,
  };
};
