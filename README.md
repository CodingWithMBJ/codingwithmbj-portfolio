# Mohamed Jalloh — Developer Portfolio

A responsive software engineering portfolio built with React and TypeScript to showcase my frontend, backend, and full-stack projects, technical skills, certifications, and professional background.

## Live Demo

**[View Portfolio](https://www.codingwithmbj.tech/)**

---

## Overview

This portfolio was designed to present my work as a **Software Engineer specializing in Frontend Development**.

The application focuses on:

- Responsive frontend development
- Reusable React components
- Feature-based architecture
- Theme management
- Project presentation
- Technical stack visualization
- Maintainable TypeScript code
- Modular CSS
- Accessible and user-focused UI patterns

The site is structured to make it easy for recruiters and hiring managers to quickly understand my technical background, view featured projects, and access my professional links.

---

## Features

- Responsive landing page
- About section
- Featured technology stack
- Frontend and backend stack presentation
- Latest work section
- Dedicated projects page
- Reusable project cards
- Contact section
- Theme switching
- Custom theme provider and hook
- Responsive navigation
- Action navigation
- Loading intro
- Shared section headings
- Data-driven content
- TypeScript interfaces and types
- Mobile, tablet, and desktop layouts

---

## Tech Stack

### Frontend

- React
- TypeScript
- CSS3
- Vite

### Application Patterns

- React Context
- Custom Hooks
- Feature-Based Architecture
- Data-Driven Components
- Reusable Component Design
- TypeScript Interfaces and Types

### Development & Deployment

- Git
- GitHub
- ESLint
- Vite
- Vercel

---

## Project Architecture

The application uses a modular feature-based structure that separates application-level setup, feature-specific code, shared utilities, and page-level components.

```text
src/
├── app/
│   └── App.tsx
│
├── assets/
│   └── images/
│
├── features/
│   ├── about/
│   │   ├── components/
│   │   ├── data/
│   │   ├── styles/
│   │   └── types/
│   │
│   ├── contact/
│   │   ├── components/
│   │   ├── data/
│   │   ├── styles/
│   │   └── types/
│   │
│   ├── featured-stack/
│   │   ├── components/
│   │   ├── data/
│   │   └── styles/
│   │
│   └── latest-work/
│       ├── components/
│       ├── data/
│       ├── pages/
│       ├── styles/
│       └── types/
│
├── pages/
│   └── home/
│
├── shared/
│   ├── components/
│   │   ├── loading-intro/
│   │   ├── navigation/
│   │   ├── section-heading/
│   │   └── theme-toggle/
│   │
│   ├── context/
│   ├── hooks/
│   ├── providers/
│   ├── styles/
│   └── types/
│
├── styles/
│   └── index.css
│
└── main.tsx
```

---

## Technical Highlights

### Feature-Based Architecture

Each major area of the portfolio is organized as a feature.

For example:

```text
features/latest-work/
├── components/
│   ├── LatestWork.tsx
│   └── ProjectCard.tsx
├── data/
│   └── projects.data.ts
├── pages/
│   └── ProjectsPage.tsx
├── styles/
│   ├── LatestWork.css
│   └── ProjectsPage.css
└── types/
    └── project.types.ts
```

This keeps related components, styles, data, pages, and types close together and makes the codebase easier to maintain as the portfolio grows.

---

### Theme Management

The portfolio includes a custom theme system using:

```text
ThemeContext
ThemeProvider
useTheme
ThemeToggle
```

Theme-related logic is separated into:

```text
src/shared/context/
src/shared/providers/
src/shared/hooks/
src/shared/types/
```

This keeps theme state and UI behavior separate from individual feature components.

---

### Shared Components

Reusable UI is organized under `src/shared/components`.

Examples include:

```text
LoadingIntro
Navigation
ActionNav
SectionHeading
ThemeToggle
```

These components are reused across different parts of the application to maintain consistent behavior and presentation.

---

### Data-Driven Project Content

Project information is stored separately from presentation components.

For example:

```text
src/features/latest-work/data/projects.data.ts
```

Project types are defined separately under:

```text
src/features/latest-work/types/project.types.ts
```

This allows project content to be updated without tightly coupling data to UI markup.

---

### TypeScript Organization

The application uses dedicated type files for multiple features.

Examples include:

```text
about.types.ts
contact.types.ts
project.types.ts
theme.ts
theme.types.ts
```

This helps keep component props and shared application data structured and predictable.

---

### Modular Styling

Styling is separated by responsibility.

Global styles include:

```text
src/shared/styles/
├── globals.css
├── reset.css
├── theme.css
└── typography.css
```

Feature-specific styles remain alongside their corresponding features.

For example:

```text
features/about/styles/About.css
features/contact/styles/Contact.css
features/latest-work/styles/LatestWork.css
features/featured-stack/styles/FeaturedStack.css
```

This keeps global design rules separate from local component and feature styling.

---

## Main Portfolio Sections

The site includes several major areas:

```text
Home
About
Featured Stack
Latest Work
Projects
Contact
```

The featured stack section includes dedicated frontend and backend presentations, while the latest work section highlights selected projects.

---

## Featured Projects

Projects currently represented in the portfolio include work such as:

- MAJ General Maintenance
- E-Commerce TypeScript/Firebase Application
- Task Manager Application
- Additional frontend and software engineering projects

Each project is presented through structured project data and reusable UI components.

---

## Certifications

The portfolio includes assets for professional certifications and badges, including:

- Coding Temple Software Engineering
- Coding Temple Full Stack
- Meta Front-End Developer
- Meta UX/UI Design
- IBM DevOps, Cloud, and Agile Foundations

---

## Getting Started

### Prerequisites

Make sure you have:

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/CodingWithMBJ/codingwithmbj-portfolio
```

### Navigate to the Project

```bash
cd codingwithmbj
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

---

## Production Build

Create a production build with:

```bash
npm run build
```

The optimized production files will be generated in the `dist` directory.

---

## Deployment

The portfolio is deployed and available at:

**[https://www.codingwithmbj.tech/](https://www.codingwithmbj.tech/)**

---

## What I Practiced

This project gave me additional hands-on experience with:

- Building a production-style React portfolio
- Structuring a frontend application by feature
- Managing application themes with React Context
- Creating custom React hooks
- Building reusable shared components
- Organizing TypeScript types and interfaces
- Separating project data from presentation
- Responsive web development
- Modular CSS architecture
- Reusable design patterns
- Maintaining a growing React codebase
- Deploying a Vite application

---

## Future Improvements

Potential improvements include:

- Additional automated testing
- More detailed project case studies
- Improved accessibility auditing
- Performance monitoring
- Additional project filtering
- Expanded project detail pages
- Improved SEO metadata
- Analytics integration
- Additional animation refinement

---

## Author

### Mohamed Jalloh

**Software Engineer | Frontend Specialist**

[Portfolio](https://www.codingwithmbj.tech/) • [LinkedIn](https://www.linkedin.com/in/abooabdillaahmbj/) • [GitHub](https://github.com/CodingWithMBJ)
