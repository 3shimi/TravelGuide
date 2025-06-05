import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/routing';
import { Navigation } from '@/components/navigation';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {t('home.title')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('home.subtitle')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/restaurants">
              <Button size="lg">{t('navigation.restaurants')}</Button>
            </Link>
            <Link href="/itineraries">
              <Button variant="outline" size="lg">{t('navigation.itineraries')}</Button>
            </Link>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{t('home.featuredItineraries')}</CardTitle>
              <CardDescription>Discover curated travel experiences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Taipei 3-Day Food Tour</span>
                  <Badge>3 {t('itineraries.days')}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Cultural Heritage Walk</span>
                  <Badge>1 {t('itineraries.days')}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Night Market Adventure</span>
                  <Badge>2 {t('itineraries.days')}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('home.popularRestaurants')}</CardTitle>
              <CardDescription>Top-rated dining experiences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Din Tai Fung</span>
                  <Badge variant="secondary">$$$</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Shilin Night Market</span>
                  <Badge variant="secondary">$</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Raw Taiwan</span>
                  <Badge variant="secondary">$$$$</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('home.communityHighlights')}</CardTitle>
              <CardDescription>Recent traveler insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm">
                  <p className="font-medium">Best hidden gems in Taipei</p>
                  <p className="text-gray-500">Shared by @traveler123</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Vegetarian food guide</p>
                  <p className="text-gray-500">Shared by @veggielover</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Budget travel tips</p>
                  <p className="text-gray-500">Shared by @backpacker</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}