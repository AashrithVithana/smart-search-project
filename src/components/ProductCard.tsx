
import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, TrendingDown, TrendingUp, Heart, Share2, Bookmark } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image: string;
    currentPrice: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    store: string;
    discount?: number;
    priceHistory: 'up' | 'down' | 'stable';
    isSponsored?: boolean;
    storeUrl?: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSaved, setIsSaved] = useState(false);
  
  const {
    id,
    name,
    image,
    currentPrice,
    originalPrice,
    rating,
    reviewCount,
    store,
    discount,
    priceHistory,
    isSponsored,
    storeUrl
  } = product;

  const savings = originalPrice ? originalPrice - currentPrice : 0;
  const savingsPercent = originalPrice ? Math.round((savings / originalPrice) * 100) : 0;

  // Check if product is already saved
  useEffect(() => {
    const savedProducts = localStorage.getItem('savedProducts');
    if (savedProducts) {
      const parsed = JSON.parse(savedProducts);
      setIsSaved(parsed.some((p: any) => p.id === id));
    }
  }, [id]);

  const handleProductClick = () => {
    console.log(`Redirecting to price comparison for product: ${id}`);
    navigate(`/compare/${id}`);
  };

  const handleViewDeal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (storeUrl) {
      console.log(`Redirecting to ${store} for ${name}`);
      window.open(storeUrl, '_blank');
    } else {
      console.log(`Viewing price comparison for ${name}`);
      navigate(`/compare/${id}`);
    }
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    const savedProducts = localStorage.getItem('savedProducts');
    let savedList = savedProducts ? JSON.parse(savedProducts) : [];
    
    if (isSaved) {
      // Remove from saved
      savedList = savedList.filter((p: any) => p.id !== id);
      setIsSaved(false);
      toast({
        title: "Removed from saved",
        description: `${name} removed from your saved items`,
      });
    } else {
      // Add to saved
      savedList.push(product);
      setIsSaved(true);
      toast({
        title: "Saved successfully",
        description: `${name} saved to your collection`,
      });
    }
    
    localStorage.setItem('savedProducts', JSON.stringify(savedList));
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/compare/${id}`;
    
    if (navigator.share) {
      navigator.share({
        title: name,
        text: `Check out this deal: ${name} for $${currentPrice}`,
        url: shareUrl,
      }).catch((error) => {
        // Fallback to clipboard if share fails
        navigator.clipboard.writeText(shareUrl).then(() => {
          toast({
            title: "Link copied!",
            description: "Product link has been copied to clipboard",
          });
        });
      });
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        toast({
          title: "Link copied!",
          description: "Product link has been copied to clipboard",
        });
      }).catch(() => {
        toast({
          title: "Share failed",
          description: "Unable to copy link to clipboard",
          variant: "destructive",
        });
      });
    }
  };

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden cursor-pointer"
      onClick={handleProductClick}
    >
      {isSponsored && (
        <Badge className="absolute top-2 left-2 z-10 bg-gradient-to-r from-yellow-400 to-orange-500">
          Sponsored
        </Badge>
      )}
      
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex space-x-1">
          <Button
            variant="ghost"
            size="sm"
            className="bg-white/80 hover:bg-white p-2"
            onClick={handleSave}
            title={isSaved ? "Remove from saved" : "Save item"}
          >
            <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current text-blue-600' : ''}`} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="bg-white/80 hover:bg-white p-2"
            onClick={handleShare}
            title="Share product"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-1 text-sm text-gray-600">
              {rating} ({reviewCount.toLocaleString()})
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${currentPrice.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
            {priceHistory === 'down' && (
              <TrendingDown className="h-4 w-4 text-green-500" />
            )}
            {priceHistory === 'up' && (
              <TrendingUp className="h-4 w-4 text-red-500" />
            )}
          </div>
        </div>

        {savings > 0 && (
          <div className="mb-3">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Save ${savings.toFixed(2)} ({savingsPercent}% off)
            </Badge>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 font-medium">{store}</span>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            onClick={handleViewDeal}
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            {storeUrl ? `Buy at ${store}` : 'Compare Prices'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
