# Avant-Urban | Avant-Garde Urban Utility Streetwear

A sophisticated e-commerce website for an avant-garde streetwear brand specializing in urban utility and modern clothing, emphasizing Avant-Garde Urbanism. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Brand Philosophy

We reject basic streetwear tropes. Instead, we embrace innovative design with oversized, boxy, and structural silhouettes featuring exaggerated proportions, dropped shoulders, and asymmetrical layering. Our focus is on technical, heavy-duty materials and full-outfit styling that promotes purposeful, utility-driven fashion.

## Features

- 🏗️ **Avant-Garde Design** - Structural, editorial aesthetic with brutalist influences
- 🎨 **Gritty Visuals** - High-contrast imagery in industrial and brutalist environments
- 🎬 **Smooth Animations** - Framer Motion powered transitions with distortion effects
- 📱 **Fully Responsive** - Mobile-first design optimized for all devices
- 🖱️ **Structural Cursor** - Metallic, geometric cursor that morphs on hover
- 🎯 **Editorial Sections**:
  - Full-screen hero with brutalist imagery
  - Featured collections showcasing complete outfits with technical details
  - Utility categories (Oversized, Technical, Tactical, etc.)
  - Editorial stories with narrative-driven lookbooks
  - Avant-Garde Urbanism manifesto
  - Urban Collective community showcase
- ⚡ **Optimized Performance** - Fast loading with Next.js Image optimization
- 🎭 **Brutalist Aesthetics** - Noise textures, grain overlays, and industrial feel

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library with distortion effects
- **Lucide React** - Icon library

## Design System

### Color Palette

- **Primary Black**: `#000000` - Intense black for backgrounds
- **Deep Navy**: `#001F3F` - Structural elements and accents
- **Stark White**: `#FFFFFF` - Text and highlights
- **Metallic Gray**: `#A9A9A9` - Subtle accents
- **Olive**: `#556B2F` - Earth tone highlights

### Typography

- **Headings**: Futura / Helvetica Neue (structural, bold)
- **Body**: Inter (clean, modern)

### Materials & Products

- 500GSM Cotton
- Ripstop Nylon
- Distressed Denim
- Multi-textured Knits
- Technical Straps
- Leather Accents

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
avant-urban/
├── app/
│   ├── layout.tsx          # Root layout with fonts and global components
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles with brutalist textures
├── components/
│   ├── CustomCursor.tsx    # Structural metallic cursor
│   ├── Header.tsx          # Navigation with avant-garde branding
│   ├── Footer.tsx          # Footer with newsletter and links
│   └── sections/
│       ├── Hero.tsx        # Hero with brutalist imagery
│       ├── FeaturedProducts.tsx  # Collections with technical details
│       ├── ShopCategories.tsx     # Utility categories
│       ├── Lookbook.tsx           # Editorial stories
│       ├── AboutBrand.tsx         # Avant-Garde Urbanism manifesto
│       └── Community.tsx          # Urban Collective showcase
├── package.json
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    black: '#000000',
    navy: '#001F3F',
  },
  accent: {
    white: '#FFFFFF',
    'metallic-gray': '#A9A9A9',
    olive: '#556B2F',
  },
}
```

### Products & Collections

Update product data in `components/sections/FeaturedProducts.tsx` with your actual collections, including:
- Technical material specifications
- Silhouette descriptions
- Full-outfit styling details

### Editorial Content

Modify `components/sections/Lookbook.tsx` to add your editorial stories with:
- Industrial/brutalist location information
- Narrative captions
- High-fashion imagery

## Build for Production

```bash
npm run build
npm start
```

## Brand Identity

This website represents an avant-garde streetwear brand that:
- Rejects basic streetwear tropes
- Emphasizes technical materials and utility-driven design
- Promotes full-outfit styling with structural silhouettes
- Uses editorial, gritty aesthetics shot in brutalist environments
- Appeals to stylish teenagers and young adults seeking self-expression

## License

This project is created for demonstration purposes.
