export const skills: string[] = [
  "Next.js",
  "Vite",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Jest",
  "Material UI",
  "Ant Designs",
  "Apex Charts",
  "AI Integrations",
  "Google Map",
  "Map My India Api's",
  "HTML",
  "CSS",
  "Figma",
  "Go",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GitHub Actions",
  "Payment Gateways",
  "Git",
  "GitHub",
  "Bitbucket",
  "Jira",
  "Linux",
];

export const experiences = [
  {
    company: "Zino Technologies",
    role: "Software Development Engineer",
    period: "April 2024 - Present",
    location: "Bengaluru, India",
    description:
      "Zino is a low-code development platform that enables users to build, configure, and deploy applications visually. I work on the core renderer engine and internal tools that power the platform’s runtime and visual development experience.",
    achievements: [
      "Implemented a micro-frontend bridge between the logistics tool and the renderer engine, making both systems modular and configurable.",
      "Developed and integrated a logistics analysis tool with Google Maps and Digipins, introducing freight and price visualization that enabled users to identify 30% more anomalies in data patterns.",
      "Implemented a GPU-accelerated layer for Google Map digipin rendering, improving performance for 70,000+ plotted points and reducing DOM manipulation overhead.",
      "Built a low-code Figma engine that converts design files into platform-compatible pages, reducing design-to-development handoff time and accelerating prototyping.",
      "Created a height optimization algorithm that reduced layout shifts by 30% and brought Cumulative Layout Shift (CLS) below 0.1.",
      "Developed a runtime React component system for dynamic feature loading and real-time experimentation, cutting development cycle time to under 1 hour.",
      "Built a low-code chart editor that enabled non-developers to configure visualizations independently, reducing chart development time by 70%.",
      "Implemented a visual job and database flow editor using React Flow, improving system transparency and reducing production bugs by 35%.",
      "Created a step form builder with dynamic state-driven navigation, enhancing UX and reducing form delivery time.",
      "Optimized app performance through lazy loading and asset tuning, improving First Contentful Paint (FCP) by 50%.",
      "Mentored and trained 5+ interns, guiding them through feature implementation, performance optimization, and production deployment.",
    ],
  },
  {
    company: "Praximax Technology",
    role: "Founding Engineer",
    period: "August 2022 - March 2024",
    location: "Bengaluru, India",
    description:
      "Early engineering member contributing to the end-to-end development of Praximax’s workflow analytics and team productivity platform. Focused on improving system scalability, UI consistency, and operational efficiency across the product.",
    achievements: [
      "Designed and built an analytics UI that improved workflow visibility and user understanding by 100%.",
      "Standardized 60+ reusable components across the design system, saving over 400 hours of cumulative development time.",
      "Developed and maintained CI/CD pipelines, reducing deployment time to under 2 minutes and improving release reliability.",
      "Automated periodic insight generation using AWS EventBridge and SQS for continuous data refresh and monitoring.",
      "Led market and competitive analysis for new features, including OKRs, team management, KPI tracking, blocked work insights, and notifications.",
      "Maintained 92% on-time delivery rate and achieved a 1% change failure rate across 2200+ production pull requests.",
    ],
  },
];

