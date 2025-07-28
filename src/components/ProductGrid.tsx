import ProductCard, { Product } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  cartItems: Product[];
}

const ProductGrid = ({ products, onAddToCart, cartItems }: ProductGridProps) => {
  const isInCart = (productId: number) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cart-primary to-cart-secondary bg-clip-text text-transparent">
          Featured Products
        </h2>
        <p className="text-muted-foreground">Discover amazing products at great prices</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            isInCart={isInCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;