# Praxys

> **A productivity and social accountability platform focused on helping users turn intentions into consistent action.**

Praxys is designed to help individuals stay focused, build discipline, maintain consistency, and achieve their goals through task management, focus sessions, streak tracking, progress analytics, and social accountability features.

Unlike many productivity tools that focus primarily on planning and organization, Praxys emphasizes **execution, consistency, accountability, and measurable progress**.

---

# Vision

Most productivity applications help users plan.

Praxys helps users execute.

The goal of Praxys is to provide a structured environment where users can:

- Stay focused
- Build consistent habits
- Track meaningful progress
- Remain accountable
- Achieve long-term goals

---

# Problem Statement

Many productivity tools allow users to:

- Create tasks
- Organize projects
- Build workflows
- Manage schedules

However, they often fail to address the biggest challenge:

> **Actually getting the work done consistently.**

Common problems include:

- Procrastination
- Lack of focus
- Poor accountability
- Inconsistent habits
- Difficulty measuring progress
- Loss of motivation over time

Praxys aims to solve these problems by combining productivity systems with accountability and behavioral feedback.

---

# Core Features

## Task Management

Organize and execute work effectively.

Features:

- Create, edit, and delete tasks
- Task priorities
- Categories and tags
- Due dates
- Recurring tasks
- Task history
- Subtasks
- Goal-linked tasks

---

## Goals Management

Break long-term objectives into manageable actions.

Features:

- Short-term goals
- Long-term goals
- Milestones
- Progress tracking
- Goal completion analytics

---

## Focus Sessions

Improve concentration and reduce distractions.

Features:

- Pomodoro timer
- Deep work sessions
- Custom timers
- Break management
- Session history
- Focus analytics
- Daily focus targets

---

## Habit & Streak Tracking

Build consistency through repeated action.

Features:

- Habit tracking
- Daily check-ins
- Streak management
- Longest streak records
- Weekly and monthly consistency tracking
- Habit analytics

---

## Productivity Analytics

Measure performance and identify patterns.

Features:

- Productivity scores
- Task completion trends
- Focus time analysis
- Consistency metrics
- Weekly reports
- Monthly reports
- Progress insights

---

## Dashboard

A centralized view of user progress.

Features:

- Active tasks
- Goals overview
- Focus statistics
- Streak information
- Productivity summaries
- Performance trends

---

## Social Accountability

Stay motivated through social reinforcement.

Features:

- Friends
- Accountability partners
- Shared goals
- Activity feeds
- Progress sharing
- Communities
- Group challenges

---

## Gamification

Encourage consistency through rewards.

Features:

- Experience points (XP)
- Levels
- Achievements
- Badges
- Milestones
- Leaderboards

---

# Future Features

Planned features include:

- AI productivity assistant
- Personalized recommendations
- Behavioral analytics
- Burnout detection
- Smart scheduling
- Mobile applications
- Calendar integrations
- Team workspaces
- Voice support

---

# Tech Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- TanStack Query
- Zustand
- React Router

---

## Backend

- Node.js
- Express.js
- TypeScript
- Zod
- BullMQ

---

## Database

- PostgreSQL
- Prisma ORM
- Redis

---

## Authentication

- JWT Access Tokens
- Refresh Tokens
- HTTP-only Cookies

---

## Infrastructure

- Docker
- GitHub Actions
- Railway / AWS
- Nginx

---

# Project Structure

```text
praxys/
│
├── apps/
│   ├── web/
│   ├── api/
│   └── worker/
│
├── packages/
│   ├── shared/
│   ├── ui/
│   ├── config/
│   └── sdk/
│
├── database/
│   └── prisma/
│
├── infrastructure/
│
├── docs/
│
├── dev_docs/
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   ├── DATABASE_DESIGN.md
│   ├── API_SPECIFICATION.md
│   ├── USER_STORIES.md
│   ├── FEATURES.md
│   ├── ROADMAP.md
│   ├── SYSTEM_DESIGN.md
│   └── WIREFRAMES.md
│
└── tests/
```

---

# Architecture

```text
                 React Frontend
                        │
                        ▼
                 Express API
                        │
         ┌──────────────┼──────────────┐
         ▼              ▼              ▼
    PostgreSQL       Redis         Workers
         │              │              │
         └──────────────┼──────────────┘
                        ▼
                  Analytics Layer
```

---

# Security Features

- JWT authentication
- Refresh token rotation
- HTTP-only cookies
- Password hashing
- Input validation
- Rate limiting
- CORS protection
- Secure headers
- Role-based access control

---

# Performance Features

- Redis caching
- Database indexing
- Background jobs
- Pagination
- Query optimization
- Lazy loading
- Code splitting

---

# Development Roadmap

## Phase 1 — MVP

- Authentication
- Task management
- Goal management
- Focus sessions
- Habit tracking
- Streak tracking
- Dashboard
- Basic analytics

---

## Phase 2

- Friends
- Activity feeds
- Accountability partners
- Shared goals
- Challenges

---

## Phase 3

- Communities
- Leaderboards
- Achievements
- Gamification
- Advanced analytics

---

## Phase 4

- AI assistant
- Behavioral analytics
- Personalized recommendations
- Predictive insights

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/praxys.git
cd praxys
```

## Install Dependencies

```bash
# Frontend
cd apps/web
npm install

# Backend
cd ../api
npm install
```

## Environment Variables

Create a `.env` file:

```env
DATABASE_URL=
REDIS_URL=
JWT_SECRET=
JWT_REFRESH_SECRET=
PORT=
CLIENT_URL=
```

## Run Development Environment

```bash
npm run dev
```

---

# Testing

```bash
npm run test
npm run lint
npm run format
```

---

# Contributing

Contributions, suggestions, and feedback are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a pull request

---

# License

This project is licensed under the MIT License.

---

# Author

**Md. Kamran Alam**

- Full Stack Developer
- Software Engineer
- Entrepreneur