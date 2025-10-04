You are a **senior Shopify developer** and **UI/UX designer** experienced with:
- Shopify CLI, Liquid, JSON templates, and Sections
- TailwindCSS integration with Shopify themes
- Shopify metafields, dynamic sources, and Print-on-Demand (Printful/Printify)
- SEO and performance optimization for e-commerce
- Building modern Shopify themes with customizable settings

---

## 🏗️ TASK
Create a **complete, visually appealing, and functional Shopify Store** for a brand called **MemeStyle Studio** — a Print-on-Demand store that sells **clothing and accessories inspired by memecoins and crypto culture**.

The store should be **unique, fast, and editable from the theme editor**.

---

## 🎯 GOALS

1. Build a **custom Shopify theme**:
   - Modern and minimal UI
   - TailwindCSS (include Tailwind setup)
   - Clean folder structure under `/sections`, `/templates`, `/snippets`, `/assets`, `/config`
   - Add animations for hover, buttons, and hero banners (using Tailwind transitions or small JS)
   - Add meta tags and SEO support in `theme.liquid`

2. Implement **core pages**:
   - Home (`/`)
   - Catalog (`/collections`)
   - Product page (`/products`)
   - About Us
   - Contact
   - Cart and Checkout integration

3. Add **Sections and Snippets**:
   - `hero-banner.liquid` — with customizable title, subtitle, button text & image
   - `featured-collection.liquid` — dynamic, supports product selection
   - `meme-quote.liquid` — random motivational quote about crypto/memecoins
   - `newsletter-signup.liquid` — email form (Shopify forms API)
   - `footer.liquid` — dynamic social links (Discord, X/Twitter, Instagram)
   - `customizer.liquid` — live preview personalization (for text / color options)

4. Add **Theme Settings** (in `/config/settings_schema.json`):
   - Colors: background, primary, accent
   - Fonts
   - Logo upload
   - Social media links
   - Global text customization (taglines, banners)
   - Default collection to feature on homepage

5. Add **custom metafields**:
   - Product metafields for personalization:
     - `text_overlay` (string)
     - `wallet_address` (string)
     - `qr_code` (image)
   - Collection metafields:
     - `meme_theme` (text)
     - `drop_date` (date)

6. Integrate **Print-on-Demand**:
   - Use mock JSON for Printful API response
   - Add function for syncing product variants and previews
   - Products should have customizable text and preview via JS before adding to cart

7. Implement **animations & interactions**:
   - Parallax scroll for hero
   - Smooth fade-in sections
   - Hover glow on buttons
   - Crypto-style glow or motion blur (neon effect)

8. **Responsiveness**:
   - Mobile-first
   - Perfect layout on 390px, 768px, 1440px

9. **SEO & Performance**:
   - Lazy-load images
   - Alt tags from product titles
   - Optimize critical CSS
   - Add structured data (JSON-LD)

10. **Final Deliverable**:
    - Full Shopify theme (Liquid + assets)
    - All sections functional in Theme Editor
    - README.md explaining installation via Shopify CLI
    - Optional: demo content (JSON files)

---

## 📁 FOLDER STRUCTURE

/theme
│
├── layout/
│ └── theme.liquid
│
├── templates/
│ ├── index.json
│ ├── product.json
│ ├── collection.json
│ ├── page.about.json
│ ├── page.contact.json
│
├── sections/
│ ├── hero-banner.liquid
│ ├── featured-collection.liquid
│ ├── meme-quote.liquid
│ ├── newsletter-signup.liquid
│ └── footer.liquid
│
├── snippets/
│ ├── product-card.liquid
│ ├── add-to-cart.liquid
│ ├── meme-utils.liquid
│ └── social-links.liquid
│
├── assets/
│ ├── main.css
│ ├── main.js
│ └── tailwind.config.js
│
└── config/
├── settings_schema.json
├── settings_data.json
└── customizations.json


---

## 🧠 DESIGN STYLE GUIDE

- **Primary Color:** `#00F6FF` (neon cyan)
- **Accent Color:** `#F5B6FF` (pink glow)
- **Background:** dark gray to black gradient
- **Font:** Inter or Poppins
- **Visual Style:** Cyberpunk / Web3 / Futuristic Streetwear
- **Tone:** Confident, playful, Web3-native

---

## 🖼️ HOMEPAGE STRUCTURE

1. **Hero Section**
   - Headline: “Wear Your Crypto Identity”
   - Subtitle: “Custom streetwear for traders, holders & meme believers.”
   - CTA Button: “Explore Collections”
   - Background: Animated gradient / doge image / memecoin style art

2. **Featured Collection**
   - 4–6 products from “To The Moon” or “Doge Legacy”

3. **Custom Quote Section**
   - Random quote from JSON file:  
     “Buy the dip. Wear the drip.” 💧

4. **Newsletter Signup**
   - Email input, neon effect

5. **Footer**
   - Links to X, Discord, Instagram, Telegram
   - Copyright + MemeStyle Studio logo

---

## 🧩 BEHAVIOR

- JS should handle personalization preview (change color/text)
- Add to cart updates dynamically
- Local storage remembers last personalization
- Use modern best practices (ES6 modules, minimal dependencies)

---

## 🚀 COMMANDS (for local setup)
After code generation, add this to README.md:

```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Login to your Shopify store
shopify login

# Run development server
shopify theme dev

# Deploy
shopify theme push


 “When finished, preview the theme in the built-in browser and ensure all sections are editable via the Shopify Theme Editor.”
