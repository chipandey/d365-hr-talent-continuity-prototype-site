"use strict";

const sample = {
  workers: [
    { id: "W-1042", name: "Maya Patel", role: "Senior Finance Manager", department: "Finance", manager: "Daniel Kim", performance: 92, potential: 88, goals: 94, skills: 91, experience: 84, qualifications: 100, readiness: "Ready now", cell: "future-leader", nominations: 2 },
    { id: "W-1088", name: "Jordan Lee", role: "Finance Transformation Lead", department: "Finance", manager: "Daniel Kim", performance: 86, potential: 81, goals: 89, skills: 87, experience: 78, qualifications: 92, readiness: "Ready < 1 year", cell: "future-leader", nominations: 1 },
    { id: "W-1134", name: "Elena Garcia", role: "Regional Controller", department: "Finance", manager: "Nora Ali", performance: 90, potential: 68, goals: 85, skills: 93, experience: 96, qualifications: 100, readiness: "Ready now", cell: "high-impact", nominations: 3 },
    { id: "W-1196", name: "Aiden Brooks", role: "FP&A Manager", department: "Finance", manager: "Daniel Kim", performance: 77, potential: 91, goals: 74, skills: 79, experience: 70, qualifications: 88, readiness: "Ready 1-2 years", cell: "growth-candidate", nominations: 0 },
    { id: "W-1210", name: "Priya Nair", role: "HR Operations Director", department: "Human Resources", manager: "Samira Khan", performance: 83, potential: 78, goals: 82, skills: 88, experience: 87, qualifications: 95, readiness: "Ready < 1 year", cell: "core-contributor", nominations: 1 },
    { id: "W-1267", name: "Marcus Chen", role: "Accounting Manager", department: "Finance", manager: "Elena Garcia", performance: 71, potential: 76, goals: 69, skills: 75, experience: 81, qualifications: 90, readiness: "Ready 1-2 years", cell: "core-contributor", nominations: 0 },
    { id: "W-1301", name: "Fatima Rahman", role: "Commercial Finance Lead", department: "Finance", manager: "Nora Ali", performance: 95, potential: 72, goals: 97, skills: 90, experience: 85, qualifications: 92, readiness: "Ready now", cell: "high-impact", nominations: 2 },
    { id: "W-1365", name: "Noah Williams", role: "Senior Analyst", department: "Finance", manager: "Aiden Brooks", performance: 68, potential: 86, goals: 73, skills: 72, experience: 58, qualifications: 84, readiness: "Ready 3-5 years", cell: "emerging-potential", nominations: 0 },
    { id: "W-1402", name: "Sofia Rossi", role: "Tax Director", department: "Tax", manager: "Nora Ali", performance: 79, potential: 55, goals: 81, skills: 89, experience: 94, qualifications: 100, readiness: "Ready 1-2 years", cell: "experienced-specialist", nominations: 1 }
  ],
  targets: [
    { id: "P-000184", title: "VP, Global Finance", type: "Position", incumbent: "Daniel Kim", criticality: "Critical", plan: "Active", successors: 3, readyNow: 2, review: "Oct 15, 2026", marker: "enhanced" },
    { id: "J-FIN-041", title: "Regional Finance Director", type: "Job", incumbent: "12 incumbents", criticality: "Critical", plan: "Active", successors: 4, readyNow: 1, review: "Nov 2, 2026", marker: "enhanced" },
    { id: "P-000271", title: "Director, People Operations", type: "Position", incumbent: "Priya Nair", criticality: "High", plan: "In review", successors: 2, readyNow: 0, review: "Sep 28, 2026", marker: "enhanced" },
    { id: "P-000315", title: "Head of Tax", type: "Position", incumbent: "Sofia Rossi", criticality: "Critical", plan: "Missing", successors: 0, readyNow: 0, review: "Overdue", marker: "enhanced" },
    { id: "J-OPS-019", title: "Operations Director", type: "Job", incumbent: "8 incumbents", criticality: "High", plan: "Draft", successors: 1, readyNow: 0, review: "Dec 1, 2026", marker: "enhanced" }
  ],
  nominations: [
    { worker: "Maya Patel", id: "W-1042", readiness: "Ready now", rank: 1, fit: 91, status: "Approved", source: "Manual", evidence: "Current" },
    { worker: "Elena Garcia", id: "W-1134", readiness: "Ready now", rank: 2, fit: 88, status: "Approved", source: "Recommendation", evidence: "Current" },
    { worker: "Jordan Lee", id: "W-1088", readiness: "Ready < 1 year", rank: 3, fit: 85, status: "Under review", source: "Recommendation", evidence: "1 warning" }
  ],
  distribution: [
    { level: "Exceptional", source: 12, current: 15, guide: 10, people: 18 },
    { level: "Exceeds expectations", source: 31, current: 30, guide: 25, people: 36 },
    { level: "Meets expectations", source: 45, current: 43, guide: 50, people: 52 },
    { level: "Partially meets", source: 9, current: 9, guide: 12, people: 11 },
    { level: "Does not meet", source: 3, current: 3, guide: 3, people: 4 }
  ],
  setup: [
    { route: "rating", title: "Shared rating models", detail: "Performance, potential, readiness, criticality and role fit", status: "Configured", marker: "enhanced" },
    { route: "parameters", title: "Succession parameters", detail: "Coverage, evidence, workflow, notifications and dashboards", status: "Configured", marker: "new" },
    { route: "criticality", title: "Criticality scoring profile", detail: "Weights, thresholds and Job/Position applicability", status: "Configured", marker: "new" },
    { route: "distribution", title: "Bell curve guidelines", detail: "Advisory distribution targets and variance controls", status: "Configured", marker: "new" },
    { route: "matrix-config", title: "9-box matrix template", detail: "Axes, thresholds, cells and actions", status: "Configured", marker: "new" },
    { route: "calibration-config", title: "Calibration template", detail: "Population, evidence, participants and approval", status: "Configured", marker: "new" },
    { route: "recommendation", title: "Recommendation profile", detail: "Eligibility, component weights and explanations", status: "Draft changes", marker: "new" },
    { route: "automation", title: "Automation and AI policy", detail: "Triggers, autonomy, grounding and human review", status: "Configured", marker: "ai" }
  ]
};

const routeMeta = {
  home: ["Talent continuity", "Human resources / Workspaces", "Overview"],
  succession: ["Succession management", "Human resources / Workspaces", "Succession"],
  target: ["VP, Global Finance", "Succession management / Critical targets", "Succession"],
  plan: ["Succession plan SP-000047", "Succession management / Plans", "Succession"],
  bellcurve: ["Calibration and bell curve", "Human resources / Workspaces", "Bell Curve"],
  ninebox: ["9-box talent matrix", "Human resources / Talent calibration", "9-Box"],
  setup: ["Talent continuity setup", "Human resources / Setup", "Setup"],
  rating: ["Rating model: Talent readiness", "Setup / Performance / Rating models", "Setup"],
  parameters: ["Succession management parameters", "Setup / Succession management", "Setup"],
  criticality: ["Criticality scoring profile", "Setup / Succession management", "Setup"],
  distribution: ["Distribution guideline: FY26 Finance", "Setup / Talent calibration", "Setup"],
  "matrix-config": ["Matrix template: Enterprise 9-box", "Setup / Talent calibration", "Setup"],
  "calibration-config": ["Calibration template: Annual talent review", "Setup / Talent calibration", "Setup"],
  recommendation: ["Recommendation profile: Leadership roles", "Setup / Succession management", "Setup"],
  automation: ["Automation and AI policy", "Setup / Succession management", "Setup"],
  day: ["Role-based daily experience", "Human resources / Talent continuity", "Experience"],
  coverage: ["Requirements coverage", "Prototype assurance", "Traceability"]
};

