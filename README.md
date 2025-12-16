# Dexel Portfolio Website

A modern, responsive portfolio website built with Vite + React, featuring multilingual support (English, Amharic, Afaan Oromo), SEO optimization, and a beautiful UI design based on the Dexel brand colors.

## 🚀 Features

- **Modern UI/UX**: Animated gradient backgrounds, floating geometric elements, glassmorphism effects
- **Multilingual**: Support for English, Amharic (አማርኛ), and Afaan Oromo
- **SEO Optimized**: React Helmet Async, sitemap, robots.txt, Open Graph & Twitter Card meta tags
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Built with Vite for lightning-fast development and optimized production builds
- **Component-Based**: Reusable React components adapted from Mereb Technologies
- **Modern Stack**: React 18, React Router v6, TailwindCSS v4, i18next

## 🎨 Brand Colors

- **Primary (Teal/Cyan)**: #00B8D4
- **Secondary (Navy Blue)**: #1A2B4A
- **Accent**: #00BCD4

## 📦 Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🗂️ Project Structure

```
Dexel/
├── public/
│   ├── locales/          # Translation files
│   │   ├── en/           # English translations
│   │   ├── am/           # Amharic translations
│   │   └── om/           # Afaan Oromo translations
│   ├── dexel-logo.svg    # Company logo
│   ├── sitemap.xml       # SEO sitemap
│   ├── robots.txt        # Search engine instructions
│   └── _redirects        # SPA routing config
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── MainBody.jsx  # Hero section
│   │   ├── Services.jsx
│   │   └── ServiceCard.jsx
│   ├── pages/            # Page components
│   │   ├── LandingPage.jsx
│   │   ├── PortfolioPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── OurTeamPage.jsx
│   │   ├── BlogsPage.jsx
│   │   ├── BlogDetailPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── PrivacyPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── assets/          # Static assets
│   ├── i18n.js          # i18n configuration
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json

## 🌐 Pages

- **Home** (`/`): Hero section with animated gradient background and services showcase
- **Portfolio** (`/portfolio`): Project showcase grid
- **About** (`/about`): Company information and values
- **Our Team** (`/our-team`): Team members showcase
- **Insights** (`/insights`): Blog posts and articles
- **Contact** (`/contact`): Contact form and business information
- **Privacy Policy** (`/privacy`): Privacy policy and terms

## 🌍 Internationalization

The website supports three languages:

- English (en) 🇺🇸
- Amharic (am) 🇪🇹 - አማርኛ
- Afaan Oromo (om) 🇪🇹

Language can be changed using the language switcher in the navigation bar.

## 🔧 Technologies Used

- **React 18**: Modern React with Hooks
- **Vite**: Next-generation frontend tooling
- **TailwindCSS v4**: Utility-first CSS framework
- **React Router v6**: Client-side routing
- **i18next**: Internationalization framework
- **React Helmet Async**: SEO meta tags management
- **React Icons**: Icon library
- **EmailJS**: Contact form integration (to be configured)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🎯 SEO Features

- Dynamic meta tags for each page
- Open Graph tags for social media sharing
- Twitter Card tags
- Structured data (JSON-LD) ready
- Sitemap.xml for search engines
- Robots.txt configuration
- Semantic HTML5 markup
- Proper heading hierarchy

## 🚀 Deployment

The website can be deployed to:

- **Netlify**: Drop the `dist` folder or connect your Git repository
- **Vercel**: Import your Git repository
- **GitHub Pages**: Use gh-pages branch
- **Any static hosting**: Upload the `dist` folder

### Environment Variables

Create a `.env` file for any environment-specific configuration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📝 TODO

- [ ] Add actual project data to Portfolio page
- [ ] Add team member information
- [ ] Integrate EmailJS for contact form
- [ ] Add blog content management
- [ ] Add actual images to replace placeholders
- [ ] Implement cookie consent functionality
- [ ] Add Google Analytics or similar
- [ ] Add more animations and micro-interactions
- [ ] Implement lazy loading for images
- [ ] Add unit tests

## 🤝 Contributing

This project was created for Dexel. For any contributions or modifications, please contact the development team.

## 📄 License

© 2024 Dexel. All rights reserved.

## 👥 Credits

- Design & Development: Based on Mereb Technologies components
- Logo & Branding: Dexel
- Built with ❤️ using modern web technologies

## 📞 Contact

- **Email**: info@dexel.com
- **Phone**: +251 911 234 567
- **Address**: Addis Ababa, Ethiopia, Bole, 10th Floor

---

Made with ❤️ by the Dexel Team