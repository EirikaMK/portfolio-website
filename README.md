# Eirika Manandhar - Portfolio Website

A minimalistic, elegant, and fully responsive portfolio website showcasing my journey as an AI Researcher and Computer Engineer.

🌐 **Live Site:** [eirikamanandhar.com.np](https://www.eirikamanandhar.com.np/)

## ✨ Features

- **Clean, Minimalistic Design** - Professional dark theme with sophisticated typography
- **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations** - Subtle scroll animations and micro-interactions
- **Fast Loading** - Pure HTML, CSS, and vanilla JavaScript (no frameworks)
- **SEO Optimized** - Semantic HTML structure with proper meta tags
- **Accessible** - Following web accessibility best practices

## 🛠️ Tech Stack

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Google Fonts (Cormorant Garamond, Outfit)

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # JavaScript functionality
├── CNAME               # Custom domain configuration
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required! Just a modern web browser.

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/EirikaMK/portfolio-website.git
   ```

2. Navigate to the project folder:
   ```bash
   cd portfolio-website
   ```

3. Open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with npx)
   npx serve
   ```

4. Visit `http://localhost:8000` in your browser

## 📝 Customization

### Changing Content

All content is in `index.html`. Simply edit the text within the HTML tags.

### Modifying Styles

CSS variables are defined at the top of `styles.css` for easy customization:

```css
:root {
    --color-accent: #c4a35a;        /* Primary accent color */
    --color-bg: #0a0a0b;            /* Background color */
    --color-text-primary: #fafafa;  /* Main text color */
    /* ... more variables */
}
```

### Adding a Profile Photo

Replace the `.image-placeholder` div with an actual image:

```html
<div class="image-frame">
    <img src="your-photo.jpg" alt="Eirika Manandhar">
</div>
```

## 🌐 Deployment

This site is hosted on GitHub Pages with a custom domain.

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Select source branch (usually `main` or `master`)
3. (Optional) Add custom domain in the CNAME file

## 📬 Contact

- **Email:** e.manandhar@wlv.ac.uk | manandhareirika@gmail.com
- **LinkedIn:** [eirika-manandhar-683211276](https://www.linkedin.com/in/eirika-manandhar-683211276)
- **GitHub:** [EirikaMK](https://github.com/EirikaMK)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Designed & Built by Eirika Manandhar © 2025
