import { Navigation } from "@/components/Navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GridBackground } from "@/components/GridBackground";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Zap } from "lucide-react";

const skills = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Jest",
  "Material UI",
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
  "ChatGPT API",
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
    location: "Bangalore",
    description: "Zino is a low code Software development platform.",
    achievements: [
      "Reduced app development time by 50% by creating a live app editor, the Hybrid Editor.",
      "Optimized chat application performance using FCM notification service",
      "Mentored and trained 5+ interns",
    ],
  },
  {
    company: "Axon.ai",
    role: "Software Development Engineer",
    period: "Aug 2022 - April 2024",
    location: "Bangalore",
    description: "Axon is a SaaS Product for engineering analytics.",
    achievements: [
      "Engineered an intelligent Engineering Dashboard, enabling engineering leaders to quickly identify and address performance bottlenecks.",
      "Designed, developed, and deployed an OKR dashboard that empowers organizations to set and track objectives.",
      "Implemented a background service to automatically detect and send insights about engineering metrics.",
      "Elevated page loading time 10x faster by identifying and addressing performance bottlenecks.",
    ],
  },
];

const featuredProjects = [
  {
    title: "Zino Hybrid Editor",
    description:
      "Revolutionary low-code platform that reduced app development time by 50%. Features drag-and-drop functionality, AI-supported page creation, and real-time collaboration tools.",
    features:
      "Creating pages, permissions management, theme customization, drag-and-drop, charts integration, AI page creation",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Real-time Sync",
      "AI Integration",
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
    title: "Axon OKR Dashboard",
    description:
      "Goal-setting framework dashboard with Jira integration for automatic progress tracking. Supports public/private OKRs with role-based permissions.",
    features:
      "OKR CRUD, Public/Private OKRs, Auto progress tracking, Insights generation, Jira integration",
    tech: ["React", "TypeScript", "Tailwind", "Express", "MongoDB", "Jira API"],
    link: "https://www.getaxon.io/",
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
  {
    title: "Axon Developer Activity",
    description:
      "Individual contribution analytics providing insights into code commits, project involvement, and collaboration patterns.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB"],
    link: "https://www.getaxon.io/pricing",
    gradient: "from-green-500 via-teal-500 to-cyan-500",
  },
];

const About = () => {
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
                      <Zap className="w-4 h-4 mr-2" />
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
                  , a Software Engineer crafting exceptional web experiences
                  with cutting-edge technologies, DevOps excellence, and AI
                  integration.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all"
                  >
                    View Projects
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
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

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
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

                  {/* Center Circle */}
                  <div className="absolute text-8xl inset-20 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center shadow-2xl">
                    👨‍💻
                  </div>

                  {/* Floating Icons */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 right-1/4 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg"
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
        <section className="py-32">
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
                className="border-primary/30 hover:bg-primary/10"
              >
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
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
        <section className="py-32">
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

          <div className="space-y-8 relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 0.15}>
                <Card className="glass-panel p-8 hover-lift ml-0 lg:ml-20 relative border-0">
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute -left-12 top-10 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/50" />

                  <div className="space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-xl text-gradient-primary font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-muted-foreground">
                        <p className="font-medium">{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground">
                      {exp.description}
                    </p>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-4 text-foreground/90">
                          <span className="text-primary text-xl mt-0.5">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
