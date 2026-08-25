export const profile = {
  name: "Akhila Nair",
  role: "Senior DevOps Engineer",
  headline: "I build systems that stay reliable—and AI that helps operate them.",
  availability: "Exploring opportunities in Bangalore, Mumbai, and Dubai.",
  locationSignal: "Bangalore · Mumbai · Dubai",
  email: "akhilanair1412@gmail.com",
  phone: "+91 7900006827",
  linkedin: "https://linkedin.com/in/akhilanair",
  medium: "https://medium.com/@akhila_nair",
  resume: "/akhila-nair-resume.pdf",
  github: "https://github.com/Akhila14",
  portraitAlt: "Akhila Nair standing outdoors along a green walkway",
  summary:
    "Senior DevOps Engineer with 6+ years of experience building scalable cloud-native platforms and reliability systems across AWS and Azure. I work where Kubernetes, infrastructure automation, observability, and AI-assisted operations meet."
};

export const metrics = [
  { value: "150+", label: "production EKS clusters upgraded" },
  { value: "0", label: "downtime during fleet upgrade" },
  { value: "15 min", label: "production readiness from days" },
  { value: "10 min", label: "RCA review flow from roughly 5 hours" },
  { value: "60%", label: "logging cost reduction with Coralogix" }
];

export const caseStudies = [
  {
    slug: "production-readiness",
    title: "Agentic production readiness",
    kicker: "Go/No-Go at scale",
    summary:
      "An org-wide readiness framework that turned a days-long manual review into a 15-minute automated assessment.",
    homepageSummary:
      "A readiness flow that gives teams consistent signals before launch instead of another subjective review meeting.",
    homepageNote: "Making launch reviews feel less like guesswork.",
    result: "Days to 15 minutes",
    scale: "Security, observability, reliability, and cell-health checks",
    stack: ["Claude Skills", "Subagents", "Kubernetes", "Observability", "Scorecards"],
    problem:
      "Production readiness reviews had too much manual interpretation. Every service needed consistent signals, objective scoring, and a faster path to a high-confidence launch decision.",
    approach:
      "Designed an agentic Go/No-Go system where specialist subagents evaluate readiness across core operational domains, then assemble an auditable scorecard for review.",
    contribution:
      "Defined the evaluation model, built the skill orchestration pattern, shaped the scorecard, and anchored the workflow in production reliability criteria.",
    outcome:
      "Reduced readiness evaluation from days to around 15 minutes while improving consistency across services and reviewers.",
    architecture: [
      "Service context",
      "Subagent checks",
      "Risk scoring",
      "Go/No-Go report"
    ]
  },
  {
    slug: "eks-upgrade",
    title: "EKS fleet upgrade",
    kicker: "Zero-downtime platform work",
    summary:
      "A repeatable upgrade pipeline for 150+ production EKS clusters using analyzer, node rotation, and cluster upgrade skills.",
    homepageSummary:
      "A safer upgrade rhythm for a large Kubernetes fleet, with checks and sequencing built into the path.",
    homepageNote: "Making scary fleet changes feel routine.",
    result: "150+ clusters, zero downtime",
    scale: "Production fleet across critical workloads",
    stack: ["Amazon EKS", "Kubernetes", "Bottlerocket", "Karpenter", "Automation"],
    problem:
      "Large fleet upgrades are high-risk: version drift, node rotation timing, service disruption, and operational handoffs can make the process slow and brittle.",
    approach:
      "Built an auditable path that analyzed target versions, sequenced node rotations, validated cluster states, and kept the rollout repeatable across the fleet.",
    contribution:
      "Led the org-wide upgrade motion, automated the core checks, and created a safer operating rhythm for production cluster changes.",
    outcome:
      "Upgraded more than 150 production clusters with zero downtime and converted a risky manual operation into a controlled pipeline.",
    architecture: [
      "Version analyzer",
      "Upgrade plan",
      "Node rotation",
      "Fleet validation"
    ]
  },
  {
    slug: "rcagpt",
    title: "RCAgpt",
    kicker: "Incident learning faster",
    summary:
      "An AI-assisted incident management tool that drafts RCA narratives from incident signals for faster review.",
    homepageSummary:
      "An AI-assisted incident review tool that helps tired engineers turn scattered signals into a first draft.",
    homepageNote: "Making post-incident learning gentler on tired engineers.",
    result: "Roughly 5 hours to 10 minutes",
    scale: "Incident signals, logs, notes, and post-mortem context",
    stack: ["LLMs", "Vector Databases", "Incident Management", "RAG", "AIOps"],
    problem:
      "After firefighting an incident, engineers still had to reconstruct timelines, pull scattered signals together, and turn them into a consistent RCA draft.",
    approach:
      "Used LLMs and vector search to gather incident context, extract the likely timeline and contributing signals, then generate a draft for human review.",
    contribution:
      "Built and published the tool, shaped the review-first workflow, and focused the experience on reducing toil while keeping engineers accountable for the final RCA.",
    outcome:
      "Cut RCA preparation from roughly five hours of writing to about ten minutes of review and improved consistency across post-mortems.",
    architecture: [
      "Incident signals",
      "Vector retrieval",
      "RCA draft",
      "Engineer review"
    ]
  }
] as const;

