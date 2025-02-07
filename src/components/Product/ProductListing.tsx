'use client';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

import { Product } from "@/types";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import { useProducts } from "@/hooks/useProducts";

const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { filters, updateFilters, filteredProducts, productTypes } = useProducts(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error(
          error instanceof Error 
            ? `Failed to load products: ${error.message}` 
            : 'Failed to load products'
        );
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-2 xl:col-span-1" aria-label="product filters">
        <ProductFilters filters={filters} onFilterChange={updateFilters} productTypes={productTypes} />
      </div>
      <div className="md:col-span-2 xl:col-span-3">
        {loading ?
          <div className="animate-pulse-slow text-center">Loading product details..</div>
          : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6" aria-label="products list" role="list">
            {filteredProducts.map((product: Product) => (
              <div key={product.id} role="listitem">
                <ProductCard product={product} />
              </div>
            ))}
          </div>}
        {!loading && filteredProducts.length === 0 && (
          <div
            className="text-center py-12 text-gray-500 dark:text-gray-400"
            role="alert"
            aria-live="polite"
          >
            No products found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductListing;