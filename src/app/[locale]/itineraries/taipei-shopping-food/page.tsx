import { useLocale, useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/navigation';
import { Link } from '@/i18n/routing';
import { ArrowLeft, Clock, MapPin, DollarSign, Camera } from 'lucide-react';
import { taipeiShoppingFoodData } from '@/lib/itinerary-data';
import { SimpleMap } from '@/components/simple-map';
import Image from 'next/image';

export default function TaipeiShoppingFoodPage() {
  const locale = useLocale() as 'en' | 'zh' | 'ja';
  const t = useTranslations();
  const data = taipeiShoppingFoodData[locale];

  // 地點和圖片映射
  const locationImages = {
    'taipei-101': '/images/taipei-family-trip/taipei-101-observatory.webp',
    'shilin-night-market': '/images/taipei-family-trip/shilin-night-market.jpg',
    'huashan-1914': '/images/taipei-family-trip/huashan-1914-creative-park.webp',
    'songshan-park': '/images/taipei-family-trip/songshan-cultural-park.webp'
  };

  const locationInfo = {
    'taipei-101': {
      address: '台北市信義區信義路五段7號',
      googleMapsUrl: 'https://www.google.com/maps/place/Taipei+101/@25.0339635,121.5623062,17z/data=!3m1!4b1!4m6!3m5!1s0x3442abb6da9c9e1f:0x1206bcf082a81b48!8m2!3d25.0339635!4d121.5648811!16zL20vMDZ3eXlz'
    },
    'shilin-night-market': {
      address: '台北市士林區大東路、大南路',
      googleMapsUrl: 'https://www.google.com/maps/place/Shilin+Night+Market/@25.0881062,121.521505,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a96f9512d70d:0x3a1c4eed9b28a58a!8m2!3d25.0881062!4d121.5240799!16zL20vMDYzcXJt'
    },
    'din-tai-fung': {
      address: '台北市信義區信義路五段150巷2號',
      googleMapsUrl: 'https://www.google.com/maps/place/Din+Tai+Fung+Xinyi+Store/@25.0330282,121.5628516,17z/data=!3m1!4b1!4m6!3m5!1s0x3442abb4b1b2b5a5:0x77a5b6c8e8d7e5a7!8m2!3d25.0330282!4d121.5654265!16s%2Fg%2F1tf6_h5z'
    },
    'ximending': {
      address: '台北市萬華區西門町',
      googleMapsUrl: 'https://www.google.com/maps/place/Ximending/@25.0421018,121.5058133,16z/data=!3m1!4b1!4m6!3m5!1s0x3442a90c14587b8f:0x8dda8e25b4e1d4a!8m2!3d25.0421018!4d121.5083882!16zL20vMDl3dzc5'
    },
    'gloria-outlets': {
      address: '桃園市中壢區春德路189號',
      googleMapsUrl: 'https://www.google.com/maps/place/Gloria+Outlets+Taoyuan/@25.0779865,121.2309493,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a5b6c8b8e2e5:0x7a8b5e6c9d8e7f5a!8m2!3d25.0779865!4d121.2335242!16s%2Fg%2F11cs_7_mjr'
    },
    'taoyuan-airport': {
      address: '桃園國際機場',
      googleMapsUrl: 'https://www.google.com/maps/place/Taiwan+Taoyuan+International+Airport/@25.0773571,121.2278816,15z/data=!3m1!4b1!4m6!3m5!1s0x3442a57c1f4e1b85:0x8a8b9e2e3f4a5d6e!8m2!3d25.0773571!4d121.2365884!16zL20vMDJjdzU1'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/itineraries" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4" />
          {locale === 'ja' ? '旅程リストに戻る' : locale === 'zh' ? '返回行程列表' : 'Back to Itineraries'}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">{data.title}</h1>
            <Badge className="text-lg px-3 py-1">3 {t('itineraries.days')}</Badge>
          </div>
          <p className="text-xl text-gray-600 mb-6">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>3 {t('itineraries.days')}, 2 {locale === 'ja' ? '泊' : locale === 'zh' ? '夜' : 'nights'}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{locale === 'ja' ? '台北、台湾' : locale === 'zh' ? '台北，台灣' : 'Taipei, Taiwan'}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <span>{locale === 'ja' ? '中級予算' : locale === 'zh' ? '中等預算' : 'Mid-range budget'}</span>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Badge variant="secondary">{locale === 'ja' ? 'ショッピング' : locale === 'zh' ? '購物' : 'Shopping'}</Badge>
            <Badge variant="secondary">{locale === 'ja' ? 'グルメ' : locale === 'zh' ? '美食' : 'Food'}</Badge>
            <Badge variant="secondary">{locale === 'ja' ? '空港送迎' : locale === 'zh' ? '機場接送' : 'Airport Transfer'}</Badge>
          </div>
        </div>

        {/* Hero Images */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="md:col-span-2">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={locationImages['taipei-101']}
                  alt="台北101觀景台"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Camera className="h-4 w-4" />
                    <span className="text-sm">台北101觀景台</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-28 md:h-36 rounded-lg overflow-hidden">
                <Image
                  src={locationImages['shilin-night-market']}
                  alt="士林夜市"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  士林夜市
                </div>
              </div>
              <div className="relative h-28 md:h-36 rounded-lg overflow-hidden">
                <Image
                  src={locationImages['huashan-1914']}
                  alt="華山1914文創園區"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  華山1914文創園區
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Itinerary Days */}
        <div className="space-y-8">
          {data.days.map((day, dayIndex) => {
            const colorOptions = [
              ['bg-blue-50', 'bg-purple-50', 'bg-green-50', 'bg-yellow-50', 'bg-orange-50', 'bg-red-50', 'bg-indigo-50', 'bg-gray-50'],
              ['bg-purple-50', 'bg-green-50', 'bg-red-50', 'bg-blue-50', 'bg-yellow-50', 'bg-indigo-50', 'bg-orange-50', 'bg-gray-50'],
              ['bg-yellow-50', 'bg-blue-50', 'bg-purple-50', 'bg-green-50', 'bg-orange-50', 'bg-red-50', 'bg-indigo-50', 'bg-gray-50']
            ];

            // 為特定活動定義圖片和地圖信息
            const getActivityExtras = (activity: { title: string }, dayIndex: number, activityIndex: number) => {
              const activityKey = activity.title.toLowerCase();
              let image = null;
              let mapInfo = null;

              // 第一天機場相關
              if (dayIndex === 0 && activityIndex === 0) {
                mapInfo = locationInfo['taoyuan-airport'];
              }
              
              // 第二天台北101和信義區
              if (dayIndex === 1 && activityKey.includes('信義') || activityKey.includes('台北101') || activityKey.includes('xinyi')) {
                image = locationImages['taipei-101'];
                mapInfo = locationInfo['taipei-101'];
              }
              
              // 鼎泰豐
              if (activityKey.includes('鼎泰豐') || activityKey.includes('din tai fung')) {
                mapInfo = locationInfo['din-tai-fung'];
              }
              
              // 西門町
              if (activityKey.includes('西門町') || activityKey.includes('ximending')) {
                mapInfo = locationInfo['ximending'];
              }
              
              // 夜市
              if (activityKey.includes('夜市') || activityKey.includes('night market')) {
                image = locationImages['shilin-night-market'];
                mapInfo = locationInfo['shilin-night-market'];
              }
              
              // 第三天華泰名品城
              if (activityKey.includes('華泰名品城') || activityKey.includes('gloria outlets')) {
                mapInfo = locationInfo['gloria-outlets'];
              }

              return { image, mapInfo };
            };
            
            return (
              <Card key={dayIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {locale === 'ja' ? `${dayIndex + 1}日目` : locale === 'zh' ? `第${dayIndex + 1}天` : `Day ${dayIndex + 1}`}
                    </Badge>
                    <span>{day.date}: {day.title}</span>
                  </CardTitle>
                  <CardDescription>{day.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {day.activities.map((activity, activityIndex) => {
                      const { image, mapInfo } = getActivityExtras(activity, dayIndex, activityIndex);
                      
                      return (
                        <div key={activityIndex} className={`p-4 ${colorOptions[dayIndex][activityIndex % colorOptions[dayIndex].length]} rounded-lg`}>
                          <div className="flex gap-4">
                            <Badge variant="outline" className="min-w-fit self-start">{activity.time}</Badge>
                            <div className="flex-1">
                              <h4 className="font-medium mb-2">{activity.title}</h4>
                              <p className="text-gray-600 text-sm mb-3">{activity.description}</p>
                              
                              {/* 圖片展示 */}
                              {image && (
                                <div className="mb-3">
                                  <div className="relative h-32 w-full max-w-md rounded-lg overflow-hidden">
                                    <Image
                                      src={image}
                                      alt={activity.title}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                </div>
                              )}
                              
                              {/* 地圖信息 */}
                              {mapInfo && (
                                <SimpleMap
                                  title={activity.title}
                                  address={mapInfo.address}
                                  googleMapsUrl={mapInfo.googleMapsUrl}
                                  className="mt-3"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <Button size="lg" className="flex-1">
            {locale === 'ja' ? 'この旅程をカスタマイズ' : locale === 'zh' ? '客製化此行程' : 'Customize This Itinerary'}
          </Button>
          <Button variant="outline" size="lg">
            {locale === 'ja' ? '旅程を保存' : locale === 'zh' ? '儲存行程' : 'Save Itinerary'}
          </Button>
          <Button variant="outline" size="lg">
            {locale === 'ja' ? '共有' : locale === 'zh' ? '分享' : 'Share'}
          </Button>
        </div>
      </div>
    </div>
  );
}