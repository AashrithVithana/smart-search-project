
import React from 'react';
import { Zap, TrendingDown, Star, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Search",
      description: "Use text, voice, or image search to find exactly what you need"
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-green-600" />,
      title: "Price Comparison",
      description: "Compare prices across multiple platforms instantly"
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-600" />,
      title: "Review Analysis",
      description: "AI-powered analysis of customer reviews and ratings"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Deal Verification",
      description: "Verified deals and authentic discount information"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose SmartFind?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