const configPages = {
  rating: {
    marker: "enhanced", summary: "Existing Dynamics HR Rating Model extended with purpose, normalized scoring, effective versions and talent mappings.",
    fields: [
      ["Rating model", "Talent readiness", "Stable reference reused by succession and calibration"], ["Rating purpose", "Readiness", "Filters valid selectors and enables ready-now behavior"],
      ["Normalization method", "Explicit", "Each level stores a 0-100 outcome"], ["Higher value is better", "Yes", "Controls sort and normalization direction"],
      ["Effective from", "07/01/2026", "New calculations use this version from this date"], ["Status", "Active", "Active versions are immutable"]
    ],
    levels: [
      ["READY_NOW", "Ready now", "100", "Yes"], ["LT_1_YEAR", "Ready in less than 1 year", "80", "Policy option"], ["ONE_TWO", "Ready in 1-2 years", "60", "No"], ["THREE_FIVE", "Ready in 3-5 years", "30", "No"], ["NOT_ASSESSED", "Not assessed", "", "No"]
    ],
    effect: "Ready now contributes to both approved successor coverage and ready-now coverage. A score change affects future recommendation runs only; approved snapshots remain unchanged."
  },
  parameters: {
    marker: "new", summary: "Company-level defaults resolve beneath explicit Plan, Position and Job settings and above shared defaults.",
    fields: [
      ["Default target type", "Position", "Prefills the creation wizard"], ["Default review frequency", "12 months", "Calculates next review date"],
      ["Maximum nominations per plan", "5", "Blocks nomination 6"], ["Allow tied ranking", "No", "Requires unique ordinal ranks"],
      ["Required successors", "2", "Default plan coverage target"], ["Required ready-now", "1", "Default immediate coverage target"],
      ["Evidence stale after", "365 days", "Creates stale-evidence activity"], ["Recommendation expiry", "30 days", "Requires refresh before conversion"],
      ["Plan approval required", "Yes", "Enables plan workflow"], ["Notification channels", "In-app, Teams", "Creates secured action cards"],
      ["Dashboard refresh", "60 minutes", "Refreshes KPI cache"], ["Minimum aggregate size", "10", "Suppresses sensitive small cohorts"]
    ],
    effect: "Resolved values are shown with their source. Position overrides Job only when policy permits; changing defaults does not rewrite existing approved Plans."
  },
  criticality: {
    marker: "new", summary: "Configurable weighted scoring converts business factors into a governed criticality result.",
    fields: [
      ["Applies to", "Job and Position", "Selects eligible targets"], ["Input scale", "1 to 5", "Normalizes each factor"],
      ["Business impact weight", "25%", "Largest contribution"], ["Vacancy risk weight", "15%", "Current replacement exposure"],
      ["Talent scarcity weight", "20%", "External/internal scarcity"], ["Knowledge concentration", "15%", "Knowledge-loss exposure"],
      ["Time to productivity", "15%", "Ramp-up difficulty"], ["Regulatory dependency", "10%", "Operational dependency"],
      ["High threshold", "70", "Marks target high"], ["Critical threshold", "85", "Marks target critical and starts plan activity"]
    ],
    effect: "Weights total 100%. Approval updates the target summary, triggers coverage monitoring and can prepare a Draft Plan without approving it."
  },
  distribution: {
    marker: "new", summary: "Bell curve is advisory distribution guidance inside calibration, not forced ranking.",
    fields: [
      ["Dimension", "Performance", "Counts calibrated performance levels"], ["Method", "Percentage", "Converts targets to expected headcount"],
      ["Rounding", "Largest remainder", "Produces whole-worker counts"], ["Variance behavior", "Justification", "Requires reason outside tolerance"],
      ["Tolerance", "2 percentage points", "Suppresses minor variance"], ["Minimum population", "10", "Disables guideline below threshold"],
      ["Exceptional target", "10% (5-15%)", "Shows target and accepted range"], ["Meets target", "50% (40-60%)", "Shows target and accepted range"]
    ],
    effect: "Guidelines create warnings and optional approval routing. They never calculate or change an individual rating."
  },
  "matrix-config": {
    marker: "new", summary: "A shared matrix template maps approved normalized Performance and Potential values to configurable cells.",
    fields: [
      ["Rows x columns", "3 x 3", "Generates nine cells"], ["Horizontal axis", "Performance", "Uses approved performance score"],
      ["Vertical axis", "Potential", "Uses approved potential score"], ["Low band", "0 to 39.99", "Maps low outcomes"],
      ["Medium band", "40 to 69.99", "Maps medium outcomes"], ["High band", "70 to 100", "Maps high outcomes"],
      ["Missing axis behavior", "Unplaced", "Avoids unsupported placement"], ["Candidate eligibility", "Display only", "Does not alter recommendation score"]
    ],
    effect: "Threshold changes can be previewed against current workers. New versions affect future placements; approved snapshots remain fixed."
  },
  "calibration-config": {
    marker: "new", summary: "The template governs population, evidence, participant permissions, distribution and publication.",
    fields: [
      ["Dimensions", "Performance, Potential", "Creates two result rows per subject"], ["Review period rule", "Explicit", "Requires FY2026 selection"],
      ["Population", "Finance management level 4+", "Freezes 121 subjects"], ["Minimum cohort", "10", "Supports protected distribution views"],
      ["Evidence priority", "Approved result, completed review, manual", "Determines source value"], ["Rating edit mode", "Adjust", "Authorized participants can change with reason"],
      ["Adjustment reason", "Required", "Blocks unexplained change"], ["Matrix drag", "Enabled", "Changes underlying rating with audit"],
      ["Publish to succession", "After approval", "Becomes preferred candidate evidence"], ["Workflow", "Finance talent approval", "Routes to VP HR and CFO delegate"]
    ],
    effect: "Approval locks results, publishes evidence and creates 9-box snapshots. Completed performance reviews remain unchanged."
  },
  recommendation: {
    marker: "new", summary: "A deterministic, explainable profile screens eligibility and ranks eligible internal candidates.",
    fields: [
      ["Performance", "25%", "Normalized approved source"], ["Potential", "20%", "Approved calibration preferred"],
      ["Skills", "30%", "Target Job skill coverage and proficiency"], ["Weighted goals", "10%", "Finalized Performance result"],
      ["Experience", "10%", "Relevant verified experience"], ["Qualifications", "5%", "Education, certificate and test fit"],
      ["Minimum overall", "60", "Candidates below are not returned"], ["Missing data", "Show, do not infer", "Explains incomplete evidence"],
      ["Maximum candidates", "25", "Limits stored/displayed results"], ["Tie breaker", "Skills, then performance", "Produces deterministic rank"]
    ],
    effect: "The profile creates recommendations, never approved nominations. Protected attributes are unavailable to the rule builder."
  },
  automation: {
    marker: "ai", summary: "Automation policy controls event triggers, autonomy and grounded AI assistance without removing human accountability.",
    fields: [
      ["Critical target discovery", "Prepare draft", "Creates Draft assessments for HR review"], ["Plan preparation", "Prepare draft", "Prepopulates after criticality approval"],
      ["Candidate discovery", "Suggest", "Returns grounded explanations"], ["Evidence refresh", "Execute non-consequential", "Creates a new Draft assessment revision"],
      ["Calibration preparation", "Prepare draft", "Builds population and data-quality queue"], ["Anomaly review", "Suggest", "Flags outliers; cannot change ratings"],
      ["AI model", "Enterprise grounded model", "Stores model/prompt version"], ["Human review", "Required", "Blocks activation and consequential decisions"],
      ["Confidence threshold", "75%", "Below threshold shows insufficient confidence"], ["Kill switch", "Enabled", "Disables AI while manual flows continue"]
    ],
    effect: "AI reduces preparation and navigation overhead but only creates suggestions or Drafts. Every output cites source records and supports correction."
  }
};

const state = {
  route: location.hash.replace("#", "") || "home",
  role: "HR Business Partner",
  period: "FY2026",
  modal: null,
  drawer: null,
  toast: null,
  bellMode: "current",
  coverage: [],
  coverageQuery: "",
  coverageRoute: "all"
};