export const companyProjects = [
  {
    title: "Zino Low-Code Platform",
    description:
      "A full-stack low-code platform that enables teams to visually build, configure, and deploy web applications. I worked on the renderer engine responsible for translating user-built configurations into functional, interactive pages. The platform supports AI-generated layouts, visual theme editing, and component-level customization, helping developers prototype and iterate faster while maintaining consistency across the app.",
    features:
      "Renderer engine, component configuration, theme customization, permission and access control, chart integration, drag-and-drop page creation, AI layout generation, real-time collaboration",
    tech: [
      "React",
      "Redux",
      "Go",
      "PostgreSQL",
      "AI Integration",
      "ApexCharts",
    ],
    link: "",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
  },
  {
    title: "Zino Freight & Price Tool",
    description:
      "High-performance geospatial logistics intelligence tool that visualizes freight rates, routes, and DigiPin-based pricing across India. Enables logistics teams to detect anomalies and analyze 70k+ data points in real-time, reducing nationwide freight analysis from days to minutes.",
    features:
      "Micro-frontend architecture, Real-time map visualization, Freight anomaly detection, Low-code integration, Optimized rendering for 70k+ DigiPins, Nationwide logistics insights",
    tech: [
      "React",
      "Vite",
      "Redux",
      "Tailwind CSS",
      "Go",
      "Echo",
      "Google Maps API",
      "Mappls API",
      "Microfrontend",
      "Low-code Platform",
    ],
    link: "",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    title: "Zino Low-code Chart Builder",
    description:
      "A modular low-code data visualization tool that lets users create, configure, and deploy interactive charts without writing code. Designed for rapid analytics integration and customizable dashboards.",
    features:
      "Drag-and-drop chart creation, Dynamic data binding, Real-time preview, Customizable themes, Reusable components",
    tech: [
      "React",
      "Tailwind CSS",
      "ApexCharts",
      "Low-code Platform",
      "JavaScript",
    ],
    link: "",
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
  },
  {
    title: "Zino Runtime React Component Renderer",
    description:
      "Dynamic runtime React component rendering engine that compiles and mounts components on-the-fly. Built using Babel and a custom runtime compiler for instant UI generation and code execution within a Redux-managed state environment.",
    features:
      "On-the-fly React compilation, Dynamic component injection, Safe runtime execution, Redux state integration, Developer preview support",
    tech: ["React", "Redux", "Babel", "JavaScript", "Runtime Compiler"],
    link: "",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    title: "Zino Visual Workflow Builder",
    description:
      "Interactive low-code workflow orchestration tool enabling users to design, connect, and execute complex business logic visually. Built with React Flow for node-based editing and Redux for real-time state synchronization.",
    features:
      "Drag-and-drop workflow creation, Node-based editor, Conditional logic, Real-time state management, Exportable workflow definitions",
    tech: ["React", "Redux", "React Flow", "Tailwind CSS", "JavaScript"],
    link: "",
    gradient: "from-purple-500 via-violet-500 to-fuchsia-600",
  },
  {
    title: "Axon Engineering Metrics",
    description:
      "Comprehensive analytics dashboard providing engineering leaders with actionable insights. Integrates with GitHub, Bitbucket, Jira, Slack for data-driven decision making.",
    features:
      "Cycle Time, MTTR, Deployment Frequency, Team Wellbeing, Planning Effectiveness, Multi-platform integrations",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "MongoDB",
      "AWS",
      "Docker",
    ],
    link: "",
    gradient: "from-purple-500 via-pink-500 to-orange-500",
  },

  {
    title: "Axon OKR Dashboard",
    description:
      "Goal-setting framework platform for organizational alignment. Supports public/private OKRs, role-based permissions, automatic progress tracking via Jira integration, and intelligent insights generation for strategic decision-making.",
    features:
      "OKR CRUD operations, Public/Private access, Role-based permissions, Auto progress indicators, Insights, Team assignments, Jira integration",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Jira API",
    ],
    link: "",
    gradient: "from-orange-500 via-red-500 to-pink-600",
  },
  {
    title: "Axon Developer Activity",
    description:
      "Individual contribution analytics tool providing comprehensive insights into code commits, project involvement, task completion, and collaboration patterns. Helps engineering leaders understand team productivity and performance metrics.",
    features:
      "Code activity tracking, Project activity analysis, Team wellbeing metrics, Performance insights",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Jira API",
    ],
    link: "",
    gradient: "from-green-500 via-emerald-500 to-teal-600",
  },
  {
    title: "FCM Chat Notification Service",
    description:
      "Optimized real-time notification system using Firebase Cloud Messaging. Significantly improved chat application performance and user engagement through reliable push notifications.",
    tech: ["FCM", "Firebase", "Real-time Sync", "Node.js", "WebSockets"],
    gradient: "from-yellow-500 via-amber-500 to-orange-600",
  },
  {
    title: "Engineering Insights Automation",
    description:
      "Background service that automatically detects engineering metrics patterns and sends intelligent insights to dashboards and communication platforms. Enables proactive issue detection and resolution.",
    tech: [
      "Node.js",
      "Cron Jobs",
      "MongoDB",
      "Slack API",
      "Teams API",
      "Analytics",
    ],
    gradient: "from-indigo-500 via-purple-500 to-pink-600",
  },
];

export const personalProjects = [
  {
    title: "Shelfbook",
    description:
      "AI-powered note-taking and productivity platform that combines intelligent organization, task management, and knowledge mapping. Designed to help users capture ideas, manage projects, and connect insights using AI assistance and semantic search.",
    features:
      "AI chat assistant for summarization and insights, smart organization with shelves and pages, semantic search, integrated task and calendar system, mind mapping and chart creation, document reader with highlights, cross-device synchronization, and Google OAuth for secure access",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Python",
      "MongoDB",
      "AWS",
      "Google OAuth",
    ],
    link: "https://shelfbook.site/",
    gradient: "from-amber-500 via-pink-500 to-violet-500",
  },
  {
    title: "Task Manager",
    description:
      "Task management application built to streamline daily workflows and improve productivity. Designed for individuals and teams to create, categorize, and track tasks efficiently with real-time updates and progress monitoring.",
    features:
      "Task creation and categorization, priority management, progress tracking, team collaboration, user authentication, cloud deployment, and automated CI/CD pipeline using GitHub Actions and Docker",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "Docker",
      "GitHub Actions",
    ],
    link: "https://task-manager.krishnadas.online",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    title: "Pipeline Builder",
    description:
      "A visual low-code platform for building and executing automated data and logic pipelines. Users can design modular workflows, connect services, and trigger operations through an intuitive drag-and-drop interface.",
    features:
      "Pipeline orchestration, Visual node editor, API and service integration, Conditional execution, Real-time state updates, Low-code workflow deployment",
    tech: [
      "React",
      "Redux",
      "React Flow",
      "Tailwind CSS",
      "Node.js",
      "JavaScript",
    ],
    link: "https://no-code-pipeline-builder.netlify.app/",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
  },
  {
    title: "Diversio",
    description:
      "E-commerce platform built with React and Node.js, providing a seamless shopping experience with real-time payments, order tracking, and user account management.",
    features:
      "Product catalog, Cart operations, Secure Stripe payments, Order management, Product search, User address management, Admin controls",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "GitHub Actions",
      "Docker",
      "Stripe",
    ],
    link: "https://diversio.krishnadas.online/",
    gradient: "from-pink-500 via-rose-500 to-red-600",
  },
];

export const featuredProjects = [
  ...companyProjects.slice(0, 2),
  ...personalProjects.slice(0, 2),
];
