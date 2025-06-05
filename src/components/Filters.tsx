
import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

interface FiltersProps {
  onFiltersChange: (filters: any) => void;
}

const Filters = ({ onFiltersChange }: FiltersProps) => {
  const [priceRange, setPriceRange] = useState('');
  const [brand, setBrand] = useState('');
  const [store, setStore] = useState('');
  const [category, setCategory] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (type: string, value: string) => {
    const newFilters = { priceRange, brand, store, category };
    
    switch (type) {
      case 'price':
        setPriceRange(value);
        newFilters.priceRange = value;
        break;
      case 'brand':
        setBrand(value);
        newFilters.brand = value;
        break;
      case 'store':
        setStore(value);
        newFilters.store = value;
        break;
      case 'category':
        setCategory(value);
        newFilters.category = value;
        break;
    }
    
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    setPriceRange('');
    setBrand('');
    setStore('');
    setCategory('');
    onFiltersChange({ priceRange: '', brand: '', store: '', category: '' });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto mt-4">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filters</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-1"
          >
            <span>{isExpanded ? 'Hide' : 'Show'} Filters</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </Button>
        </div>

        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <Select value={priceRange} onValueChange={(value) => handleFilterChange('price', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Price</SelectItem>
                  <SelectItem value="0-50">Under $50</SelectItem>
                  <SelectItem value="50-100">$50 - $100</SelectItem>
                  <SelectItem value="100-250">$100 - $250</SelectItem>
                  <SelectItem value="250-500">$250 - $500</SelectItem>
                  <SelectItem value="500-1000">$500 - $1000</SelectItem>
                  <SelectItem value="1000+">Over $1000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
              <Select value={brand} onValueChange={(value) => handleFilterChange('brand', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Brand</SelectItem>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="sony">Sony</SelectItem>
                  <SelectItem value="nike">Nike</SelectItem>
                  <SelectItem value="canon">Canon</SelectItem>
                  <SelectItem value="dyson">Dyson</SelectItem>
                  <SelectItem value="dell">Dell</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Store</label>
              <Select value={store} onValueChange={(value) => handleFilterChange('store', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Store" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Store</SelectItem>
                  <SelectItem value="amazon">Amazon</SelectItem>
                  <SelectItem value="flipkart">Flipkart</SelectItem>
                  <SelectItem value="zudio">Zudio</SelectItem>
                  <SelectItem value="bestbuy">Best Buy</SelectItem>
                  <SelectItem value="apple">Apple Store</SelectItem>
                  <SelectItem value="nike">Nike</SelectItem>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="target">Target</SelectItem>
                  <SelectItem value="walmart">Walmart</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <Select value={category} onValueChange={(value) => handleFilterChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Category</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing & Shoes</SelectItem>
                  <SelectItem value="home">Home & Garden</SelectItem>
                  <SelectItem value="sports">Sports & Outdoors</SelectItem>
                  <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                  <SelectItem value="books">Books & Media</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={clearFilters}
                className="w-full"
                disabled={!priceRange && !brand && !store && !category}
              >
                Clear All
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Filters;
