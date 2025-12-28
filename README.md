# Servesa.io Homepage

Personal portfolio and homepage built with React, TypeScript, and Vite. Features a modern design showcasing biography, recent projects, and writing/blog posts.

## Features

- **Bio Section** - Professional introduction and technical toolkit
- **Recent Projects** - Showcase of recent work with interactive project cards
- **Writing** - Blog articles and written content
- **Responsive Design** - Mobile-friendly layout with modern CSS
- **Lightbox Gallery** - Image viewing capabilities using fslightbox-react
- **Masonry Layout** - Responsive grid layouts for projects and blog posts

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.6.3
- **Build Tool**: Vite 6.0.1
- **Styling**: CSS with custom variables and diagonal section designs
- **Server**: Express 4.21.2 (for production static file serving)
- **Containerization**: Docker (multi-stage Alpine builds)
- **Key Libraries**:
  - `fslightbox-react` - Image lightbox functionality
  - `react-responsive-masonry` - Responsive masonry grid layouts

## Prerequisites

- Node.js (current version recommended)
- npm or yarn
- Docker (for containerized deployment)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mattlovan
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

## Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:3000` (as configured in `vite.config.js`).

## Building

Build the production bundle:

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build/` directory.

## Deployment

### Docker Deployment

The project includes a multi-stage Dockerfile for efficient containerized deployment:

1. Build and push Docker image (production):

```bash
npm run build-prod
# or
yarn build-prod
```

This command:

- Builds the production bundle with Vite
- Builds a Docker image for linux/amd64 platform
- Tags it as `magrelo/mattlovan`
- Pushes to Docker registry

2. Manual Docker build:

```bash
docker build . --platform linux/amd64 -t magrelo/mattlovan
```

3. Run the container:

```bash
docker run -p 8080:8080 magrelo/mattlovan
```

The server will start on port 8080 (configurable via `PORT` environment variable).

### Production Server

For production, serve the built files with Express:

```bash
npm run serve
# or
yarn serve
```

The server serves static files from the `build/` directory with 1-year cache headers for optimal performance.

## Project Structure

```
src/
├── components/       # React components
│   ├── blog/        # Blog-related components
│   ├── project/     # Project showcase components
│   └── header.tsx   # Site header
├── pages/           # Page components
│   └── home.tsx     # Home page
├── css/             # Global styles and CSS variables
├── fonts/           # Custom fonts (Roboto family)
├── images/          # Image assets
└── App.tsx          # Main app component

build/               # Production build output
public/              # Static public assets
server.js            # Express server for production
Dockerfile           # Multi-stage Docker build configuration
```

## Scripts

- `dev` - Start development server with Vite
- `build` - Build production bundle
- `serve` - Start production server (requires build first)
- `build-prod` - Build and deploy Docker image
- `ssh` - SSH to production server

## License

Private project - All rights reserved.
