
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AlertsNavigationProps {
  activeTab: 'search' | 'alerts' | 'results';
  onTabChange: (tab: 'search' | 'alerts' | 'results') => void;
}

const AlertsNavigation = ({ activeTab, onTabChange }: AlertsNavigationProps) => {
  return (
    <nav className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-2">
        <ShoppingBag className="h-8 w-8 text-blue-600" />
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          SmartFind
        </span>
      </div>
      <div className="flex space-x-4">
        <Button
          variant={activeTab === 'search' ? "default" : "outline"}
          onClick={() => onTabChange('search')}
        >
          Search
        </Button>
        <Button
          variant={activeTab === 'alerts' ? "default" : "outline"}
          onClick={() => onTabChange('alerts')}
        >
          Price Alerts
        </Button>
      </div>
    </nav>
  );
};

export default AlertsNavigation;
