# Digizone – E-Commerce Services Platform

A modern, high-performance marketing website for Digizone, showcasing e-commerce services across UK and Australian markets. Built with cutting-edge web technologies to deliver an exceptional user experience with smooth animations, responsive design, and comprehensive service offerings.
[digizoneee](Screenshot.png)
Demo Link: https://digizoneee.vercel.app/ 

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-ff0055?style=flat-square)

## ✨ Key Features

### User Experience
- **Dynamic Animations**: Smooth page transitions and micro-interactions powered by Framer Motion
- **Lottie Integrations**: Eye-catching vector animations for enhanced visual storytelling
- **Dark/Light Mode**: Persistent theme toggle with seamless switching
- **Fully Responsive**: Optimized layouts for mobile, tablet, and desktop devices

### Core Sections
- **Hero Section**: Compelling introduction with animated Lottie graphics and dual call-to-action buttons
- **Services Showcase**: Comprehensive overview of e-commerce solutions and offerings
- **Case Studies**: Filterable project gallery with modal carousel for detailed viewing
- **Client Testimonials**: Interactive slider featuring customer success stories
- **Blog Platform**: SEO-optimized articles with social sharing capabilities
- **Careers Portal**: Job listings with integrated application forms and CV upload
- **About Page**: Team profiles, company statistics, and core values
- **Contact Section**: Multi-region support with forms and interactive office maps (UK/AU)

### Technical Highlights
- **Sticky Navigation**: Transparent header with scroll-based styling
- **Gradient Design System**: Modern visual aesthetic with carefully crafted color schemes
- **Performance Optimized**: Built with Next.js 16 App Router for optimal loading speeds
- **Type-Safe**: Full TypeScript implementation for robust development

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/mohakamran/digizoneee.git

# Navigate to project directory
cd digizoneee

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Open your browser and visit
# http://localhost:3000
```

The development server includes hot module replacement for instant feedback during development.

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
digizone/
├── app/                    # Next.js 16 App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage
│   ├── services/          # Services pages
│   ├── case-studies/      # Portfolio section
│   ├── blog/              # Blog listing and posts
│   ├── careers/           # Job listings and applications
│   ├── about/             # Company information
│   └── contact/           # Contact forms and maps
├── components/            # Reusable UI components
│   ├── Header.tsx         # Sticky navigation
│   ├── Footer.tsx         # Site footer
│   ├── ThemeProvider.tsx  # Dark mode context
│   └── sections/          # Page sections
├── lib/                   # Utilities and data
│   ├── data.ts           # Mock content and API data
│   └── utils.ts          # Helper functions
├── public/                # Static assets
│   ├── images/           # Image files
│   └── lottie/           # Animation files
└── styles/                # Global styles
```

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, Lottie
- **UI Components**: Custom React components
- **State Management**: React Context API
- **Forms**: React Hook Form (recommended for production)

## 🎨 Customization

### Content Management
All content is centralized in `lib/data.ts` for easy updates:
- Service offerings
- Case study details
- Blog posts
- Team member profiles
- Career openings

### Styling
The project uses Tailwind CSS v4 with custom configuration:
- Modify `tailwind.config.ts` for theme customization
- Global styles in `app/globals.css`
- Component-specific styles use Tailwind utility classes


## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
