
import React from 'react';
import SearchBar from '@/components/SearchBar';

interface HeroSectionProps {
  onSearch: (query: string, type: 'text' | 'voice' | 'image') => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Find the Best Deals with
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}AI-Powered Shopping
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Compare prices, analyze reviews, and get personalized recommendations across thousands of online stores
        </p>
        
        <SearchBar onSearch={onSearch} />
      </div>
    </section>
  );
};

export default HeroSection;
