---
description: Deploy changes to the live website via Git push to GitHub
---

# Deploy to Website

## Project Info
- **Repo**: https://github.com/alexguerrero101-create/choicesleaderboard.git
- **Branch**: main
- **Hosting**: Hostinger (auto-deploys from GitHub)
- **Local path**: /Users/alexguerrero/CLAUDEEE

## Git Config
- **user.name**: alexguerrero101-create
- **user.email**: alex@example.com

## Steps

// turbo-all

1. Check which files have changed:
```bash
git status --short
```

2. Stage the changed files:
```bash
git add -A
```

3. Commit with a descriptive message:
```bash
git commit -m "YOUR_COMMIT_MESSAGE_HERE"
```

4. Push to GitHub (triggers Hostinger deployment):
```bash
git push origin main
```

## Local Development Server
To test locally before deploying (required for 3D trophy to work):
```bash
cd /Users/alexguerrero/CLAUDEEE && python3 -m http.server 8080 &
```
Then open: http://127.0.0.1:8080/index.html

## Notes
- The `file://` protocol won't load `.glb` 3D models — always use the local server for testing
- Firebase config is already embedded in `index.html`
- Cache busting: update the `?v=` query params on script/CSS tags in `index.html` if changes aren't showing on the live site