const navGroups = [
  ["Workspaces", [["home", "Talent continuity"], ["succession", "Succession"], ["bellcurve", "Bell curve"], ["ninebox", "9-box matrix"]]],
  ["Configuration", [["setup", "Setup checklist"], ["rating", "Rating models"], ["parameters", "Parameters"], ["automation", "Automation and AI"]]],
  ["Experience", [["day", "Role-based day"], ["coverage", "Requirements coverage"]]]
];

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
}

function marker(type, label) {
  const names = { new: "New", enhanced: "Enhanced", reused: "Reused", ai: "AI assisted", required: "Required" };
  return `<span class="marker ${type}">${escapeHtml(label || names[type] || type)}</span>`;
}

function status(text, tone = "info") {
  return `<span class="status ${tone}"><span class="status-dot"></span>${escapeHtml(text)}</span>`;
}

function topbar() {
  return `<header class="topbar">
    <div class="brand">
      <button class="app-launcher" aria-label="App launcher">${"<span></span>".repeat(9)}</button>
      <div><div class="brand-product">Dynamics 365 Human Resources</div><div class="brand-module">Talent continuity prototype</div></div>
    </div>
    <div class="global-search"><input aria-label="Search" placeholder="Search people, positions, plans and sessions"><span class="search-key">Alt+Q</span></div>
    <div class="top-actions"><button class="icon-button" title="Notifications" data-action="notify">3</button><button class="icon-button" title="Help">?</button><button class="avatar-button" title="Signed in as Alex Morgan">AM</button></div>
  </header>`;
}

function sidebar() {
  return `<aside class="sidebar" aria-label="Primary navigation">
    <div class="environment"><strong>Contoso global</strong><span>USMF | Preview environment</span></div>
    ${navGroups.map(([label, items]) => `<div class="nav-group"><div class="nav-label">${label}</div>${items.map(([route, text]) => `<button class="nav-item ${state.route === route ? "active" : ""}" data-route="${route}"><span>${text}</span>${route === "coverage" ? `<small>${state.coverage.length || "..."}</small>` : ""}</button>`).join("")}</div>`).join("")}
  </aside>`;
}

function pageHeader(actions = "") {
  const [title, crumb, section] = routeMeta[state.route] || routeMeta.home;
  return `<div class="page-header"><div class="breadcrumb">${crumb} / ${section}</div><div class="page-title-row"><div><h1>${title}</h1><p class="subtitle">Interactive sample environment | ${escapeHtml(state.role)} | ${state.period}</p></div><div class="command-bar">${actions}</div></div></div>`;
}

function homeView() {
  return `${pageHeader(`<button class="btn" data-route="setup">Review setup</button><button class="btn primary" data-action="create-plan">Create succession plan</button>`)}
    <div class="legend">${marker("new")} ${marker("enhanced")} ${marker("reused")} ${marker("ai")}</div>
    <section class="section grid cols-4">
      <article class="card kpi info"><div class="small muted">Critical targets covered</div><div class="kpi-value">78%</div><div class="kpi-meta">21 of 27 | 3 need action</div></article>
      <article class="card kpi warn"><div class="small muted">Ready-now coverage</div><div class="kpi-value">63%</div><div class="kpi-meta">17 targets | down 4%</div></article>
      <article class="card kpi good"><div class="small muted">Calibration complete</div><div class="kpi-value">84%</div><div class="kpi-meta">102 of 121 subjects</div></article>
      <article class="card kpi info"><div class="small muted">My actions</div><div class="kpi-value">7</div><div class="kpi-meta">2 overdue | 3 approvals</div></article>
    </section>
    <section class="section grid cols-3">
      <article class="card action" data-route="succession"><div class="card-head"><h2>Succession</h2>${marker("new")}</div><p>Configure critical targets, create Position or Job plans, nominate and compare successors, approve and monitor coverage.</p><div class="card-footer"><button class="btn primary" data-route="succession">Open workspace</button></div></article>
      <article class="card action" data-route="bellcurve"><div class="card-head"><h2>Bell curve</h2>${marker("new", "Calibration")}</div><p>Prepare a cohort, compare source and calibrated distributions, justify variance and publish approved results.</p><div class="card-footer"><button class="btn primary" data-route="bellcurve">Open calibration</button></div></article>
      <article class="card action" data-route="ninebox"><div class="card-head"><h2>9-box matrix</h2>${marker("new")}</div><p>Review performance and potential placement, inspect evidence, propose movement and initiate a Draft nomination.</p><div class="card-footer"><button class="btn primary" data-route="ninebox">Open matrix</button></div></article>
    </section>
    <section class="section grid cols-2">
      <article class="card"><div class="card-head"><h2>Priority actions</h2><button class="btn subtle" data-route="day">View all</button></div>
        <div class="timeline">
          <div class="timeline-item"><strong>Head of Tax has no active plan</strong><p>Critical Position | Owner: Nora Ali | Overdue</p><button class="btn subtle" data-action="create-plan">Create plan</button></div>
          <div class="timeline-item"><strong>Finance calibration has 4 unresolved changes</strong><p>Session CAL-2026-018 | Due Sep 25</p><button class="btn subtle" data-route="bellcurve">Review session</button></div>
          <div class="timeline-item"><strong>Candidate evidence changed</strong><p>Maya Patel completed FY2026 review and weighted goals</p><button class="btn subtle" data-action="refresh-evidence">Refresh assessment</button></div>
        </div>
      </article>
      <article class="card"><div class="card-head"><h2>AI operational brief</h2>${marker("ai")}</div><div class="ai-callout"><strong>Three issues can be prepared now</strong><p>AI reviewed 27 critical targets, 14 changed evidence records and 121 calibration subjects. It can prepare two Plan reviews and one evidence refresh without approving a decision.</p></div><ul class="evidence-list"><li>Grounded in Criticality Assessments CR-018, CR-024</li><li>Uses approved calibration CAL-2026-017</li><li>Estimated navigation saved: 19 page transitions</li></ul><div class="card-footer"><button class="btn" data-action="ai-home">Review suggestions</button></div></article>
    </section>`;
}

function successionView() {
  return `${pageHeader(`<button class="btn" data-action="ai-candidates">${marker("ai", "AI")} Find candidates</button><button class="btn primary" data-action="create-plan">Create plan</button>`)}
    <div class="grid cols-4">
      <article class="card kpi info"><div class="small muted">Active critical targets</div><div class="kpi-value">27</div><div class="kpi-meta">${marker("reused")} Job and Position</div></article>
      <article class="card kpi warn"><div class="small muted">Without active plan</div><div class="kpi-value">3</div><div class="kpi-meta">Create plan activity</div></article>
      <article class="card kpi good"><div class="small muted">Approved successors</div><div class="kpi-value">54</div><div class="kpi-meta">21 ready now</div></article>
      <article class="card kpi warn"><div class="small muted">Evidence stale</div><div class="kpi-value">6</div><div class="kpi-meta">Refresh before approval</div></article>
    </div>
    <section class="section"><div class="section-title"><div><h2>Critical Jobs and Positions</h2><span class="small muted">Shared master data enhanced with succession context</span></div><div class="legend">${marker("enhanced")} ${marker("reused")}</div></div>
      <div class="data-table-wrap"><table class="data-table"><thead><tr><th>Target</th><th>Type</th><th>Incumbent(s)</th><th>Criticality</th><th>Plan</th><th>Coverage</th><th>Ready now</th><th>Next review</th></tr></thead><tbody>
        ${sample.targets.map(target => `<tr><td><button class="link-button" data-route="target">${target.id}<br>${target.title}</button></td><td>${target.type}<br>${marker("reused", "Reused")}</td><td>${target.incumbent}</td><td>${status(target.criticality, target.criticality === "Critical" ? "bad" : "warn")}</td><td>${status(target.plan, target.plan === "Missing" ? "bad" : target.plan === "Active" ? "good" : "info")}</td><td>${target.successors}/2</td><td>${target.readyNow}/1</td><td>${target.review}</td></tr>`).join("")}
      </tbody></table></div>
    </section>
    <section class="section grid cols-2"><article class="card"><div class="card-head"><h2>Coverage by organization</h2>${marker("new", "Dashboard")}</div><div class="bar-chart"><div class="bar-row"><span>Finance</span><div class="bar-track"><div class="bar-actual" style="width:88%"></div></div><strong>88%</strong></div><div class="bar-row"><span>Operations</span><div class="bar-track"><div class="bar-actual" style="width:71%"></div></div><strong>71%</strong></div><div class="bar-row"><span>Human Resources</span><div class="bar-track"><div class="bar-actual" style="width:79%"></div></div><strong>79%</strong></div></div></article>
      <article class="card"><div class="card-head"><h2>Workspace touchpoints</h2>${marker("enhanced")}</div><ul><li>Position and Job Succession FastTabs</li><li>Organization hierarchy coverage indicators</li><li>Worker confidential nomination FactBox</li><li>Workflow, Teams and Action center cards</li><li>Power BI drill-through preserving target context</li></ul></article></section>`;
}

