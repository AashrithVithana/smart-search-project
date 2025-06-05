
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';

const SavedItems = () => {
  const navigate = useNavigate();
  const [savedItems, setSavedItems] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedProducts');
    if (saved) {
      setSavedItems(JSON.parse(saved));
    }
  }, []);

  const removeSavedItem = (productId: string) => {
    const updatedItems = savedItems.filter(item => item.id !== productId);
    setSavedItems(updatedItems);
    localStorage.setItem('savedProducts', JSON.stringify(updatedItems));
  };

  const clearAllSaved = () => {
    setSavedItems([]);
    localStorage.removeItem('savedProducts');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Saved Items</h1>
          </div>
          
          {savedItems.length > 0 && (
            <Button 
              variant="outline" 
              onClick={clearAllSaved}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          )}
        </div>

        {savedItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">No saved items yet</h2>
              <p className="text-gray-500 mb-4">Start saving products you're interested in to see them here</p>
              <Button onClick={() => navigate('/')}>
                Browse Products
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedItems.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 left-2 bg-white/90 hover:bg-red-50 text-red-600 hover:text-red-700"
                  onClick={() => removeSavedItem(product.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedItems;
