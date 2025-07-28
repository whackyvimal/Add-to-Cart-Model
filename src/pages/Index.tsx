import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import CartModal from "@/components/CartModal";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Product } from "@/components/ProductCard";

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast({
          title: "Error",
          description: "Failed to load products. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [toast]);

  // Add product to cart
  const handleAddToCart = (product: Product) => {
    const isAlreadyInCart = cartItems.some(item => item.id === product.id);
    
    if (isAlreadyInCart) {
      toast({
        title: "Item already added to the cart",
        description: `${product.title} is already in your cart.`,
        variant: "destructive",
      });
      return;
    }

    setCartItems(prev => [...prev, product]);
    toast({
      title: "Added to cart!",
      description: `${product.title} has been added to your cart.`,
    });
  };

  // Remove product from cart
  const handleRemoveFromCart = (productId: number) => {
    const removedProduct = cartItems.find(item => item.id === productId);
    setCartItems(prev => prev.filter(item => item.id !== productId));
    
    if (removedProduct) {
      toast({
        title: "Removed from cart",
        description: `${removedProduct.title} has been removed from your cart.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        cartCount={cartItems.length}
        onCartClick={() => setIsCartModalOpen(true)}
      />
      
      <main>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ProductGrid
            products={products}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
          />
        )}
      </main>

      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default Index;
