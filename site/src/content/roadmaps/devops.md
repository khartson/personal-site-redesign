---
title: "Cloud & platform engineering"
pageTitle: "Cloud & platform engineering | Kyle Hartson"
headline: "Cloud & platform engineering"
subheadline: "Four pillars from my DevOps resume"
headerName: "Kyle Hartson"
headerRole: "Systems & cloud engineer"
resumeLabel: "View resume"
resumeHref: "/Resume_April_2026___DevOps.pdf"
footerTag: "Kyle Hartson — Cloud, automation, security, observability"
theme: devops
interaction: click
nodes:
  - id: cloud
    label: Cloud
    subtitle: Azure & AWS
    icon: Cloud
    context: "Eurofins · Digital Graphene · Propela · homelab"
    overviewBullets:
      - "Azure — SWA, Functions, ACR, AKS"
      - "AWS — ECS, RDS, Lambda"
      - "Proxmox — LXC/VM and hybrid lab"
      - "Docker and multi-service deployments"
    professional: "Delivering container platforms and cloud-native stacks in production—AKS/ACR and API resilience at Eurofins, Azure SWA/Functions/Blob cost optimization at Digital Graphene, HIPAA-oriented ECS/RDS patterns at Propela."
    project: "Homelab hybrid cloud: Proxmox HA cluster with Cisco Catalyst L3 switching; Azure ACR + Container Instances + SWA prototype with IAM and service principals."
  - id: automation
    label: Automation
    subtitle: "IaC & delivery"
    icon: Cog
    context: "Digital Graphene · Eurofins · homelab"
    overviewBullets:
      - "Terraform and Ansible"
      - "GitHub Actions and CI/CD patterns"
      - "Bash, Zsh, and PowerShell"
      - "Contract-first OpenAPI and type-safe generated clients"
    professional: "Standardized IaC by leading Terraform for provisioning (Digital Graphene); supported CI/CD and shift-left DX with OpenAPI-driven client generation (Eurofins)."
    project: "Terraform plus Ansible pipeline for Proxmox LXC lifecycle and Tailnet node authorization; GitHub Action runners integrated with Tailscale for deploys to private infrastructure."
  - id: security
    label: Security
    subtitle: "Regulated & edge"
    icon: ShieldCheck
    context: "Root · Propela · Eurofins · homelab"
    overviewBullets:
      - "GCC High and CMMC programs"
      - "HIPAA-oriented controls on AWS (RDS, policies, secrets)"
      - "Auth0, Okta, and Entra ID patterns"
      - "pfSense edge, Tailscale mesh, TLS and IAM hygiene"
    professional: "Technical onboarding and documentation for GCC High Azure and CMMC 2.0 environments (Root); HIPAA-aligned RDS encryption and policies (Propela); Auth0 and encrypted barcode access patterns (Eurofins)."
    project: "Homelab edge security: pfSense routing and firewall, Tailscale zero-trust remote access, Caddy for automated TLS and reverse proxy to internal services."
  - id: monitoring
    label: Monitoring
    subtitle: "Pipelines & signals"
    icon: LineChart
    context: "Root Integrated Systems"
    overviewBullets:
      - "Splunk — ingestion, search, dashboards"
      - "Node-RED — pipelines and quick integrations"
      - "Telemetry from distributed and lab hardware"
      - "Investigative logging for reliability"
    professional: "Expanded Splunk and Node-RED pipelines for real-time monitoring of distributed hardware (Root Integrated Systems)."
    project: "Observability work pairs with homelab and automation: centralized logging patterns and actionable signals alongside IaC-driven environments."
---
