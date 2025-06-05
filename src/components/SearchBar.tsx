
import React, { useState } from 'react';
import { Search, Mic, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchBar = ({ onSearch }: { onSearch: (query: string, type: 'text' | 'voice' | 'image') => void }) => {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleTextSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      console.log(`Searching for: ${query} via text`);
      onSearch(query, 'text');
    }
  };

  const handleVoiceSearch = () => {
    if (!isListening) {
      setIsListening(true);
      console.log('Starting voice search...');
      
      // Check if browser supports speech recognition
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        
        recognition.onresult = (event) => {
          let transcript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
          }
          
          // Update search bar in real-time
          setQuery(transcript);
          
          // If result is final, perform search
          if (event.results[event.resultIndex].isFinal) {
            console.log(`Voice search result: ${transcript}`);
            onSearch(transcript, 'voice');
            setIsListening(false);
          }
        };
        
        recognition.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
        };
        
        recognition.onend = () => {
          setIsListening(false);
        };
        
        recognition.start();
      } else {
        // Fallback for browsers that don't support speech recognition
        console.log('Speech recognition not supported, using fallback');
        setTimeout(() => {
          setIsListening(false);
          const fallbackQuery = 'wireless headphones';
          setQuery(fallbackQuery);
          onSearch(fallbackQuery, 'voice');
        }, 2000);
      }
    } else {
      setIsListening(false);
    }
  };

  const handleCameraClick = () => {
    const input = document.getElementById('camera-capture');
    if (input) {
      input.click();
    }
  };

  const handleCameraCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(`Camera capture with file: ${file.name}`);
      const searchQuery = `Image search: ${file.name}`;
      setQuery(searchQuery);
      onSearch(searchQuery, 'image');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleTextSearch} className="relative">
        <div className="relative flex items-center bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-300 transition-colors">
          <Search className="absolute left-4 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for products, brands, or categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-32 py-6 text-lg border-none focus:ring-0 rounded-2xl"
          />
          
          <div className="absolute right-2 flex items-center space-x-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleVoiceSearch}
              className={`p-2 rounded-xl ${isListening ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'}`}
              title="Voice Search"
            >
              <Mic className={`h-4 w-4 ${isListening ? 'animate-pulse' : ''}`} />
            </Button>
            
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleCameraClick}
              className="p-2 rounded-xl hover:bg-gray-100"
              title="Take Photo"
            >
              <Camera className="h-4 w-4" />
            </Button>
            
            <Button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl px-6">
              Search
            </Button>
          </div>
        </div>
      </form>
      
      {/* Hidden camera capture input */}
      <input
        id="camera-capture"
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCameraCapture}
        className="hidden"
      />
      
      {isListening && (
        <div className="mt-4 text-center text-blue-600 animate-pulse">
          🎤 Listening... Speak now
        </div>
      )}
    </div>
  );
};

export default SearchBar;
