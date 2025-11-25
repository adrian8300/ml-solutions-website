# ML Solutions Consulting Website

A professional consulting website for a machine learning solutions business focused on helping small businesses automate laborious tasks.

## Features

- Responsive design (mobile, tablet, desktop)
- Modern, professional UI
- Service pages with detailed offerings
- Contact form
- About page highlighting mission and values

## Pages

- **Home** (`index.html`) - Landing page with hero section and key features
- **Services** (`services.html`) - Detailed service offerings and process
- **About** (`about.html`) - Company mission, values, and why work with us
- **Contact** (`contact.html`) - Contact form and information

## Free Hosting Options

This static website can be hosted for free on several platforms:

### Option 1: GitHub Pages (Recommended for Simplicity)

1. Create a GitHub account at https://github.com
2. Create a new repository (e.g., "ml-solutions-website")
3. Upload all files to the repository
4. Go to repository Settings > Pages
5. Select main branch as source
6. Your site will be live at `https://yourusername.github.io/repository-name`

**Steps:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/ml-solutions-website.git
git push -u origin main
```

### Option 2: Netlify (Recommended for Features)

1. Create account at https://netlify.com
2. Drag and drop your project folder to Netlify
3. Your site will be live instantly with a custom subdomain
4. Can add custom domain later

**Features:**
- Instant deployments
- Free SSL certificate
- Form handling (upgrade contact form to use Netlify Forms)
- Custom domain support

### Option 3: Vercel

1. Create account at https://vercel.com
2. Import your GitHub repository or drag and drop files
3. Instant deployment with preview URLs
4. Free SSL and custom domains

## Contact Form Integration

The contact form currently shows a demo message. To make it functional:

### Option A: FormSubmit.co (Free, No Backend Required)

1. Edit `script.js`
2. Uncomment the FormSubmit.co section
3. Replace `your-email@example.com` with your actual email
4. Form submissions will be emailed to you

### Option B: Netlify Forms (if using Netlify)

1. Add `netlify` attribute to form in `contact.html`:
   ```html
   <form id="contactForm" class="contact-form" netlify>
   ```
2. Netlify will automatically handle form submissions

### Option C: Formspree (Free tier available)

1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update form action in `contact.html`

## Customization

- Update company name in all HTML files (currently "ML Solutions")
- Replace email address in `contact.html`
- Add your logo by creating a logo image and updating the `.logo` element
- Customize colors in `styles.css` (see `:root` CSS variables)
- Add Google Analytics or other tracking (optional)

## Cost

**Free hosting options:**
- GitHub Pages: Free forever for public repos
- Netlify: Free tier includes 100GB bandwidth/month
- Vercel: Free tier includes 100GB bandwidth/month

**Potential costs only if needed:**
- Custom domain: ~$10-15/year (optional)
- Email service for contact form: Free with FormSubmit/Formspree
- Premium features: Only if you outgrow free tiers (unlikely for initial testing)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

All rights reserved.
