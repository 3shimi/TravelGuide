import { useTranslations, useLocale } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/navigation';
import { Link } from '@/i18n/routing';
import { taipeiShoppingFoodData } from '@/lib/itinerary-data';

export default function ItinerariesPage() {
  const t = useTranslations();
  const locale = useLocale() as 'en' | 'zh' | 'ja';
  const taipeiData = taipeiShoppingFoodData[locale];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t('itineraries.title')}
            </h1>
            <p className="text-gray-600">
              Discover curated travel experiences and create your own adventures
            </p>
          </div>
          <Button>{t('itineraries.createNew')}</Button>
        </div>

        {/* Template Itineraries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/itineraries/taipei-shopping-food">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg">{taipeiData.title}</CardTitle>
                    <CardDescription>{taipeiData.description}</CardDescription>
                  </div>
                  <Badge className="flex-shrink-0">3 {t('itineraries.days')}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {taipeiData.days.map((day, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      <strong>
                        {locale === 'ja' ? `${index + 1}日目:` : locale === 'zh' ? `第${index + 1}天:` : `Day ${index + 1}:`}
                      </strong> {day.title}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-2">
                    <Badge variant="outline">{locale === 'ja' ? 'ショッピング' : locale === 'zh' ? '購物' : 'Shopping'}</Badge>
                    <Badge variant="outline">{locale === 'ja' ? 'グルメ' : locale === 'zh' ? '美食' : 'Food'}</Badge>
                    <Badge variant="outline">{t('itineraries.template')}</Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    {t('itineraries.customize')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg">Cultural Heritage Discovery</CardTitle>
                  <CardDescription>Explore Taiwan&apos;s rich cultural heritage and traditions</CardDescription>
                </div>
                <Badge className="flex-shrink-0">2 {t('itineraries.days')}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <strong>Day 1:</strong> Longshan Temple → National Palace Museum → Shilin Official Residence
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Day 2:</strong> CKS Memorial Hall → Huashan 1914 → Dihua Street
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-2">
                    <Badge variant="outline">{locale === 'ja' ? '文化' : locale === 'zh' ? '文化' : 'Culture'}</Badge>
                    <Badge variant="outline">{locale === 'ja' ? '歴史' : locale === 'zh' ? '歷史' : 'History'}</Badge>
                    <Badge variant="outline">{t('itineraries.template')}</Badge>
                  </div>
                  <Button variant="outline" size="sm">{t('itineraries.customize')}</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg">Taipei Food Explorer</CardTitle>
                  <CardDescription>A culinary journey through Taipei&apos;s best eats</CardDescription>
                </div>
                <Badge className="flex-shrink-0">3 {t('itineraries.days')}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <strong>Day 1:</strong> Traditional breakfast → Night market
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Day 2:</strong> Local favorites → Fine dining
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Day 3:</strong> Street food tour → Dessert spots
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-2">
                    <Badge variant="outline">{locale === 'ja' ? 'グルメ' : locale === 'zh' ? '美食' : 'Food'}</Badge>
                    <Badge variant="outline">{t('itineraries.template')}</Badge>
                  </div>
                  <Button variant="outline" size="sm">{t('itineraries.customize')}</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg">Instagram Worthy Spots</CardTitle>
                  <CardDescription>Perfect locations for memorable photos</CardDescription>
                </div>
                <Badge className="flex-shrink-0">1 {t('itineraries.days')}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <strong>Morning:</strong> Taipei 101 Observatory → Elephant Mountain
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Afternoon:</strong> Rainbow Village → Aesthetic cafes
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-2">
                    <Badge variant="outline">{locale === 'ja' ? '写真撮影' : locale === 'zh' ? '攝影' : 'Photography'}</Badge>
                    <Badge variant="outline">{t('itineraries.template')}</Badge>
                  </div>
                  <Button variant="outline" size="sm">{t('itineraries.customize')}</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}