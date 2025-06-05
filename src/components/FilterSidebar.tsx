
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface FilterSidebarProps {
  onFiltersChange: (filters: any) => void;
}

const FilterSidebar = ({ onFiltersChange }: FilterSidebarProps) => {
  const [priceRange, setPriceRange] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedStores, setSelectedStores] = useState<string[]>([]);
  const [category, setCategory] = useState('');

  const brands = [
    'Apple', 'Samsung', 'Sony', 'Nike', 'Canon', 'Dyson', 'Dell'
  ];

  const stores = [
    'Amazon', 'Flipkart', 'Zudio', 'Best Buy', 'Apple Store', 'Nike', 'Samsung'
  ];

  const handleBrandChange = (brand: string, checked: boolean) => {
    const updatedBrands = checked 
      ? [...selectedBrands, brand]
      : selectedBrands.filter(b => b !== brand);
    
    setSelectedBrands(updatedBrands);
    updateFilters({ brands: updatedBrands });
  };

  const handleStoreChange = (store: string, checked: boolean) => {
    const updatedStores = checked 
      ? [...selectedStores, store]
      : selectedStores.filter(s => s !== store);
    
    setSelectedStores(updatedStores);
    updateFilters({ stores: updatedStores });
  };

  const updateFilters = (newFilters: any) => {
    const filters = {
      priceRange,
      brands: selectedBrands,
      stores: selectedStores,
      category,
      ...newFilters
    };
    onFiltersChange(filters);
  };

  const clearAllFilters = () => {
    setPriceRange('');
    setSelectedBrands([]);
    setSelectedStores([]);
    setCategory('');
    onFiltersChange({
      priceRange: '',
      brands: [],
      stores: [],
      category: ''
    });
  };

  return (
    <div className="w-64 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Filters</h3>
        <Button 
          variant="link" 
          size="sm" 
          onClick={clearAllFilters}
          className="text-blue-600 hover:text-blue-800"
        >
          Clear all
        </Button>
      </div>

      <Separator />

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Price</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <Select value={priceRange || undefined} onValueChange={(value) => {
            setPriceRange(value || '');
            updateFilters({ priceRange: value || '' });
          }}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50">Under ₹50</SelectItem>
              <SelectItem value="50-100">₹50 - ₹100</SelectItem>
              <SelectItem value="100-250">₹100 - ₹250</SelectItem>
              <SelectItem value="250-500">₹250 - ₹500</SelectItem>
              <SelectItem value="500-1000">₹500 - ₹1,000</SelectItem>
              <SelectItem value="1000+">Over ₹1,000</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Brands */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Brand</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
              />
              <label
                htmlFor={`brand-${brand}`}
                className="text-sm font-normal cursor-pointer"
              >
                {brand}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Stores */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Store</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          {stores.map((store) => (
            <div key={store} className="flex items-center space-x-2">
              <Checkbox
                id={`store-${store}`}
                checked={selectedStores.includes(store)}
                onCheckedChange={(checked) => handleStoreChange(store, checked as boolean)}
              />
              <label
                htmlFor={`store-${store}`}
                className="text-sm font-normal cursor-pointer"
              >
                {store}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Category */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Category</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <Select value={category || undefined} onValueChange={(value) => {
            setCategory(value || '');
            updateFilters({ category: value || '' });
          }}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing & Shoes</SelectItem>
              <SelectItem value="home">Home & Garden</SelectItem>
              <SelectItem value="sports">Sports & Outdoors</SelectItem>
              <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
              <SelectItem value="books">Books & Media</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSidebar;
