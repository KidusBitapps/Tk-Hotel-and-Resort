# TK Hotel & Resort Website

A modern, responsive website for TK Hotel & Resort built with React, Vite, TailwindCSS, and Framer Motion.

## Features

- **Modern Design**: Luxury hotel theme with gold accents
- **Fully Responsive**: Works perfectly on all devices
- **Smooth Animations**: Framer Motion animations throughout
- **Multi-page Navigation**: React Router for seamless navigation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Lazy loading and optimized images

## Pages

1. **Home**: Hero section, about preview, services preview, gallery preview
2. **About**: Hotel history, mission & values, unique features
3. **Services**: Detailed service offerings with descriptions
4. **Gallery**: Beautiful image gallery with modal view
5. **Contact**: Contact information, form, and map section

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS v4** for styling
- **Framer Motion** for animations
- **React Router** for navigation

## Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── ServiceCard.tsx
│       ├── Section.tsx
│       └── ScrollToTop.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Contact Information

**TK Hotel & Resort**
- Phone: +251 114 300 072/73
- Phone: +251 906 421 111  
- Phone: +251 906 511 111

## Development Notes

- Images are sourced from Unsplash for demonstration
- Contact form is frontend-only (no backend integration)
- Google Maps embedded showing actual TK Hotel & Resort location
- "Book Now" buttons redirect to contact page for inquiries
- Phone numbers are clickable for direct calling
- All animations are optimized for performance
- Responsive design tested on all screen sizes

## Customization

To customize the website:

1. **Colors**: Edit `tailwind.config.js` for color scheme changes
2. **Content**: Update text content in respective page components
3. **Images**: Replace Unsplash URLs with actual hotel images
4. **Contact**: Update phone numbers and address in Contact page and Footer

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 TK Hotel & Resort. All rights reserved.