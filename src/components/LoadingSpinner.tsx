const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-cart-primary/20 border-t-cart-primary rounded-full animate-spin"></div>
        <p className="text-muted-foreground font-medium">Loading products...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;