'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYouPage() {
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    setOrderId(Math.random().toString(36).substring(2, 10).toUpperCase());
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center text-center">
      <Card className="max-w-md w-full">
        <CardHeader className="items-center">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
          <CardTitle className="text-2xl mt-4">Thank You for Your Order!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Your order has been placed successfully. We've sent a confirmation email to you.
          </p>
          {orderId && (
            <p className="mt-4 font-semibold">
              Order ID: <span className="font-mono text-primary">{orderId}</span>
            </p>
          )}
          <Button asChild className="mt-6 w-full">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
