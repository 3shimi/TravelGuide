import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/navigation';

export default function CommunityPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('navigation.community')}
          </h1>
          <p className="text-gray-600">
            Connect with fellow travelers and locals to share experiences and get insider tips
          </p>
        </div>

        {/* Community Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Discussions */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Recent Discussions</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Best hidden gems in Taipei?</CardTitle>
                  <CardDescription>Looking for places that locals love but tourists don&apos;t know about</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Badge variant="outline">Question</Badge>
                      <Badge variant="outline">Taipei</Badge>
                    </div>
                    <span className="text-sm text-gray-500">12 replies • 2 hours ago</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Vegetarian food recommendations</CardTitle>
                  <CardDescription>Complete guide to vegetarian and vegan options in Taipei</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Badge variant="outline">Guide</Badge>
                      <Badge variant="outline">Food</Badge>
                      <Badge variant="outline">Vegetarian</Badge>
                    </div>
                    <span className="text-sm text-gray-500">8 replies • 5 hours ago</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Budget travel tips for Taiwan</CardTitle>
                  <CardDescription>How to explore Taiwan on a backpacker budget</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Badge variant="outline">Tips</Badge>
                      <Badge variant="outline">Budget</Badge>
                    </div>
                    <span className="text-sm text-gray-500">15 replies • 1 day ago</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="secondary">#TaipeiFood</Badge>
                    <Badge variant="secondary">#NightMarkets</Badge>
                    <Badge variant="secondary">#Transportation</Badge>
                    <Badge variant="secondary">#BudgetTravel</Badge>
                    <Badge variant="secondary">#FirstTimeVisit</Badge>
                    <Badge variant="secondary">#LocalTips</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Active Members</span>
                      <span className="font-medium">2,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Posts This Week</span>
                      <span className="font-medium">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Travel Tips Shared</span>
                      <span className="font-medium">1,203</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}