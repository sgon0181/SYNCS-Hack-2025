# hai: learn something with someone

A team-built skill-sharing prototype from SYNCS Hack 2025. The team reached the finals and won Best Pitch, as recorded in the original project documentation.

[Project submission](https://devpost.com/software/hai-learn-something-with-someone) | [Demo video](https://youtu.be/DiQQcMn73wE)

## Santiago's contribution

This is Santiago Gonzalez Alvarez's portfolio fork of [the team repository](https://github.com/aetherspec/SYNCS-Hack-2025). Original authorship and history are preserved.

My attributable implementation work includes the main React application, user-menu interactions, and interface styling. Commit `ae376c5` changes `my-skill-app/src/App.js`, `components/UserMenu.js`, and `index.css`. Other commits contain small page edits and project notes. This was a team project; I did not build every feature.

## Inspect and run

The React application uses Leaflet for map-based discovery. Start in `my-skill-app`; other folders preserve earlier prototypes.

```bash
git clone https://github.com/sgon0181/SYNCS-Hack-2025.git
cd SYNCS-Hack-2025/my-skill-app
npm ci
npm start
```

## Evaluation boundaries

Gitleaks found no secrets in the scanned Git history. This is a hackathon prototype with demo interactions, not a production social network. The legacy Create React App toolchain needs review before a public service deployment. This review does not claim a new runtime or browser test.

Team code and media retain their original authorship. No repository-wide license was found; this fork adds no license on behalf of teammates or media owners.
