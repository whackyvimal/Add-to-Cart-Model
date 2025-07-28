import { Star, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
}

const ProductCard = ({ product, onAddToCart, isInCart }: ProductCardProps) => {
  return (
    <Card className="group h-full bg-gradient-to-br from-card to-muted/20 border-border/50 hover:border-cart-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted/30">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-foreground">
            {product.title}
          </h3>
          
          <p className="text-xs text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-cart-secondary text-cart-secondary" />
            <span className="text-sm font-medium">{product.rating.rate}</span>
            <span className="text-xs text-muted-foreground">
              ({product.rating.count})
            </span>
          </div>
          
          <div className="text-lg font-bold text-cart-primary">
            ${product.price.toFixed(2)}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart(product)}
          disabled={isInCart}
          className={`w-full transition-all duration-300 ${
            isInCart 
              ? "bg-success hover:bg-success text-white"
              : "bg-cart-primary hover:bg-cart-primary/90 hover:shadow-lg"
          }`}
        >
          <Plus className="w-4 h-4 mr-2" />
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;