'use client';

import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import type { Product } from '@/types';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

async function getProducts(): Promise<Product[]> {
    const res = await fetch('/api/products');
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
}

export default function Home() {
    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
    });

    const renderSkeletons = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="aspect-square w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-4/5" />
                        <Skeleton className="h-4 w-3/5" />
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        Welcome to Mini-Commerce
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-blue-100">
                        Discover amazing products at unbeatable prices. Quality guaranteed, fast shipping, and excellent customer service.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                            <Link href="#">Shop Now</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                            <Link href="#">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </section>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
                    <p className="mt-2 text-muted-foreground">Discover our carefully curated selection of high-quality products at amazing prices.</p>
                </div>
                {isLoading ? renderSkeletons() : null}
                {isError ? (
                    <Alert variant="destructive" className="max-w-2xl mx-auto">
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Error Fetching Products</AlertTitle>
                        <AlertDescription>
                            There was a problem loading products. Please try refreshing the page.
                        </AlertDescription>
                    </Alert>
                ) : null}
                {!isLoading && !isError && products && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}