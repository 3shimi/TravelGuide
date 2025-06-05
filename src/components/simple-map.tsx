'use client';

import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from 'next-intl';

interface SimpleMapProps {
  title: string;
  address: string;
  googleMapsUrl?: string;
  className?: string;
}

export function SimpleMap({ title, address, googleMapsUrl, className = "" }: SimpleMapProps) {
  const locale = useLocale();
  const encodedAddress = encodeURIComponent(address);
  const encodedTitle = encodeURIComponent(title);
  
  // 使用更可靠的Google Maps搜索URL格式
  const defaultMapsUrl = `https://www.google.com/maps/search/${encodedTitle}+${encodedAddress}`;
  const mapsUrl = googleMapsUrl || defaultMapsUrl;

  const getButtonText = () => {
    switch (locale) {
      case 'ja':
        return 'Google Mapsで見る';
      case 'zh':
        return '在 Google Maps 中查看';
      default:
        return 'View in Google Maps';
    }
  };

  return (
    <div className={`bg-gray-100 rounded-lg p-4 border ${className}`}>
      <div className="flex items-start gap-3">
        <div className="bg-blue-100 p-2 rounded-full">
          <MapPin className="h-4 w-4 text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
          <p className="text-sm text-gray-600 mb-3">{address}</p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => window.open(mapsUrl, '_blank')}
            className="text-xs"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            {getButtonText()}
          </Button>
        </div>
      </div>
    </div>
  );
}