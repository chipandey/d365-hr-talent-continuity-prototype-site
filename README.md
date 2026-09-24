# Dynamics 365 Human Resources Talent Continuity Prototype

Interactive, sample-data prototype for the proposed Dynamics 365 Human Resources Succession, Calibration/Bell Curve, and 9-Box capabilities.

## Project links

- Repository: https://github.com/chipandey/d365-hr-talent-continuity-prototype-site/
- Live prototype: https://chipandey.github.io/d365-hr-talent-continuity-prototype-site/

## What It Demonstrates

- Dynamics-style navigation and role-based daily work.
- New, enhanced, reused, and AI-assisted surfaces with visible markers.
- Administrator configuration for rating models, succession parameters, criticality scoring, distribution guidance, matrix templates, calibration, recommendation profiles, notifications, dashboards, and automation.
- Position/Job succession plans, nominations, evidence, approval, coverage and placement entry points.
- Lightweight employee aspiration/interest confirmation and owned, dated development actions.
- Existing Dynamics HR skills, proficiency levels, Job mappings, worker competencies, and qualifications reused without a duplicate skill master.
- Bell-curve calibration using advisory distribution guidelines rather than forced ranking.
- Configurable 9-box placement, worker evidence, movement proposals and Draft nomination initiation.
- Fourteen governed AI/agent use cases with evidence dates, confidence, missing information, alternatives, fairness checks, human checkpoints, and immutable audit context.
- Live traceability that parses every actionable bullet, numbered step, and table row from the requirements document and maps it to a prototype screen.

## Run Locally

No package installation or build is required.

```powershell
powershell -ExecutionPolicy Bypass -File .\serve-prototype.ps1 -Port 4173
```

Open `http://localhost:4173`.

If port 4173 is already in use, choose another local port, for example `-Port 4175`, and open the matching URL.

The requirements coverage screen must be viewed through the local server because browsers block fetching a sibling Markdown file when opening `index.html` directly.

## Validate

```powershell
powershell -ExecutionPolicy Bypass -File .\validate-prototype.ps1
```

The static validator reports 1,463 actionable document lines because it includes 22 Markdown table header rows. The live coverage screen reports 1,441 mapped requirements across 136 sections because it excludes those structural headers and maps only substantive bullets, steps, and table data rows. Both checks cover the same requirement content.

## Prototype Data

All people, IDs, scores, plans, sessions, and outcomes are fictional sample data. Buttons demonstrate navigation and governed state transitions but do not persist production records.

## Repository Contents

- `index.html`: Application shell.
- `styles.css`: Dynamics/Fluent-inspired responsive visual system.
- `app.js`: Sample data, routes, interactions, AI context, and requirements traceability parser.
- `Dynamics-HR-Succession-Requirements.md`: Product and engineering requirements source.
- `validate-prototype.ps1`: Static validation and requirements coverage checks.

## Markers

- **New**: New capability or product surface.
- **Enhanced**: Existing Dynamics HR page or entity extended for talent continuity.
- **Reused**: Existing Dynamics HR data or process consumed without changing ownership.
- **AI assisted**: Grounded suggestion or Draft preparation that requires human review.

## Safety and Governance

AI does not approve criticality, ratings, matrix placement, nominations, selection, or placement. Existing Performance Review and weighted-goal records remain authoritative. Approved snapshots retain their configuration and evidence versions.