function targetView() {
  return `${pageHeader(`<button class="btn" data-action="assess-criticality">Assess criticality</button><button class="btn primary" data-route="plan">Open active plan</button>`)}
    <div class="tabs"><button class="tab active">General</button><button class="tab">Position details ${marker("reused")}</button><button class="tab">Succession ${marker("enhanced")}</button><button class="tab">History</button></div>
    <div class="grid cols-3">
      <article class="card"><h2>Position</h2><dl><dt class="small muted">Position ID</dt><dd>P-000184</dd><dt class="small muted">Job</dt><dd>J-FIN-078 | VP Finance</dd><dt class="small muted">Department</dt><dd>Global Finance</dd><dt class="small muted">Reports to</dt><dd>Chief Financial Officer</dd></dl></article>
      <article class="card"><h2>Current incumbent</h2><dl><dt class="small muted">Worker</dt><dd>Daniel Kim (W-0881)</dd><dt class="small muted">Assignment start</dt><dd>April 1, 2021</dd><dt class="small muted">Tenure</dt><dd>5 years, 5 months</dd></dl><div>${marker("reused", "Position assignment")}</div></article>
      <article class="card"><h2>Succession summary</h2><dl><dt class="small muted">Criticality</dt><dd>${status("Critical", "bad")}</dd><dt class="small muted">Coverage</dt><dd>${status("Covered", "good")} 3 approved</dd><dt class="small muted">Ready now</dt><dd>2 of 1 required</dd><dt class="small muted">Next review</dt><dd>October 15, 2026</dd></dl></article>
    </div>
    <section class="section card"><div class="card-head"><div><h2>Succession configuration</h2><p class="subtitle">Position values inherit from Job unless an authorized override is entered.</p></div>${marker("enhanced")}</div>
      <div class="form-grid"><div class="field"><label>Succession enabled</label><select><option>Yes</option></select><div class="field-help">Source: Job J-FIN-078</div></div><div class="field"><label>Criticality level</label><select><option>Critical</option></select><div class="field-help">Source: Approved assessment CR-000184-V3</div></div><div class="field"><label>Required successors</label><input value="2"><div class="field-help">Source: Job default</div></div><div class="field"><label>Required ready-now</label><input value="1"><div class="field-help">Source: Position override</div></div><div class="field"><label>Plan owner</label><input value="Nora Ali"><div class="field-help">Source: Position override</div></div><div class="field"><label>Review frequency</label><select><option>12 months</option></select><div class="field-help">Source: Company parameter</div></div></div>
    </section>`;
}

function planView() {
  return `${pageHeader(`<button class="btn" data-action="compare">Compare candidates</button><button class="btn" data-action="nominate">Nominate successor</button><button class="btn primary" data-action="submit-plan">Submit plan</button>`)}
    <div class="tabs"><button class="tab active">Candidates</button><button class="tab">Coverage</button><button class="tab">Evidence</button><button class="tab">Activity</button><button class="tab">Workflow</button><button class="tab">History</button></div>
    <div class="grid cols-4"><article class="card kpi info"><div class="small muted">Plan status</div><div class="kpi-value" style="font-size:24px">Active</div><div class="kpi-meta">Approved Aug 18, 2026</div></article><article class="card kpi good"><div class="small muted">Approved candidates</div><div class="kpi-value">3</div><div class="kpi-meta">Requirement: 2</div></article><article class="card kpi good"><div class="small muted">Ready now</div><div class="kpi-value">2</div><div class="kpi-meta">Requirement: 1</div></article><article class="card kpi warn"><div class="small muted">Evidence warnings</div><div class="kpi-value">1</div><div class="kpi-meta">Goal result updated</div></article></div>
    <section class="section"><div class="section-title"><h2>Successor nominations</h2><div class="legend">${marker("new")} ${marker("ai")}</div></div><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Rank</th><th>Candidate</th><th>Readiness</th><th>Role fit</th><th>Status</th><th>Source</th><th>Evidence</th><th></th></tr></thead><tbody>${sample.nominations.map(n => `<tr><td>${n.rank}</td><td><button class="link-button" data-action="worker" data-worker="${n.id}">${n.worker}<br><span class="small muted">${n.id}</span></button></td><td>${n.readiness}</td><td><strong>${n.fit}</strong>/100</td><td>${status(n.status, n.status === "Approved" ? "good" : "info")}</td><td>${n.source === "Recommendation" ? marker("ai", "AI proposed") : "Manual"}</td><td>${n.evidence === "Current" ? status("Current", "good") : status(n.evidence, "warn")}</td><td><button class="btn subtle" data-action="worker" data-worker="${n.id}">Review</button></td></tr>`).join("")}</tbody></table></div></section>
    <section class="section ai-callout"><strong>AI review summary ${marker("ai")}</strong><p>Maya remains rank 1 after FY2026 evidence refresh. Her weighted-goal score increased from 90 to 94; Role Fit would increase by 0.4 points. No mandatory qualification gaps were found. Human confirmation is required before creating a new assessment revision.</p><button class="btn" data-action="refresh-evidence">Review refresh</button></section>`;
}

