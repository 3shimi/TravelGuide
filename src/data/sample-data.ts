import { Restaurant, Itinerary, CommunityPost } from '@/types';

export const sampleRestaurants: Restaurant[] = [
  {
    id: 'din-tai-fung-xinyi',
    name: {
      zh: '鼎泰豐信義店',
      en: 'Din Tai Fung Xinyi',
      ja: 'ディンタイフォン信義店'
    },
    location: {
      address: '台北市信義區信義路五段150巷2號',
      coordinates: [25.0330, 121.5654],
      nearestMRT: 'Xinyi Anhe',
      walkingTime: 5
    },
    category: ['taiwanese', 'dim-sum', 'fine-dining'],
    priceRange: 3,
    ratings: {
      overall: 4.5,
      foreignerFriendly: 4.8,
      menuTranslation: 4.9
    },
    menu: [
      {
        id: 'xlb-pork',
        name: {
          zh: '小籠包',
          en: 'Pork Xiaolongbao',
          ja: '小籠包'
        },
        description: {
          zh: '經典豬肉小籠包，湯汁豐富',
          en: 'Classic pork soup dumplings with rich broth',
          ja: 'クラシックな豚肉小籠包、スープたっぷり'
        },
        price: 220,
        images: ['/images/xiaolongbao.jpg'],
        tags: ['signature', 'popular'],
        allergens: ['gluten'],
        spiceLevel: 0,
        culturalNotes: {
          en: 'Xiaolongbao are soup dumplings - be careful of the hot broth inside!',
          ja: '小籠包はスープ餃子です。中の熱いスープにご注意ください！'
        }
      }
    ],
    images: ['/images/dintaifung-exterior.jpg'],
    features: ['English Menu', 'WiFi', 'Air Conditioning', 'Reservations Recommended']
  },
  {
    id: 'shilin-night-market',
    name: {
      zh: '士林夜市',
      en: 'Shilin Night Market',
      ja: '士林夜市'
    },
    location: {
      address: '台北市士林區大東路、大南路',
      coordinates: [25.0881, 121.5240],
      nearestMRT: 'Shilin',
      walkingTime: 3
    },
    category: ['night-market', 'street-food', 'local'],
    priceRange: 1,
    ratings: {
      overall: 4.2,
      foreignerFriendly: 3.8,
      menuTranslation: 3.2
    },
    menu: [
      {
        id: 'stinky-tofu',
        name: {
          zh: '臭豆腐',
          en: 'Stinky Tofu',
          ja: '臭豆腐'
        },
        description: {
          zh: '發酵豆腐配泡菜',
          en: 'Fermented tofu with pickled vegetables',
          ja: '発酵豆腐とピクルス野菜'
        },
        price: 60,
        images: ['/images/stinky-tofu.jpg'],
        tags: ['local-favorite', 'adventurous'],
        allergens: ['soy'],
        spiceLevel: 1,
        culturalNotes: {
          en: 'A beloved Taiwanese street food with a strong aroma - an acquired taste!',
          ja: '強い香りの台湾の人気屋台料理 - 慣れが必要な味です！'
        }
      }
    ],
    images: ['/images/shilin-night-market.jpg'],
    features: ['Late Night', 'Cash Only', 'Street Food', 'Tourist Friendly']
  }
];

export const sampleItineraries: Itinerary[] = [
  {
    id: 'taipei-food-3day',
    title: 'Taipei 3-Day Food Explorer',
    description: 'A comprehensive culinary journey through Taipei&apos;s diverse food scene',
    duration: 3,
    tags: ['foodie', 'culture', 'local-experiences'],
    difficulty: 'easy',
    budget: 'mid-range',
    season: ['spring', 'summer', 'autumn', 'winter'],
    collaborators: [],
    author: {
      id: 'local-expert-1',
      name: 'Chef Wang',
      isLocalExpert: true
    },
    stats: {
      likes: 245,
      saves: 189,
      views: 1205,
      rating: 4.7
    },
    days: [
      {
        day: 1,
        activities: [
          {
            id: 'breakfast-soy-milk',
            type: 'restaurant',
            name: {
              zh: '阜杭豆漿',
              en: 'Fu Hang Dou Jiang'
            },
            location: {
              address: '台北市中正區忠孝東路一段108號2樓',
              coordinates: [25.0453, 121.5178]
            },
            timeSlot: {
              start: '07:30',
              duration: 60
            },
            estimatedCost: 100,
            priority: 'must-visit',
            tips: {
              en: 'Arrive early to avoid long queues. Try the signature salty soy milk!'
            }
          },
          {
            id: 'lunch-din-tai-fung',
            type: 'restaurant',
            name: {
              zh: '鼎泰豐',
              en: 'Din Tai Fung'
            },
            location: {
              address: '台北市信義區信義路五段150巷2號',
              coordinates: [25.0330, 121.5654]
            },
            timeSlot: {
              start: '12:00',
              duration: 90
            },
            estimatedCost: 800,
            priority: 'must-visit',
            bookingRequired: true
          }
        ],
        totalBudget: 900,
        walkingDistance: 2.5
      }
    ]
  }
];

export const sampleCommunityPosts: CommunityPost[] = [
  {
    id: 'hidden-gems-taipei',
    title: 'Best hidden gems in Taipei?',
    content: 'Looking for places that locals love but tourists don\'t know about. Any recommendations for authentic experiences?',
    author: {
      id: 'traveler123',
      name: 'Sarah Chen',
      avatar: '/avatars/sarah.jpg'
    },
    tags: ['taipei', 'hidden-gems', 'local-tips'],
    type: 'question',
    createdAt: new Date('2024-06-05T10:30:00'),
    updatedAt: new Date('2024-06-05T10:30:00'),
    likes: 23,
    replies: 12,
    views: 156
  },
  {
    id: 'vegetarian-guide',
    title: 'Complete Vegetarian Food Guide for Taipei',
    content: 'After living in Taipei for 2 years as a vegetarian, here\'s my comprehensive guide to the best plant-based options...',
    author: {
      id: 'veggielover',
      name: 'Alex Kim',
      avatar: '/avatars/alex.jpg'
    },
    tags: ['vegetarian', 'food', 'guide'],
    type: 'guide',
    createdAt: new Date('2024-06-04T15:45:00'),
    updatedAt: new Date('2024-06-04T16:20:00'),
    likes: 67,
    replies: 8,
    views: 234
  }
];