# Indian Spice Exports - Merchant Exporter Website

A professional, clean, and high-trust 5-page React website for an Indian Merchant Exporter specializing in premium spices.

## Features

- **5 Complete Pages**: Home, About Us, Products, Certifications, Contact
- **Responsive Design**: Fully mobile-responsive across all devices
- **Modern UI/UX**: Clean, professional aesthetic with smooth animations
- **Sticky Navigation**: Easy navigation with active link highlighting
- **WhatsApp Integration**: Floating button for quick customer contact
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **React 19** - Modern React with functional components
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth scroll animations and transitions
- **Lucide React** - Beautiful, consistent icons
- **Vite** - Lightning-fast build tool

## Color Scheme

- **Forest Green** - Primary color (#15803d to #14532d)
- **Saffron Orange** - Accent color (#f97316 to #7c2d12)
- Clean white/light-gray backgrounds for a professional look

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation with mobile menu
│   ├── Footer.jsx          # Footer with links and contact info
│   └── WhatsAppButton.jsx  # Floating WhatsApp contact button
├── pages/
│   ├── Home.jsx            # Hero, products preview, countries served
│   ├── About.jsx           # Company story, values, journey
│   ├── Products.jsx        # Turmeric & Cumin with specifications
│   ├── Certifications.jsx  # IEC, MSME, Shop Act licenses
│   └── Contact.jsx         # Contact form and business info
├── App.jsx                 # Main app with routing
├── main.jsx               # Entry point
└── index.css              # Tailwind directives
```

## Installation & Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Build for Production**
```bash
npm run build
```

4. **Preview Production Build**
```bash
npm run preview
```

## Key Pages Overview

### Home Page
- Hero section with export enquiry CTA
- Feature highlights (Quality, Packaging, Global Reach)
- Preview of 2 products (Turmeric & Cumin)
- Countries served showcase (UK, UAE, Middle East)
- Call-to-action section

### About Us
- Company introduction as merchant exporter
- Core values with icons
- Journey timeline
- Mission statement
- Focus on transparency and quality

### Products
- Detailed product cards for Turmeric and Cumin
- Origin, Grade, and Packaging information
- Complete specifications
- No pricing (inquiry-based)
- Custom packaging information

### Certifications
- Import Export Code (IEC)
- Udyam MSME Registration
- Shop Act License
- Additional compliance information
- Disclaimer about product-specific certifications

### Contact
- Professional contact form (console.log + mailto)
- WhatsApp quick contact
- Business hours and location
- Response time expectations

## Customization

### Update Contact Information
1. **Email**: Change `info@indianspiceexports.com` in:
   - `src/components/Footer.jsx`
   - `src/pages/Contact.jsx`

2. **Phone**: Update phone numbers in:
   - `src/components/Footer.jsx`
   - `src/pages/Contact.jsx`

3. **WhatsApp**: Change the phone number in:
   - `src/components/WhatsAppButton.jsx`
   - `src/pages/Contact.jsx`
   - Format: Country code + number (e.g., 919876543210)

### Modify Colors
Edit `tailwind.config.js` to customize the color palette:
- `forest-green` shades for primary colors
- `saffron` shades for accent colors

### Add More Products
Edit `src/pages/Products.jsx` and add items to the `products` array.

## Contact Form Behavior

The contact form currently:
1. Logs data to browser console
2. Opens default email client with pre-filled information
3. No backend integration required

To integrate with a backend:
- Replace the `handleSubmit` function in `src/pages/Contact.jsx`
- Add your API endpoint
- Handle form submission accordingly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images from Unsplash
- Lazy loading with Framer Motion
- Code splitting with React Router
- Fast builds with Vite

## License

This project is created for a merchant export business. Customize as needed for your use case.

## Support

For questions or issues, please refer to the documentation of the individual libraries:
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