function bellCurveView() {
  const key = state.bellMode === "source" ? "source" : "current";
  return `${pageHeader(`<button class="btn" data-route="distribution">Configure guideline</button><button class="btn" data-action="ai-calibration">${marker("ai", "AI")} Review anomalies</button><button class="btn primary" data-action="submit-calibration">Submit calibration</button>`)}
    <div class="grid cols-4"><article class="card kpi info"><div class="small muted">Session</div><div class="kpi-value" style="font-size:22px">In progress</div><div class="kpi-meta">CAL-2026-018</div></article><article class="card kpi info"><div class="small muted">Population</div><div class="kpi-value">121</div><div class="kpi-meta">Frozen Sep 18</div></article><article class="card kpi warn"><div class="small muted">Adjustments</div><div class="kpi-value">14</div><div class="kpi-meta">4 need reason review</div></article><article class="card kpi warn"><div class="small muted">Guideline variance</div><div class="kpi-value">2</div><div class="kpi-meta">Rating levels outside range</div></article></div>
    <section class="section card"><div class="card-head"><div><h2>Performance distribution</h2><p class="subtitle">Guideline comparison, not forced ranking | FY2026 Finance leaders</p></div>${marker("new", "Bell curve")}</div>
      <div class="command-bar"><button class="btn ${state.bellMode === "source" ? "primary" : ""}" data-action="bell-mode" data-value="source">Source</button><button class="btn ${state.bellMode === "current" ? "primary" : ""}" data-action="bell-mode" data-value="current">Current calibrated</button></div>
      <div class="chart-legend"><span><i class="legend-key ${key}"></i>${state.bellMode === "source" ? "Source" : "Current calibrated"}</span><span><i class="legend-key guide"></i>Guideline target</span></div>
      <div class="bar-chart">${sample.distribution.map(row => `<div class="bar-row"><button class="link-button" data-action="rating-level" data-level="${row.level}">${row.level}</button><div class="bar-track"><div class="bar-${key}" style="width:${row[key]}%"></div><div class="bar-guideline" style="left:${row.guide}%" title="Guideline ${row.guide}%"></div></div><strong>${row[key]}%</strong></div>`).join("")}</div>
      <div class="ai-callout"><strong>${marker("ai")} AI context</strong><p>Exceptional is 5 points above target but within the configured 5-15% range. Meets expectations is 7 points below target and outside its 40-60% accepted range. AI found no evidence to move ratings automatically; it proposes four discussion questions and a variance justification draft.</p></div>
    </section>
    <section class="section grid cols-2"><article class="card"><div class="card-head"><h2>Session steps</h2>${marker("new")}</div><div class="timeline"><div class="timeline-item"><strong>Population frozen</strong><p>121 subjects | 2 excluded with reasons</p></div><div class="timeline-item"><strong>Evidence loaded</strong><p>Reviews, weighted goals, competencies and potential</p></div><div class="timeline-item"><strong>Calibration in progress</strong><p>14 changes | Source records unchanged</p></div><div class="timeline-item"><strong>Submit and approve</strong><p>Publishes results to succession and 9-box</p></div></div></article><article class="card"><div class="card-head"><h2>Data quality</h2>${marker("ai", "AI assisted")}</div><table class="data-table"><tbody><tr><td>Missing potential assessment</td><td><strong>3</strong></td><td><button class="btn subtle" data-action="quality">Review</button></td></tr><tr><td>Stale skill evidence</td><td><strong>7</strong></td><td><button class="btn subtle" data-action="quality">Review</button></td></tr><tr><td>Unresolved adjustment reason</td><td><strong>4</strong></td><td><button class="btn subtle" data-action="quality">Review</button></td></tr></tbody></table></article></section>`;
}

const matrixCells = [
  ["emerging-potential", "Emerging potential", "high", "Low performance / High potential"], ["growth-candidate", "Growth candidate", "high", "Medium performance / High potential"], ["future-leader", "Future leader", "high", "High performance / High potential"],
  ["development-priority", "Development priority", "mid", "Low performance / Medium potential"], ["core-contributor", "Core contributor", "mid", "Medium performance / Medium potential"], ["high-impact", "High-impact contributor", "high", "High performance / Medium potential"],
  ["performance-support", "Performance support", "low", "Low performance / Low potential"], ["experienced-specialist", "Experienced specialist", "mid", "Medium performance / Low potential"], ["trusted-expert", "Trusted expert", "mid", "High performance / Low potential"]
];

function nineBoxView() {
  return `${pageHeader(`<button class="btn" data-route="matrix-config">Configure matrix</button><button class="btn" data-action="matrix-history">Movement history</button><button class="btn primary" data-action="matrix-publish">Publish snapshot</button>`)}
    <div class="card"><div class="card-head"><div><h2>FY2026 Finance talent review</h2><p class="subtitle">Enterprise 9-box V3 | Performance x Potential | Provisional placement</p></div><div class="legend">${marker("new")} ${marker("reused", "Approved evidence")}</div></div>
      <div class="command-bar"><select aria-label="Organization"><option>Finance - All</option></select><select aria-label="Population"><option>Management level 4+</option></select><input aria-label="Search workers" placeholder="Search workers"><button class="btn" data-action="ai-matrix">${marker("ai", "AI")} Suggested actions</button></div>
      <div class="matrix-wrap section"><div class="matrix"><div class="axis-y">Potential: high to low</div>${matrixCells.map(([id, label, tone, desc]) => `<div class="matrix-cell cell-${tone}"><h3><span>${label}</span><span>${sample.workers.filter(w => w.cell === id).length}</span></h3><div class="small muted">${desc}</div>${sample.workers.filter(w => w.cell === id).map(worker => `<button class="worker-chip" data-action="worker" data-worker="${worker.id}"><strong>${worker.name}</strong><span>P ${worker.performance} | U ${worker.potential} | ${worker.readiness}</span></button>`).join("")}</div>`).join("")}<div class="axis-x">Performance: low to high</div></div></div>
      <div class="ai-callout section"><strong>${marker("ai")} AI outcome context</strong><p>Aiden Brooks has high potential but two target-specific skill gaps for VP Finance. Suggested action: lead the FY2027 planning transformation project and pair with mentor Elena Garcia. This is a development suggestion, not a rating change.</p><button class="btn" data-action="worker" data-worker="W-1196">Review evidence</button></div>
    </div>`;
}

function setupView() {
  return `${pageHeader(`<button class="btn" data-action="readiness">Run readiness check</button><button class="btn primary" data-action="ai-setup">${marker("ai", "AI")} Suggest configuration</button>`)}
    <div class="grid cols-3"><article class="card kpi good"><div class="small muted">Setup completion</div><div class="kpi-value">92%</div><div class="progress-track"><div class="progress-fill" style="width:92%"></div></div><div class="kpi-meta">1 Draft configuration remains</div></article><article class="card kpi good"><div class="small muted">Readiness checks</div><div class="kpi-value">18/18</div><div class="kpi-meta">No blocking findings</div></article><article class="card kpi info"><div class="small muted">Active versions</div><div class="kpi-value">14</div><div class="kpi-meta">All have owners and dates</div></article></div>
    <section class="section"><div class="section-title"><div><h2>Guided setup</h2><span class="small muted">Configuration is completed in this order to preserve dependencies.</span></div>${marker("new", "Readiness check")}</div><div class="setup-list">${sample.setup.map((step, index) => `<div class="setup-row"><div class="step-number">${index + 1}</div><div><strong>${step.title}</strong><div class="small muted">${step.detail}</div></div><div>${marker(step.marker)} ${status(step.status, step.status === "Configured" ? "good" : "warn")}</div><button class="btn" data-route="${step.route}">Configure</button></div>`).join("")}</div></section>
    <section class="section ai-callout"><strong>${marker("ai")} Setup copilot</strong><p>Based on existing FY2026 rating models, 27 critical targets and 121 calibration subjects, AI proposes retaining current Performance levels, adding explicit normalization, and creating purpose-specific Readiness and Potential models. All proposals are Draft and require deterministic validation and activation.</p><button class="btn" data-action="ai-setup">Review draft setup</button></section>`;
}

