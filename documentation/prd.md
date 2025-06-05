# 外國人友善旅遊指南平台 產品需求文件 (PRD)

## 1. 產品願景與痛點分析

### 核心問題
- 外國遊客在台灣餐廳經常面臨語言障礙，無法理解菜單內容
- 現有翻譯工具不夠準確，缺乏在地文化脈絡
- Google Maps 評論過於簡化，缺乏針對外國人的實用資訊
- 缺乏一個整合性平台提供文化友善的旅遊資訊

### 產品願景
建立一個專為外國人設計的台灣旅遊指南平台，提供準確的菜單翻譯、文化解釋，以及由社群驅動的實用旅遊資訊。

## 2. 核心功能模組

### 2.1 餐廳菜單翻譯中心
**主要功能：**
- 餐廳菜單的專業翻譯（中文 → 英文/日文/韓文等）
- 菜品照片與詳細描述
- 食材過敏資訊標示
- 價格區間與推薦指數
- 素食/清真等飲食偏好標籤

**特色：**
- 不只翻譯，還有文化解釋（例如：什麼是「滷肉飯」）
- 辣度、甜度等口味指標
- 點餐建議（適合幾人份、搭配建議）

### 2.2 地點資訊與導航整合
**主要功能：**
- 與 Google Maps 整合但提供更豐富的資訊
- 詳細的交通指南（如何從地鐵站步行到達）
- 營業時間與即時資訊
- 周邊設施資訊（ATM、廁所、WiFi）

### 2.3 社群交流平台
**主要功能：**
- 外國遊客經驗分享
- 問答系統（可向其他外國遊客或在地人提問）
- 主題討論區（購物、美食、交通、文化等）
- 旅遊夥伴配對功能

### 2.4 智能行程規劃與推薦
**主要功能：**
- **個人化行程生成器**
  - 根據停留時間、興趣、預算自動規劃
  - 考慮交通時間與地理位置的最佳路線
  - 即時調整建議（天氣、人潮、營業時間）
  
- **主題式行程模板**
  - 美食之旅（夜市 → 米其林 → 在地小吃）
  - 文化探索（博物館 → 寺廟 → 傳統市場）
  - 購物天堂（百貨 → 商圈 → 特色店家）
  - 網美打卡（景點 → 咖啡廳 → 拍照秘境）

- **協作規劃功能**
  - 多人共同編輯行程
  - 投票決定景點與餐廳
  - 分工安排與提醒功能
  - 即時同步與通知

- **在地人推薦系統**
  - 連結在地達人提供客製化建議
  - 隱藏版景點與私房美食
  - 季節限定活動推薦
  - 避開觀光陷阱的實用建議

**特色差異化：**
- **比一般旅遊 App 更在地**：深度結合台灣文化與習慣
- **比 Google Trips 更專業**：針對外國人的特殊需求設計
- **比旅行社更彈性**：可隨時調整，不被固定行程綁住

### 2.5 文化指南與實用資訊
**主要功能：**
- 台灣文化小知識與禁忌提醒
- 實用片語學習（點餐、問路、購物）
- 緊急資訊與求助管道
- 購物退稅指南
- 交通卡使用教學

## 3. 技術架構

### 3.1 現有技術棧
- **框架：** Next.js 14 with App Router
- **語言：** TypeScript
- **樣式：** Tailwind CSS
- **UI 組件庫：** shadcn/ui (強烈建議)
- **國際化：** next-intl
- **部署：** Vercel

### 3.2 新增技術需求
- **資料庫：** Supabase 或 PlanetScale (MySQL)
- **圖片儲存：** Cloudinary 或 AWS S3
- **地圖整合：** Google Maps API
- **搜尋功能：** Algolia 或 Elasticsearch
- **使用者認證：** NextAuth.js
- **即時通訊：** Socket.io 或 Supabase Realtime

## 4. 資料結構設計

### 4.1 餐廳資料模型
```typescript
interface Restaurant {
  id: string;
  name: {
    zh: string;
    en: string;
    ja?: string;
  };
  location: {
    address: string;
    coordinates: [number, number];
    nearestMRT?: string;
    walkingTime?: number;
  };
  category: string[];
  priceRange: 1 | 2 | 3 | 4; // $ to $$$$
  ratings: {
    overall: number;
    foreignerFriendly: number;
    menuTranslation: number;
  };
  menu: MenuItem[];
  images: string[];
  features: string[]; // ['WiFi', 'English Menu', 'Vegetarian Options']
}
```

### 4.2 菜單項目模型
```typescript
interface MenuItem {
  id: string;
  name: {
    zh: string;
    en: string;
    ja?: string;
  };
  description: {
    zh: string;
    en: string;
    ja?: string;
  };
  price: number;
  images: string[];
  tags: string[]; // ['spicy', 'vegetarian', 'popular']
  allergens: string[];
  spiceLevel: 0 | 1 | 2 | 3 | 4;
  culturalNotes?: {
    en: string;
    ja?: string;
  };
}
```

### 4.3 行程規劃模型
```typescript
interface Itinerary {
  id: string;
  title: string;
  description?: string;
  duration: number; // 天數
  tags: string[]; // ['foodie', 'culture', 'shopping', 'photography']
  difficulty: 'easy' | 'moderate' | 'challenging';
  budget: 'budget' | 'mid-range' | 'luxury';
  season: string[]; // ['spring', 'summer', 'autumn', 'winter']
  collaborators: string[]; // user IDs
  days: ItineraryDay[];
  author: {
    id: string;
    name: string;
    isLocalExpert: boolean;
  };
  stats: {
    likes: number;
    saves: number;
    views: number;
    rating: number;
  };
}

interface ItineraryDay {
  day: number;
  date?: string;
  activities: Activity[];
  totalBudget?: number;
  walkingDistance?: number; // km
  notes?: string;
}

interface Activity {
  id: string;
  type: 'restaurant' | 'attraction' | 'shopping' | 'transport' | 'accommodation';
  name: {
    zh: string;
    en: string;
  };
  location: {
    address: string;
    coordinates: [number, number];
  };
  timeSlot: {
    start: string; // HH:mm
    end?: string;
    duration?: number; // minutes
  };
  estimatedCost?: number;
  priority: 'must-visit' | 'recommended' | 'optional';
  tips?: {
    en: string;
    zh?: string;
  };
  bookingRequired?: boolean;
  relatedPlaces?: string[]; // nearby attractions/restaurants
}
```

