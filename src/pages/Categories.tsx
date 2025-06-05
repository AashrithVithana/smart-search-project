import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=500&fit=crop&crop=center',
    subcategories: ['Smartphones', 'Laptops', 'Headphones', 'Cameras', 'Gaming']
  },
  {
    id: 'fashion',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=500&fit=crop&crop=center',
    subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Accessories', 'Jewelry']
  },
  {
    id: 'home',
    name: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=500&fit=crop&crop=center',
    subcategories: ['Furniture', 'Decor', 'Kitchen', 'Garden', 'Lighting']
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500&h=500&fit=crop&crop=center',
    subcategories: ['Exercise Equipment', 'Outdoor Recreation', 'Sports Gear', 'Camping', 'Bicycles']
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop&crop=center',
    subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Fragrances', 'Personal Care']
  },
  {
    id: 'books',
    name: 'Books & Media',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=500&fit=crop&crop=center',
    subcategories: ['Fiction', 'Non-Fiction', 'Textbooks', 'eBooks', 'Audiobooks']
  }
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/?category=${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="aspect-video relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {category.subcategories.map((subcategory) => (
                    <Button
                      key={subcategory}
                      variant="outline"
                      size="sm"
                      className="text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/?category=${category.id}&subcategory=${subcategory.toLowerCase()}`);
                      }}
                    >
                      {subcategory}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;