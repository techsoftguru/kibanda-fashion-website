import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(8);
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg">Discover our curated selection</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-accent" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-lg border border-border">
            <h3 className="text-2xl font-semibold mb-4">Ready to Add Products?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Your store is set up! Start by telling me what products you'd like to add. 
              Just describe the product, price, and any variants (sizes, colors).
            </p>
            <p className="text-sm text-muted-foreground italic">
              Example: "Add Nike Air Max sneakers in black, white, and red, sizes 7-12, priced at $120"
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
            
            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/products">View All Products</Link>
              </Button>
            </div>
          </>
        )}
      </section>

      <section className="bg-luxury-dark text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Kibanda Fashion?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="text-accent text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-primary-foreground/70">On all orders over $50</p>
            </div>
            <div className="p-6">
              <div className="text-accent text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-primary-foreground/70">30-day hassle-free returns</p>
            </div>
            <div className="p-6">
              <div className="text-accent text-5xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-primary-foreground/70">100% authentic products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
