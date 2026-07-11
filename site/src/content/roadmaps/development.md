---
title: "Software development"
pageTitle: "Software development | Kyle Hartson"
headline: "Full-stack software engineering"
subheadline: "Five pillars from my software resume"
headerName: "Kyle Hartson"
headerRole: "Full-stack software engineer"
resumeLabel: "View resume"
resumeHref: "/Resume_April_2026___Software_Dev.pdf"
footerTag: "Kyle Hartson · Languages, frameworks, cloud, data, tools"
theme: development
interaction: click
nodes:
  - id: languages
    label: Languages
    subtitle: Polyglot stack
    icon: CodeXml
    context: "Eurofins · Digital Graphene · Propela · Root Integrated Systems"
    professional: "Full-stack delivery across Python, C#/.NET, TypeScript/React, and related stacks in production and side projects."
    project: "TrackSurfer - a novel, cloud-native audiobook and narration proofing platform developed in C# and React."
    link:
      href: https://www.tracksurfer.io

    skills:
      - label: "Python — integrations, services, and web APIs"
        professional: "General usage scripting, FastAPI and disparate system integrations at Propela Tech; routine scripting and automation tasks at Root Integrated Systems. Experience deploying across AWS Lambda, EC2, and bare-metal virtualization platforms such as ProxMox."
        project: "A Jupyer Notebook showcase of some of my demos with Pandas and NumPy"
        link:
          href: https://github.com/khartson/python-notebooks

      - label: "C# (.NET Core) — API, cloud native and serverless development"
        professional: "Authored major feature and schema revisions to a distributed Laboratory Information System at LIMS, deployed on Kubernetes. Developed a novel audio narration proofing system at Digital Graphene leveraging serverless Azure compute resources to drive a platform with 32x cost savings over comparable tools."
        project: "weather.digitalgraphene.com — C#, React, Azure ACR, Docker."
        link: 
          href: https://github.com/khartson/WeatherForecastApp

      - label: "TypeScript — shared types and modern UI code, React development"
        professional: "Stack modernization and DX improvement efforts at Eurofins, including integrating codegen tools with Open API specifications."

      - label: "JavaScript (React) — product interfaces"
        professional: "JavaScript/TypeScript React development at Digital Graphene, Eurofins."
        project: "RecordKeeper - a RoR/React full-stack web application" 
        link:
          href: https://github.com/khartson/phase-5-project-recordkeeper

      - label: "Ruby — Rails app delivery (RecordKeeper)"
        project: "RecordKeeper — React, Redux, Rails, Postgres."
        link:
          href: https://github.com/khartson/phase-5-project-recordkeeper

      - label: "Go — experiments and hackathon services (Encore)"
        project: "Encore of Eldoria — Go, Encore, Discord API."

      - label: "SQL — relational modeling, reporting, integrations"
        professional: "SQl modeling and data integrations at Propela Tech with Amazon RDS and MySQL. Designed, managed, and reworked schemas for ISO 17025 compliant laboratory data at Eurofins."
        project: "RecordKeeper — React, Redux, Rails, Postgres."
        link:
          href: https://github.com/khartson/phase-5-project-recordkeeper

  - id: frameworks
    label: Frameworks
    subtitle: "Web & services"
    icon: Layers
    context: "Eurofins · Digital Graphene · RecordKeeper · Python services"
    professional: "Framework-driven delivery across React/.NET, Python APIs, and Rails full-stack work."
    skills:
      - label: "React — SPAs, registration portal, LIMS UX"
        professional: "LIMS system user interfaces and web application development at Eurofins and Digital Graphene."

      - label: "Redux — client state (RecordKeeper and patterns)"
        project: "RecordKeeper — React, Redux, Rails, Postgres."
        link:
          href: https://github.com/khartson/phase-5-project-recordkeeper

      - label: "TanStack — server and async UI state (Eurofins)"
        professional: "Implemented service side state management in frontend web applications at Eurofins."

      - label: ".NET Core — services behind regulated workloads"
        professional: "Developed distributed, cloud-native workloads in .NET at Eurofins and Propela. Implemented workloads and routines to manage high-throughput laboratory data operations."

      - label: "FastAPI — Python APIs and integration services"
        professional: "Created a management API for legal workflow integration at Propela."

      - label: "pandas — tabular data and integration-side processing"
        professional: "Leveraged pandas and numpy for data processing solutions at Propela."
        link:
          href: https://github.com/khartson/python-notebooks

      - label: "Ruby on Rails — full stack web development and MVC application design."
        project: "RecordKeeper on GitHub (React, Redux, Rails, Postgres)."
        link:
          href: https://github.com/khartson/phase-5-project-recordkeeper

      - label: "Fluent UI — design tokens, themeable UI (Digital Graphene)"
        professional: "Developed and revamped styling system to leveraging fluent UI paradigms and composable themes for Tracksurfer."
        project: "Tracksurfer"
        link:
          href: https://tracksurfer.io

      - label: "OpenAPI — contract-first APIs and generated clients"
        professional: "Contract-first APIs and generated clients with integration tests for API conformity at Eurofins."
        project: "HeyAPI Swagger Demo Application - a codegen proof of concept to automate frontend client creation compliant with OpenAPI specifications" 
        link:
          href: https://github.com/khartson/HeyAPI-Swagger-Demo

      - label: "Legacy Technologies: ASP Classic, VB6"
        professional: "Continual maintenance and development of replacement systems for LIMS system at Eurofins."

  - id: cloud
    label: "Cloud"
    subtitle: "Platforms & deploy"
    icon: Cloud
    context: "Digital Graphene · Propela · Eurofins · projects"
    professional: "Cloud-native delivery across Azure and AWS with containerized app packaging and infra collaboration."
    project: "weather.digitalgraphene.com — C#, React, Azure ACR, Docker."
    skills:
      - label: "Azure — AKS, SWA, Functions, Blob, ACR; Azure AD for app identity"
        professional: "Cloud-native audio proofing on Azure SWA, Functions, and Blob with major operational cost reduction (Digital Graphene); ACR, Docker and AKS deployments at Eurofins."
        project: "weather.digitalgraphene.com — C#, React, Azure ACR, Docker."
        link:
          href: https://weather.digitalgraphene.com

      - label: "AWS — ECS, Lambda, RDS in regulated-adjacent client environments"
        professional: "Deployed workloads across Lambda, EC2, ECS and RDS at Propela Tech across both legal and healthcare-adjacent data solutions."

      - label: "Docker"
        professional: "Deployed, troubleshot, and secured container images for internal artifact streams on ACR and JFrog at Eurofins. Drove CI/CD and DevSecOps implementation initiatives."

      - label: "Terraform & Ansible — infra collaboration (resume Cloud/Infra)"
        professional: "Leveraged Terraform for automated infastructure provisioning at Propela; leverage Ansible and Terraform pipelines to deploy resources to personal virtualization environment on ProxMox."

      - label: "Edge, static, and web hosting technologies: Vercel, Cloudflare, Bluestack"
        professional: "Overseen and deployed to various hosting providers such as Cloudflare, Bluestack (WordPress) and Vercel for client-side deployments."
        project: kylehartson.dev - deployed via Cloudflare static workers.

  - id: databases
    label: Databases and Storage Solutions
    subtitle: "Relational and Cloud Storage"
    icon: Database
    context: "Propela · Eurofins · Digital Graphene"
    professional: "Persistence and automation for high-volume workflows and app data."
    skills:
      - label: "PostgreSQL"
        project: "RecordKeeper — Postgres behind Rails; schema and migrations as part of shipping features."

      - label: "AWS RDS, MySQL — managed SQL, encryption, and client-driven hardening expectations"
        professional: "Developed on RDS platform for data integrations; configured database solutions to comply with healthcare encryption standards."

      - label: "Azure SQL — cloud-managed relational where Azure is primary"
        professional: "MSSQL on Azure managed instances for Azure-native DBMS at Eurofins."

      - label: "SQL modeling — 3,000+ case workflows and cross-system integrations"
        professional: "Persistence and automation backing high-volume legal workflows and cross-system integrations at Propela."

  - id: tools
    label: Tools
    subtitle: "Delivery & quality"
    icon: Wrench
    context: "Eurofins · Propela · Digital Graphene · Root Integrated Systems"
    professional: "Shift-left delivery, quality tooling, and reproducible pipelines across Azure- and AWS-backed apps."
    skills:
      - label: "Azure DevOps — tickets, pipelines, delivery rhythm"
        professional: "Software development at Eurofins."

      - label: "CI/CD — Azure Pipelines, GitHub Actions"
        professional: "CI automation for code analysis and artifact deployment at Eurofins; infrastructure, security and deployment automation for personal projects."
        project: "Homelab Scripts — Tailscale and GH actions integrations to remotely and securely deploy resources to a local ProxMox instance." 

      - label: "Linux — development, deployment, and system administration"
        professional: "Deployed to virtualized and containerized Linux environments at Propela and Eurofins."
        project: "Personal use — WSL2, ProxMox VMs, Talos Linux (for Kubernetes), Debian, Alpine and Ubuntu container workloads" 

      - label: "SAST/DAST — SonarQube, BurpSuite, Aikido"
        professional: "Security quality awareness with SAST/DAST in delivery workflows."
        project: "This site is secured with Aikido, SonarQube, and GitHub security features to scan and identify source code vulnerabilities, dynamic vulnerabilities, and insecure packages."

      - label: "Splunk — operations and telemetry where required"
        professional: "Maintained an IoT observability platform leveraging Splunk for log aggregation and analysis at Root Integrated Systems."

      - label: "OpenAPI codegen & integration tests"
        professional: "."
        project: "HeyAPI Swagger Demo Application - a codegen proof of concept to automate frontend client creation compliant with OpenAPI specifications" 
        link: 
          href: https://github.com/khartson/HeyAPI-Swagger-Demo

      - label: "AI-assisted prototyping — faster frontend iteration"
        professional: "Leveraged efficient design and planning tools (Google Stitch, Figma) to iterate frontend mockups."

      - label: "Architecture docs — HLD and C4 diagrams for audits (Eurofins)"
        project: "Eurofins: retrospective HLDs/C4 alongside LIMS modernization."
---
