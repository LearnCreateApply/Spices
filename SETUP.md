# Quick Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Installation Steps

1. **Navigate to the project directory**
```bash
cd Spices
```

2. **Install all dependencies**
```bash
npm install
```

This will install:
- React & React DOM
- React Router DOM
- Tailwind CSS with PostCSS and Autoprefixer
- Framer Motion
- Lucide React icons

3. **Start the development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## What's Installed

### Core Dependencies
- `react` - UI library
- `react-dom` - React renderer
- `react-router-dom` - Client-side routing
- `framer-motion` - Animation library
- `lucide-react` - Icon library

### Development Dependencies
- `vite` - Build tool
- `tailwindcss` - CSS framework
- `autoprefixer` - CSS post-processor
- `postcss` - CSS transformer
- `@vitejs/plugin-react` - Vite React plugin
- ESLint packages for code quality

## File Structure Created

```
Spices/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind directives
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── README.md           # Documentation

```

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## First Steps After Installation

1. **Update contact information**
   - Email addresses in Footer.jsx and Contact.jsx
   - Phone numbers in Footer.jsx and Contact.jsx
   - WhatsApp number in WhatsAppButton.jsx

2. **Replace placeholder images**
   - Current images are from Unsplash
   - Replace with actual product images

3. **Customize content**
   - Update company name if different
   - Modify product descriptions
   - Add actual certification numbers

4. **Test the site**
   - Navigate through all pages
   - Test mobile responsiveness
   - Check form submission (opens email client)
   - Test WhatsApp button

## Troubleshooting

### If dependencies fail to install:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### If Tailwind styles aren't working:
- Make sure `index.css` has the Tailwind directives
- Check that `tailwind.config.js` content paths are correct
- Restart the dev server

### If routing doesn't work in production:
- Configure your server to redirect all routes to index.html
- For GitHub Pages, add a 404.html that redirects to index.html

## Next Steps

1. Install dependencies: `npm install`
2. Start development: `npm run dev`
3. Customize the content
4. Build for production: `npm run build`
5. Deploy the `dist` folder

## Need Help?

Check the main README.md for detailed documentation about:
- Customization options
- Color scheme modifications
- Adding more products
- Contact form integration
- Browser support
