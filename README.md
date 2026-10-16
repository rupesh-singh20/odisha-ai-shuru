# Odisha AI Shuru — MERN Learning Platform Starter

A responsive, Odisha-inspired AI learning platform starter built with:
- **Frontend:** React + Vite + Tailwind CSS + Framer Motion
- **Animated AI visual:** Canvas neural-network animation (no paid API or video dependency)
- **Backend:** Node.js + Express
- **Database:** MongoDB/Mongoose (optional for first run; app gracefully uses demo data if MongoDB is not configured)

## Features in this starter
- Odisha-inspired cream paper, deep green, terracotta and saffron visual system
- Hero with animated neural network and AI orb
- Scroll reveal animations and moving marquee
- Course categories, featured courses, learning paths, AI assistant UI
- Express API endpoints for health, courses, and demo assistant replies
- Responsive desktop/mobile layout
- No API keys required to run the demo

> The AI assistant endpoint currently returns a demo response. To use a real LLM, connect a provider server-side and keep its API key in `.env` — never put secrets in frontend code.

## Requirements
- Node.js 20+ recommended
- MongoDB local instance or MongoDB Atlas (optional for demo mode)

## Run locally

### 1. Backend
```bash
cd server
cp .env.example .env
npm install
npm run dev
```
The API runs at `http://localhost:5000`.

### 2. Frontend
Open a second terminal:
```bash
cd client
npm install
npm run dev
```
Open the Vite URL shown in your terminal (usually `http://localhost:5173`).

## Environment
`server/.env`
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/odisha_ai_shuru
CLIENT_URL=http://localhost:5173
```
MongoDB is optional in this starter. If no URI is configured or connection fails, the API uses in-memory sample course data.

## API
- `GET /api/health`
- `GET /api/courses`
- `POST /api/assistant` with `{ "message": "Explain neural networks" }`

## Project structure
```text
odisha-ai-shuru-mern/
  client/
    src/
      components/
      data/
      hooks/
      App.jsx
      index.css
      main.jsx
    package.json
    tailwind.config.js
    vite.config.js
  server/
    src/
      models/Course.js
      routes/courses.js
      routes/assistant.js
      index.js
    .env.example
    package.json
```

## Production notes
- Add authentication before storing learner progress.
- Add request validation, rate limiting, logging, and security headers before public launch.
- For real AI responses, implement provider calls in `server/src/routes/assistant.js` and store the provider key only in `server/.env`.
- For production deployment, deploy the client and server separately or configure a reverse proxy. Configure `CLIENT_URL` to your deployed frontend origin.


## Full-screen AI video hero update
The homepage hero now uses a full-width looping abstract motion background with a dark emerald overlay, warm saffron/terracotta accents, a foreground animated neural network, and a glowing AI core. The motion background is streamed from Free Stock Footage Archive, so the site needs internet access for the video. The source page specifies CC BY 4.0 attribution; a credit link is visible in the hero. If you self-host a replacement video, place it in `client/public/videos/` and change the `<source>` URL in `client/src/App.jsx` to `/videos/your-video.mp4`.


## Hero background video

The homepage now uses a locally bundled 8-second looping MP4 at `client/public/videos/Abstract Energy Flow video from Free Stock Footage Archive`. It features a stylized animated robot head, glowing neural-network links, particles, and Odisha-inspired emerald/saffron colors. The clip is served by Vite from `/videos/Abstract Energy Flow video from Free Stock Footage Archive`, so the hero video does not depend on a third-party video URL or require internet access after the site is loaded locally.
