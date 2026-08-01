# Contributing to Praxys

Thank you for contributing to Praxys. This guide describes how contributors should work with the project and how to make the repository easy to maintain.

## How to contribute

1. Open an issue before you start work if you are adding a new feature or making a major change.
2. Fork the repository or work on a branch from the main project.
3. Base your work on the `develop` branch.
4. Create a focused feature branch.
5. Add documentation or tests for any new feature.
6. Submit a pull request with a clear summary and description.

## Branch naming

Use clear branch names based on the work type:

- `feature/<name>` for new features
- `fix/<name>` for bug fixes
- `chore/<name>` for maintenance or configuration updates
- `docs/<name>` for documentation improvements

Examples:

- `feature/authentication`
- `fix/task-filter-bug`
- `chore/environment-setup`
- `docs/getting-started`

## Branch workflow

```bash
git checkout develop
git pull origin develop
git checkout -b feature/<name>
```

Keep your branch up to date with `develop` by merging or rebasing before creating a pull request.

## Pull request checklist

- [ ] the code implements the intended feature or fix
- [ ] tests and validation are added when needed
- [ ] documentation is updated if behavior changes
- [ ] the branch is up to date with `develop`
- [ ] commit messages are concise and clear

## Code quality

- keep changes small and reviewable
- separate frontend and backend work where possible
- follow existing code style and patterns
- avoid breaking unrelated functionality

## Documentation

Public-facing documentation belongs in the `docs/` folder and `README.md`.
Internal planning documents remain in `dev_docs/`.

If you are unsure where to document something, add it to `docs/` for public contributors or `dev_docs/` for internal process notes.
