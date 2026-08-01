# Getting Started

Welcome to Praxys. This document explains how to set up the project locally and run the frontend and backend.

## Prerequisites

- Node.js 20 or newer
- npm
- Git
- Docker (optional, recommended for PostgreSQL/Redis)

## Clone the repository

```bash
git clone <repo-url>
cd praxys
```

## Install dependencies

### Frontend

```bash
cd apps/web
npm install
```

### Backend

```bash
cd apps/api
npm install
```

## Run the frontend

```bash
cd apps/web
npm run dev
```

Open the browser at the local URL shown by Vite.

## Run the backend

```bash
cd apps/api
npm run dev
```

If the backend is not yet complete, use `npm test` or the available scripts while the server is built out.

## Environment files

Add your local environment variables in `.env` files for both `apps/web` and `apps/api` as needed.

Create `.env.example` files for the public repository so contributors can copy the values.

## Project layout

```text
praxys/
├── apps/
│   ├── web/       # frontend app
│   └── api/       # backend app
├── docs/          # public documentation
├── dev_docs/      # internal development docs
├── LICENSE
└── README.md
```

## Useful commands

- `npm run dev` — start the app in development mode
- `npm run build` — build production artifacts
- `npm run lint` — lint codebase
- `npm test` — run tests

## Notes for contributors

Use `develop` as the integration branch and keep feature branches small and focused. Review `docs/contributing.md` for more details.
