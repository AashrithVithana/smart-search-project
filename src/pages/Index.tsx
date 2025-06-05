import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import AlertsNavigation from '@/components/AlertsNavigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import SearchResults from '@/components/SearchResults';
import FilterSidebar from '@/components/FilterSidebar';
import AIAssistant from '@/components/AIAssistant';
import PriceAlerts from '@/components/PriceAlerts';

const Index = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'search' | 'alerts' | 'results'>('search');
  const [appliedFilters, setAppliedFilters] = useState<any>({});

  const allProducts = [
    {
      id: '1',
      name: 'Sony WH-1000XM4 Wireless Noise Canceling Headphones',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop&crop=center',
      currentPrice: 279.99,
      originalPrice: 349.99,
      rating: 4.8,
      reviewCount: 15420,
      store: 'Amazon',
      discount: 20,
      priceHistory: 'down' as const,
      isSponsored: false,
      storeUrl: 'https://www.amazon.com/Sony-WH-1000XM4-Canceling-Headphones-phone-call/dp/B0863TXGM3'
    },
    {
      id: '2',
      name: 'Apple iPhone 15 Pro 128GB - Natural Titanium',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop&crop=center',
      currentPrice: 999.99,
      originalPrice: 1099.99,
      rating: 4.6,
      reviewCount: 8932,
      store: 'Best Buy',
      discount: 9,
      priceHistory: 'stable' as const,
      isSponsored: true,
      storeUrl: 'https://www.bestbuy.com/site/apple-iphone-15-pro-128gb-natural-titanium-verizon/6525421.p'
    },
    {
      id: '3',
      name: 'Nike Air Max 270 Running Shoes - Black/White',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop&crop=center',
      currentPrice: 89.97,
      originalPrice: 149.99,
      rating: 4.4,
      reviewCount: 12543,
      store: 'Nike',
      discount: 40,
      priceHistory: 'down' as const,
      isSponsored: false,
      storeUrl: 'https://www.nike.com/t/air-max-270-mens-shoes-KkLcGR'
    },
    {
      id: '4',
      name: 'Samsung Galaxy Watch 6 Classic 47mm',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&crop=center',
      currentPrice: 329.99,
      originalPrice: 399.99,
      rating: 4.5,
      reviewCount: 7821,
      store: 'Samsung',
      discount: 18,
      priceHistory: 'down' as const,
      isSponsored: false,
      storeUrl: 'https://www.samsung.com/us/watches/galaxy-watch6/'
    },
    {
      id: '5',
      name: 'MacBook Air M2 13-inch 256GB - Midnight',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop&crop=center',
      currentPrice: 1099.99,
      originalPrice: 1199.99,
      rating: 4.7,
      reviewCount: 5632,
      store: 'Apple',
      discount: 8,
      priceHistory: 'stable' as const,
      isSponsored: true,
      storeUrl: 'https://www.apple.com/macbook-air-13-and-15-m2/'
    },
    {
      id: '6',
      name: 'PlayStation 5 Console',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&h=500&fit=crop&crop=center',
      currentPrice: 499.99,
      originalPrice: 499.99,
      rating: 4.9,
      reviewCount: 23450,
      store: 'PlayStation Direct',
      discount: 0,
      priceHistory: 'stable' as const,
      isSponsored: false,
      storeUrl: 'https://direct.playstation.com/en-us/consoles/console/playstation5-console.1000031644'
    },
    {
      id: '7',
      name: 'Canon EOS R6 Mark II Mirrorless Camera',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop&crop=center',
      currentPrice: 2099.99,
      originalPrice: 2499.99,
      rating: 4.6,
      reviewCount: 3241,
      store: 'B&H Photo',
      discount: 16,
      priceHistory: 'down' as const,
      isSponsored: false,
      storeUrl: 'https://www.bhphotovideo.com/c/product/1712443-REG/canon_eos_r6_mark_ii.html'
    },
    {
      id: '8',
      name: 'Dyson V15 Detect Absolute Cordless Vacuum',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop&crop=center',
      currentPrice: 649.99,
      originalPrice: 749.99,
      rating: 4.3,
      reviewCount: 9876,
      store: 'Dyson',
      discount: 13,
      priceHistory: 'down' as const,
      isSponsored: false,
      storeUrl: 'https://www.dyson.com/vacuum-cleaners/cordless/v15/detect-absolute'
    },
    {
      id: '9',
      name: 'Dell XPS 13 Plus Laptop Intel i7 32GB RAM',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop&crop=center',
      currentPrice: 1599.99,
      originalPrice: 1899.99,
      rating: 4.4,
      reviewCount: 4532,
      store: 'Dell',
      discount: 16,
      priceHistory: 'down' as const,
      isSponsored: true,
      storeUrl: 'https://www.dell.com/en-us/shop/dell-laptops/xps-13-plus-laptop/spd/xps-13-9320-laptop'
    },
    {
      id: '10',
      name: 'AirPods Pro 2nd Generation with MagSafe Case',
      image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&h=500&fit=crop&crop=center',
      currentPrice: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviewCount: 18765,
      store: 'Apple',
      discount: 20,
      priceHistory: 'down' as const,
      isSponsored: false,
      storeUrl: 'https://www.apple.com/airpods-pro/'
    }
  ];

  const handleSearch = (query: string, type: 'text' | 'voice' | 'image') => {
    console.log(`Searching for: ${query} via ${type}`);
    
    // Filter products based on search query
    if (query.trim()) {
      const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.store.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredProducts.length > 0 ? filteredProducts : allProducts);
    } else {
      setSearchResults(allProducts);
    }
    
    setActiveTab('results');
  };

  const handleFiltersChange = (filters: any) => {
    setAppliedFilters(filters);
    
    // Apply filters to current search results or all products
    let filteredProducts = searchResults.length > 0 ? searchResults : allProducts;
    
    // Filter by price range
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map((p: string) => p.replace('+', ''));
      filteredProducts = filteredProducts.filter((product: any) => {
        if (filters.priceRange === '1000+') {
          return product.currentPrice >= 1000;
        }
        return product.currentPrice >= parseInt(min) && product.currentPrice <= parseInt(max);
      });
    }
    
    // Filter by brands
    if (filters.brands && filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter((product: any) =>
        filters.brands.some((brand: string) => 
          product.name.toLowerCase().includes(brand.toLowerCase())
        )
      );
    }
    
    // Filter by stores
    if (filters.stores && filters.stores.length > 0) {
      filteredProducts = filteredProducts.filter((product: any) =>
        filters.stores.some((store: string) => 
          product.store.toLowerCase().includes(store.toLowerCase())
        )
      );
    }
    
    setSearchResults(filteredProducts);
    if (filteredProducts.length > 0) {
      setActiveTab('results');
    }
  };

  const handleTabChange = (tab: 'search' | 'alerts' | 'results') => {
    setActiveTab(tab);
  };

  if (activeTab === 'alerts') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <AlertsNavigation activeTab={activeTab} onTabChange={handleTabChange} />
          <PriceAlerts />
        </div>
        <AIAssistant />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === 'search' && (
        <>
          <HeroSection onSearch={handleSearch} />
          <FeaturesSection />
        </>
      )}

      {activeTab === 'results' && (
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-6">
            <FilterSidebar onFiltersChange={handleFiltersChange} />
            <div className="flex-1">
              <SearchResults searchResults={searchResults} />
            </div>
          </div>
        </div>
      )}

      <AIAssistant />
    </div>
  );
};

export default Index;
