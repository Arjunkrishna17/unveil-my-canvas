import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GridBackground } from "@/components/GridBackground";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Rocket,
  Download,
  Briefcase,
  Building2,
  Zap,
  MapPin,
  Users,
  Compass,
  BookOpen,
  Swords,
  Music,
  BikeIcon,
  Footprints,
  Bike,
} from "lucide-react";
import { Footer } from "@/components/Footer";

const skills = [
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

const experiences = [
  {
    company: "Zino Technologies",
    role: "Software Development Engineer",
    period: "April 2024 - Present",
    location: "Bengaluru, India",
    description:
      "Zino is a low-code development platform that enables users to build, configure, and deploy applications visually. I work on the core renderer engine and internal tools that power the platform’s runtime and visual development experience.",
    achievements: [
      "Developed and integrated a logistics analysis tool with Google Maps and Digipins, introducing freight and price visualization that enabled users to identify 30% more anomalies in data patterns.",
      "Implemented a GPU-accelerated layer for Google Map digipin rendering, improving performance for 70,000+ plotted points and reducing DOM manipulation overhead.",
      "Built a low-code Figma engine that converts design files into platform-compatible pages, reducing design-to-development handoff time and accelerating prototyping.",
      "Implemented a micro-frontend bridge between the logistics tool and the renderer engine, making both systems modular and configurable.",
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

const featuredProjects = [
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
    link: "https://getzino.com/",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
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
    link: "https://www.getaxon.io/",
    gradient: "from-purple-500 via-pink-500 to-orange-500",
  },
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
];

const About = () => {
  const navigate = useNavigate();
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const interestsRef = useRef<HTMLElement>(null);

  // Smooth scroll function with offset for fixed navigation
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const headerOffset = 100;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <GridBackground />
      <Navigation />

      <main className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="max-w-7xl w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block"
                  >
                    <Badge className="px-4 py-2 text-sm bg-primary/10 border-primary/30 text-primary">
                      <Download className="w-4 h-4 mr-2" />
                      Available for opportunities
                    </Badge>
                  </motion.div>

                  <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                    <span className="block">Architecting</span>
                    <span className="block">the Digital</span>
                    <span className="text-gradient-primary">Universe</span>
                  </h1>
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  I'm{" "}
                  <span className="text-foreground font-bold">
                    Krishnadas R
                  </span>
                  , a Fullstack Software Engineer crafting exceptional web
                  experiences with cutting-edge technologies, DevOps excellence,
                  and AI integration.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection(projectsRef)}
                    className="group bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all"
                  >
                    View Projects
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection(experienceRef)}
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <Code2 className="mr-2 w-4 h-4" />
                    See Experience
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="space-y-1">
                    <p className="text-4xl font-bold text-gradient-primary">
                      3+
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Years Experience
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-4xl font-bold text-gradient-secondary">
                      10+
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Projects Built
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-4xl font-bold text-gradient-accent">
                      50%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Faster Development
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Visual - Professional Particle Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative hidden md:flex"
              >
                <div className="relative w-full aspect-square">
                  {/* Animated Rings */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"
                    style={{ animationDuration: "3s" }}
                  />
                  <div
                    className="absolute inset-8 rounded-full border-2 border-secondary/20 animate-ping"
                    style={{ animationDuration: "4s", animationDelay: "1s" }}
                  />
                  <div
                    className="absolute inset-16 rounded-full border-2 border-accent/20 animate-ping"
                    style={{ animationDuration: "5s", animationDelay: "2s" }}
                  />

                  {/* Modern particle system */}
                  <div className="absolute inset-20 rounded-2xl flex items-center justify-center overflow-hidden">
                    {/* Animated connection particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/50"
                        animate={{
                          x: [0, Math.cos((i * 45 * Math.PI) / 180) * 100, 0],
                          y: [0, Math.sin((i * 45 * Math.PI) / 180) * 100, 0],
                          scale: [1, 1.5, 1],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut",
                        }}
                      />
                    ))}

                    {/* Center glow */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl"
                    />
                  </div>

                  {/* Floating Icons */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-8 right-1/4 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg"
                  >
                    <Code2 className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute top-1/4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                  >
                    <Rocket className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section ref={projectsRef} className="py-32 scroll-mt-20">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <Badge className="px-4 py-2 bg-secondary/10 border-secondary/30 text-secondary">
                Portfolio Highlights
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold">
                Featured{" "}
                <span className="text-gradient-secondary">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Building impactful solutions that drive real results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/projects")}
                className="border-primary/30 hover:bg-primary/10 group"
              >
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </ScrollReveal>
        </section>

        {/* Skills Section */}
        <section className="py-32">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <Badge className="px-4 py-2 bg-accent/10 border-accent/30 text-accent">
                Technical Arsenal
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold">
                <span className="text-gradient-accent">Skills</span> &
                Technologies
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill} delay={index * 0.02}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="outline"
                    className="px-6 py-3 text-base glass-panel cursor-default border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="py-32 scroll-mt-20">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <Badge className="px-4 py-2 bg-primary/10 border-primary/30 text-primary">
                Career Journey
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold">
                Work <span className="text-gradient-primary">Experience</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto space-y-16">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 0.15}>
                <div
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon side */}
                  <div className="lg:w-1/3 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="relative"
                    >
                      <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-1">
                        <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center">
                          <div className="text-center space-y-3">
                            <div className="text-5xl font-bold text-gradient-primary">
                              {String(index + 1).padStart(2, "0")}
                            </div>
                            <div className="text-sm font-medium text-muted-foreground">
                              {exp.period.split(" - ")[0]}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Connecting line */}
                      {index < experiences.length - 1 && (
                        <div
                          className={`hidden lg:block absolute top-full left-1/2 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent ${
                            index % 2 === 1
                              ? "-translate-x-full"
                              : "translate-x-0"
                          }`}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Content side */}
                  <Card className="lg:w-2/3 glass-panel p-8 border-0 hover-lift">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Briefcase className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium text-primary">
                            {exp.period}
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold text-foreground">
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-2 text-lg">
                          <Building2 className="w-5 h-5 text-secondary" />
                          <span className="font-semibold text-secondary">
                            {exp.company}
                          </span>
                          <span className="text-muted-foreground">•</span>
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="grid gap-3 pt-4">
                        {exp.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex gap-3 items-start p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                          >
                            <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground/90">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Interests & Activities Section - Masonry Grid */}
        <section ref={interestsRef} className="py-32 scroll-mt-20">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <Badge className="px-4 py-2 bg-accent/10 border-accent/30 text-accent">
                Beyond Code
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold">
                Interests &{" "}
                <span className="text-gradient-accent">Activities</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Exploring passions beyond the keyboard
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-7xl mx-auto">
            {/* Masonry Grid - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="flex flex-col gap-6">
                {/* Cycle Rider */}
                <ScrollReveal delay={0.1}>
                  <Card className="glass-panel border-0 overflow-hidden group hover-lift">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                          <Bike className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          Cycle Rider
                        </h3>
                      </div>
                      <div className="w-full bg-secondary/5 rounded-xl flex items-center justify-center p-6">
                        <img
                          src="/cycleGrid.png"
                          alt="Cycling"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>

                {/* Jazz Player */}
                <ScrollReveal delay={0.4}>
                  <Card className="glass-panel border-0 overflow-hidden group hover-lift">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                          <Music className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          Jazz Player
                        </h3>
                      </div>
                      <div className="w-full bg-secondary/5 rounded-xl flex items-center justify-center p-6">
                        <img
                          src="/Drums.jpg"
                          alt="Playing drums"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>

                {/* Reader */}
                <ScrollReveal delay={0.7}>
                  <Card className="glass-panel border-0 overflow-hidden group hover-lift">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          Reader
                        </h3>
                      </div>
                      <div className="w-full bg-secondary/5 rounded-xl flex items-center justify-center p-6">
                        <img
                          src="/bookShelf.jpeg"
                          alt="Reading books"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              </div>

              {/* Column 2 - Marathon (Tall) */}
              <div className="flex flex-col gap-6">
                {/* Marathon Runner - Tall Card */}
                <ScrollReveal delay={0.2}>
                  <Card className="glass-panel border-0 overflow-hidden group hover-lift">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                          <Footprints className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          Marathon Runner
                        </h3>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="w-full bg-secondary/5 rounded-xl flex items-center justify-center p-6">
                          <img
                            src="/marathonWeb.png"
                            alt="Marathon"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="w-full bg-secondary/5 rounded-xl flex items-center justify-center p-6">
                          <img
                            src="/marathonCert.png"
                            alt="Marathon Certificate"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>

                {/* Karate */}
                <ScrollReveal delay={0.5}>
                  <Card className="glass-panel border-0 overflow-hidden group hover-lift">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                          <Swords className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          Karate
                        </h3>
                      </div>
                      <div className="w-full bg-secondary/5 rounded-xl flex items-center justify-center p-6">
                        <img
                          src="/karataPhoto.webp"
                          alt="Karate practice"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-6">
                {/* Bike Rider */}
                <ScrollReveal delay={0.3}>
                  <Card className="glass-panel border-0 overflow-hidden group hover-lift">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                          <BikeIcon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          Bike Rider
                        </h3>
                      </div>
                      <div className="w-full bg-secondary/5 rounded-xl flex items-center justify-center p-6">
                        <img
                          src="/Ride.jpg"
                          alt="Bike riding"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>

                {/* Social Activities */}
                <ScrollReveal delay={0.6}>
                  <Card className="glass-panel border-0 overflow-hidden group hover-lift">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          Social Activities
                        </h3>
                      </div>
                      <div className="w-full bg-secondary/5 rounded-xl flex items-center justify-center p-6">
                        <img
                          src="/social.png"
                          alt="Social activities"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>

                {/* Explorer */}
                <ScrollReveal delay={0.8}>
                  <Card className="glass-panel border-0 overflow-hidden group hover-lift">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center flex-shrink-0">
                          <Compass className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          Explorer
                        </h3>
                      </div>
                      <div className="w-full bg-secondary/5 rounded-xl flex items-center justify-center p-6">
                        <img
                          src="/explorer.png"
                          alt="Exploring places"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
