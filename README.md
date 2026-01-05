# Street Style - Streetwear E-Commerce Website

A modern, aesthetic e-commerce website for a streetwear and contemporary clothing brand targeted at stylish teenagers and young adults. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Bold, Urban Design** - Deep black and navy blue color scheme with electric blue and hot pink accents
- 🎬 **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🖱️ **Custom Cursor** - Interactive cursor that changes on hover
- 🎯 **Modern Sections**:
  - Full-screen hero with image slideshow
  - Featured products grid with hover effects
  - Shop categories with smooth transitions
  - Lookbook/Style inspiration carousel
  - About the brand with lifestyle images
  - Instagram feed integration
- ⚡ **Optimized Performance** - Fast loading with Next.js Image optimization

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

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
streetwear/
├── app/
│   ├── layout.tsx          # Root layout with fonts and global components
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── CustomCursor.tsx    # Custom cursor component
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with links and newsletter
│   └── sections/
│       ├── Hero.tsx        # Hero section with slideshow
│       ├── FeaturedProducts.tsx
│       ├── ShopCategories.tsx
│       ├── Lookbook.tsx
│       ├── AboutBrand.tsx
│       └── InstagramFeed.tsx
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
    navy: '#0A1D37',
    'navy-alt': '#001F3F',
  },
  accent: {
    'electric-blue': '#00D4FF',
    'hot-pink': '#FF006E',
    white: '#FFFFFF',
  },
}
```

### Fonts

Fonts are configured in `app/layout.tsx`. The project uses:
- **Headings**: Bebas Neue / Montserrat
- **Body**: Inter / Poppins

## Build for Production

```bash
npm run build
npm start
```

## License

This project is created for demonstration purposes.

