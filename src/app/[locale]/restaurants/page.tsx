import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/navigation';

export default function RestaurantsPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('restaurants.title')}
          </h1>
          <p className="text-gray-600">
            Discover authentic Taiwanese cuisine with translated menus and cultural insights
          </p>
        </div>

        {/* Featured Restaurants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Din Tai Fung (鼎泰豐)</CardTitle>
                  <CardDescription>Famous for xiaolongbao (soup dumplings)</CardDescription>
                </div>
                <Badge>$$$</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{t('restaurants.foreignerFriendly')}</span>
                  <Badge variant="secondary">Excellent</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{t('restaurants.nearestMRT')}</span>
                  <span>Xinyi Anhe (5 min)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{t('restaurants.menuTranslation')}</span>
                  <Badge variant="outline">Available</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Shilin Night Market (士林夜市)</CardTitle>
                  <CardDescription>Taiwan&apos;s most famous night market</CardDescription>
                </div>
                <Badge>$</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{t('restaurants.foreignerFriendly')}</span>
                  <Badge variant="secondary">Good</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{t('restaurants.nearestMRT')}</span>
                  <span>Shilin (3 min)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{t('restaurants.menuTranslation')}</span>
                  <Badge variant="outline">Partial</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Raw Taiwan (態芮)</CardTitle>
                  <CardDescription>Modern Taiwanese fine dining</CardDescription>
                </div>
                <Badge>$$$$</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{t('restaurants.foreignerFriendly')}</span>
                  <Badge variant="secondary">Excellent</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{t('restaurants.nearestMRT')}</span>
                  <span>Zhongshan (8 min)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{t('restaurants.menuTranslation')}</span>
                  <Badge variant="outline">Available</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}