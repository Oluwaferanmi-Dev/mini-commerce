import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QueryProvider } from '@/components/providers/QueryProvider';

export const metadata: Metadata = {
  title: 'Mini-Commerce',
  description: 'A modern e-commerce platform.',
  openGraph: {
    title: 'Mini-Commerce',
    description: 'A modern e-commerce platform.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mini-Commerce',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
