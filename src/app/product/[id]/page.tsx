import ProductDetail from '@/components/Product/ProductDetail';
import Header from '@/components/GlobalHeader';

interface ProductPageProps {
  params: {
    id: string;
  };
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