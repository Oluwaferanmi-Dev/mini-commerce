'use client';

import { useRouter } from 'next/navigation';
import { useCartStore } from '@/hooks/useCartStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, totalPrice, clearCart } = useCartStore();
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isMounted && cart.length === 0) {
      router.replace('/cart');
    }
  }, [isMounted, cart, router]);

  const subtotal = totalPrice();

  const handlePlaceOrder = () => {
    console.log('Order placed:', cart);
    clearCart();
    toast({
      title: 'Order Placed!',
      description: 'Thank you for your purchase.',
    });
    router.push('/checkout/thank-you');
  };
  
  if (!isMounted || cart.length === 0) {
    return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center"><p>Loading...</p></div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {cart.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground">Quantity: {quantity}</p>
                </div>
                <p>₦{(product.price * quantity).toLocaleString()}</p>
              </div>
            ))}
          </div>
          <Separator className="my-4" />
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handlePlaceOrder} className="w-full" size="lg">
            Place Order
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
