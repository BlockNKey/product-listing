import { Metadata } from 'next';

import ProductDetail from '@/components/Product/ProductDetail';
import Header from '@/components/GlobalHeader';
import products from '@/data/products.json'

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const product = products.products.find(
      (p) => p.id === parseInt(id)
    );

    if (!product) {
      return {
        title: 'Product Not Found',
        description: 'The requested product could not be found.',
      };
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    return {
      title: product.name,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
      },
      alternates: {
        canonical: `/product/${product.id}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Product Details',
      description: 'View product details on VitaliiStore',
    };
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;

  return (
  <div>
    <Header />
    <ProductDetail id={id} />
  </div>
)}

export default ProductPage;