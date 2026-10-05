# hai: learn something with someone

A team-built skill-sharing prototype from SYNCS Hack 2025. The team reached the finals and won Best Pitch, as recorded in the original project documentation.

[Project submission](https://devpost.com/software/hai-learn-something-with-someone) | [Demo video](https://youtu.be/DiQQcMn73wE)

## Santiago's contribution

This is Santiago Gonzalez Alvarez's portfolio fork of [the team repository](https://github.com/aetherspec/SYNCS-Hack-2025). Original authorship and history are preserved.

My attributable implementation work includes the main React application, user-menu interactions, and interface styling. Commit `ae376c5` changes `my-skill-app/src/App.js`, `components/UserMenu.js`, and `index.css`. Other commits contain small page edits and project notes. This was a team project; I did not build every feature.

## Inspect and run

The React application uses Leaflet for map-based discovery. Use Node.js 24 and start in `my-skill-app`; other folders preserve earlier prototypes.

```bash
git clone https://github.com/sgon0181/SYNCS-Hack-2025.git
cd SYNCS-Hack-2025/my-skill-app
npm ci
npm start
```

## Evaluation boundaries

The portfolio maintenance pass replaces the unused starter test with three application tests covering search, empty results, and guest menu controls. Tests mock the map and sample-data request, so they do not validate map tiles, external services, or browser layout. Menu actions use buttons rather than placeholder links. These are post-hackathon maintenance changes, not claims about the original submission.

```bash
CI=true npm test -- --watchAll=false --runInBand
CI=true npm run build
```

Gitleaks found no secrets in the scanned original Git history. This is a hackathon prototype with demo interactions, not a production social network. Compatible dependency updates reduced npm audit findings from 97, including two critical, to 70 (63 high, four moderate, three low) on 6 October 2026. Remaining findings include the legacy Create React App build/test toolchain. No clean security audit or production deployment readiness is claimed. Replacing that toolchain requires a separate migration; the audit's proposed `react-scripts@0.0.0` replacement was not applied. Run locally with synthetic data and do not expose the development server publicly.

Team code and media retain their original authorship. No repository-wide license was found; this fork adds no license on behalf of teammates or media owners.
