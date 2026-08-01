# Praxys

Praxys is a productivity and social accountability platform designed to help people turn intentions into consistent action. This repository contains the project scaffold, documentation, and open source guidance needed to build the product.

## Open Source Vision

Praxys is developed as an open source product with a public roadmap and contributor-friendly documentation.

Goals:

- invite community feedback and contributions
- build trust through transparent development
- accelerate product improvement through shared ownership
- make a useful productivity tool available to a wider audience

## Overview

The goal of Praxys is to help users:

- stay focused
- build consistent habits
- track progress over time
- stay accountable
- complete meaningful work regularly

## Current status

This project is in an early stage. It currently includes:

- a React + Vite frontend in [apps/web](apps/web)
- an initial backend package in [apps/api](apps/api)
- public-facing documentation in [docs/](docs)
- internal development planning in [dev_docs/](dev_docs)

The current frontend is still mostly starter content, and the backend is scaffolded. The full Praxys experience is not implemented yet.

## Tech stack

### Frontend

- React
- TypeScript
- Vite

### Backend

- Node.js
- TypeScript

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm
- Git

### Frontend

```bash
cd apps/web
npm install
npm run dev
```

### Backend

```bash
cd apps/api
npm install
npm test
```

### Notes

- Use `.env.example` files to share configuration patterns without exposing secrets.
- The backend is under active development, so API behavior may change.

## Public documentation

- [Getting Started](docs/getting-started.md)
- [Contributing](docs/contributing.md)
- [Roadmap](docs/roadmap.md)
- [Open Source Guide](docs/open-source-guide.md)

## Internal documentation

The following files are internal planning documents and are intended for the core team:

- `dev_docs/DEVELOPMENT.md`
- `dev_docs/TASKS.md`
- `dev_docs/ROADMAP.md`
- `dev_docs/PRD.md`

## Contribution guide

Praxys welcomes contributions from the community.

- open issues for bugs, enhancements, or documentation updates
- work from `develop` and keep feature branches small
- create branches with clear names like `feature/<name>` or `fix/<name>`
- include documentation updates in every PR
- keep frontend and backend work separated when possible
- add tests for new behavior

See [docs/contributing.md](docs/contributing.md) for the full contribution workflow.

## Project structure

```text
praxys/
├── apps/
│   ├── web/
│   └── api/
├── docs/         # public-facing docs
├── dev_docs/     # internal development planning
├── LICENSE
└── README.md
```

## Development roadmap

1. Build the first real product screens in the frontend
2. Implement authentication and user profiles
3. Add task and goal management
4. Add focus sessions, habits, and analytics
5. Expand into social accountability features
6. Publish the open source product and invite contributions

## Open source launch path

- prepare public docs and contribution guidance
- publish the repository with the MIT license
- track progress with weekly and monthly milestones
- build a community around features, issues, and contributions

## License

This project is released under the MIT License. See [LICENSE](LICENSE).

---

# Author

**Md. Kamran Alam**

- Full Stack Developer
- Software Engineer
- Entrepreneur
