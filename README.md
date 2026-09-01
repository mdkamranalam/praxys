# Praxys

Praxys is a modern productivity and social accountability platform designed to help people turn intentions into consistent action.

---

## 🌟 Open Source Vision

Praxys is developed as an open source product with transparent planning, clean architecture, and contributor-friendly documentation.

**Core Objectives:**
- Help users stay focused, track tasks, and build lasting habits.
- Foster social accountability with shared goals and progress tracking.
- Build in public with high code quality, modular architecture, and modern developer tooling.

---

## 🛠️ Tech Stack & Architecture

### Backend (`apps/api`)
- **Runtime & Framework:** Node.js (v20+), Express.js, TypeScript (ESNext)
- **Database & ORM:** PostgreSQL, Prisma ORM
- **Authentication & Security:** JWT (JSON Web Tokens), `bcrypt` password hashing, custom `auth.middleware`
- **Tooling:** `tsx` (live dev server), `tsc`, `cors`, `dotenv`

### Frontend (`apps/web`)
- **Framework & Build:** React 19, Vite, TypeScript
- **Routing & State:** React Router DOM (v7), React Hooks
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios

---

## 🚀 Current Implementation Status

| Feature Area | Status | Endpoints / Components |
| :--- | :--- | :--- |
| **Database Schema** | ✅ Implemented | PostgreSQL + Prisma: `User` and `Task` relational models |
| **User Authentication** | ✅ Implemented | `POST /api/auth/register`, `POST /api/auth/login` |
| **Protected JWT Middleware** | ✅ Implemented | `apps/api/src/middlewares/auth.middleware.ts` |
| **Task Management API** | ✅ Implemented | `GET /api/tasks`, `POST /api/tasks`, `PATCH /api/tasks/:id`, `DELETE /api/tasks/:id` |
| **Frontend Auth Pages** | ✅ Implemented | `Home`, `Login`, `Register` with React Router navigation & token persistence |
| **Frontend Task Dashboard** | 🔄 In Progress | Protected task board & creation UI (Week 4 sprint) |

---

## 🏁 Getting Started

### Prerequisites
- **Node.js:** v20+
- **npm:** v10+
- **PostgreSQL:** Running locally or hosted (e.g. Supabase, Neon, Docker)

---

### Backend Setup (`apps/api`)

1. Navigate to the backend directory:
   ```bash
   cd apps/api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env`:
   ```env
   PORT=8000
   DATABASE_URL="postgresql://user:password@localhost:5432/praxys?schema=public"
   DIRECT_URL="postgresql://user:password@localhost:5432/praxys?schema=public"
   JWT_SECRET="your_secure_jwt_secret"
   ```
4. Run Prisma database migrations and generate client:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:8000`.

---

### Frontend Setup (`apps/web`)

1. Navigate to the frontend directory:
   ```bash
   cd apps/web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```
   The web application will be accessible at `http://localhost:5173`.

---

## 📡 API Overview

All protected routes require the header `Authorization: Bearer <token>`.

### Authentication
- `POST /api/auth/register` — Create a new account (`name`, `email`, `password`)
- `POST /api/auth/login` — Sign in and receive a JWT token (`email`, `password`)

### Tasks (Protected)
- `GET /api/tasks` — List all tasks for the logged-in user
- `POST /api/tasks` — Create a new task (`title`, `description?`)
- `PATCH /api/tasks/:id` — Update task details or toggle completion (`title?`, `description?`, `isCompleted?`)
- `DELETE /api/tasks/:id` — Delete a task owned by the user

### System Health
- `GET /` — API root verification
- `GET /api/health` — Service health and timestamp status

---

## 📁 Repository Structure

```text
praxys/
├── apps/
│   ├── api/             # Express.js REST API with Prisma ORM
│   │   ├── prisma/      # Schema definitions & migrations
│   │   └── src/
│   │       ├── middlewares/  # JWT Auth Middleware
│   │       ├── routes/       # Auth and Task route controllers
│   │       └── server.ts     # Express server entry point
│   └── web/             # Vite + React single-page frontend
│       └── src/
│           ├── components/   # UI Navbar & reusable components
│           ├── pages/        # Home, Login, Register, Dashboard
│           └── App.tsx       # Route configurations
├── docs/                # Public open-source and setup guides
├── dev_docs/            # Architecture, Database, & Task specs
├── LICENSE
└── README.md
```

---

## 🗺️ Roadmap & Sprint Progress

- **Week 1:** Database setup & Prisma `User` schema + Registration API ✅
- **Week 2:** React Router navigation + Login API & JWT token handling ✅
- **Week 3:** JWT Auth Middleware + Task CRUD API (`GET`, `POST`, `PATCH`, `DELETE`) ✅
- **Week 4:** Frontend Task Dashboard, Protected Routes & API Integration 🔄

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Md. Kamran Alam**
- Software Developer & AI/ML Engineer
