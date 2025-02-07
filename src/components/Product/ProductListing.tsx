'use client';
import { useEffect, useState } from "react";

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
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        Loading products...
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-2 xl:col-span-1">
        <ProductFilters filters={filters} onFilterChange={updateFilters} productTypes={productTypes} />
      </div>
      <div className="md:col-span-2 xl:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;