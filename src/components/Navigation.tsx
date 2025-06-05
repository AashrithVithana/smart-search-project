import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Heart, Bell, Tag, Grid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/use-cart';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { items } = useCart();

  const handleSavedItemsClick = () => {
    navigate('/saved');
    setIsMenuOpen(false);
  };

  const handleAlertsClick = () => {
    navigate('/alerts');
    setIsMenuOpen(false);
  };

  const handleDealsClick = () => {
    navigate('/deals');
    setIsMenuOpen(false);
  };

  const handleCategoriesClick = () => {
    navigate('/categories');
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    navigate('/cart');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Search className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">DealFinder</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={handleCategoriesClick}
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1"
            >
              <Grid className="h-4 w-4" />
              <span>Categories</span>
            </button>
            <button 
              onClick={handleDealsClick}
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1"
            >
              <Tag className="h-4 w-4" />
              <span>Deals</span>
            </button>
            <button 
              onClick={handleSavedItemsClick}
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1"
            >
              <Heart className="h-4 w-4" />
              <span>Saved</span>
            </button>
            <button 
              onClick={handleAlertsClick}
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1"
            >
              <Bell className="h-4 w-4" />
              <span>Alerts</span>
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleCartClick}
              className="relative"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {items.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white">
                  {items.length}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={handleCategoriesClick}
                className="text-gray-600 hover:text-gray-900 transition-colors py-2 flex items-center space-x-2"
              >
                <Grid className="h-4 w-4" />
                <span>Categories</span>
              </button>
              <button 
                onClick={handleDealsClick}
                className="text-gray-600 hover:text-gray-900 transition-colors py-2 flex items-center space-x-2"
              >
                <Tag className="h-4 w-4" />
                <span>Deals</span>
              </button>
              <button 
                onClick={handleSavedItemsClick}
                className="text-gray-600 hover:text-gray-900 transition-colors py-2 flex items-center space-x-2"
              >
                <Heart className="h-4 w-4" />
                <span>Saved Items</span>
              </button>
              <button 
                onClick={handleAlertsClick}
                className="text-gray-600 hover:text-gray-900 transition-colors py-2 flex items-center space-x-2"
              >
                <Bell className="h-4 w-4" />
                <span>Price Alerts</span>
              </button>
              <button 
                onClick={handleCartClick}
                className="text-gray-600 hover:text-gray-900 transition-colors py-2 flex items-center space-x-2"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
                {items.length > 0 && (
                  <Badge className="bg-blue-600 text-white">
                    {items.length}
                  </Badge>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;