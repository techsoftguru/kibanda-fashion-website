import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-luxury-dark via-primary to-luxury-dark">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-accent font-semibold text-sm tracking-wide">NEW COLLECTION 2025</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Elevate Your{" "}
            <span className="text-accent bg-clip-text">Style</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-8 max-w-2xl">
            Discover premium streetwear and luxury fashion for the whole family. 
            Where comfort meets elegance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg group">
              <Link to="/products">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/products?sort=new">
                New Arrivals
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg">
            <div>
              <div className="text-3xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-primary-foreground/70">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-primary-foreground/70">Authentic</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-primary-foreground/70">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent"></div>
    </section>
  );
};
