# Luminell - Premium Organic Beauty Ecommerce

A fully responsive, production-ready ecommerce frontend built with Next.js 14 (App Router), TypeScript, and Tailwind CSS for Luminell, a premium organic beauty brand.

## Features

- **Modern Design**: Minimal, luxurious aesthetic with custom color palette (#0B2F26 deep green-black, #D1BFA3 soft sand beige)
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Complete Ecommerce Functionality**: Product catalog, shopping cart, checkout flow, and more
- **Beautiful Animations**: Smooth transitions and micro-interactions throughout
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Accessibility**: WCAG compliant with proper focus states and ARIA labels

## Pages

- **Home** (`/`) - Hero section, featured collections, bestsellers, philosophy, ingredient spotlight, blog highlights, testimonials
- **Shop** (`/shop`) - Product grid with filters, sorting, and search
- **Product Detail** (`/products/[slug]`) - Product gallery, tabs, reviews, recommendations
- **Collections** (`/collections/[category]`) - Category-filtered product listings
- **Blog** (`/blog`, `/blog/[slug]`) - Journal listing and individual posts
- **About** (`/about`) - Brand story, values, timeline, team
- **Contact** (`/contact`) - Contact form and information
- **Gallery** (`/gallery`) - Visual gallery of products and lifestyle imagery
- **Account** (`/account/*`) - Login, register, profile, orders, wishlist, addresses
- **Cart** (`/cart`) - Shopping cart with quantity controls
- **Checkout** (`/checkout`) - Multi-step checkout process
- **Search** (`/search`) - Global search across products, collections, and blog
- **Legal** (`/privacy-policy`, `/terms`, `/shipping-returns`) - Legal pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with global components
│   ├── page.tsx           # Home page
│   ├── shop/              # Shop pages
│   ├── products/          # Product detail pages
│   ├── collections/       # Collection pages
│   ├── blog/              # Blog pages
│   ├── account/           # Account pages
│   ├── cart/              # Cart page
│   ├── checkout/          # Checkout page
│   └── ...                # Other pages
├── components/            # React components
│   ├── layout/           # Layout components (Navbar, Footer, etc.)
│   └── ui/               # Reusable UI components
├── lib/                   # Utilities and contexts
├── types/                 # TypeScript type definitions
├── data/                  # Mock data
└── public/                # Static assets
```

## Key Components

- **Navbar**: Sticky navigation with search, cart, and menu
- **Footer**: Newsletter signup, links, social icons
- **CartDrawer**: Slide-out cart drawer
- **ProductCard**: Reusable product card with hover effects
- **Button**: Consistent button component with variants
- **RatingStars**: Star rating display component
- **Tabs**: Tabbed interface component
- **Accordion**: Expandable accordion component

## Design System

### Colors
- Primary: `#0B2F26` (Deep Green-Black)
- Secondary: `#D1BFA3` (Soft Sand Beige)
- Neutral: White, off-white, soft gray scale

### Typography
- Headings: Cormorant Garamond (serif)
- Body: Inter (sans-serif)

### Spacing & Layout
- Consistent border radius (xl, 2xl, 3xl)
- Soft shadows for depth
- Generous white space

## Features in Detail

### Shopping Cart
- Add/remove items
- Update quantities
- Persistent cart state (in-memory for demo)
- Cart drawer slide-in animation
- Cart page with order summary

### Checkout Flow
- Multi-step process (Shipping → Payment → Review)
- Progress indicator
- Form validation
- Order summary sidebar

### Product Features
- Image gallery with thumbnail navigation
- Product variants (ready for implementation)
- Reviews section
- Related products
- Ingredient lists with organic badges

### Search & Filters
- Global search across products, collections, blog
- Category filters
- Price range filters
- Sort options (price, rating, newest)
- Tag filtering

## Next Steps

To make this production-ready:

1. **Backend Integration**: Connect to a real API (e.g., Shopify, Stripe, custom backend)
2. **Authentication**: Implement user authentication (NextAuth.js recommended)
3. **Payment Processing**: Integrate Stripe or PayPal
4. **Database**: Set up database for products, orders, users
5. **Image Optimization**: Use Next.js Image optimization with proper image hosting
6. **Analytics**: Add analytics tracking (Google Analytics, etc.)
7. **Email Service**: Set up transactional emails (Resend, SendGrid, etc.)
8. **Testing**: Add unit and integration tests
9. **Performance**: Optimize bundle size, implement code splitting
10. **Deployment**: Deploy to Vercel or your preferred platform

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## License

This project is a template/demo for an ecommerce frontend.

## Contact

For questions about this implementation, please refer to the codebase structure and documentation.

