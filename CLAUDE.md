# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a travel guide platform focused on foreign tourists, starting with Taiwan/Taipei as the template city. The project aims to provide:

- Multilingual travel itineraries and content
- Restaurant menu translations with cultural context
- Intelligent trip planning and recommendations
- Community-driven travel information sharing
- Cultural guides and practical information for foreign tourists

## Project Structure

- `documentation/prd.md` - Complete Product Requirements Document outlining the full vision and technical specifications
- `taipei.md` - Chinese itinerary template for Taipei (3 days, 2 nights)
- `taipei.en.md` - English translation of the Taipei itinerary template
- `taipei.ja.md` - Japanese translation of the Taipei itinerary template
- `public/` - Static assets including SVGs and travel images
- `public/images/taipei-family-trip/` - Curated photos of Taipei attractions

## Taipei as Template City

Taipei serves as the foundational template for the platform:
- Content structure and format established here will be replicated for other cities
- Multilingual approach (Chinese/English/Japanese) sets the standard for future expansions
- Itinerary format and information depth serve as the baseline for other destinations
- Once Taipei content and functionality are perfected, the model will expand to other Asian cities

## Technology Stack

The project is built with:
- **Framework:** Next.js 14 with App Router ✅
- **Language:** TypeScript ✅
- **Styling:** Tailwind CSS ✅
- **UI Components:** shadcn/ui (Button, Card, Badge) ✅
- **Internationalization:** next-intl ✅
- **Database:** Supabase or PlanetScale (MySQL) - Planned
- **Deployment:** Vercel - Ready

## Key Data Models

The project includes comprehensive TypeScript interfaces for:
- Restaurant and menu item translations
- Multilingual itinerary planning 
- User preferences and dietary restrictions
- Activity scheduling and location data
- Cultural notes and local insights

## Content Strategy

- Travel content is maintained in multiple languages (zh/en/ja)
- Focus on foreign-friendly information (English menus, cultural context)
- Emphasis on practical details (walking times, MRT stations, pricing)
- Community-driven reviews and recommendations
- Template-based approach allows consistent expansion to new cities

## Common Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Development Status

The project has been successfully initialized with:
- ✅ Next.js 14 with TypeScript and App Router
- ✅ Tailwind CSS and shadcn/ui components (Button, Card, Badge)
- ✅ next-intl internationalization (zh/en/ja)
- ✅ Basic routing structure with locale support
- ✅ TypeScript data models from PRD
- ✅ Sample data for restaurants and itineraries
- ✅ Responsive navigation component

Available routes:
- `/` - Home page with featured content
- `/restaurants` - Restaurant listings with menu translations
- `/itineraries` - Travel itinerary templates  
- `/community` - Community discussions and tips

## Development Phases

Currently in Phase 1 MVP development. The PRD outlines a 4-phase roadmap:
1. **MVP (In Progress)** - Basic UI, restaurant database, simple itinerary planner
2. Community features and user authentication  
3. AI recommendations and advanced functionality
4. Commercialization features and multi-city expansion

## Next Steps

1. Connect to a database (Supabase recommended)
2. Implement user authentication
3. Add restaurant search and filtering
4. Build itinerary creation tools
5. Set up community features