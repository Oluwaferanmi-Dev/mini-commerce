'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/hooks/useCartStore';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ product, quantity: 1 });
    toast({
      title: "Added to cart",
      description: `1 x ${product.name}`,
    });
  };
  
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg group">
        <Link href={`/product/${product.id}`} className="flex flex-col h-full">
            <div className="aspect-square relative bg-muted/30">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <CardContent className="p-4 flex-grow flex flex-col">
                <h3 className="text-base font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                    {product.description.substring(0, 60)}{product.description.length > 60 ? '...' : ''}
                </p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <p className="text-lg font-bold text-foreground">
                ₦{product.price.toLocaleString()}
            </p>
            <Button variant="secondary" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add
            </Button>
            </CardFooter>
        </Link>
    </Card>
  );
}
