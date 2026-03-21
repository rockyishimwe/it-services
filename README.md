# IT Services Co. Website

A professional, modern IT services website built with vanilla HTML, CSS, and JavaScript. Features a clean black/white design with smooth animations and full responsiveness.

## 🚀 Features

### **Design & UX**
- **Modern Black/White Theme** - Clean, professional aesthetic with sharp edges
- **Dark/Light Mode Toggle** - User preference persistence
- **Smooth Animations** - Scroll reveals, hover effects, micro-interactions
- **Fully Responsive** - Mobile-first design approach
- **Custom Typography** - JetBrains Mono font for technical branding

### **Technical Implementation**
- **Vanilla JavaScript** - No framework dependencies, performant
- **Semantic HTML5** - Proper structure with ARIA labels
- **Organized CSS** - Custom properties, systematic approach
- **Component-Based** - Reusable UI elements

### **Business Features**
- **6 Service Pages** - Complete service offerings
- **Team Section** - Interactive team member cards
- **Contact Forms** - Quote and contact forms
- **Portfolio Showcase** - Project gallery
- **Testimonials** - Client reviews section

### **SEO & Analytics**
- **Meta Tags** - Complete SEO metadata on all pages
- **Structured Data** - JSON-LD schema for services & team
- **Google Analytics 4** - Ready for tracking (replace placeholder ID)
- **Semantic Markup** - Enhanced search visibility

### **Performance Optimizations**
- **Lazy Loading** - Images load on scroll
- **Optimized Assets** - Minimal external dependencies
- **Smooth Scrolling** - Native browser behavior
- **Efficient Animations** - CSS transforms for 60fps

## 📁 Project Structure

```
it-services-bw/
├── css/
│   └── style.css              # Main stylesheet (625 lines)
├── js/
│   └── main.js                # JavaScript functionality (331 lines)
├── images/
│   ├── albert.jpg             # Team member photos
│   ├── arduino.jpg
│   ├── beach.jpg
│   ├── coding.jpg
│   ├── react.jpg
│   ├── robert.jpg
│   ├── sarah.jpg
│   ├── slack.jpg
│   └── web.jpg
├── pages/
│   ├── about.html              # About & team page
│   ├── contact.html            # Contact form page
│   ├── portfolio.html          # Portfolio/projects page
│   ├── quote.html              # Quote request page
│   └── services.html           # Services listing page
├── index.html                 # Homepage
└── README.md                  # This file
```

## 🛠 Technologies Used

### **Frontend**
- **HTML5** - Semantic markup with accessibility
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript** - ES6+, no framework dependencies
- **Bootstrap Icons** - Icon library (v1.11.3)

### **External Services**
- **Google Fonts** - JetBrains Mono font family
- **Unsplash** - Stock photography
- **Google Analytics 4** - Website analytics

## 🎨 Design System

### **Color Palette**
```css
:root {
  --black:    #000000;    --white:    #ffffff;
  --black2:   #0a0a0a;    --white2:   #e8e8e8;
  --black3:   #111111;    --white3:   #b0b0b0;
  --black4:   #1a1a1a;    --white4:   #666666;
  --black5:   #222222;    --white5:   #333333;
}
```

### **Typography**
- **Primary**: JetBrains Mono (monospace)
- **Weights**: 100-800 available
- **Special**: Letter-spacing optimizations for readability

### **Spacing**
- **Container**: Max-width 1240px, centered
- **Grid**: 8px base unit system
- **Sections**: 4rem (64px) vertical rhythm

## 📱 Responsive Breakpoints

```css
/* Mobile-first approach */
- Mobile:    Default (320px+)
- Tablet:     768px+
- Desktop:    1024px+
- Large:      1240px+
```

## 🚀 Getting Started

### **Prerequisites**
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+)
- Local web server (Live Server, Python http.server, etc.)

### **Installation**
1. Clone or download the project
2. Serve files with local web server
3. Open `http://localhost:3000` in browser

