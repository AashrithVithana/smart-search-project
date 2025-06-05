
import React, { useState } from 'react';
import { Bell, TrendingDown, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PriceAlert {
  id: string;
  productName: string;
  targetPrice: number;
  currentPrice: number;
  image: string;
  store: string;
  isActive: boolean;
}

const PriceAlerts = () => {
  const [alerts] = useState<PriceAlert[]>([
    {
      id: '1',
      productName: 'Sony WH-1000XM4 Wireless Headphones',
      targetPrice: 250,
      currentPrice: 279,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop&crop=center',
      store: 'Amazon',
      isActive: true
    },
    {
      id: '2',
      productName: 'iPhone 15 Pro 128GB',
      targetPrice: 900,
      currentPrice: 850,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop&crop=center',
      store: 'Best Buy',
      isActive: false
    },
    {
      id: '3',
      productName: 'Nike Air Max 270',
      targetPrice: 120,
      currentPrice: 135,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop&crop=center',
      store: 'Nike',
      isActive: true
    }
  ]);

  const activeAlerts = alerts.filter(alert => alert.isActive);
  const triggeredAlerts = alerts.filter(alert => alert.currentPrice <= alert.targetPrice);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <Bell className="h-6 w-6 text-blue-600" />
          <span>Price Alerts</span>
        </h2>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
          Create Alert
        </Button>
      </div>

      {triggeredAlerts.length > 0 && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center space-x-2">
              <TrendingDown className="h-5 w-5" />
              <span>Price Drop Alerts!</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {triggeredAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={alert.image} 
                      alt={alert.productName} 
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                    <div>
                      <p className="font-medium text-sm">{alert.productName}</p>
                      <p className="text-xs text-gray-600">{alert.store}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-bold">${alert.currentPrice}</p>
                    <p className="text-xs text-gray-500">Target: ${alert.targetPrice}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {activeAlerts.map((alert) => (
          <Card key={alert.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img 
                    src={alert.image} 
                    alt={alert.productName} 
                    className="w-20 h-20 object-cover rounded-lg border shadow-sm"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{alert.productName}</h3>
                    <p className="text-sm text-gray-600 mb-2">{alert.store}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Target: ${alert.targetPrice}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Current: ${alert.currentPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Badge variant={alert.currentPrice <= alert.targetPrice ? "default" : "secondary"}>
                    {alert.currentPrice <= alert.targetPrice ? "Price Met!" : "Monitoring"}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Edit Alert
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PriceAlerts;
