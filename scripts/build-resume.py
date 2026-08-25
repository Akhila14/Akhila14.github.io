from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer

OUTPUT = "public/akhila-nair-resume.pdf"


def p(text, style):
    return Paragraph(text, style)


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        "Name",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=23,
        leading=26,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#17231B"),
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        "Role",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=12,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#1E5B3D"),
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        "Contact",
        parent=styles["Normal"],
        fontSize=8.2,
        leading=10,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#405145"),
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        "Section",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=9.2,
        leading=11,
        textColor=colors.HexColor("#C96446"),
        spaceBefore=6,
        spaceAfter=3,
        borderWidth=0,
    )
)
styles.add(
    ParagraphStyle(
        "Body",
        parent=styles["BodyText"],
        fontSize=7.9,
        leading=9.6,
        textColor=colors.HexColor("#17231B"),
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        "Small",
        parent=styles["BodyText"],
        fontSize=7.35,
        leading=8.8,
        textColor=colors.HexColor("#405145"),
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        "ResumeBullet",
        parent=styles["BodyText"],
        fontSize=7.25,
        leading=8.7,
        leftIndent=10,
        firstLineIndent=-6,
        textColor=colors.HexColor("#17231B"),
        spaceAfter=1.7,
    )
)


summary = (
    "Senior DevOps Engineer with 6+ years of experience building scalable cloud-native platforms and reliability "
    "systems across AWS and Azure. Experienced in combining Kubernetes, Infrastructure as Code, and AI-driven "
    "automation to solve complex operational challenges, from agentic production readiness frameworks and intelligent "
    "incident tooling to large-scale EKS upgrades and disaster recovery automation."
)

skills = [
    "<b>Cloud & Platform Engineering:</b> AWS, Azure, Kubernetes, Docker, Helm, Karpenter",
    "<b>Infrastructure Automation:</b> Terraform, GitHub Actions, CI/CD Pipelines, Python, Bash",
    "<b>Observability & Reliability:</b> Prometheus, Victoria Metrics, Grafana, Coralogix, OpenSearch, New Relic, Incident Management, SLO/SLA Design",
    "<b>AI-Driven Operations:</b> LLMs, Claude Skills, Agentic Automation, Subagent Orchestration, Vector Databases, AIOps",
    "<b>Distributed Systems:</b> Multi-AZ and Regional Disaster Recovery, Production Readiness, Platform Scalability",
]

jobs = [
    (
        "Razorpay, Bangalore, India",
        "Senior DevOps Engineer | Oct 2024 - Present",
        [
            "Led multi-AZ and regional DR strategy for production EKS platforms, using AI-assisted analysis and automated observability workflows to validate failovers, detect drift, and reduce manual operational overhead.",
            "Designed an org-wide Go/No-Go production readiness framework that replaced a days-long manual process with a 15-minute automated assessment using Claude Skills and specialist subagents.",
            "Architected header-driven ingress routing policies for tenant-segmented traffic across EKS, improving traffic governance, rollout safety, and operational flexibility.",
            "Redesigned Prometheus and Victoria Metrics alerting by consolidating redundant alerts, setting dynamic thresholds, and streamlining escalation flows.",
            "Led an org-wide Amazon EKS upgrade across 150+ production clusters with zero downtime, automating version analysis, node rotation, and cluster upgrade workflows.",
            "Built and published RCAgpt, an AI-driven incident management tool using vector databases and LLMs to auto-generate RCA drafts from incident signals.",
            "Re-architected centralized logging with Coralogix, cutting application logging costs by nearly 60% while improving log quality and query performance.",
            "Built an in-house cronjob management platform and led org-wide migration to Bottlerocket OS for stronger security posture and patching reliability.",
        ],
    ),
    (
        "Tresata, Bangalore, India",
        "Senior DevOps Engineer | Oct 2022 - Oct 2024",
        [
            "Led transformation of an in-house product into a scalable SaaS platform using Kubernetes across AWS EKS and Azure AKS.",
            "Designed secure multi-tenancy in Kubernetes with namespace isolation and controlled resource sharing across customers.",
            "Architected autoscaling strategies using Karpenter on AWS and Azure-native scaling to improve resource efficiency and reduce costs.",
        ],
    ),
    (
        "Tresata, Bangalore, India",
        "DevOps Engineer | May 2021 - Oct 2022",
        [
            "Built foundational Kubernetes infrastructure across AWS EKS and Azure AKS to support platform scalability.",
            "Developed operational dashboards using New Relic and standardized deployment and observability practices across services.",
        ],
    ),
    (
        "Rapid Micro Bio Systems, Lowell, USA",
        "Software Quality Assurance Engineer | Jul 2020 - Apr 2021",
        [
            "Migrated on-premise services into a secure AWS VPC, improving scalability and infrastructure reliability.",
            "Automated manufacturing workflows with Python, reducing turnaround time by 40%.",
        ],
    ),
]

story = [
    p("Akhila Nair", styles["Name"]),
    p("Senior DevOps Engineer", styles["Role"]),
    p("akhilanair1412@gmail.com - linkedin.com/in/akhilanair - medium.com/@akhila_nair", styles["Contact"]),
    p("Exploring opportunities in Bangalore, Mumbai, and Dubai.", styles["Contact"]),
    p("PROFILE SUMMARY", styles["Section"]),
    p(summary, styles["Body"]),
    p("TECHNICAL SKILLS", styles["Section"]),
]

for item in skills:
    story.append(p(item, styles["Small"]))

story += [p("WORK EXPERIENCE", styles["Section"])]
for company, role, bullets in jobs:
    story.append(p(f"<b>{company}</b>", styles["Body"]))
    story.append(p(role, styles["Small"]))
    for bullet in bullets:
        story.append(p(f"- {bullet}", styles["ResumeBullet"]))

story += [
    p("EDUCATION", styles["Section"]),
    p("<b>University of Massachusetts Boston, USA</b> - Masters in Computer Engineering | Aug 2017 - May 2019", styles["Small"]),
    p("<b>University of Mumbai, India</b> - Bachelors in Electronics Engineering | Jul 2013 - May 2017", styles["Small"]),
    p("CERTIFICATIONS", styles["Section"]),
    p("AWS Solution Architect - Microsoft Azure Fundamentals", styles["Small"]),
    Spacer(1, 0.05 * inch),
]

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=letter,
    rightMargin=0.42 * inch,
    leftMargin=0.42 * inch,
    topMargin=0.32 * inch,
    bottomMargin=0.3 * inch,
    title="Akhila Nair - Senior DevOps Engineer Resume",
    author="Akhila Nair",
)
doc.build(story)
