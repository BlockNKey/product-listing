import { NextResponse } from 'next/server';
import products from '@/data/products.json';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const param = await params;
  const product = products.products.find(
    (p) => p.id === parseInt(param.id)
  );

  if (!product) {
    return new NextResponse('Product not found', { status: 404 });
  }

  return NextResponse.json(product);
}
