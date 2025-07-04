'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCartStore } from '@/hooks/useCartStore';
import { useToast } from '@/hooks/use-toast';
import type { Product } from '@/types';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

export function ProductInteractions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({ product, quantity });
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name}`,
    });
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity));
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
      <div className="flex items-center gap-2 border rounded-md">
        <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(quantity - 1)} aria-label="Decrease quantity">
          <Minus className="h-4 w-4" />
        </Button>
        <Input 
          type="number" 
          className="w-16 text-center border-0 focus-visible:ring-0" 
          value={quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
          aria-label="Quantity"
        />
        <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(quantity + 1)} aria-label="Increase quantity">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button onClick={handleAddToCart} size="lg" className="w-full sm:w-auto">
        <ShoppingCart className="mr-2 h-5 w-5" />
        Add to Cart
      </Button>
    </div>
  );
}
