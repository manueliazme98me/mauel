# Manuel Diaz Portfolio

A modern personal portfolio website built with React, Bootstrap, Sass, and animated UI interactions. This project is designed to showcase a software developer's profile, experience, technical skills, projects, and contact information in a clean, professional single-page experience.

## Overview

This portfolio template is tailored for a full-stack developer and AI-focused product builder, featuring:

- an animated hero section with typewriter-style text
- a strong personal branding layout
- resume and experience sections
- portfolio/project highlights
- testimonial-style blog cards
- contact details and social access
- responsive dark-mode aesthetic with smooth motion effects

## Features

- ✅ Responsive portfolio layout
- ✅ React + Bootstrap-based UI
- ✅ Animated transitions with AOS
- ✅ Custom cursor and hover interactions
- ✅ Sections for About, Portfolio, Contact, and Testimonials
- ✅ Contact details with email and phone call links
- ✅ Portfolio card gallery with modal-style project showcase
- ✅ Fully customizable content and assets
- ✅ Easy setup for personal branding and deployment

## Sections Included

- Hero / Intro
- About Me / Resume
- Skills and Experience
- Portfolio / Work Samples
- Contact Details
- Testimonials / Client Feedback

## Tech Stack

- React 17
- React Router
- Bootstrap 5
- Sass
- AOS Animation Library
- React Slick
- React Tabs
- react-modal

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm start
```

Open http://localhost:3000 to view the portfolio in your browser.

## Available Scripts

```bash
npm start
```
Runs the app in development mode.

```bash
npm run build
```
Builds the app for production.

```bash
npm test
```
Runs the test watcher.

```bash
npm run eject
```
Ejects the app from Create React App.

## Project Structure

```text
manuel/
├── public/
│   ├── img/
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── about/
│   │   ├── hero/
│   │   ├── portfolio/
│   │   ├── blog/
│   │   ├── Address.jsx
│   │   ├── Contact.jsx
│   │   ├── Social.jsx
│   │   └── ScrollToTop.jsx
│   ├── router/
│   ├── views/
│   ├── App.js
│   ├── index.js
│   └── colors.json
├── package.json
├── README.md
└── .gitignore
```

## Customization Guide

### 1. Update personal details
Edit the following files to replace the demo information with your own:

- `src/components/hero/Hero.jsx` — name, title, intro text, and CTA text
- `src/components/Address.jsx` — location, email, and phone number
- `src/components/about/index.jsx` — resume, skills, and education sections

### 2. Update portfolio projects
Edit the project entries in:

- `src/components/portfolio/Portfolio.jsx`

Add your own project title, image, description, and links.

### 3. Update the about section
Customize your story and background in:

- `src/components/about/PersonalInfo.jsx`
- `src/components/about/Skills.jsx`
- `src/components/about/Experience.jsx`
- `src/components/about/Education.jsx`

### 4. Replace profile and banner imagery
Update the visual assets in the `public/img` directory to reflect your brand and personal identity.

### 5. Update contact links
Modify social and contact links in:

- `src/components/Social.jsx`
- `src/components/Contact.jsx`
- `src/components/Address.jsx`

## Deployment

This project can be deployed to any static hosting platform or frontend host that supports React apps, such as:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

For production builds:

```bash
npm run build
```

Then deploy the generated `build` folder using your hosting provider.

## Notes

- The project was originally built as a dark personal portfolio theme and can be adapted for light themes or different branding styles.
- The current structure is optimized for a single-page portfolio experience with tabbed sections.
- The design is highly customizable for developers, freelancers, and designers looking for a strong personal brand presence.

## License

This project is open for personal and commercial use. If you are using it as a portfolio template, please make sure to replace the default branding and content with your own identity, contact information, and portfolio work.

---

Made for personal portfolio use and easy customization.
