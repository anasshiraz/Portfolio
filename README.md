# Anas Shiraz Portfolio

A responsive personal portfolio built with React, Vite, and Tailwind CSS. It presents Anas Shiraz's frontend work, skills, education, and contact information through a polished dark-first interface.

## Features

- Responsive Home, About, Projects, and Contact pages
- Dark theme enabled by default with a persistent theme toggle
- Tailwind CSS v4 styling with a consistent blue accent system
- Responsive floating navigation with mobile menu
- Homepage hero with project CTA, social links, technology badges, and stats
- Project cards with screenshots, technology badges, source links, and live demos
- About page with principles, learning timeline, toolkit, and education
- Contact form powered by EmailJS
- Lightweight homepage-matched skeleton loading screen
- Section-specific entrance animations with reduced-motion support
- Accessible labels, focus states, and external-link behavior

## Tech stack

- React 19
- React Router
- Vite
- Tailwind CSS 4
- EmailJS Browser
- ESLint

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## EmailJS configuration

The Contact page reads these Vite environment variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Create a `.env` file in the project root for local development. Do not commit private credentials or environment files.

## Project structure

```text
src/
├── assets/       Project screenshots and logo
├── components/   Navbar, footer, cards, icons, and skeleton screen
├── data/         Skills and project data
├── pages/        Home, About, Projects, and Contact pages
├── Layout.jsx    Shared layout and theme state
└── main.jsx      Router and application entry point
```

## License

This project is a personal portfolio. Contact the author before reusing its branding, content, or assets.
