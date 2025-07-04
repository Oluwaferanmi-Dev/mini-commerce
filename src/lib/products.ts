import path from 'path';
import { promises as fs } from 'fs';
import type { Product } from '@/types';

let productCache: Product[] | null = null;

export async function getProducts(): Promise<Product[]> {
  if (productCache) {
    return productCache;
  }
  
  const filePath = path.join(process.cwd(), 'public', 'products.json');
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const products: Product[] = JSON.parse(jsonData);
    productCache = products;
    return products;
  } catch (error) {
    console.error('Failed to read or parse products.json:', error);
    return [];
  }
}

export async function getProductById(id: number): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find(p => p.id === id);
}
