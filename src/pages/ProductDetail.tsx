import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Loader2, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      
      try {
        const data = await fetchProductByHandle(handle);
        setProduct(data);
        setSelectedVariant(data.variants.edges[0]?.node);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: product.title,
      position: "top-center",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-accent" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-semibold">Product not found</h2>
        </div>
      </div>
    );
  }

  const images = product.images?.edges || [];
  const currentImage = images[selectedImage]?.node?.url || '';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden">
              {currentImage && (
                <img
                  src={currentImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-accent' : 'border-border'
                    }`}
                  >
                    <img
                      src={img.node.url}
                      alt={`${product.title} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">In Stock</Badge>
              </div>
              <p className="text-3xl font-bold text-accent">
                {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || '0').toFixed(2)}
              </p>
            </div>

            {product.description && (
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            )}

            {product.options?.map((option: any) => (
              <div key={option.name}>
                <h3 className="font-semibold mb-3">{option.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {option.values.map((value: string) => {
                    const variant = product.variants.edges.find((v: any) =>
                      v.node.selectedOptions.some((opt: any) => opt.value === value)
                    );
                    const isSelected = selectedVariant?.selectedOptions.some(
                      (opt: any) => opt.value === value
                    );

                    return (
                      <Button
                        key={value}
                        variant={isSelected ? "default" : "outline"}
                        onClick={() => setSelectedVariant(variant?.node)}
                        disabled={!variant?.node.availableForSale}
                      >
                        {value}
                      </Button>
                    );
                  })}
                </div>
              </div>
            ))}

            <Button
              size="lg"
              className="w-full text-lg"
              onClick={handleAddToCart}
              disabled={!selectedVariant?.availableForSale}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <div className="border-t pt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Free Shipping</span>
                <span className="font-medium">On orders over $50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Returns</span>
                <span className="font-medium">30-day return policy</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery</span>
                <span className="font-medium">3-5 business days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
