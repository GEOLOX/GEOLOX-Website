# GEOLOX - Modern Location Intelligence Platform

<div align="center">
  <img src="public/geolox-logo.png" alt="GEOLOX Logo" width="120" height="120">
  
  <h3>Transform complex geospatial data into actionable insights</h3>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.4.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.0-pink?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
  
  [![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-success?style=for-the-badge)](https://your-deployment-url.com)
  [![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
</div>

## 🌟 Overview

GEOLOX is a cutting-edge location intelligence platform that transforms complex geospatial data into actionable business insights. Built with modern web technologies, this website showcases our real-time intelligence capabilities that drive smarter decisions across industries.

### ✨ Key Features

- **🎨 Modern Design System** - Professional UI with consistent branding and typography
- **🌙 Dark/Light Mode** - Seamless theme switching with user preference persistence
- **📱 Fully Responsive** - Optimized for all devices from mobile to desktop
- **⚡ Performance Optimized** - Fast loading with lazy loading and image optimization
- **🎭 Advanced Animations** - Smooth micro-interactions using Framer Motion
- **♿ Accessibility First** - WCAG compliant with keyboard navigation support
- **🔍 SEO Optimized** - Meta tags, structured data, and semantic HTML
- **🚀 Production Ready** - CI/CD pipeline with automated testing and deployment

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.4.2** - React framework with SSR/SSG capabilities
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development (optional migration)

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Custom CSS Variables** - Brand-consistent design tokens
- **Framer Motion 11** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality assurance
- **Lint-staged** - Run linters on staged files

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm 8.0 or higher
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/geolox-website.git
   cd geolox-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Setup

Create a `.env.local` file in the root directory:

```env
# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (Optional)
NEXT_PUBLIC_CONTACT_API=your-contact-api-endpoint

# Performance Monitoring (Optional)
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

## 📁 Project Structure

```
geolox-website/
├── components/           # Reusable React components
│   ├── ModernHeader.js   # Navigation header with theme toggle
│   ├── ModernHeroSection.js # Hero section with animations
│   ├── ThemeToggle.js    # Dark/light mode switcher
│   ├── LoadingSpinner.js # Loading states and skeletons
│   └── ...
├── pages/               # Next.js pages
│   ├── index.js         # Homepage
│   ├── _app.js          # App wrapper
│   └── _document.js     # HTML document structure
├── public/              # Static assets
│   ├── geolox-logo.png  # Brand logo
│   ├── favicon.ico      # Site favicon
│   └── images/          # Image assets
├── styles/              # Global styles
│   └── globals.css      # Global CSS with custom properties
├── docs/                # Documentation
├── .github/             # GitHub workflows and templates
└── package.json         # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

```css
:root {
  --primary-blue: #1a237e;     /* Deep blue for headers */
  --accent-cyan: #00bcd4;      /* Cyan for highlights */
  --secondary-green: #4caf50;  /* Green for success states */
  --dark-bg: #0a0a0a;          /* Dark background */
  --dark-surface: #1a1a1a;     /* Dark surface elements */
}
```

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Responsive Scaling**: clamp() functions for fluid typography

### Component Guidelines

- **Cards**: Rounded corners (16px), subtle borders, hover animations
- **Buttons**: Gradient backgrounds, smooth hover transitions
- **Forms**: Consistent spacing, clear validation states
- **Navigation**: Sticky header, smooth scroll, active states

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues

# Testing
npm run test         # Run test suite
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report

# Deployment
npm run deploy       # Deploy to production
npm run analyze      # Analyze bundle size
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Set environment variables** in Vercel dashboard
4. **Deploy** - Automatic deployments on push to main

### Netlify

1. **Connect repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Performance Testing
```bash
npm run lighthouse
```

## 📈 Performance Optimization

### Implemented Optimizations

- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components and images loaded on demand
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Caching**: Aggressive caching strategies for static assets

### Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## ♿ Accessibility

### Features

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user motion preferences

### Testing

```bash
npm run a11y          # Run accessibility tests
npm run a11y:ci       # CI-friendly accessibility tests
```

## 🔒 Security

### Implemented Measures

- **Content Security Policy**: Strict CSP headers
- **HTTPS Only**: Force HTTPS in production
- **Dependency Scanning**: Automated vulnerability scanning
- **Input Validation**: Client and server-side validation

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern tech company websites
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts (Inter)
- **Animations**: Framer Motion community examples

## 📞 Support

- **Documentation**: [docs.geolox.com](https://docs.geolox.com)
- **Issues**: [GitHub Issues](https://github.com/your-username/geolox-website/issues)
- **Email**: support@geolox.com
- **Discord**: [Join our community](https://discord.gg/geolox)

---

<div align="center">
  <p>Built with ❤️ by the GEOLOX team</p>
  <p>
    <a href="https://geolox.com">Website</a> •
    <a href="https://docs.geolox.com">Documentation</a> •
    <a href="https://twitter.com/geolox">Twitter</a> •
    <a href="https://linkedin.com/company/geolox">LinkedIn</a>
  </p>
</div>

