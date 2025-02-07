import Link from "next/link";
import Image from "next/image";
import {type FC} from 'react';

import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({product}) => (
  <Link href={`/product/${product.id}`} className="group bg-white dark:bg-dark-secondary rounded-lg shadow-md overflow-hidden transform transition-all duration-200 animate-fade-in">
    <div className="aspect-w-16 aspect-h-9 relative h-48">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-200"
      />
    </div>

    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {product.name}
      </h3>

      <div className="flex justify-between items-center mb-2">
        <span className="text-green-600 dark:text-green-400 font-bold">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Stock: {product.count}
        </span>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400">
        {product.type}
      </div>
    </div>
  </Link>
)

export default ProductCard;