export const experience = [
  {
    company: "Razorpay",
    location: "Bangalore, India",
    role: "Senior DevOps Engineer",
    period: "Oct 2024 - Present",
    highlights: [
      "Led multi-AZ and regional disaster recovery strategy for production EKS platforms.",
      "Built agentic production readiness, RCAgpt, alerting, ingress routing, EKS fleet upgrade, Bottlerocket migration, and Coralogix logging cost optimization.",
      "Reduced centralized logging cost by nearly 60%, around $14K, while improving log quality and query performance."
    ]
  },
  {
    company: "Tresata",
    location: "Bangalore, India",
    role: "Senior DevOps Engineer / DevOps Engineer",
    period: "May 2021 - Oct 2024",
    highlights: [
      "Transformed an in-house product into a scalable SaaS platform across AWS EKS and Azure AKS.",
      "Designed secure multi-tenancy, Kubernetes onboarding patterns, autoscaling, dashboards, and cloud infrastructure foundations.",
      "Improved resource efficiency through Karpenter and Azure-native scaling strategies."
    ]
  },
  {
    company: "Rapid Micro Bio Systems",
    location: "Lowell, USA",
    role: "Software Quality Assurance Engineer",
    period: "Jul 2020 - Apr 2021",
    highlights: [
      "Migrated on-premise services into a secure AWS VPC.",
      "Automated manufacturing workflows with Python, reducing turnaround time by 40%."
    ]
  }
];

export const capabilities = [
  {
    group: "Cloud & Platform",
    skills: ["AWS", "Azure", "Kubernetes", "Docker", "Helm", "Karpenter"]
  },
  {
    group: "Infrastructure Automation",
    skills: ["Terraform", "GitHub Actions", "CI/CD", "Python", "Bash"]
  },
  {
    group: "Reliability & Observability",
    skills: ["Prometheus", "Victoria Metrics", "Grafana", "Coralogix", "OpenSearch", "New Relic", "SLO/SLA design"]
  },
  {
    group: "AI-Driven Operations",
    skills: ["LLMs", "Agentic automation", "Claude Skills", "Subagent orchestration", "Vector databases", "AIOps"]
  },
  {
    group: "Resiliency",
    skills: ["Multi-AZ DR", "Regional DR", "Production readiness", "Platform scalability", "Incident management"]
  }
];

export const education = [
  {
    school: "University of Massachusetts Boston",
    credential: "Masters in Computer Engineering",
    period: "Aug 2017 - May 2019"
  },
  {
    school: "University of Mumbai",
    credential: "Bachelors in Electronics Engineering",
    period: "Jul 2013 - May 2017"
  }
];

export const certifications = ["AWS Solution Architect", "Microsoft Azure Fundamentals"];

export const writing = [
  {
    title: "The Night the AI Knew Before I Did",
    homeTitle: "The Night the AI Knew Before I Did",
    label: "Part 1",
    url: "https://medium.com/@akhila_nair/the-night-the-ai-knew-before-i-did-751c8a3f9f2f",
    note: "The moment AI moved from automation idea to on-call partner."
  },
  {
    title: "You Don't Have to Understand Everything. You Have to Understand Enough.",
    homeTitle: "You Don't Have to Understand Everything. You Have to Understand Enough.",
    label: "Part 2",
    url: "https://medium.com/@akhila_nair/you-dont-have-to-understand-everything-you-have-to-understand-enough-5b6bf31aa9c0",
    note: "A working model for deciding where AI can act and where humans review."
  },
  {
    title: "Your Agent Can Look Perfectly Healthy and Be Completely Broken",
    homeTitle: "Your Agent Can Look Perfectly Healthy and Be Completely Broken",
    label: "Part 3",
    url: "https://medium.com/@akhila_nair/your-agent-can-look-perfectly-healthy-and-be-completely-broken-b32cc6f7509f",
    note: "AIOps, health signals, and the difference between green dashboards and real readiness."
  },
  {
    title: "How We Turned 5 Hours of RCA Writing Into 10 Minutes of Review",
    homeTitle: "RCAgpt: Helping Incidents Become Stories Teams Can Learn From",
    label: "RCAgpt",
    url: "https://medium.com/razorpay-engineering/how-we-turned-5-hours-of-rca-writing-into-10-minutes-of-review-3a154e69c8ec",
    note: "A public case narrative for LLM-assisted incident review."
  }
];

export const sideProjects = [
  {
    title: "kubectl-gonogo",
    label: "Kubernetes release gate",
    url: "https://github.com/Akhila14/kubectl-gonogo",
    summary:
      "A kubectl plugin for GO/NO-GO release checks and HEALTHY/AT-RISK drift audits on live Kubernetes deployments.",
    detail: "Built in Go for the exact kind of question platform teams ask before a rollout: is this ready, drifting, or risky?"
  },
  {
    title: "aisplaining / AI Trace",
    label: "Local-first AI observability",
    url: "https://github.com/akhila14/aisplaining",
    summary:
      "A zero-dependency Python tool that turns agent traces, tool retries, latency shifts, and cost into plain-English status notes instead of another wall of spans.",
    detail: "Claude Code imports, SDK tracing, OTLP ingest, SQLite storage, and a tiny dashboard when graphs are actually useful."
  },
  {
    title: "aistory",
    label: "Your AI week as a story",
    url: "https://github.com/akhila14/aistory",
    summary:
      "A weekly AI digest that reads leaderboards, arXiv, and public builder chatter, then turns it into a short story you can actually enjoy reading.",
    detail: "Zero required dependencies, optional LLM narration, scheduled email delivery, and automatic tracing through aisplaining."
  }
];
