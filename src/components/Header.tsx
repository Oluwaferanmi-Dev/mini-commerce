import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { CartButton } from './CartButton';
import { SearchCommand } from './SearchCommand';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center gap-2">
             <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="font-bold text-primary-foreground text-sm">MC</span>
            </div>
            <span className="font-bold ml-2">Mini-Commerce</span>
          </Link>
        </div>
        <nav className="hidden md:flex flex-1 justify-center items-center gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Products</Link>
            <Link href="/cart" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Cart</Link>
        </nav>
        <div className="flex items-center gap-2">
          <SearchCommand />
          <CartButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}