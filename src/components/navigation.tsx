'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link, usePathname } from '@/i18n/routing';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export function Navigation() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'zh', label: '中文', flag: '🇹🇼' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  const switchLanguage = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}/, '');
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    window.location.href = newPath;
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              {t('home.title')}
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/restaurants">
              <Button variant={isActive('/restaurants') ? 'default' : 'ghost'}>
                {t('navigation.restaurants')}
              </Button>
            </Link>
            <Link href="/itineraries">
              <Button variant={isActive('/itineraries') ? 'default' : 'ghost'}>
                {t('navigation.itineraries')}
              </Button>
            </Link>
            <Link href="/community">
              <Button variant={isActive('/community') ? 'default' : 'ghost'}>
                {t('navigation.community')}
              </Button>
            </Link>
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{currentLanguage?.flag}</span>
                  <span className="hidden md:inline">{currentLanguage?.label}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => switchLanguage(language.code)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span>{language.flag}</span>
                    <span>{language.label}</span>
                    {locale === language.code && (
                      <span className="ml-auto text-blue-600">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}