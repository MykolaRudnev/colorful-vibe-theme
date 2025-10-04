# MemeStyle Studio - Shopify Theme

A complete, visually appealing, and functional Shopify theme for **MemeStyle Studio** — a Print-on-Demand store that sells clothing and accessories inspired by memecoins and crypto culture.

## 🚀 Features

- **Modern Cyberpunk Design**: Dark theme with neon cyan (#00F6FF) and pink glow (#F5B6FF) accents
- **TailwindCSS Integration**: Fully responsive design with custom animations
- **Crypto-Themed Sections**: Hero banner, featured collections, meme quotes, and newsletter signup
- **Print-on-Demand Ready**: Custom metafields for product personalization
- **SEO Optimized**: Structured data, meta tags, and performance optimizations
- **Mobile-First**: Perfect layout on 390px, 768px, and 1440px breakpoints
- **Theme Customization**: Comprehensive settings for colors, fonts, logos, and social links

## 🎨 Design Style

- **Primary Color**: Neon cyan (#00F6FF)
- **Accent Color**: Pink glow (#F5B6FF)
- **Background**: Dark gradient from #0A0A0A to #2A2A2A
- **Typography**: Inter and Poppins fonts
- **Style**: Cyberpunk/Web3/Futuristic Streetwear
- **Tone**: Confident, playful, Web3-native

## 📁 Theme Structure

```
/sections/
├── hero-banner.liquid          # Hero section with customizable content
├── featured-collection.liquid  # Dynamic product showcase
├── meme-quote.liquid          # Random crypto/meme quotes
├── newsletter-signup.liquid   # Email subscription form
├── header.liquid              # Navigation and search
└── footer.liquid              # Social links and site info

/snippets/
├── product-card.liquid        # Product display component
├── social-links.liquid        # Social media icons
└── meme-utils.liquid          # Crypto/meme utility functions

/assets/
├── main.css                   # TailwindCSS and custom styles
├── main.js                    # Theme functionality and animations
└── tailwind.config.js         # TailwindCSS configuration

/templates/
├── index.json                 # Homepage template
├── product.json               # Product page template
├── collection.json            # Collection page template
└── page.json                  # Static page template

/config/
├── settings_schema.json       # Theme customization options
└── settings_data.json         # Default theme settings
```

## 🛠️ Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Shopify CLI

### Step 1: Install Shopify CLI

```bash
# Install Shopify CLI globally
npm install -g @shopify/cli @shopify/theme

# Login to your Shopify store
shopify login
```

### Step 2: Set Up Development Environment

```bash
# Clone or download the theme files
cd colorful-vibe-theme

# Install dependencies (if using a build process)
npm install

# Start development server
shopify theme dev

# The theme will be available at the provided URL
```

### Step 3: Deploy to Production

```bash
# Deploy to your live theme
shopify theme push

# Or deploy to a specific theme
shopify theme push --live
```

## ⚙️ Theme Configuration

### 1. Brand & Logo
- Upload your logo in Theme Settings > Brand & Logo
- Set your shop name and description
- Configure favicon and social media images

### 2. Colors
- Customize primary and accent colors
- Adjust background and text colors
- Preview changes in real-time

### 3. Typography
- Choose between Inter, Poppins, or system fonts
- Adjust font sizes and heading scales
- Fine-tune typography settings

### 4. Social Media
- Add your social media links
- Configure Twitter, Instagram, Discord, Telegram, TikTok
- Links appear in header, footer, and newsletter sections

### 5. Homepage Content
- Customize hero section title and subtitle
- Set featured collection
- Configure call-to-action buttons

### 6. Print-on-Demand Settings
- Configure POD provider (Printful/Printify/Custom)
- Set up API keys
- Enable product preview and text customization

## 🎯 Custom Metafields

The theme includes support for custom metafields:

### Product Metafields
- `text_overlay` (string): Custom text for products
- `wallet_address` (string): Crypto wallet address
- `qr_code` (image): QR code for product verification

### Collection Metafields
- `meme_theme` (text): Theme description for collections
- `drop_date` (date): Release date for collections

## 🎨 Sections Overview

### Hero Banner
- Customizable title and subtitle
- Background image support
- Call-to-action buttons
- Statistics display
- Floating crypto elements
- Scroll indicator

### Featured Collection
- Dynamic product selection
- Customizable grid layout
- Product card hover effects
- Quick add functionality
- Collection metadata display

### Meme Quote
- Random crypto/meme quotes
- Custom quote support
- Animated reactions
- Call-to-action integration

### Newsletter Signup
- Email subscription form
- Benefits display
- Social media integration
- Privacy notice
- Success/error handling

### Header
- Logo and navigation
- Search functionality
- Cart with item count
- Mobile-responsive menu
- Crypto price ticker
- Account access

### Footer
- Social media links
- Newsletter signup
- Navigation menus
- Payment methods
- Legal links
- Copyright information

## 🎭 Animations & Effects

- **Parallax scrolling** for hero sections
- **Smooth fade-in** animations for content
- **Hover glow effects** on buttons and cards
- **Floating elements** with crypto symbols
- **Loading states** for cart operations
- **Notification system** for user feedback

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: 390px, 768px, 1440px
- **Touch-friendly** interactions
- **Optimized** for all device sizes

## 🚀 Performance Features

- **Lazy loading** for images
- **Critical CSS** optimization
- **Minified assets** for production
- **Efficient animations** using CSS transforms
- **Optimized** JavaScript loading

## 🔧 Development

### Customizing Styles
- Modify `assets/main.css` for custom styles
- Update `assets/tailwind.config.js` for TailwindCSS customization
- Use CSS custom properties for theme colors

### Adding Functionality
- Extend `assets/main.js` for new features
- Use the existing utility functions
- Follow the established patterns

### Creating New Sections
- Use existing sections as templates
- Follow Shopify section schema standards
- Include proper accessibility attributes

## 📞 Support

For support and questions:
- **Discord**: [Join our Discord](https://discord.gg/memestyle)
- **Twitter**: [@MemeStyleStudio](https://twitter.com/MemeStyleStudio)
- **Email**: support@memestyle.studio

## 📄 License

This theme is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

**Made with ❤️ for the crypto community by MemeStyle Studio**

*"Wear Your Crypto Identity"* 🚀