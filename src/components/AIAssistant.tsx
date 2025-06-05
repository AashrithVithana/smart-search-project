
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! 👋 I'm your AI shopping assistant. What product are you looking for today? I can help you find the best deals and compare prices across different stores.",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Product-specific responses with offers
    if (lowerMessage.includes('headphones') || lowerMessage.includes('airpods')) {
      return "Great choice! I found some amazing headphone deals: \n\n🎧 Sony WH-1000XM4 - Now $279.99 (was $349.99) - 20% off on Amazon\n🎧 AirPods Pro 2nd Gen - $199.99 (was $249.99) - 20% off at Apple Store\n\nBoth have excellent noise cancellation. Would you like me to compare features or find more options?";
    }
    
    if (lowerMessage.includes('phone') || lowerMessage.includes('iphone') || lowerMessage.includes('smartphone')) {
      return "Excellent! Here are today's best phone deals: \n\n📱 iPhone 15 Pro 128GB - $999.99 (was $1099.99) - 9% off at Best Buy\n📱 Samsung Galaxy S24 - $749.99 (was $849.99) - Available at Samsung Store\n\nBoth come with free shipping. Need help choosing between iOS and Android?";
    }
    
    if (lowerMessage.includes('laptop') || lowerMessage.includes('macbook') || lowerMessage.includes('computer')) {
      return "Perfect timing for laptop shopping! 💻\n\n💻 MacBook Air M2 13\" - $1099.99 (was $1199.99) - 8% off at Apple\n💻 Dell XPS 13 Plus - $1599.99 (was $1899.99) - 16% off at Dell\n\nBoth are excellent for productivity. What will you primarily use it for?";
    }
    
    if (lowerMessage.includes('shoes') || lowerMessage.includes('nike') || lowerMessage.includes('running')) {
      return "Great choice for footwear! 👟\n\n👟 Nike Air Max 270 - $89.97 (was $149.99) - 40% off at Nike\n👟 Adidas Ultraboost 22 - $119.99 (was $179.99) - 33% off\n\nBoth are highly rated for comfort. What's your preferred style - casual or athletic?";
    }
    
    if (lowerMessage.includes('watch') || lowerMessage.includes('smartwatch')) {
      return "Smart choice! ⌚ Here are the best smartwatch deals:\n\n⌚ Apple Watch Series 9 - $299.99 (was $399.99) - 25% off\n⌚ Samsung Galaxy Watch 6 - $329.99 (was $399.99) - 18% off\n\nBoth track fitness excellently. Are you looking for health monitoring or general smart features?";
    }
    
    // General responses
    if (lowerMessage.includes('price') || lowerMessage.includes('deal') || lowerMessage.includes('discount')) {
      return "I'm constantly monitoring prices across all major retailers! I can alert you when prices drop and find the best current deals. What specific product would you like me to track for you?";
    }
    
    if (lowerMessage.includes('compare') || lowerMessage.includes('vs') || lowerMessage.includes('difference')) {
      return "I'd be happy to compare products for you! I can analyze features, prices, reviews, and availability across different stores. Which products would you like me to compare?";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello there! 😊 I'm excited to help you find amazing deals today. What type of product are you shopping for? Electronics, clothing, home goods, or something else?";
    }
    
    // Default response
    return "I understand you're looking for that! Let me help you find the best deals available. Based on current market data, I can show you price comparisons, customer reviews, and exclusive offers. Could you tell me more about your specific requirements or budget range?";
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    // Generate AI response with a more realistic delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(currentInput),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl animate-scale-in z-50">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span>AI Shopping Assistant</span>
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col h-full p-0">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[350px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-2 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
              </div>
              {message.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex items-start space-x-2 justify-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t bg-white">
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about deals, compare products..."
              className="flex-1"
              disabled={isTyping}
            />
            <Button
              type="submit"
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600"
              disabled={!inputMessage.trim() || isTyping}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
