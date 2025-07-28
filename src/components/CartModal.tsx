import { X, Minus, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Product } from "./ProductCard";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onRemoveFromCart: (productId: number) => void;
}

const CartModal = ({ isOpen, onClose, cartItems, onRemoveFromCart }: CartModalProps) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-xl">
            <ShoppingBag className="w-6 h-6 text-cart-primary" />
            <span>Shopping Cart ({cartItems.length} items)</span>
          </DialogTitle>
        </DialogHeader>
        
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <ShoppingBag className="w-16 h-16 text-muted-foreground" />
            <h3 className="text-lg font-semibold text-muted-foreground">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground">Add some products to get started!</p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 max-h-[400px]">
              <div className="space-y-4 pr-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 rounded-lg border bg-card hover:bg-muted/30 transition-colors">
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-muted/30">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <p className="text-lg font-bold text-cart-primary">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onRemoveFromCart(item.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20"
                    >
                      <Minus className="w-4 h-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="space-y-4">
              <Separator />
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-cart-primary">${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  Continue Shopping
                </Button>
                <Button
                  className="flex-1 bg-cart-primary hover:bg-cart-primary/90"
                  disabled={cartItems.length === 0}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;