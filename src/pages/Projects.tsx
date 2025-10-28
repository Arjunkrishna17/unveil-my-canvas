import { Navigation } from "@/components/Navigation";
import { GridBackground } from "@/components/GridBackground";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const companyProjects = [
  {
    title: "Zino Hybrid Editor",
    description: "Revolutionary low-code platform enabling rapid application development. Features include drag-and-drop interface, real-time collaboration, theme customization, and AI-powered page generation. Reduced development time by 50% across the organization.",
    features: "Creating pages, permissions management, theme/table/button editing, drag-and-drop, charts integration, templates, AI page creation",
    tech: ["React", "TypeScript", "CSS3", "Real-time Sync", "AI Integration", "Bitbucket", "Low-code Platform"],
    link: "https://getzino.com/",
    gradient: "from-cyan-500 via-blue-500 to-purple-600"
  },
  {
    title: "Axon Engineering Metrics",
    description: "Comprehensive engineering analytics platform integrating with GitHub, Bitbucket, Jira, Slack, and Teams. Provides intelligent dashboards with drill-down capabilities, automatic insights generation, and performance bottleneck detection. Elevated page loading by 10x.",
    features: "Cycle Time, MTTR, Deployment Frequency, Risky PRs, Blocked Work, Team Wellbeing, Planning Effectiveness, Multi-platform integrations",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AWS", "Docker", "GitHub Actions", "Stripe", "Google Analytics"],
    link: "https://www.getaxon.io/",
    gradient: "from-purple-500 via-pink-500 to-rose-600"
  },
  {
    title: "Axon OKR Dashboard",
    description: "Goal-setting framework platform for organizational alignment. Supports public/private OKRs, role-based permissions, automatic progress tracking via Jira integration, and intelligent insights generation for strategic decision-making.",
    features: "OKR CRUD operations, Public/Private access, Role-based permissions, Auto progress indicators, Insights, Team assignments, Jira integration",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Docker", "GitHub Actions", "Jira API"],
    link: "https://www.getaxon.io/",
    gradient: "from-orange-500 via-red-500 to-pink-600"
  },
  {
    title: "Axon Developer Activity",
    description: "Individual contribution analytics tool providing comprehensive insights into code commits, project involvement, task completion, and collaboration patterns. Helps engineering leaders understand team productivity and performance metrics.",
    features: "Code activity tracking, Project activity analysis, Team wellbeing metrics, Performance insights",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Docker", "GitHub Actions", "Jira API"],
    link: "https://www.getaxon.io/pricing",
    gradient: "from-green-500 via-emerald-500 to-teal-600"
  },
  {
    title: "FCM Chat Notification Service",
    description: "Optimized real-time notification system using Firebase Cloud Messaging. Significantly improved chat application performance and user engagement through reliable push notifications.",
    tech: ["FCM", "Firebase", "Real-time Sync", "Node.js", "WebSockets"],
    gradient: "from-yellow-500 via-amber-500 to-orange-600"
  },
  {
    title: "Engineering Insights Automation",
    description: "Background service that automatically detects engineering metrics patterns and sends intelligent insights to dashboards and communication platforms. Enables proactive issue detection and resolution.",
    tech: ["Node.js", "Cron Jobs", "MongoDB", "Slack API", "Teams API", "Analytics"],
    gradient: "from-indigo-500 via-purple-500 to-pink-600"
  }
];

const personalProjects = [
  {
    title: "Weather Dashboard",
    description: "Beautiful weather application with real-time data, forecasts, and location-based predictions. Features animated weather icons and detailed meteorological information.",
    tech: ["React", "OpenWeather API", "Geolocation"],
    gradient: "from-blue-400 via-cyan-400 to-teal-400"
  },
  {
    title: "Smart Todo App",
    description: "Feature-rich productivity app with local storage, categories, priorities, and smart sorting algorithms.",
    tech: ["React", "LocalStorage", "Algorithms"],
    gradient: "from-violet-400 via-purple-400 to-fuchsia-400"
  },
  {
    title: "AI Tic Tac Toe",
    description: "Interactive game featuring minimax algorithm AI opponent with multiple difficulty levels.",
    tech: ["React", "Game Theory", "AI Algorithms"],
    gradient: "from-pink-400 via-rose-400 to-red-400"
  },
  {
    title: "Portfolio Analytics",
    description: "Custom analytics dashboard for tracking portfolio performance and visitor engagement.",
    tech: ["React", "Analytics API", "Charts"],
    gradient: "from-emerald-400 via-green-400 to-lime-400"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GridBackground />
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-6"
        >
          <Badge className="px-4 py-2 bg-primary/10 border-primary/30 text-primary">
            <Rocket className="w-4 h-4 mr-2" />
            Project Portfolio
          </Badge>
          <h1 className="text-6xl lg:text-7xl font-bold">
            <span className="text-gradient-primary">Crafting</span> Digital
            <br />
            Excellence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From enterprise-scale platforms to innovative personal projects, 
            each solution is built with precision, performance, and user experience in mind.
          </p>
        </motion.div>

        {/* Company Projects */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 space-y-3"
          >
            <Badge className="px-4 py-2 bg-secondary/10 border-secondary/30 text-secondary">
              Professional Work
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-gradient-secondary">Enterprise</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Production-grade applications serving thousands of users worldwide
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {companyProjects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                {...project} 
                index={index}
                size="large"
              />
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 space-y-3"
          >
            <Badge className="px-4 py-2 bg-accent/10 border-accent/30 text-accent">
              Side Projects
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-gradient-accent">Experimental</span> Playground
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Personal projects exploring new technologies and creative ideas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {personalProjects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                {...project} 
                index={index}
                size="small"
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 mb-20"
        >
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2 p-6 glass-panel rounded-2xl hover-lift">
              <p className="text-5xl font-bold text-gradient-primary">10+</p>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="text-center space-y-2 p-6 glass-panel rounded-2xl hover-lift">
              <p className="text-5xl font-bold text-gradient-secondary">50%</p>
              <p className="text-muted-foreground">Time Reduction</p>
            </div>
            <div className="text-center space-y-2 p-6 glass-panel rounded-2xl hover-lift">
              <p className="text-5xl font-bold text-gradient-accent">10x</p>
              <p className="text-muted-foreground">Performance Boost</p>
            </div>
            <div className="text-center space-y-2 p-6 glass-panel rounded-2xl hover-lift">
              <p className="text-5xl font-bold text-gradient-primary">1000+</p>
              <p className="text-muted-foreground">Users Impacted</p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Projects;
