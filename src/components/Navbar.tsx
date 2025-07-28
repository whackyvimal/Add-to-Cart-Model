import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar = ({ cartCount, onCartClick }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cart-primary to-cart-secondary bg-clip-text text-transparent">
            FakeStore
          </h1>
        </div>
        
        <Button
          variant="outline"
          size="lg"
          onClick={onCartClick}
          className="relative hover:shadow-lg transition-all duration-300 border-cart-primary/20 hover:border-cart-primary/40"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-cart-primary text-primary-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center font-medium shadow-lg">
              {cartCount}
            </span>
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;