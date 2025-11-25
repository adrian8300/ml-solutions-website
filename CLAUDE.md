# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for ML Solutions Consulting - a machine learning consulting business focused on helping small businesses automate laborious tasks. The site is built with vanilla HTML, CSS, and JavaScript with no build process required.

## Architecture

### Core Structure
- **Static Site**: Pure HTML/CSS/JS with no framework or build tooling
- **4 Pages**: `index.html` (home), `services.html`, `about.html`, `contact.html`
- **Shared Assets**: Single `styles.css` and `script.js` used across all pages
- **Navigation**: Sticky navbar with mobile hamburger menu implemented in `script.js`

### Contact Form Integration
The contact form uses **FormSubmit.co** (a third-party email service that requires no backend):
- Form action in `contact.html:59` points to FormSubmit hash endpoint
- After submission, users are redirected back to `contact.html?success=true`
- Success message display handled in `script.js:22-36`
- Form email is obfuscated using a FormSubmit hash (not plain email) for security

### Styling System
CSS uses custom properties (CSS variables) defined in `styles.css:8-19`:
- Primary colors, text colors, shadows defined in `:root`
- Responsive design with mobile breakpoints
- No CSS framework - all styles are custom

## Key Files

- **HTML Pages** (`*.html`): Each page has its own navigation with `.active` class on current page
- **styles.css**: All styles including responsive breakpoints; CSS variables at top
- **script.js**: Handles mobile menu toggle, form success messages, and smooth scrolling
- **README.md**: Deployment instructions and hosting options (GitHub Pages, Netlify, Vercel)

## Development Workflow

### Testing Locally
```bash
# Option 1: Python simple server
python -m http.server 8000

# Option 2: PHP built-in server
php -S localhost:8000

# Option 3: Node.js http-server (if installed)
npx http-server -p 8000
```

Then visit `http://localhost:8000`

### Deployment
The site is currently deployed to GitHub Pages. To deploy changes:
```bash
git add .
git commit -m "Your commit message"
git push origin master
```

GitHub Pages automatically deploys from the master branch.

## Important Implementation Details

### Contact Form Email Changes
When updating the contact form email recipient:
1. The form uses a FormSubmit.co hash, NOT a plain email address
2. To change recipient: Visit FormSubmit.co, enter new email, get new hash
3. Update the hash in `contact.html:59` form action URL
4. Update the redirect URL in `contact.html:64` to match deployment URL

### Mobile Navigation
Mobile menu functionality in `script.js:1-17`:
- Hamburger toggle adds `.active` class to `.nav-links`
- Clicking outside navbar closes menu
- Menu displays as column on mobile via CSS media query

### Customization Points
- Company name "ML Solutions" appears in all HTML files in `.logo` div
- Color scheme defined in CSS variables `styles.css:8-19`
- Contact email display (not functional email) in `contact.html:45`
- Service offerings in form dropdown `contact.html:88-95`

## No Build Process
This is a static site with zero build tooling:
- No npm/package.json
- No transpilation or bundling
- No preprocessors (Sass, TypeScript, etc.)
- Direct file editing - changes are immediately live when deployed

## IMPORTANT: Always Push Changes to Git
**CRITICAL**: After making ANY changes to this project, you MUST immediately push them to git so they are deployed to GitHub Pages and instantly viewable.

After completing any work:
```bash
git add .
git commit -m "Description of changes"
git push origin master
```

GitHub Pages automatically deploys from the master branch, so pushing changes makes them live immediately. Never leave changes uncommitted.
