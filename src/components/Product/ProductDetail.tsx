'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { Product } from "@/types";

interface ProductDetailProps {
  id: string;
}

const ProductDetail = ({id}:ProductDetailProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse-slow">Loading product details..</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Return to products
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <li>
            <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300">
              Products
            </Link>
          </li>
          <li>•</li>
          <li>{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {product.name}
          </h1>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              {product.count} in stock
            </span>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h2 className="text-lg font-semibold mb-4">Description</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {product.description}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <span className="inline-block bg-gray-200 dark:bg-dark-accent rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {product.type}
            </span>
          </div>
        </div>
      </div>
      {product && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: product.name,
              description: product.description,
              image: product.image,
              offers: {
                '@type': 'Offer',
                price: product.price,
                priceCurrency: 'USD',
                availability: product.count > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
                url: `/product/${product.id}`,
              },
              brand: {
                '@type': 'Brand',
                name: 'ProductStore',
              },
            }),
          }}
        />
      )}
    </main>
  );
}

export default ProductDetail;