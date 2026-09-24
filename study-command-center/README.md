# Study Command Center

A local-first study dashboard for aspirants preparing for IBPS RRB Officer Scale-I and SSC Scientific Assistant in IMD. It helps you organize tasks, track progress, review mistakes, monitor mocks, follow syllabus topics, and keep an eye on official exam updates — all from a single lightweight web app.

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7-646cff?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Local%20Storage-Offline-34a853?style=for-the-badge" alt="LocalStorage" />
</p>

## Overview

Study Command Center is designed to be a lightweight, no-backend productivity tool for competitive exam preparation. Instead of depending on a server or database, the app stores your study data in the browser using `localStorage`, making it fast, easy to deploy, and simple to use.

This project is intentionally built as a static client-side app, focused on a single-user workflow for exam planning and preparation.

## Key Features

- Personalized daily task planner
- Exam timeline and upcoming schedule overview
- Syllabus tracking with progress markers
- Mistake notebook for recurring errors
- Mock test logging and score tracking
- Resource library with official and reference links
- Official exam update feed for date changes, hall tickets, and notices
- Local PIN lock for browser convenience
- JSON export/import backup support
- Fully static deployment-ready build

## Why This Project Exists

The original version of the app was more complex and backend-driven. This version removes the extra server/database overhead because a single-user study dashboard does not need a full API and database stack.

This makes the app:

- easier to run locally
- simpler to deploy
- faster to load
- more portable across devices and browsers
- privacy-friendly for personal data

## Tech Stack

- React
- Vite
- React Router
- Browser localStorage
- Pure static frontend deployment

## Project Structure

```text
study-command-center/
├── package.json
├── README.md
├── vercel.json
├── client/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── api.js
│       ├── data.js
│       ├── main.jsx
│       ├── store.js
│       ├── styles.css
│       ├── components/
│       │   ├── ProgressRing.jsx
│       │   ├── Stat.jsx
│       │   └── TaskCard.jsx
│       └── pages/
│           ├── Dashboard.jsx
│           ├── Exams.jsx
│           ├── Mistakes.jsx
│           ├── Mocks.jsx
│           ├── Resources.jsx
│           ├── Settings.jsx
│           ├── Syllabus.jsx
│           └── Updates.jsx
└── .env.example
```

## Features in Detail

### 1. Dashboard
The dashboard gives you a quick overview of:

- today’s generated study blocks
- total study minutes logged
- upcoming exam countdown
- completed study blocks
- official updates preview

### 2. Exam Tracker
The app includes important exam metadata such as:

- exam name and stage
- exam window
- marks and duration
- subject structure
- official source links
- application context

### 3. Syllabus Progress Tracker
The syllabus page lets you mark topics as completed, helping you track coverage and identify weak sections.

### 4. Mistake Notebook
You can store recurring errors with fields such as:

- exam
- subject
- topic
- question details
- error type
- correct method
- status

### 5. Mock Tracker
Track your mock performance with:

- date
- exam
- paper
- total questions
- attempted questions
- correct/wrong answers
- marks
- time taken
- accuracy

### 6. Resources Library
Useful official and reference links are grouped by exam, helping you stay close to trusted sources.

### 7. Exam Updates
The `updates` function in the data layer exposes official-style update entries such as:

- exam date finalization
- hall ticket issuance notices
- result timeline updates
- verification-related announcements

This section is designed to keep candidates informed without changing the app’s core study workflow.

## Installation

### Prerequisites

- Node.js 20 or newer
- npm

### Install dependencies

From the project root:

```bash
npm install
npm --prefix client install
```

## Running the App Locally

```bash
npm run dev
```

This starts the Vite development server. The app usually opens at:

```text
http://localhost:5173/
```

On the first run, you will be asked to create a local PIN. Your data stays in the browser and is not stored on a server.

## Production Build

```bash
npm run build
```

The production files are generated in:

```text
client/dist
```

## Deploying to Vercel

This project is already compatible with Vercel static hosting.

1. Import the repository into Vercel.
2. Use the default Vercel settings.
3. Deploy.

No backend configuration is required because the app is frontend-only.

## Backup and Restore

Use the Settings page to:

- export your local study data as JSON
- import a previously saved backup
- reset all local browser data

This is useful when switching devices or recovering after clearing browser storage.

## Browser Storage Behavior

The app stores data using the browser’s `localStorage`.

This means:

- data is local to the browser/device
- the app does not use a database
- the app does not require API keys or environment secrets
- the PIN is only a browser convenience lock

## Privacy Note

This is a static client-side application. It is designed for personal use and not for secure multi-user authentication.

Important:

- do not store sensitive personal data beyond study-related information
- the local PIN is not server-side security
- JavaScript is visible to the browser and deployed client-side code

## License

This project is currently intended for personal/study use and is not formally published with a separate license file unless added by the project owner.

## Contribution

You can improve the app by:

- adding new study templates
- improving the dashboard UX
- expanding exam coverage
- refining the update feed data
- improving mobile responsiveness

## Support

This project is a lightweight personal study planner. For future enhancements, the best next steps are usually:

- improved theme controls
- more analytics
- calendar integration
- offline sync support
- richer update sources

## Quick Start

```bash
cd study-command-center
npm install
npm --prefix client install
npm run dev
```

Then open:

```text
http://localhost:5173/
```

---

If you want, I can also make this README even more premium with:

- a hero banner section
- screenshot placeholders
- badges for features and setup
- a more polished GitHub-style layout and emoji sections
