/**
 * Detailed projects data for Bhavy's Portfolio
 * Used for dynamic filtering and interactive case study modals.
 */

const projectsData = [
  {
    id: "nexus-ai-analytics",
    title: "Nexus AI Analytics Suite",
    category: "ai-data",
    categoryLabel: "AI & Data",
    shortDescription: "Enterprise intelligence dashboard providing predictive machine learning insights and real-time telemetry processing.",
    fullDescription: "Nexus AI is an enterprise-grade analytics suite engineered to process millions of real-time event streams and deliver predictive modeling with sub-second latency. Built with modular micro-frontends, responsive chart pipelines, and an autonomous anomaly detection engine.",
    image: "assets/images/project-analytics.jpg",
    tags: ["JavaScript (ES6+)", "Python", "FastAPI", "WebSockets", "Chart.js", "Docker"],
    metrics: [
      { label: "Predictive Accuracy", value: "96.7%" },
      { label: "Daily Inferences", value: "284K+" },
      { label: "Query Latency", value: "< 45ms" }
    ],
    features: [
      "Real-time bidirectional WebSocket telemetry streaming",
      "Interactive multi-model comparison charts and predictive trends",
      "Automated alerting with webhook integrations (Slack, PagerDuty)",
      "Zero-dependency lightweight client rendering with 60 FPS charts"
    ],
    liveUrl: "https://example.com/demo/nexus-ai",
    githubUrl: "https://github.com/bhavy/nexus-ai-analytics",
    year: "2026",
    role: "Lead Full-Stack Architect"
  },
  {
    id: "velocity-fintech",
    title: "Velocity Digital Exchange",
    category: "fullstack",
    categoryLabel: "Full Stack",
    shortDescription: "Ultra-fast crypto & equity trading interface with live order books, portfolio analytics, and automated trade execution.",
    fullDescription: "Velocity is a modern financial platform offering institutional-grade trading interfaces for retail investors. Features interactive candlestick charting, real-time depth-of-market visualization, zero-slippage trade simulation, and bank-grade secure transaction workflows.",
    image: "assets/images/project-fintech.jpg",
    tags: ["JavaScript", "Node.js", "Tailored CSS", "REST & WebSocket", "PostgreSQL", "Redis"],
    metrics: [
      { label: "Trade Execution", value: "< 12ms" },
      { label: "Simulated Volume", value: "$145M" },
      { label: "Active Users", value: "32K+" }
    ],
    features: [
      "Custom Canvas-rendered interactive financial candlestick charts",
      "Live order book with millisecond delta synchronization",
      "Dynamic multi-currency wallet with instant conversions",
      "Fully responsive touch-optimized layout for mobile trading"
    ],
    liveUrl: "https://example.com/demo/velocity-trade",
    githubUrl: "https://github.com/bhavy/velocity-exchange",
    year: "2025",
    role: "Full-Stack Developer"
  },
  {
    id: "flow-neural-canvas",
    title: "FlowCanvas Studio",
    category: "fullstack",
    categoryLabel: "Full Stack",
    shortDescription: "Infinite collaborative node-based workspace for orchestrating AI pipelines, workflow graphs, and multi-agent systems.",
    fullDescription: "FlowCanvas is a next-generation visual workflow studio designed for developers and AI engineers to visually assemble, debug, and monitor complex multi-agent execution graphs with real-time multi-user cursor collaboration.",
    image: "assets/images/project-canvas.svg",
    tags: ["Vanilla JS", "HTML5 Canvas", "SVG Engine", "WebRTC", "CSS Grid", "Node.js"],
    metrics: [
      { label: "Node Capacity", value: "5,000+ nodes" },
      { label: "Rendering Performance", value: "60 FPS" },
      { label: "Concurrent Peers", value: "30+ peers" }
    ],
    features: [
      "Vector bezier-curve dynamic routing and collision prevention",
      "Real-time WebRTC presence with multiplayer cursors and live sync",
      "Direct code export to Python pipelines and JSON schemas",
      "Customizable node inspector with telemetry profiling"
    ],
    liveUrl: "https://example.com/demo/flow-canvas",
    githubUrl: "https://github.com/bhavy/flow-neural-canvas",
    year: "2025",
    role: "Front-End & Systems Engineer"
  },
  {
    id: "mesh-cloud-devops",
    title: "MeshOps GitOps Control Plane",
    category: "tools",
    categoryLabel: "Cloud & Tools",
    shortDescription: "Automated container orchestration dashboard with live canary deployment rollouts, log telemetry, and cluster health monitoring.",
    fullDescription: "MeshOps is an open-source observability and deployment platform that unifies Kubernetes pod monitoring, CI/CD pipelines, and infrastructure as code into a single, intuitive interface with built-in instant terminal streaming.",
    image: "assets/images/project-devops.svg",
    tags: ["JavaScript", "Go", "Docker", "Kubernetes", "Linux", "WebSockets"],
    metrics: [
      { label: "Uptime Monitored", value: "99.98%" },
      { label: "Deploy Time Saved", value: "65%" },
      { label: "Containers Managed", value: "500+" }
    ],
    features: [
      "Integrated virtual terminal emulator with colorized streaming logs",
      "Visual GitOps pipeline stepper with automated rollback triggers",
      "Real-time health telemetry across multi-region clusters",
      "Zero-overhead standalone static client with sub-100kb payload"
    ],
    liveUrl: "https://example.com/demo/mesh-ops",
    githubUrl: "https://github.com/bhavy/meshops-control-plane",
    year: "2024",
    role: "Core Author & DevOps Engineer"
  }
];