function configView(route) {
  const config = configPages[route];
  const actions = `<button class="btn" data-action="ai-config">${marker("ai", "AI")} Suggest</button><button class="btn" data-action="validate-config">Validate</button><button class="btn" data-action="impact-preview">Preview impact</button><button class="btn primary" data-action="submit-config">Submit for approval</button>`;
  const isRating = route === "rating";
  return `${pageHeader(actions)}
    <div class="grid cols-3"><article class="card"><div class="small muted">Configuration status</div><div class="kpi-value" style="font-size:24px">${route === "recommendation" ? "Draft" : "Active"}</div><div class="kpi-meta">Version 3 | Effective Jul 1, 2026</div></article><article class="card"><div class="small muted">Ownership</div><div class="kpi-value" style="font-size:20px">Talent COE</div><div class="kpi-meta">Legal entity: Shared</div></article><article class="card"><div class="small muted">Surface</div><div style="margin:12px 0">${marker(config.marker)} ${marker("ai")}</div><div class="kpi-meta">Versioned and effective dated</div></article></div>
    <section class="section card"><div class="card-head"><div><h2>Configuration parameters</h2><p class="subtitle">${config.summary}</p></div><button class="btn subtle" data-action="why-config">Why this configuration?</button></div>
      <div class="form-grid">${config.fields.map(([label, value, help], index) => `<div class="field"><label>${label}${index < 2 ? `<span class="required-star">Required</span>` : ""}</label>${value === "Yes" || value === "No" ? `<select><option>${value}</option></select>` : `<input value="${escapeHtml(value)}">`}<div class="field-help">${help}</div></div>`).join("")}</div>
    </section>
    ${isRating ? `<section class="section card"><div class="card-head"><h2>Rating levels</h2><button class="btn">Add level</button></div><div class="data-table-wrap"><table class="data-table"><thead><tr><th>Code</th><th>Label</th><th>Normalized score</th><th>Counts as ready now</th></tr></thead><tbody>${config.levels.map(level => `<tr>${level.map(value => `<td>${value}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>` : ""}
    <section class="section card"><div class="card-head"><h2>Outcome impact</h2>${marker("required", "Traceable")}</div><p>${config.effect}</p><div class="ai-callout"><strong>${marker("ai")} Configuration analysis</strong><p>AI can propose Draft values and explain likely impacts. Deterministic validation remains authoritative; AI cannot activate this configuration or rewrite approved outcomes.</p></div></section>`;
}

function dayView() {
  const roleActions = {
    "HR Business Partner": [["Coverage at risk: Head of Tax", "Create succession plan", "create-plan"], ["Finance calibration needs facilitation", "Open session", "bellcurve"], ["Three recommendations ready", "Review candidates", "ai-candidates"]],
    "Manager": [["Confirm candidate interest", "Open nomination", "plan"], ["Provide calibration evidence for 4 workers", "Open session", "bellcurve"], ["Review team 9-box actions", "Open matrix", "ninebox"]],
    "Calibration Facilitator": [["Resolve 4 adjustment reasons", "Open data quality", "bellcurve"], ["Guideline variance needs justification", "Open bell curve", "bellcurve"], ["Submit CAL-2026-018", "Review session", "bellcurve"]],
    "Executive Approver": [["Approve Finance calibration", "Review change brief", "bellcurve"], ["Approve VP Finance Plan revision", "Open approval", "plan"], ["Review ready-now coverage", "Open dashboard", "succession"]]
  };
  return `${pageHeader(`<label class="small" for="role">View as</label><select id="role" data-action="role-change"><option ${state.role === "HR Business Partner" ? "selected" : ""}>HR Business Partner</option><option ${state.role === "Manager" ? "selected" : ""}>Manager</option><option ${state.role === "Calibration Facilitator" ? "selected" : ""}>Calibration Facilitator</option><option ${state.role === "Executive Approver" ? "selected" : ""}>Executive Approver</option></select>`)}
    <div class="grid cols-3"><article class="card"><div class="small muted">Assigned to me</div><div class="kpi-value">${roleActions[state.role].length}</div><div class="kpi-meta">Security trimmed for ${state.role}</div></article><article class="card"><div class="small muted">Estimated navigation saved</div><div class="kpi-value">19</div><div class="kpi-meta">Deep links and AI preparation</div></article><article class="card"><div class="small muted">Decisions retained by people</div><div class="kpi-value">100%</div><div class="kpi-meta">AI cannot approve talent decisions</div></article></div>
    <section class="section"><div class="section-title"><h2>My day</h2>${marker("enhanced", "Unified actions")}</div><div class="grid cols-3">${roleActions[state.role].map(([title, action, route]) => `<article class="card"><div class="card-head"><h3>${title}</h3>${route.includes("ai") ? marker("ai") : marker("new", "Action")}</div><p class="small muted">Context, due date, evidence state and next command are carried into the destination.</p><button class="btn primary" ${route.includes("ai") || route === "create-plan" ? `data-action="${route}"` : `data-route="${route}"`}>${action}</button></article>`).join("")}</div></section>
    <section class="section card"><div class="card-head"><h2>End-user experience principles</h2>${marker("reused", "Dynamics patterns")}</div><div class="grid cols-3"><div><h3>Context preserved</h3><p class="small">Organization, period, target and filters follow the user between cards, side panes and full pages.</p></div><div><h3>One governed record</h3><p class="small">Position, Job, Worker, Teams and Power BI entry points invoke the same services and workflows.</p></div><div><h3>Explain every suggestion</h3><p class="small">AI cards show source records, confidence, operational saving and the required human checkpoint.</p></div></div></section>`;
}

function coverageView() {
  return `${pageHeader(`<button class="btn" data-action="reload-coverage">Reload source document</button><button class="btn primary" data-action="export-coverage">Export validation</button>`)}
    <div id="coverage-root"><div class="card empty">Loading and validating every actionable list and table line from the requirements document...</div></div>`;
}

function modalView() {
  if (!state.modal) return "";
  const content = {
    "create-plan": ["Create succession plan", `<div class="wizard-steps"><div class="wizard-step active">1 Target</div><div class="wizard-step">2 Plan details</div><div class="wizard-step">3 Coverage</div><div class="wizard-step">4 Review</div></div><div class="form-grid"><div class="field"><label>Target type<span class="required-star">Required</span></label><select><option>Position</option><option>Job</option></select></div><div class="field"><label>Target<span class="required-star">Required</span></label><select><option>P-000315 | Head of Tax</option><option>P-000184 | VP, Global Finance</option></select></div><div class="field"><label>Plan owner</label><input value="Nora Ali"></div><div class="field"><label>Review frequency</label><select><option>12 months</option></select></div><div class="field"><label>Required successors</label><input value="2"></div><div class="field"><label>Required ready-now</label><input value="1"></div><div class="field full"><div class="ai-callout"><strong>${marker("ai")} AI prepared values</strong><p>Owner, coverage and review frequency were resolved from Position, Job and company parameters. Estimated saving: 6 field lookups. Creating the plan remains a human action.</p></div></div></div>`],
    nominate: ["Nominate successor", `<div class="form-grid"><div class="field full"><label>Worker<span class="required-star">Required</span></label><select><option>Aiden Brooks | W-1196</option><option>Fatima Rahman | W-1301</option></select></div><div class="field"><label>Readiness</label><select><option>Ready 1-2 years</option></select></div><div class="field"><label>Rank</label><input value="4"></div><div class="field"><label>Candidate interest</label><select><option>Not confirmed</option></select></div><div class="field"><label>Estimated ready date</label><input value="09/01/2028"></div><div class="field full"><label>Nomination rationale</label><textarea>Strong potential and transformation leadership; requires target-specific treasury exposure.</textarea></div></div>`],
    compare: ["Compare candidates", `<div class="data-table-wrap"><table class="data-table"><thead><tr><th>Candidate</th><th>Performance</th><th>Potential</th><th>Skills</th><th>Goals</th><th>Experience</th><th>Qualifications</th><th>Role fit</th></tr></thead><tbody>${sample.workers.slice(0,3).map(w => `<tr><td>${w.name}</td><td>${w.performance}</td><td>${w.potential}</td><td>${w.skills}</td><td>${w.goals}</td><td>${w.experience}</td><td>${w.qualifications}</td><td><strong>${Math.round(.25*w.performance+.2*w.potential+.3*w.skills+.1*w.goals+.1*w.experience+.05*w.qualifications)}</strong></td></tr>`).join("")}</tbody></table></div><p class="small muted">All components use approved snapshots and configuration profile REC-LEAD-V3.</p>`],
    "impact-preview": ["Configuration impact preview", `<div class="grid cols-3"><article class="card flat"><div class="small muted">Workers changing result</div><div class="kpi-value">7</div></article><article class="card flat"><div class="small muted">Targets changing coverage</div><div class="kpi-value">2</div></article><article class="card flat"><div class="small muted">Historical outcomes rewritten</div><div class="kpi-value">0</div></article></div><div class="data-table-wrap section"><table class="data-table"><thead><tr><th>Measure</th><th>Active V2</th><th>Draft V3</th><th>Difference</th></tr></thead><tbody><tr><td>Qualified recommendations</td><td>28</td><td>24</td><td>-4</td></tr><tr><td>Average Role Fit</td><td>76.2</td><td>75.8</td><td>-0.4</td></tr><tr><td>Ready-now coverage</td><td>63%</td><td>67%</td><td>+4%</td></tr></tbody></table></div><div class="ai-callout"><strong>${marker("ai")} Explanation</strong><p>The draft increases Skills weight and changes Ready in less than 1 year to count toward immediate coverage. No data is changed by this preview.</p></div>`],
    "assess-criticality": ["Assess Position criticality", `<div class="form-grid"><div class="field"><label>Business impact (1-5)</label><input value="5"></div><div class="field"><label>Vacancy risk (1-5)</label><input value="3"></div><div class="field"><label>Talent scarcity (1-5)</label><input value="5"></div><div class="field"><label>Knowledge concentration (1-5)</label><input value="4"></div><div class="field"><label>Time to productivity (1-5)</label><input value="4"></div><div class="field"><label>Regulatory dependency (1-5)</label><input value="3"></div></div><div class="ai-callout section"><strong>Calculated outcome: 82 / High</strong><p>Profile CRIT-LEAD-V2. Critical threshold is 85. AI suggests reviewing talent scarcity evidence before submission; it cannot override the result.</p></div>`]
  }[state.modal] || ["Action", `<p>This click-through action preserves context and invokes the governed Dynamics workflow.</p>`];
  return `<div class="modal-backdrop" role="dialog" aria-modal="true" aria-label="${content[0]}"><div class="modal ${state.modal === "compare" ? "wide" : ""}"><div class="modal-head"><div><h2>${content[0]}</h2><p class="subtitle">Sample data | No production record will be changed</p></div><button class="close-button" data-action="close-modal" aria-label="Close">&times;</button></div><div class="modal-body">${content[1]}</div><div class="modal-foot"><button class="btn" data-action="close-modal">Cancel</button><button class="btn primary" data-action="complete-modal">${state.modal === "compare" ? "Close" : "Save draft"}</button></div></div></div>`;
}

function workerDrawer(workerId) {
  const worker = sample.workers.find(item => item.id === workerId) || sample.workers[0];
  const fit = Math.round(.25*worker.performance+.2*worker.potential+.3*worker.skills+.1*worker.goals+.1*worker.experience+.05*worker.qualifications);
  return `<div class="drawer" role="complementary" aria-label="Worker evidence"><div class="drawer-head"><div><h2>${worker.name}</h2><div class="small muted">${worker.id} | ${worker.role}</div></div><button class="close-button" data-action="close-drawer" aria-label="Close">&times;</button></div><div class="drawer-body"><div class="legend">${marker("reused", "Worker")} ${marker("enhanced", "Talent summary")}</div><section class="section"><h3>Assessment evidence</h3>${[["Performance",worker.performance],["Potential",worker.potential],["Skills",worker.skills],["Weighted goals",worker.goals],["Experience",worker.experience],["Qualifications",worker.qualifications]].map(([label,value]) => `<div class="score-row"><span>${label}</span><div class="score-track"><div class="score-fill" style="width:${value}%"></div></div><strong>${value}</strong></div>`).join("")}<div class="score-row"><strong>Role fit</strong><div class="score-track"><div class="score-fill" style="width:${fit}%"></div></div><strong>${fit}</strong></div></section><section class="section ai-callout"><strong>${marker("ai")} Grounded summary</strong><p>${worker.name} meets all mandatory qualifications. Strongest evidence is weighted goals (${worker.goals}) and skill fit (${worker.skills}). Readiness is ${worker.readiness}. This summary cites approved FY2026 evidence and does not change a rating.</p></section><section class="section"><h3>Source records</h3><ul class="evidence-list"><li>Performance review PR-FY26-${worker.id}</li><li>Weighted goals result WG-FY26-${worker.id}</li><li>Calibration result CAL-2026-017-${worker.id}</li><li>Worker skills snapshot SK-${worker.id}-09</li></ul></section><div class="card-footer"><button class="btn" data-action="move-worker">Propose matrix change</button><button class="btn primary" data-action="nominate">Nominate as successor</button></div></div></div>`;
}

function aiDrawer(kind) {
  const variants = {
    "ai-home": ["Operational suggestions", "Prepared from current activities", ["Create Draft plan for Head of Tax", "Refresh Maya Patel candidate evidence", "Prepare Finance Plan review summary"]],
    "ai-candidates": ["Candidate recommendations", "Target: VP, Global Finance | Profile REC-LEAD-V3", ["Maya Patel | 91 | No mandatory gaps", "Elena Garcia | 88 | Mobility preference unconfirmed", "Jordan Lee | 85 | Treasury skill gap"]],
    "ai-calibration": ["Calibration anomaly review", "CAL-2026-018 | 121 subjects", ["4 changes have insufficient reason detail", "2 managers differ from peer median by > 1 level", "Meets expectations is outside guideline range"]],
    "ai-matrix": ["Suggested talent actions", "Grounded in approved gaps and aspirations", ["Aiden Brooks: transformation project", "Noah Williams: mentor and financial modeling plan", "Maya Patel: confirm mobility interest"]],
    "ai-setup": ["Draft setup proposal", "Existing Dynamics configuration analyzed", ["Reuse Performance model and add normalization", "Create Readiness model with five levels", "Use advisory guideline with 10-person minimum"]],
    "ai-config": ["Configuration suggestion", `Screen: ${routeMeta[state.route][0]}`, ["Draft values use existing policies and historical distributions", "Impact preview is available before submission", "Deterministic validation must pass before activation"]]
  };
  const [title, subtitle, items] = variants[kind] || variants["ai-home"];
  return `<div class="drawer" role="complementary" aria-label="AI suggestions"><div class="drawer-head"><div><h2>${title}</h2><div class="small muted">${subtitle}</div></div><button class="close-button" data-action="close-drawer" aria-label="Close">&times;</button></div><div class="drawer-body"><div class="legend">${marker("ai")} ${marker("required", "Human review")}</div><div class="ai-callout section"><strong>Grounded outcome</strong><p>Generated from records the signed-in user can access. Suggestions are not decisions and are retained with model, prompt and source versions.</p></div><section class="section"><h3>Proposed work</h3>${items.map((item,index) => `<article class="card flat" style="margin-bottom:8px"><strong>${index + 1}. ${item}</strong><p class="small muted">Confidence ${88-index*5}% | Open source evidence</p><div class="command-bar"><button class="btn">View sources</button><button class="btn primary" data-action="accept-ai">Prepare draft</button></div></article>`).join("")}</section><section class="section"><h3>Operational reduction</h3><div class="grid cols-2"><div class="card flat"><div class="small muted">Estimated page transitions</div><div class="kpi-value">-19</div></div><div class="card flat"><div class="small muted">Fields prepared</div><div class="kpi-value">24</div></div></div></section><section class="section"><h3>Sources</h3><ul class="evidence-list"><li>Active configuration versions</li><li>Approved assessments and calibration results</li><li>Worker, Job and Position records</li><li>Finalized weighted goals and skills</li></ul></section></div></div>`;
}

function renderMain() {
  switch (state.route) {
    case "succession": return successionView();
    case "target": return targetView();
    case "plan": return planView();
    case "bellcurve": return bellCurveView();
    case "ninebox": return nineBoxView();
    case "setup": return setupView();
    case "rating": case "parameters": case "criticality": case "distribution": case "matrix-config": case "calibration-config": case "recommendation": case "automation": return configView(state.route);
    case "day": return dayView();
    case "coverage": return coverageView();
    default: return homeView();
  }
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = `${topbar()}<div class="workspace">${sidebar()}<main class="main">${renderMain()}</main></div>${modalView()}${state.drawer ? (state.drawer.startsWith("worker:") ? workerDrawer(state.drawer.split(":")[1]) : aiDrawer(state.drawer)) : ""}${state.toast ? `<div class="toast"><strong>${state.toast.title}</strong>${state.toast.text}</div>` : ""}`;
  if (state.route === "coverage") hydrateCoverage();
}

function routeTo(route) {
  state.route = route;
  state.modal = null;
  state.drawer = null;
  location.hash = route;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(title, text) {
  state.toast = { title, text };
  render();
  window.setTimeout(() => { state.toast = null; render(); }, 2600);
}

function sectionRoute(section, item) {
  const text = `${section} ${item}`.toLowerCase();
  if (/\b(14|nine-box|9-box|matrix)/.test(text)) return "ninebox";
  if (/\b(13|calibrat|bell curve|distribution guideline)/.test(text)) return "bellcurve";
  if (/\b(31|automation|ai-assisted|ai may|ai must)/.test(text)) return "automation";
  if (/\b(28|configuration|parameter|rating model|reason code|workflow configuration)/.test(text)) return "setup";
  if (/\b(29|click-through|starting points)/.test(text)) return "day";
  if (/\b(30|touchpoint|card|activity|engagement)/.test(text)) return "day";
  if (/\b(32|talent pool|mobility|mentorship|project|forms)/.test(text)) return "day";
  if (/\b(8|setup|configure)/.test(text)) return "setup";
  if (/\b(9|10|11|12|15|16|17|succession|nomination|candidate|critical|plan|readiness)/.test(text)) return "succession";
  if (/\b(20|security|privacy|sensitive)/.test(text)) return "day";
  if (/\b(21|notification|alert|22|report|dashboard|23|integration|24|nonfunctional|25|engineering|26|acceptance|27|version 2|33|34)/.test(text)) return "home";
  return "home";
}

function parseRequirements(markdown) {
  let section = "Document";
  const rows = [];
  const lines = markdown.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    const heading = line.match(/^#{2,4}\s+(.+)/);
    if (heading) { section = heading[1].replace(/[*`]/g, ""); continue; }
    let item = "";
    let kind = "";
    const bullet = line.match(/^[-*]\s+(.+)/);
    const numbered = line.match(/^\d+\.\s+(.+)/);
    const table = line.startsWith("|") && line.endsWith("|") && !/^\|[\s:|-]+\|$/.test(line);
    if (bullet) { item = bullet[1]; kind = "Requirement"; }
    else if (numbered) { item = numbered[1]; kind = "Step"; }
    else if (table && index > 0 && !lines[index + 1]?.match(/^\|[\s:|-]+\|$/)) { item = line.split("|").filter(Boolean).map(value => value.trim()).join(" | "); kind = "Field / rule"; }
    if (!item || /^---+$/.test(item)) continue;
    const route = sectionRoute(section, item);
    rows.push({ line: index + 1, section, item: item.replace(/\*\*/g, "").replace(/`/g, ""), kind, route, status: "Mapped" });
  }
  return rows;
}

async function hydrateCoverage(preserveQueryFocus = false) {
  const root = document.getElementById("coverage-root");
  if (!root) return;
  try {
    if (!state.coverage.length) {
      const response = await fetch("Dynamics-HR-Succession-Requirements.md", { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      state.coverage = parseRequirements(await response.text());
    }
    const routes = [...new Set(state.coverage.map(row => row.route))].sort();
    const filtered = state.coverage.filter(row => (state.coverageRoute === "all" || row.route === state.coverageRoute) && (!state.coverageQuery || `${row.section} ${row.item}`.toLowerCase().includes(state.coverageQuery.toLowerCase())));
    const sections = new Set(state.coverage.map(row => row.section));
    root.innerHTML = `<div class="coverage-summary"><article class="card kpi good"><div class="small muted">Actionable lines scanned</div><div class="kpi-value">${state.coverage.length}</div></article><article class="card kpi good"><div class="small muted">Mapped to prototype</div><div class="kpi-value">${state.coverage.filter(row => row.status === "Mapped").length}</div></article><article class="card kpi info"><div class="small muted">Requirement sections</div><div class="kpi-value">${sections.size}</div></article><article class="card kpi good"><div class="small muted">Unmapped</div><div class="kpi-value">${state.coverage.filter(row => row.status !== "Mapped").length}</div></article></div><div class="coverage-filter"><input id="coverage-query" placeholder="Filter requirements" value="${escapeHtml(state.coverageQuery)}"><select id="coverage-route"><option value="all">All prototype areas</option>${routes.map(route => `<option value="${route}" ${state.coverageRoute === route ? "selected" : ""}>${routeMeta[route]?.[0] || route}</option>`).join("")}</select></div><div class="data-table-wrap coverage-list">${filtered.map(row => `<div class="coverage-item"><div>Line ${row.line}<br>${marker("reused", row.kind)}</div><div><strong>${escapeHtml(row.section)}</strong></div><div>${escapeHtml(row.item)}</div><div><button class="btn subtle" data-route="${row.route}">Open screen</button></div></div>`).join("") || `<div class="empty">No matching requirements.</div>`}</div>`;
    const queryInput = document.getElementById("coverage-query");
    queryInput?.addEventListener("input", event => { state.coverageQuery = event.target.value; hydrateCoverage(true); });
    document.getElementById("coverage-route")?.addEventListener("change", event => { state.coverageRoute = event.target.value; hydrateCoverage(); });
    if (preserveQueryFocus && queryInput) {
      queryInput.focus();
      queryInput.setSelectionRange(queryInput.value.length, queryInput.value.length);
    }
  } catch (error) {
    root.innerHTML = `<div class="card"><h2>Requirements file unavailable</h2><p>Run this prototype through the included local server so the browser can load the Markdown traceability source.</p><code>${escapeHtml(error.message)}</code></div>`;
  }
}

document.addEventListener("click", event => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) { routeTo(routeButton.dataset.route); return; }
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const action = actionButton.dataset.action;
  if (["create-plan", "nominate", "compare", "impact-preview", "assess-criticality"].includes(action)) { state.modal = action; render(); return; }
  if (action === "close-modal") { state.modal = null; render(); return; }
  if (action === "complete-modal") { state.modal = null; showToast("Draft saved", "The sample action completed and would now enter the configured workflow."); return; }
  if (action === "worker") { state.drawer = `worker:${actionButton.dataset.worker}`; render(); return; }
  if (action === "close-drawer") { state.drawer = null; render(); return; }
  if (action.startsWith("ai-")) { state.drawer = action; render(); return; }
  if (action === "accept-ai") { showToast("Draft prepared", "AI output was saved as Draft with source and model versions. Human review remains required."); return; }
  if (action === "bell-mode") { state.bellMode = actionButton.dataset.value; render(); return; }
  if (action === "role-change") return;
  if (action === "validate-config") { showToast("Validation passed", "All required fields, weights, thresholds, dates and dependencies are valid."); return; }
  if (action === "submit-config" || action === "submit-plan" || action === "submit-calibration") { showToast("Submitted", "A secured workflow work item was created with a change and evidence summary."); return; }
  if (action === "readiness") { showToast("Readiness check complete", "18 checks passed. No blocking findings; two optional evidence warnings remain."); return; }
  if (action === "refresh-evidence") { showToast("Evidence refresh prepared", "A Draft assessment revision was created. Approved history remains unchanged."); return; }
  if (action === "why-config") { showToast("Configuration resolved", "Position override > Job default > legal entity > shared default. Version 3 applies as of FY2026."); return; }
  if (action === "notify") { routeTo("day"); return; }
  if (action === "reload-coverage") { state.coverage = []; hydrateCoverage(); return; }
  if (action === "export-coverage") { showToast("Validation ready", `${state.coverage.length} actionable requirements are mapped to prototype screens.`); return; }
  showToast("Prototype action", "This action is represented with sample data and preserves the governed workflow context.");
});

document.addEventListener("change", event => {
  if (event.target.matches('[data-action="role-change"]')) { state.role = event.target.value; render(); }
});

window.addEventListener("hashchange", () => {
  const route = location.hash.replace("#", "") || "home";
  if (route !== state.route) {
    state.route = route;
    state.modal = null;
    state.drawer = null;
    render();
  }
});

render();
