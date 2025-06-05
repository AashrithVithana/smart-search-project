
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Star, TrendingDown, CheckCircle, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const ProductComparison = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock product database - in a real app this would come from an API
  const productDatabase = {
    '1': {
      id: '1',
      name: 'Sony WH-1000XM4 Wireless Noise Canceling Headphones',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop&crop=center',
      gallery: [
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&h=400&fit=crop&crop=center'
      ],
      rating: 4.8,
      reviewCount: 15420,
      description: 'Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.',
      features: [
        'Industry-leading noise canceling',
        '30-hour battery life',
        'Touch sensor controls',
        'Speak-to-chat technology',
        'Quick charge (10 min = 5 hours)',
        'Premium comfort and sound'
      ],
      prices: [
        {
          store: 'Amazon',
          logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center',
          price: 279.99,
          originalPrice: 349.99,
          shipping: 'Free shipping',
          availability: 'In stock',
          url: 'https://www.amazon.com/Sony-WH-1000XM4-Canceling-Headphones-phone-call/dp/B0863TXGM3',
          isBestDeal: true,
          deliveryTime: '1-2 days'
        },
        {
          store: 'Best Buy',
          logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
          price: 299.99,
          originalPrice: 349.99,
          shipping: 'Free shipping',
          availability: 'In stock',
          url: 'https://www.bestbuy.com/site/sony-wh-1000xm4-wireless-noise-cancelling-over-the-ear-headphones-black/6408356.p',
          isBestDeal: false,
          deliveryTime: '2-3 days'
        }
      ]
    },
    '2': {
      id: '2',
      name: 'Apple iPhone 15 Pro 128GB - Natural Titanium',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop&crop=center',
      gallery: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&h=400&fit=crop&crop=center'
      ],
      rating: 4.6,
      reviewCount: 8932,
      description: 'iPhone 15 Pro. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action Button, and the most powerful iPhone camera system ever.',
      features: [
        'A17 Pro chip with 6-core GPU',
        'Titanium design',
        'Pro camera system',
        'Action Button',
        'USB-C connectivity',
        '128GB storage'
      ],
      prices: [
        {
          store: 'Apple',
          logo: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=100&h=100&fit=crop&crop=center',
          price: 999.99,
          originalPrice: 1099.99,
          shipping: 'Free shipping',
          availability: 'In stock',
          url: 'https://www.apple.com/iphone-15-pro/',
          isBestDeal: true,
          deliveryTime: '1-2 days'
        },
        {
          store: 'Best Buy',
          logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
          price: 1049.99,
          originalPrice: 1099.99,
          shipping: 'Free shipping',
          availability: 'In stock',
          url: 'https://www.bestbuy.com/site/apple-iphone-15-pro-128gb-natural-titanium-verizon/6525421.p',
          isBestDeal: false,
          deliveryTime: '2-3 days'
        }
      ]
    },
    '3': {
      id: '3',
      name: 'Nike Air Max 270 Running Shoes - Black/White',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop&crop=center',
      gallery: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&h=400&fit=crop&crop=center'
      ],
      rating: 4.4,
      reviewCount: 12543,
      description: 'Nike Air Max 270 delivers visible cushioning under every step. The design draws inspiration from Air Max icons, showcasing Nike largest heel Air unit yet.',
      features: [
        'Max Air unit for cushioning',
        'Engineered mesh upper',
        'Rubber outsole',
        'Heel pull tab',
        'Lightweight design',
        'Available in multiple sizes'
      ],
      prices: [
        {
          store: 'Nike',
          logo: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=100&h=100&fit=crop&crop=center',
          price: 89.97,
          originalPrice: 149.99,
          shipping: 'Free shipping',
          availability: 'In stock',
          url: 'https://www.nike.com/t/air-max-270-mens-shoes-KkLcGR',
          isBestDeal: true,
          deliveryTime: '3-5 days'
        },
        {
          store: 'Foot Locker',
          logo: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=100&h=100&fit=crop&crop=center',
          price: 94.99,
          originalPrice: 149.99,
          shipping: 'Free shipping',
          availability: 'Limited stock',
          url: 'https://www.footlocker.com/category/mens/shoes/nike.html',
          isBestDeal: false,
          deliveryTime: '5-7 days'
        }
      ]
    },
    '4': {
      id: '4',
      name: 'Samsung Galaxy S24 Ultra 256GB - Titanium Black',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500&fit=crop&crop=center',
      gallery: [
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=400&fit=crop&crop=center'
      ],
      rating: 4.7,
      reviewCount: 6234,
      description: 'The most powerful Galaxy smartphone yet with S Pen built-in, AI-powered photography, and a stunning 6.8-inch Dynamic AMOLED display.',
      features: [
        'S Pen built-in',
        '200MP main camera',
        '6.8" Dynamic AMOLED display',
        'AI-powered features',
        '5000mAh battery',
        '256GB storage'
      ],
      prices: [
        {
          store: 'Samsung',
          logo: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=100&h=100&fit=crop&crop=center',
          price: 1199.99,
          originalPrice: 1299.99,
          shipping: 'Free shipping',
          availability: 'In stock',
          url: 'https://www.samsung.com/us/smartphones/galaxy-s24-ultra/',
          isBestDeal: true,
          deliveryTime: '1-2 days'
        }
      ]
    }
  };

  // Get the product or show error
  const product = productDatabase[productId as keyof typeof productDatabase];

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-4">The product you're looking for doesn't exist or may have been removed.</p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleStoreClick = (storeUrl: string, storeName: string) => {
    console.log(`Redirecting to ${storeName}`);
    window.open(storeUrl, '_blank');
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this great deal on ${product.name}`,
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

  const handleSave = () => {
    const savedProducts = localStorage.getItem('savedProducts');
    let savedList = savedProducts ? JSON.parse(savedProducts) : [];
    
    const isAlreadySaved = savedList.some((p: any) => p.id === product.id);
    
    if (isAlreadySaved) {
      savedList = savedList.filter((p: any) => p.id !== product.id);
      toast({
        title: "Removed from saved",
        description: `${product.name} removed from your saved items`,
      });
    } else {
      const productToSave = {
        id: product.id,
        name: product.name,
        image: product.image,
        currentPrice: product.prices[0]?.price || 0,
        originalPrice: product.prices[0]?.originalPrice,
        rating: product.rating,
        reviewCount: product.reviewCount,
        store: product.prices[0]?.store || 'Multiple stores',
        priceHistory: 'stable' as const,
        storeUrl: product.prices[0]?.url
      };
      savedList.push(productToSave);
      toast({
        title: "Saved successfully",
        description: `${product.name} saved to your collection`,
      });
    }
    
    localStorage.setItem('savedProducts', JSON.stringify(savedList));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Results
            </Button>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleSave}>
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {product.gallery.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-lg text-gray-600">
                      {product.rating} ({product.reviewCount.toLocaleString()} reviews)
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Key Features:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Price Comparison Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Price Comparison
              </h2>
              <Badge variant="secondary" className="text-sm">
                {product.prices.length} stores compared
              </Badge>
            </div>
            
            <div className="grid gap-4">
              {product.prices.map((priceInfo, index) => (
                <Card key={index} className={`relative transition-all hover:shadow-lg ${priceInfo.isBestDeal ? 'ring-2 ring-green-500 shadow-lg' : ''}`}>
                  {priceInfo.isBestDeal && (
                    <Badge className="absolute -top-2 left-4 bg-green-500 z-10">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Best Deal
                    </Badge>
                  )}
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                          <img
                            src={priceInfo.logo}
                            alt={`${priceInfo.store} logo`}
                            className="w-12 h-12 object-cover rounded"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl">{priceInfo.store}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className={`font-medium ${priceInfo.availability === 'In stock' ? 'text-green-600' : 'text-orange-600'}`}>
                              {priceInfo.availability}
                            </span>
                            <span>{priceInfo.shipping}</span>
                            <span>Delivery: {priceInfo.deliveryTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right space-y-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-3xl font-bold text-gray-900">
                            ${priceInfo.price.toFixed(2)}
                          </span>
                          <span className="text-lg text-gray-500 line-through">
                            ${priceInfo.originalPrice.toFixed(2)}
                          </span>
                          <TrendingDown className="h-5 w-5 text-green-500" />
                        </div>
                        
                        <div className="text-sm text-green-600 font-medium">
                          Save ${(priceInfo.originalPrice - priceInfo.price).toFixed(2)} 
                          ({Math.round(((priceInfo.originalPrice - priceInfo.price) / priceInfo.originalPrice) * 100)}% off)
                        </div>
                        
                        <Button 
                          onClick={() => handleStoreClick(priceInfo.url, priceInfo.store)}
                          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Buy at {priceInfo.store}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;
