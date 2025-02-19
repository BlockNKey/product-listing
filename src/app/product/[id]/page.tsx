import { Metadata } from 'next';

import ProductDetail from '@/components/Product/ProductDetail';
import Header from '@/components/GlobalHeader';
import products from '@/data/products.json'

export async function generateMetadata(context: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await context.params;
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
      description: 'View product details on ProductStore',
    };
  }
}

const ProductPage = async (context: { params: Promise<{ id: string }> }) => {
  const { id } = await context.params;

  return (
  <div>
    <Header />
    <ProductDetail id={id} />
  </div>
)}

export default ProductPage;