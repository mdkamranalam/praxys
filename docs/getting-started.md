# Getting Started

Welcome to Praxys. This document explains how to set up the project locally, run database migrations, and start both the frontend and backend servers.

---

## 🛠️ Prerequisites

- **Node.js:** v20 or newer (`node -v`)
- **npm:** v10 or newer (`npm -v`)
- **Git:** (`git --version`)
- **PostgreSQL:** Running locally or cloud-hosted database (e.g., Supabase, Neon, Docker)

---

## 📥 1. Clone the Repository

```bash
git clone https://github.com/mdkamranalam/praxys.git
cd praxys
```

---

## ⚙️ 2. Configure Backend (`apps/api`)

1. Go to the backend folder:
   ```bash
   cd apps/api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file from `.env.example`:
   ```env
   PORT=8000
   DATABASE_URL="postgresql://postgres:password@localhost:5432/praxys?schema=public"
   DIRECT_URL="postgresql://postgres:password@localhost:5432/praxys?schema=public"
   JWT_SECRET="your_custom_jwt_secret"
   ```
4. Run Prisma database migrations to create the `User` and `Task` tables:
   ```bash
   npx prisma migrate dev
   ```
5. Start the backend API server:
   ```bash
   npm run dev
   ```
   The API is now running at `http://localhost:8000`.

---

## 🎨 3. Configure Frontend (`apps/web`)

1. In a separate terminal tab, go to the frontend directory:
   ```bash
   cd apps/web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

---

## 🧪 4. Verify Local Setup

- Health Check: `http://localhost:8000/api/health`
- Web UI: Navigate between `/login`, `/register`, and `/` in your browser.
- Run tests / build checks:
  ```bash
  # In apps/api
  npm run build
  ```

---

## 🤝 Next Steps

- Check out [contributing.md](contributing.md) to understand our branching and pull request guidelines.
- Explore [roadmap.md](roadmap.md) to see upcoming features.
