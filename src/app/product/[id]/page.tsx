'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ProductInteractions } from '@/components/ProductInteractions';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import type { Product } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

async function getProductById(id: number): Promise<Product> {
    const res = await fetch(`/api/products/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }
    return res.json();
}

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const productId = parseInt(params.id, 10);

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId),
    enabled: !isNaN(productId),
  });

  if (isNaN(productId)) {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
            <Alert variant="destructive" className="max-w-2xl mx-auto">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Invalid Product ID</AlertTitle>
                <AlertDescription>The product ID in the URL is not valid.</AlertDescription>
            </Alert>
        </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <Skeleton className="aspect-square rounded-lg w-full" />
          <div className="flex flex-col justify-center space-y-6">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-24 w-full" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 flex-grow" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Alert variant="destructive" className="max-w-2xl mx-auto">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Product Not Found</AlertTitle>
            <AlertDescription>
                We couldn't find the product you're looking for. It might have been removed or the link is incorrect.
            </AlertDescription>
        </Alert>
      </div>
    );
  }
  
  if (!product) {
      return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        <div className="aspect-square rounded-lg overflow-hidden border">
          <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
        </div>
        <div className="flex flex-col justify-center">
          <Badge variant="secondary" className="w-fit">{product.category}</Badge>
          <h1 className="text-4xl font-bold tracking-tight mt-4">{product.name}</h1>
          <p className="text-3xl font-semibold text-primary mt-4">
            ₦{product.price.toLocaleString()}
          </p>
          <p className="text-muted-foreground mt-6 text-lg">
            {product.description}
          </p>
          <ProductInteractions product={product} />
        </div>
      </div>
    </div>
  );
}
