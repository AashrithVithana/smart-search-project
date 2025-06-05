import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const deals = [
  {
    id: '1',
    title: 'Flash Sale - Electronics',
    description: 'Up to 50% off on selected electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=500&fit=crop&crop=center',
    discount: '50%',
    endTime: '2024-03-20T00:00:00',
    category: 'Electronics'
  },
  {
    id: '2',
    title: 'Spring Fashion Clearance',
    description: 'Get ready for spring with up to 40% off',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=500&fit=crop&crop=center',
    discount: '40%',
    endTime: '2024-03-25T00:00:00',
    category: 'Fashion'
  },
  {
    id: '3',
    title: 'Home Essentials Sale',
    description: 'Save big on home and kitchen items',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=500&fit=crop&crop=center',
    discount: '30%',
    endTime: '2024-03-22T00:00:00',
    category: 'Home & Garden'
  },
  {
    id: '4',
    title: 'Tech Accessories Deal',
    description: 'Buy one get one 50% off',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop&crop=center',
    discount: 'BOGO',
    endTime: '2024-03-21T00:00:00',
    category: 'Electronics'
  }
];

const Deals = () => {
  const navigate = useNavigate();

  const calculateTimeLeft = (endTime: string) => {
    const difference = new Date(endTime).getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return 'Ended';
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return `${days}d ${hours}h left`;
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
          <h1 className="text-3xl font-bold text-gray-900">Hot Deals</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <Card 
              key={deal.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/?category=${deal.category.toLowerCase()}&deal=true`)}
            >
              <div className="aspect-video relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover"
                />
                <Badge 
                  className="absolute top-4 left-4 bg-red-600"
                >
                  <Tag className="h-4 w-4 mr-1" />
                  {deal.discount} OFF
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                <p className="text-gray-600 mb-4">{deal.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{deal.category}</Badge>
                  <span className="text-sm font-medium text-red-600">
                    {calculateTimeLeft(deal.endTime)}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;