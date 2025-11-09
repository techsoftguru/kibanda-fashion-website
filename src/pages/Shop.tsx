import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { products, getProductsByCategory, getProductsByGender, getProductsByAgeGroup, getNewArrivals } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

const Shop = () => {
  const { filter } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('all');

  let filteredProducts = products;

  // Apply URL filter first
  if (filter === 'men') {
    filteredProducts = getProductsByGender('men');
  } else if (filter === 'women') {
    filteredProducts = getProductsByGender('women');
  } else if (filter === 'kids') {
    filteredProducts = getProductsByAgeGroup('kids');
  } else if (filter === 'sneakers') {
    filteredProducts = getProductsByCategory('sneakers');
  } else if (filter === 'new') {
    filteredProducts = getNewArrivals();
  }

  // Apply additional filters
  if (selectedCategory !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }
  if (selectedGender !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.gender === selectedGender || p.gender === 'unisex');
  }
  if (selectedAgeGroup !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.ageGroup === selectedAgeGroup);
  }

  const getTitle = () => {
    if (filter === 'new') return 'NEW ARRIVALS';
    if (filter === 'sneakers') return 'SNEAKERS';
    if (filter === 'men') return "MEN'S COLLECTION";
    if (filter === 'women') return "WOMEN'S COLLECTION";
    if (filter === 'kids') return "KIDS' COLLECTION";
    return 'ALL PRODUCTS';
  };

  return (
    <div className="min-h-screen py-4 md:py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">{getTitle()}</h1>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Filters Sidebar - Mobile Collapsible */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24 space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-4 w-4 md:h-5 md:w-5" />
                <h2 className="text-base md:text-lg font-semibold">FILTERS</h2>
              </div>

              {/* Category Filter */}
              <div className="bg-card p-3 md:p-4 rounded border border-border lg:bg-transparent lg:border-0 lg:p-0">
                <h3 className="font-semibold mb-2 md:mb-3 text-xs md:text-sm">CATEGORY</h3>
                <div className="space-y-1 md:space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block w-full text-left px-2 md:px-3 py-1.5 md:py-2 rounded text-xs md:text-sm transition-smooth ${
                      selectedCategory === 'all' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedCategory('sneakers')}
                    className={`block w-full text-left px-2 md:px-3 py-1.5 md:py-2 rounded text-xs md:text-sm transition-smooth ${
                      selectedCategory === 'sneakers' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    Sneakers
                  </button>
                  <button
                    onClick={() => setSelectedCategory('clothing')}
                    className={`block w-full text-left px-2 md:px-3 py-1.5 md:py-2 rounded text-xs md:text-sm transition-smooth ${
                      selectedCategory === 'clothing' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    Clothing
                  </button>
                </div>
              </div>

              {/* Gender Filter */}
              <div className="bg-card p-3 md:p-4 rounded border border-border lg:bg-transparent lg:border-0 lg:p-0">
                <h3 className="font-semibold mb-2 md:mb-3 text-xs md:text-sm">GENDER</h3>
                <div className="space-y-1 md:space-y-2">
                  <button
                    onClick={() => setSelectedGender('all')}
                    className={`block w-full text-left px-2 md:px-3 py-1.5 md:py-2 rounded text-xs md:text-sm transition-smooth ${
                      selectedGender === 'all' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedGender('men')}
                    className={`block w-full text-left px-2 md:px-3 py-1.5 md:py-2 rounded text-xs md:text-sm transition-smooth ${
                      selectedGender === 'men' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    Men
                  </button>
                  <button
                    onClick={() => setSelectedGender('women')}
                    className={`block w-full text-left px-2 md:px-3 py-1.5 md:py-2 rounded text-xs md:text-sm transition-smooth ${
                      selectedGender === 'women' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    Women
                  </button>
                </div>
              </div>

              {/* Age Group Filter */}
              <div className="bg-card p-3 md:p-4 rounded border border-border lg:bg-transparent lg:border-0 lg:p-0">
                <h3 className="font-semibold mb-2 md:mb-3 text-xs md:text-sm">AGE GROUP</h3>
                <div className="space-y-1 md:space-y-2">
                  <button
                    onClick={() => setSelectedAgeGroup('all')}
                    className={`block w-full text-left px-2 md:px-3 py-1.5 md:py-2 rounded text-xs md:text-sm transition-smooth ${
                      selectedAgeGroup === 'all' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedAgeGroup('adults')}
                    className={`block w-full text-left px-2 md:px-3 py-1.5 md:py-2 rounded text-xs md:text-sm transition-smooth ${
                      selectedAgeGroup === 'adults' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    Adults
                  </button>
                  <button
                    onClick={() => setSelectedAgeGroup('kids')}
                    className={`block w-full text-left px-2 md:px-3 py-1.5 md:py-2 rounded text-xs md:text-sm transition-smooth ${
                      selectedAgeGroup === 'kids' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    Kids
                  </button>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full text-xs md:text-sm"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedGender('all');
                  setSelectedAgeGroup('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
              Showing {filteredProducts.length} products
            </p>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 md:py-20">
                <p className="text-lg md:text-xl text-muted-foreground">No products found matching your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
