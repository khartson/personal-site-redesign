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
  - id: infrastructure 
    label: Infrastructure
    subtitle: Deployment Targets
    icon: ServerCog 
    context: "Eurofins · Digital Graphene · Propela · homelab"
    skills:
      - label: "Kubernetes"
        professional: "Managed and troubleshot deployments on Azure Kubernetes Services at Eurofins"
        project: Project K8s - a homelab experiment to run a multi-node K8s cluster on ProxMox with Talos Linux, ArgoCD and Gitea 

      - label: "Serverless — AWS Lambda, Azure Functions, Azure Storage, Amazon S3"
        professional: "Leveraged serverless workloads to deploy data integration solutions at Propela. Developed serverless solutions at Digital Graphene"

      - label: "PaaS — Azure SQL Managed Instances, Amazon RDS"
        professional: "Interfaced and developed on Amazon RDS and Azure SQL at Propela and Eurofins"

      - label: "Full stack/edge-native: Cloudflare"
        project: "kylehartson.dev"
        link:
          href: https://github.com/khartson/personal-site-redesign

      - label: "Bare Metal - ProxMox, Linux"
        professional: "Managed bare-metal personal projects across Linux installations and ProxMox virtualized environments"
        project: "A writeup of some of my ProxMox deployments"
        link:
          href: https://khartson.github.io/posts/homelab-setup/

  - id: cloud
    label: Cloud
    subtitle: Azure & AWS
    icon: Cloud
    context: "Eurofins · Digital Graphene · Propela · homelab · Flynn Group"
    professional: "Delivering container platforms and cloud-native applications in production across Azure, AWS, and hybrid lab environments."
    skills:
      - label: "Azure"
        professional: "Performed both support and operations functions in Azure. Experience at Eurofins, Digital Graphene, Root Integrated Systems and Flynn Group. Experience with deploying AKS, Azure Functions, Azure Container Applications, Azure Static Web Applications."

      - label: "AWS"
        professional: "Deployed EC2, ECS and Lambda services at Propela."

      - label: "Proxmox"
        project: "Homelab; manage both container and virtualized resources across a multi-node PVE cluster."

      - label: "Docker and multi-service deployments"
        professional: "Container platforms and multi-service deployments spanning production cloud and lab environments."
        
  - id: automation
    label: Automation
    subtitle: "IaC & delivery"
    icon: Cog
    context: "Digital Graphene · Eurofins · homelab"
    professional: "Standardized IaC and delivery automation across client platforms and private infrastructure."
    project: "Terraform, Ansible, and GitHub Actions pipelines for private and hybrid environments."
    skills:
      - label: "Terraform and Ansible"
        professional: "Led Terraform provisioning at Digital Graphene; Ansible for configuration and lifecycle automation."
        project: "Terraform plus Ansible pipeline for Proxmox LXC lifecycle and Tailnet node authorization."

      - label: "CI/CD Patterns: GitHub Actions, Azure Pipelines"
        professional: "Implemented deployment and security configurations in Azure and GitHub workers."
        project: HeyAPI Swagger Demo - use of GitHub actions to automate TypeScript client generation from an API project
        link:
          href: https://khartson.github.io/posts/ci-codegen/

      - label: "Bash, Zsh, and PowerShell"
        professional: "Day-to-day automation and operational scripting across Linux and Windows hosts."
        project: My Dotfiles (WIP)
        link:
          href: https://github.com/khartson/dotfiles
      
      - label: "GitOps"
        project: "Integrated self-hosted Gitea instance with a ProxMox-hosted Talos K8s cluster to drive declarative GitOps"

  - id: security
    label: Security
    subtitle: "Shift-left Practices"
    icon: ShieldCheck
    context: "Root · Propela · Eurofins · homelab"
    professional: "Security-aware delivery across regulated programs, identity patterns, and edge networking."
    project: "Homelab edge security with pfSense, Tailscale, and automated TLS."
    skills:
      - label: Shift-left DevOps framework implementation
        professional: "Implemented and enforced enterprise security policies in a cloud computing environment at Eurofins."

      - label: Secure SDLC tooling
        professional: Integrated CNAPP, BurpSuite, SonarQube and JFrog into existing workloads at Eurofins; drove implementation and adoption efforts to integrate business unit with Eurofins' global IT management and security frameworks. 

      - label: Infrastructure Education & Management
        professional: "Liaised security and technical resourcing and training to enterprise IT teams to guide secure installation of third-party AVoIP systems at Root Integrated Systems, spanning a variety of security postures, including CMMC2.0 compliance."

      - label: Secure Application Networking
        professional: "Enhanced application network security by enforcing Eurofins' compliance framework on SDN sources such as Azure Application Gateways."
        project: "Homelab edge security: pfSense routing and firewall, Tailscale zero-trust remote access, Caddy for automated TLS and reverse proxy."
        link:
          href: https://khartson.github.io/posts/homelab-setup/
      
      - label: Threat Modeling and Research
        professional: "Participated in threat modeling and developer education platform proof of concept in conjunction with enteprise security teams at Eurofins." 

  - id: monitoring
    label: Monitoring
    subtitle: "Pipelines & signals"
    icon: LineChart
    context: "Root Integrated Systems"
    professional: "Expanded observability pipelines for distributed hardware and operational reliability."
    skills:
      - label: "Splunk — ingestion, search, dashboards"
        professional: "Expanded Splunk pipelines for real-time monitoring of distributed hardware (Root Integrated Systems)."

      - label: "Sentry - Application-level Observability"

      - label: "Node-RED — pipelines and quick integrations"
        professional: "Node-RED pipelines and quick integrations for monitoring and operational workflows (Root)."

      - label: "Investigative logging for reliability"
        project: "Observability work pairing investigative logging with automation-driven environments."
---