### 4.4 使用者偏好模型
```typescript
interface UserPreferences {
  userId: string;
  interests: string[]; // ['food', 'culture', 'nature', 'shopping', 'nightlife']
  dietaryRestrictions: string[]; // ['vegetarian', 'halal', 'gluten-free']
  budgetRange: 'budget' | 'mid-range' | 'luxury';
  mobilityNeeds?: string[]; // ['wheelchair-accessible', 'elderly-friendly']
  language: string;
  travelStyle: 'independent' | 'guided' | 'social';
  pace: 'relaxed' | 'moderate' | 'packed';
}
```

## 5. 使用者體驗設計

### 5.1 主要使用流程

#### 流程 1：探索與搜尋
1. **搜尋地點或餐廳**
   - 可依地區、菜系、價格、特色篩選
   - 顯示距離、評分、外國人友善程度

2. **查看詳細資訊**
   - 翻譯後的完整菜單
   - 使用者評論與照片
   - 交通指南與實用資訊

#### 流程 2：行程規劃
1. **設定旅行偏好**
   - 停留時間、預算、興趣標籤
   - 同行人數與特殊需求

2. **獲得智能推薦**
   - AI 生成初步行程建議
   - 可選擇預設主題模板
   - 瀏覽在地人推薦路線

3. **客製化調整**
   - 拖拉調整景點順序
   - 新增/刪除/替換活動
   - 設定每日預算與時間

4. **協作與分享**
   - 邀請旅伴共同編輯
   - 分享到社群獲得建議
   - 匯出成 PDF 或行動裝置格式

#### 流程 3：社群互動
1. **提問與回答**
   - 發布旅遊相關問題
   - 瀏覽熱門 Q&A
   - 獲得在地人即時回覆

2. **分享經驗**
   - 上傳照片與心得
   - 評分與推薦
   - 建立個人旅遊足跡

### 5.2 差異化特色
- **比 Google Maps 更詳細**：專注於外國人需要的資訊
- **比翻譯 App 更準確**：人工校對 + 文化脈絡
- **比旅遊書更即時**：社群更新 + 即時資訊

## 6. 商業模式

### 6.1 營收來源
- **餐廳付費推廣**：突出顯示與優先排序
- **優質內容訂閱**：進階功能與無廣告體驗
- **合作夥伴佣金**：與訂位平台、外送平台合作
- **企業服務**：為餐廳提供專業翻譯服務

### 6.2 成長策略
- **初期**：專注台北，建立高品質內容
- **擴展**：逐步涵蓋台中、高雄等城市
- **國際化**：複製模式到其他亞洲國家

## 7. 開發路線圖

### Phase 1: MVP (2-3個月)
- [ ] **UI 基礎建設**
  - [ ] shadcn/ui 安裝與配置
  - [ ] 設計系統建立（顏色、字型、間距）
  - [ ] 響應式基礎組件開發
- [ ] 基礎網站架構與 UI
- [ ] 餐廳資料庫建立（100家台北餐廳）
- [ ] 菜單翻譯功能
- [ ] Google Maps 整合
- [ ] 基礎搜尋與篩選
- [ ] **簡易行程規劃器**
  - [ ] 5-10 個精選主題行程模板
  - [ ] 基礎的拖拉式行程編輯
  - [ ] 行程分享功能

### Phase 2: 社群功能 (1-2個月)
- [ ] 使用者註冊與認證
- [ ] 評論與評分系統
- [ ] 問答功能
- [ ] 照片上傳
- [ ] **協作行程規劃**
  - [ ] 多人共同編輯行程
  - [ ] 行程評論與建議系統

### Phase 3: 進階功能 (2-3個月)
- [ ] 即時聊天
- [ ] **AI 智能推薦引擎**
  - [ ] 個人化行程建議
  - [ ] 根據即時資料調整推薦
- [ ] 離線功能
- [ ] **在地達人配對系統**
- [ ] 多城市擴展

### Phase 4: 商業化功能 (1-2個月)
- [ ] 付費推廣系統
- [ ] 專業導遊媒合
- [ ] 企業客戶功能
- [ ] 數據分析儀表板

## 8. 成功指標 (KPIs)

### 8.1 使用者指標
- 月活躍使用者數 (MAU)
- 使用者留存率
- 平均使用時長
- 內容互動率

### 8.2 內容指標
- 餐廳覆蓋數量
- 菜單翻譯完整度
- 使用者生成內容數量
- 翻譯準確度評分

### 8.3 商業指標
- 付費轉換率
- 餐廳合作數量
- 平均客戶價值 (ARPU)
- 推薦流量轉換率

## 9. 風險評估與應對

### 9.1 主要風險
- **內容品質控制**：如何確保翻譯準確性
- **競爭威脅**：大型平台可能複製功能
- **使用者獲取成本**：如何有效觸及目標使用者

### 9.2 應對策略
- 建立內容審核機制與專業翻譯團隊
- 專注利基市場，建立品牌忠誠度
- 與相關社群、部落客、旅遊業者合作推廣