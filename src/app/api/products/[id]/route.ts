import { NextResponse } from 'next/server';
import products from '@/data/products.json';

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const product = products.products.find(
    (p) => p.id === parseInt(id)
  );

  if (!product) {
    return new NextResponse('Product not found', { status: 404 });
  }

  return NextResponse.json(product);
}
