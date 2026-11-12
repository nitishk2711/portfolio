# React Developer Portfolio

## Included
- Professional Experience: Timelyze (1–2 years)
- Personal Projects: SecurePay (In progress)
- Location: Dubai, UAE
- Skills, About, Education and Contact sections
- GitHub Pages Actions deployment workflow

## Project structure
- `src/personal.js`: your name, role, links, education (edit this first)
- `src/data.js`: skills, experience and project content
- `src/App.jsx`: page sections; `src/style.css`: styling

## Personalize
Edit `src/personal.js` to add your name, email, GitHub, LinkedIn, degree, institution and optional resume URL. Education and institution were left blank because they were not supplied.

## Run
```bash
npm install
npm run dev
npm run build
```

## Deploy
Push the project to GitHub. In repository Settings → Pages, select GitHub Actions as the deployment source. Push to `main` to trigger deployment.

Timelyze is presented as professional experience, not a personal project. Keep only contributions you personally made and are permitted to disclose. SecurePay is labeled In progress; update completed capabilities only after implementation and testing. Do not publish proprietary code, internal endpoints, credentials, employee data or confidential business logic.

## Notes for the author
- Links in `personal.js` that still contain placeholders are hidden automatically, and the Education section stays hidden until you fill it in.
- Commit `package-lock.json`; the deploy workflow uses `npm ci`.
- Review the Skills and SecurePay stack lists in `src/data.js` and keep only technologies you have used hands-on and can explain in an interview.
