
import React from 'react';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';

interface SearchResultsProps {
  searchResults: any[];
}

const SearchResults = ({ searchResults }: SearchResultsProps) => {
  if (searchResults.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Search Results</h2>
        <Badge variant="secondary" className="text-sm">
          {searchResults.length} products found
        </Badge>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
