import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
               <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-bold text-primary-foreground text-sm">MC</span>
              </div>
              <span className="font-bold text-lg">Mini-Commerce</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your favorite online store for quality products at great prices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">All Products</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Electronics</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Fashion</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Home & Garden</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Help Center</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Shipping Info</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Returns</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mini-Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
