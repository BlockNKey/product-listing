export interface Product {
  id: number;
  name: string;
  price: number;
  type: string;
  count: number;
  description: string;
  image: string;
  features: string[];
}

export interface ProductFilter {
  search: string;
  minPrice: number;
  maxPrice: number;
  type: string;
  minCount: number;
}
