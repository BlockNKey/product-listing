'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

import { Product } from "@/types";
import ProductCard from "@/components/Product/ProductCard";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
      <div className="flex justify-center items-center min-h-screen">
        Loading products...
      </div>
    )
  }

	return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to VitaliiStore
        </h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tech Stacks Used:</h2>
          <div className="flex justify-center">
            <Image
              src="https://skillicons.dev/icons?i=ts,nextjs,tailwind,docker"
              alt="Tech Stack: TypeScript, Next.js, Tailwind CSS, Docker"
              width={200}
              height={50}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
	);
};

export default Home;
