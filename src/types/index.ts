export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