### **Local Development**
```bash
# Using Python
python -m http.server 3000

# Using Node.js
npx serve .

# Using Live Server (VS Code extension)
# Right-click index.html → "Open with Live Server"
```

## ⚙️ Configuration

### **Google Analytics 4**
Replace placeholder ID in all HTML files:
```html
<!-- Find and replace -->
G-XXXXXXXXXX

<!-- With your actual GA4 ID -->
G-XXXXXXXXXX
```

### **Contact Information**
Update contact details in:
- `index.html` (footer)
- `pages/about.html` (team section)
- `pages/contact.html` (contact form)
- `pages/quote.html` (quote form)

## 🎯 Key Features Explained

### **Team Cards Interactive**
- **Grayscale to Color**: Images start grayscale, become color on hover
- **Social Overlay**: Social media buttons fade in on hover
- **Card Lift**: Cards move up and gain shadow on hover
- **Smooth Transitions**: 0.35s ease animations

### **Service Filtering**
- **Category Filters**: Filter services by type (Web, Cloud, Security, AI, Mobile, Support)
- **Smooth Animations**: Cards fade in/out based on filter
- **Reset Option**: "All Services" to show everything

### **Form Handling**
- **Client-side Validation**: HTML5 form validation
- **Success States**: Visual feedback on submission
- **Accessibility**: Proper labels and ARIA attributes

### **Scroll Reveal**
- **Intersection Observer**: Elements animate when visible
- **Staggered Delays**: Sequential animation timing
- **Performance Optimized**: Unobserves after animation

## 🔧 Customization

### **Adding New Services**
1. Add service card to `pages/services.html`
2. Include appropriate `data-category` attribute
3. Add to structured data JSON-LD
4. Update filter buttons if needed

### **Adding Team Members**
1. Add team card to `pages/about.html`
2. Update structured data with new member
3. Add photo to `images/` folder
4. Update social media links

### **Color Customization**
```css
/* Modify CSS custom properties */
:root {
  --primary-color: #00e8ff;   /* Accent color */
  --secondary-color: #b06cff;  /* Secondary accent */
  --success-color: #0ff0a0;    /* Success states */
}
```

## 📊 Performance Metrics

### **Optimizations Applied**
- **Minimal Dependencies**: Only Bootstrap Icons and Google Fonts
- **Image Optimization**: Lazy loading, proper sizing
- **CSS Efficiency**: Custom properties for maintainability
- **JavaScript**: Event delegation, efficient DOM queries

### **Expected Performance**
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **First Input Delay**: <100ms

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |

## 🔍 SEO Features

### **Meta Tags**
- **Title Tags**: Unique titles for each page
- **Descriptions**: Custom meta descriptions (155-160 chars)
- **Open Graph**: Social media sharing tags
- **Viewport**: Mobile optimization

### **Structured Data**
- **Organization Schema**: Company information
- **Service Schema**: Detailed service offerings
- **Person Schema**: Team member profiles
- **Local Business**: Contact and location info

## 🚨 Troubleshooting

### **Common Issues**

**Hover Effects Not Working**
- Clear browser cache (Ctrl+F5)
- Check CSS loading order
- Verify no CSS conflicts

**Images Not Loading**
- Check file paths in `src` attributes
- Ensure local web server is running
- Verify image files exist in `/images/`

**Analytics Not Tracking**
- Replace placeholder GA4 ID
- Check browser console for errors
- Verify real-time traffic in GA dashboard

**Mobile Menu Issues**
- Check JavaScript is enabled
- Verify viewport meta tag
- Test with device simulation

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make your changes
4. Test thoroughly
5. Submit pull request

## 📞 Support

For questions about this project:
- **Email**: rockyishimwe9@gmail.com
- **Phone**: +250 791 039 241
- **LinkedIn**: [ishimwe-rocky-1210833b8](https://www.linkedin.com/in/ishimwe-rocky-1210833b8/)
- **GitHub**: [rockyishimwe](https://github.com/rockyishimwe)

---

**IT Services Co.** - Engineering Digital Excellence at Scale

*Built with passion for clean code and exceptional user experiences.*
